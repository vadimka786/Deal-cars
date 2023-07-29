
const selectLng = document.querySelector('.select-header-lng');
const allLang = ['en','ru'] /* для проверки */

selectLng.addEventListener('change', changeURLlang);
function changeURLlang() {
    let lang = selectLng.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}


function ChangeLng() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    selectLng.value = hash;
    for (let key in langArr) {
        document.querySelector('.' + key).innerHTML = langArr[key][hash];
    }
}

ChangeLng();

let cardsSuperCars = document.querySelector('.cards-supercars');
let url = "http://localhost:8080/SuperCars";

const getCars = () => {
    fetch(url)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                cardsSuperCars.innerHTML += `
                <div class="card-of-SuperCar">
                    <img src="${item.images}" />
                    <h4 class="name-of-SuperCar">${item.title}</h4>
                    <p class="category-SuperCar">${item.category}</p>
                    <b class="price-SuperCar">${item.price}</b>
                </div>
                `
            });
        })
        .catch((err) => alert(err))
}

getCars()