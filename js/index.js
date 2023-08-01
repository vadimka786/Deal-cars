

let cardsSuperCars = document.querySelector('.cards-supercars');
let urlSyperCar = "http://localhost:8080/SuperCars";
let cardsSportCars = document.querySelector('.SportCars-cards')
let urlSportCar = "http://localhost:8080/SportCars";
let SuvCars = document.querySelector('.cards-SuvCars');
let urlSuvCar = "http://localhost:8080/SuvCars";



const getSuperCars = () => {
    fetch(urlSyperCar)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                cardsSuperCars.innerHTML += `
                <div class="card-of-SuperCar">
                <div class="SuperCar-div_wrap" >
                <img src="${item.images}" class="SuperCars-img" />
                    <h4 class="name-of-SuperCar">${item.title}</h4>
                    <p class="category-SuperCar">${item.category}</p>
                    <b class="price-SuperCar">${item.price}</b>
                    <br/>
                    <button class="SuperCar-Manage">to book</button>
                </div>
                </div>
                `
            });
        })
        .catch((err) => console.log(err))
}

getSuperCars()


const getSportCars = () => {
    fetch(urlSportCar)
    .then((resolve) => resolve.json())
    .then((resolve) => {
            resolve.forEach((item) => {
                cardsSportCars.innerHTML += `
                <div class="card-of-SportCar">
                <div class="SportCar-div_wrap" >
                <img src="${item.images}" class="SportCars-img" />
                    <h4 class="name-of-SportCar">${item.title}</h4>
                    <p class="category-SportCar">${item.category}</p>
                    <b class="price-SportCar">${item.price}</b>
                    <br/>
                    <button class="SportCar-Manage">to book</button>
                </div>
                </div>
                `
            });    
        })
        .catch((err) => console.log(err))
}

getSportCars()


const getSuvCars = () => {
    fetch(urlSuvCar)
    .then((resolve) => resolve.json())
    .then((resolve) => {
            resolve.forEach((item) => {
                SuvCars.innerHTML += `
                <div class="card-of-SuvCar">
                <div class="SuvCar-div_wrap" >
                <img src="${item.images}" class="SuvCars-img" />
                    <h4 class="name-of-SuvCar">${item.title}</h4>
                    <p class="category-SuvCar">${item.category}</p>
                    <b class="price-SuvCar">${item.price}</b>
                    <br/>
                    <button class="SuvCar-Manage">to book</button>
                </div>
                </div>
                `
            });    
        })
        .catch((err) => console.log(err))
}

getSuvCars()