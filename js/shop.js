let procontaner = document.querySelector(".pro-contaner")

const prodlist = [
    {
        id: 1,
        name: "Men's Fashion Shirt",
        imageUrl:"img/products/f1.jpg",
        price: "100$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 2,
        name: "AINIKO Men's Short Sleeve",
        imageUrl:"img/products/f2.jpg",
        price: "80$",
        herf:"prodect/prodect2.html"
    },
    {
        id: 3,
        name: "WRITKC Tropical Shirts ",
        imageUrl:"img/products/f3.jpg",
        price: "90$",
        herf:"prodect/prodect3.html"
    },
    {
        id: 4,
        name: "KYKU Funky Hawaiian Shirt",
        imageUrl:"img/products/f4.jpg",
        price: "70$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 5,
        name: "Hawaiian Shirts for Men",
        imageUrl:"img/products/f5.jpg",
        price: "80$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 6,
        name: "Legendary Whitetails Men's ",
        imageUrl:"img/products/f6.jpg",
        price: "90$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 7,
        name: "Cartoon Astronaut Pants",
        imageUrl:"img/products/f7.jpg",
        price: "50$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 8,
        name: "Cartoon Astronaut Blouse",
        imageUrl:"img/products/f8.jpg",
        price: "60$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 9,
        name: "Cartoon Astronaut T-Shirts",
        imageUrl:"img/products/n1.jpg",
        price: "100$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 10,
        name: "Cartoon Astronaut T-Shirts",
        imageUrl:"img/products/n2.jpg",
        price: "100$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 11,
        name: "Cartoon Astronaut T-Shirts",
        imageUrl:"img/products/n3.jpg",
        price: "100$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 12,
        name: "APTRO Men's Hawaiian Shirt",
        imageUrl:"img/products/n4.jpg",
        price: "100$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 12,
        name: "Cartoon Astronaut T-Shirts",
        imageUrl:"img/products/n5.jpg",
        price: "100$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 12,
        name: "Cartoon Astronaut T-Shirts",
        imageUrl:"img/products/n6.jpg",
        price: "100$",
        herf:"prodect/prodect1.html"
    },
    {
        id: 12,
        name: "Cartoon Astronaut T-Shirts",
        imageUrl:"img/products/n7.jpg",
        price: "100$",
        herf:"prodect/prodect1.html"
    },
]

function drawItems() {
    let y = prodlist.map((item)=>{
        return `
        <a href="${item.herf}" class="proa">
        <div class="pro col-lg-3 col-md-6 col-sm-12">
        <img src="${item.imageUrl}">
        <div class="descrption">
            <p>adidas</p>
            <h3>${item.name}</h3>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h3>Price <span>${item.price}</span></h3>
            <a href="#"><i class="fa-solid fa-cart-plus" onClick="addtocart(${item.id})"></i></a>

        </div>
    </div>
    </a>
        `
    })
    procontaner.innerHTML= y
}
drawItems()

let cartcon = document.getElementById("cartcon");
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];


function  addtocart(id){
    let choose = prodlist.find((item) => item.id === id);
    addedItem.innerHTML += ` <div  class="cartpage">
    <img src="${choose.imageUrl}">
    <div class="cartinfo">
        <h2>${choose.name}</h2>
        <input  type="number" value="1">
        <select>
            <option hidden>Size</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
        </select>
        <p>${choose.price}</p>
        <button  class="remove">Remove from cart</button>
    </div>
</div> `;
    addedItem = [...addedItem, choose]; 
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
}


