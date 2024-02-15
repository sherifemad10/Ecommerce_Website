let ProductsInCart = localStorage.getItem("ProductsInCart");
// let favourite1 = localStorage.getItem('favourite')

// if(favourite1){
//     var favr = JSON.parse(favourite1) ;
//     drawFavProducts(item);
// }


if(ProductsInCart){
    var item = JSON.parse(ProductsInCart) ;
    drawCartProducts(item);
}

function drawCartProducts(prodlist){
    let cartcon = document.getElementById("cartcon");
    let z = prodlist.map((item) => {
        return `
        <div  class="cartpage">
        <img src="${item.imageUrl}">
        <div class="cartinfo">
            <h2>${item.name}</h2>
            <input  type="number" value="1">
            <select>
                <option hidden>Size</option>
                <option>Large</option>
                <option>Medium</option>
                <option>Small</option>
            </select>
            <p>${item.price}</p>
            <button  class="remove"  onclick="removeitem(${item.id})">Remove from cart</button><br/><br/>
        </div>
    </div>
        `
    });
    cartcon.innerHTML = z
    
}


function removeitem(id){
    var delete2 = item.filter((g) => g.id !=id)
    localStorage.setItem('ProductsInCart',JSON.stringify(delete2));
    location.reload();
  drawCartProducts(delete2)
 }

// function removeitem(id){
//     var delete2 = item.findIndex((g)=> g.id==id)
//   item.splice(delete2,1)
//   localStorage.setItem('item',JSON.stringify(item))
//   drawCartProducts(delete2)
//  }


// function drawFavProducts(products){
//     let faverote = document.getElementById("faverote");
//     for (let i = 1; i < products.length; i++) {
//         faverote.innerHTML += `
//         <div class="card">
//         <img src="${products[i].imageUrl}">
//         <div class="cardcont">
//              <h2>Product : ${products[i].name}</h2>
//              <h2>Price : ${products[i].price} $</h2>
//              <h2>Category : ${products[i].catrgory}</h2>
//          </div>
//          <div class="cardfooter">
//              <button type="button" class="btn btn-outline-primary" id="${products[i].id}"  onclick="addto(${products[i].id})" >Add to card</button>
//              <button type="button" class="btn btn-outline-danger" id="${products[i].id}0000" onclick="removeto(${products[i].id})" style="display: none;">Remove form cart</button>
//              <i class="fa-solid fa-heart" id="${products[i].id}00000" onclick="addfavourite(${products[i].id})"></i>
//          </div>
//      </div>
//         `
        
//     };

// }