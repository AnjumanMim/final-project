// Your solution goes here
// API -> https://64b2e33138e74e386d55b072.mockapi.io/api/hanover
const menu =  [];
let cart=document.querySelector("#iits-cart");
let SearchSection = document.querySelector("#searchSection");
let SearchForm =document.querySelector("#searchForm");
let SearchBox =document.querySelector("#iits-searchBox");
let SearchButton =document.querySelector("#btn");
let addNewForm=document.querySelector("#iits-addNewForm");
let CancelButton=document.querySelector("#iits-cancelBtn");
let Name=document.querySelector("#name");
let AdminSection=document.querySelector("#iits-adminSection");
let picture = document.querySelector("#pic");
let dsc = document.querySelector("#desc");
let TypeItem = document.querySelector("#typeItem");
let Alltoggle = document.querySelector("#all_toggle");
let Burger = document.querySelector("#burger_toggle");
let Coffee = document.querySelector("#coffee_toggle");
let AllItems = items.querySelectorAll(".item");
let items = document.querySelector("#iits-items");
let Developer = document.querySelector("#iits-developer");
let AdminButton = document.querySelector("#iits-adminBtn");
function ShowMenu(prmtr) {
    return `<div class="item col-md-6 col-lg-4 p-3" data-category="${prmtr.type}",
  }">
    <div class="card">
      <div class="img-container">
        <img
          src="${prmtr.url}"
          alt="${prmtr.type}"
        />
        <span class="category-pill">${prmtr.type}</span>
      </div>
      <div class="card-body">
        <h5 class="card-title">${prmtr.name}</h5>
        <p class="card-text">
          ${prmtr.dsc}
        </p>
        <button class="addToCartBtn btn w-100">Add to cart</button>
      </div>
    </div>
  </div>`;
  }
  
  function renderMenu() 
  {
    items.innerHTML = "";
    menu.forEach((item) => {
      items.innerHTML += ShowMenu(item);
    });
}
function hideAdmin() {
    AdminSection.style.display = "none";
  }
  hideAdmin();
  function showAdmin() {
    let name = prompt("Enter name:");
    let password = prompt("Enter  password: ");
    if (name === "iits" && password === "23") {
        AdminSection.style.display = "block";
      nameChange();
    }
    else {
      alert("Wrong username or password");
      hideAdmin();

    }
CancelButton.addEventListener("click", hideAdmin);
  }
  AdminButton.addEventListener("click", showAdmin);
  function nameChange () {
    Developer.innerHTML = "Anjuman Mim";
  }
  
  function XD() {
    addNewForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      let last = menuItems[menuItems.length - 1];
      let lastId = last.id | 0;
      let newitem= {
        id: lastId + 1,
        name: Name.value,
        type: TypeItem.value,
        url: pic.value,
        desc: dsc.value,
      };
      if (newitem.type === "coffee" || newitem.type === "burger") {
        menuItems.push(newitem);
        Name.value = "";
        pic.value = "";
        dsc.value = "";
        TypeItem.value = "";
        renderMenu();
      } else {
        alert("INVALID TYPE");
      }
    });
  }
  XD();

