




import {
  onAuthStateChanged,
  auth,
  signOut,
  getDocs,
  collection,
  db,
  deleteDoc,
} from "./utils/utils.js";

const cards_container = document.getElementById("cards_container");
const login_btn = document.getElementById('login_btn');
const user_info = document.getElementById('user_info');
const create_recipe_btn = document.getElementById('create_recipe_btn');
const logout_btn = document.getElementById('logout_btn');
const searchInput = document.getElementById("search-input");
const priceSelect = document.getElementById("priceSelect");

onAuthStateChanged(auth, (user) => {
  if (user) {
    login_btn.style.display = "none";
    user_info.style.display = "block";
    user_info.innerText = user.email;
    create_recipe_btn.style.display = "block";
    logout_btn.style.display = "block";
  } else {
    login_btn.style.display = "block";
    user_info.style.display = "none";
    user_info.innerText = "";
    create_recipe_btn.style.display = "none";
    logout_btn.style.display = "none";
  }
});

logout_btn.addEventListener("click", () => {
  signOut(auth).then(() => {
    console.log("User signed out");
  });
});

let foodData = [];

async function getFoods() {
  const querySnapshot = await getDocs(collection(db, "foods"));
  querySnapshot.forEach((doc) => {
    const obj = doc.data();
    foodData.push({
      id: doc.id,
      ...obj,
    });
  });
  displayFoods(foodData);
}

function displayFoods(data) {
  cards_container.innerHTML = "";
  data.forEach((food) => {
    const { id, image, foodName, foodPrice, foodLocation, addByEmail } = food;

    const card = `
      <div id="food-${id}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" style="margin-left: 0px;" src="${image}" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${foodName}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${foodLocation}.</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Added By ${addByEmail}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${foodPrice}</p>
          <button id="delete-${id}" class="w-1/2 bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
      </div>
    `;

    cards_container.innerHTML += card;

    const deleteButton = document.getElementById(`delete-${id}`);
    deleteButton.addEventListener('click', async function () {
      try {
        await deleteDoc(doc(db, 'foods', id));
        console.log('Document successfully deleted!');
        document.getElementById(`food-${id}`).remove();
      } catch (error) {
        console.error('Error removing document: ', error);
      }
    });
  });
}


// Example usage
// getFoods().then(displayFoods);



searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredFoods = foodData.filter(food => food.foodName.toLowerCase().includes(query));
  displayFoods(filteredFoods);
});

priceSelect.addEventListener("change", (e) => {
  const [min, max] = e.target.value.split("-").map(Number);
  const filteredFoods = foodData.filter(food => food.foodPrice >= min && food.foodPrice <= max);
  displayFoods(filteredFoods);
});

getFoods();










