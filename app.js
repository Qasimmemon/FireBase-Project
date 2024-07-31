




// import {
//   onAuthStateChanged,
//   auth,
//   signOut,
//   getDocs,
//   collection,
//   db,
//   deleteDoc,
//   app,
// } from "./utils/utils.js";

// const cards_container = document.getElementById("cards_container");
// const login_btn = document.getElementById('login_btn');
// const user_info = document.getElementById('user_info');
// const create_recipe_btn = document.getElementById('create_recipe_btn');
// const logout_btn = document.getElementById('logout_btn');
// const searchInput = document.getElementById("search-input");
// const priceSelect = document.getElementById("priceSelect");

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     login_btn.style.display = "none";
//     user_info.style.display = "block";
//     user_info.innerText = user.email;
//     create_recipe_btn.style.display = "block";
//     logout_btn.style.display = "block";
//   } else {
//     login_btn.style.display = "block";
//     user_info.style.display = "none";
//     user_info.innerText = "";
//     create_recipe_btn.style.display = "none";
//     logout_btn.style.display = "none";
//   }
// });

// logout_btn.addEventListener("click", () => {
//   signOut(auth).then(() => {
//     console.log("User signed out");
//   });
// });

// let foodData = [];

// async function getFoods() {
//   const querySnapshot = await getDocs(collection(db, "foods"));
//   querySnapshot.forEach((doc) => {
//     const obj = doc.data();
//     foodData.push({
//       id: doc.id,
//       ...obj,
//     });
//   });
//   displayFoods(foodData);
// }

// function displayFoods(data) {
//   cards_container.innerHTML = "";
//   data.forEach((food) => {
//     const { id, image, foodName, foodPrice, foodLocation, addByEmail } = food;

//     const card = `
//       <div id="food-${id}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" style="margin-left: 0px;" src="${image}" alt="">
//         <div class="flex flex-col justify-between p-4 leading-normal">
        
//           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${foodName}</h5>
//           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${foodLocation}.</p>
//           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Added By ${addByEmail}</p>
//           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${foodPrice}</p>
          
//            <div class="flex space-x-2">
//             <button onclick="deletebtn(id)" class="w-24 bg-red-500 text-white p-2 rounded">Delete</button>
//             <div title="Like" class="heart-container" style="margin-left: 190px;">
//             <input id="Give-It-An-Id" class="checkbox" type="checkbox">
//             <div class="svg-container">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24">
//                     <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
//                     </path>
//                 </svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24">
//                     <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
//                     </path>
//                 </svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate">
//                     <polygon points="10,10 20,20"></polygon>
//                     <polygon points="10,50 20,50"></polygon>
//                     <polygon points="20,80 30,70"></polygon>
//                     <polygon points="90,10 80,20"></polygon>
//                     <polygon points="90,50 80,50"></polygon>
//                     <polygon points="80,80 70,70"></polygon>
//                 </svg>
                         
//             </div>
           
//         </div>
//         </div>
        
        
//           </div>
          
//            </div>
           
//     `;

//     cards_container.innerHTML += card;

     
//      async function deletebtn() {
//       try {
//         await deleteDoc(doc(db, 'foods', id));
//         console.log('id-->', id)
//         console.log('Document successfully deleted!');
//         document.getElementById(`food-${id}`).remove();
//       } catch (error) {
//         console.error('Error removing document: ', error);
//       }
//     };
  




// // Example usage
// // getFoods().then(displayFoods);



// searchInput.addEventListener("input", (e) => {
//   const query = e.target.value.toLowerCase();
//   const filteredFoods = foodData.filter(food => food.foodName.toLowerCase().includes(query));
//   displayFoods(filteredFoods);
// });

// priceSelect.addEventListener("change", (e) => {
//   const [min, max] = e.target.value.split("-").map(Number);
//   const filteredFoods = foodData.filter(food => food.foodPrice >= min && food.foodPrice <= max);
//   displayFoods(filteredFoods);
// });

// getFoods()


import {
  onAuthStateChanged,
  auth,
  signOut,
  getDocs,
  collection,
  db,
  deleteDoc,
  doc,
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
  foodData = [];
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
          <div class="flex space-x-2">
            <button  data-id="${id}"  class="delete-btn w-24 bg-red-500 text-white p-2 rounded">Delete</button>
            <div title="Like" class="heart-container" style="margin-left: 190px;">
              <input class="checkbox" type="checkbox">
              <div class="svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24">
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24">
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate">
                  <polygon points="10,10 20,20"></polygon>
                  <polygon points="10,50 20,50"></polygon>
                  <polygon points="20,80 30,70"></polygon>
                  <polygon points="90,10 80,20"></polygon>
                  <polygon points="90,50 80,50"></polygon>
                  <polygon points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    cards_container.innerHTML += card;
  });

  // Add event listener to delete buttons
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      deletebtn(id);
    });
  });
}

async function deletebtn(id) {
  try {
    await deleteDoc(doc(db, 'foods', id));
    console.log('Document successfully deleted!');
    document.getElementById(`food-${id}`).remove();
  } catch (error) {
    console.error('Error removing document: ', error);
  }
}

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
