let list = document.getElementById("productsDiv")



function getCart() {
    list.innerHTML = ""
    let cart = JSON.parse(localStorage.getItem("basket")) || []
    cart.forEach((item, id) => {
        let cartBox = document.createElement("div")
        cartBox.className = 'cardBox'
        cartBox.innerHTML = `

                  
            <img src=${item.url} alt="">
            <h5>${item.name}</h5>
            <p>${item.price} $</p>
            <button onclick="sil(${id})">Sil</button>




            `
        list.appendChild(cartBox)
    });
}

window.onload = () => {
    getCart()
}


///////////// localdan sil


function sil(id){
    let cart  = JSON.parse(localStorage.getItem("basket"))|| []
    cart.splice(id,1)
    localStorage.setItem("basket",JSON.stringify(cart))
    getCart()
}