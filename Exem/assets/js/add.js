let productsList = document.getElementById("productsList")
let Name = document.getElementById("name")
let Price = document.getElementById("price")
let form = document.getElementById("form")
let db
async function postData(e) {
    e.preventDefault()
    let data = {
        name: Name.value,
        price: Price.value
    }
 await   axios.post(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`, data)
    form.reset()
    getCart()
}

form.addEventListener("submit", postData)

function getCart() {
    productsList.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            db.forEach((item) => {
                let tr = document.createElement("tr")
                tr.innerHTML = `
            <td > <img src=${item.url}  alt=""> </td>
            <td >Name: ${item.name}</td>
            <td>Price:${item.price} $</td>
            <td>Id:${item.id}</td>
            <td><button onclick="sil(${item.id})">DELETE</button></td>
            
            `
                productsList.appendChild(tr)
            });
        })
}


window.onload = () => {
    getCart()
}


async function sil(id) {
 await   axios.delete(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/${id}`)
 getCart()

}

////////////// 

function getSort(){
    productsList.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            let sortedData  =  db.sort((a,b)=>a.name.localeCompare(b.name))
            sortedData.forEach((item) => {
                let tr = document.createElement("tr")
                tr.innerHTML = `
            <td > <img src=${item.url}  alt=""> </td>
            <td >Name: ${item.name}</td>
            <td>Price:${item.price} $</td>
            <td>Id:${item.id}</td>
            <td><button onclick="sil(${item.id})">DELETE</button></td>
            
            `
                productsList.appendChild(tr)
            });
        })
}

document.getElementById("btnA").addEventListener("click", getSort)

function getSortt(){
    productsList.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            let sortedData  =  db.sort((a,b)=>b.name.localeCompare(a.name))
            sortedData.forEach((item) => {
                let tr = document.createElement("tr")
                tr.innerHTML = `
            <td > <img src=${item.url}  alt=""> </td>
            <td >Name: ${item.name}</td>
            <td>Price:${item.price} $</td>
            <td>Id:${item.id}</td>
            <td><button onclick="sil(${item.id})">DELETE</button></td>
            
            `
                productsList.appendChild(tr)
            });
        })
}

document.getElementById("btnZ").addEventListener("click", getSortt)

document.getElementById("btnD").addEventListener("click",getCart)
/////////////
let inp = document.getElementById("inp")
function getName() {
    productsList.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart?name=${inp.value}`)
        .then(res => {
            db = res.data
            db.forEach((item) => {
                let tr = document.createElement("tr")
                tr.innerHTML = `
            <td > <img src=${item.url}  alt=""> </td>
            <td >Name: ${item.name}</td>
            <td>Price:${item.price} $</td>
            <td>Id:${item.id}</td>
            <td><button onclick="sil(${item.id})">DELETE</button></td>
            
            `
                productsList.appendChild(tr)
            });
        })
}

document.getElementById("axtar").addEventListener("click", getName)