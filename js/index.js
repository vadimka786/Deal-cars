

let cardsSuperCars = document.querySelector('.cards-supercars');
let url = "http://localhost:8080/SuperCars";

const getCars = () => {
    fetch(url)
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

getCars()