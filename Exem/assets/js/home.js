let productsDiv = document.getElementById("productsDiv")
// let loadMore = document.getElementById("loadMore")
let db 

function getCart(){
    productsDiv.innerHTML = ""
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
    .then(res =>{
        db = res.data
        db.forEach(item => {
            let cardBox = document.createElement("div")
            cardBox.className = "cardBox"
            cardBox.innerHTML = `
            
            <img src=${item.url} alt="">
            <h5>${item.name}</h5>
            <p>${item.price} $</p>
            <button onclick="ad(${item.id})">Ad Basket</button><button onclick="add(${item.id})">Ad Wish</button>
            
            `
        productsDiv.appendChild(cardBox)

        });
    })
}

window.onload = ()=>{
    getCart()
}


/////////// ad to wish

function add(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let productItem = wishlist.find(item => item.id == id)

    if (productItem) {
        alert('Aye var!')
    } else {
        wishlist.push(db.find((item) => item.id == id));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

}


// function ad(id){
//     let basket = JSON.parse(localStorage.getItem("basket"))|| []
//     let productItem = basket.find(item=> item.id == id)
//     if(productItem){
//             productItem.count = (productItem.count 
//     }
// }

function ad(id) {
    let cart = JSON.parse(localStorage.getItem("basket")) || [];
    let productItem = cart.find(item => item.id == id)
    
    if(productItem) {
        productItem.count = (productItem.count || 1) + 1
    } else {
        cart.push(db.find((item) => item.id == id));
    }
    localStorage.setItem("basket", JSON.stringify(cart));
}