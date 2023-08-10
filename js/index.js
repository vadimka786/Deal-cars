let headerContant = document.querySelector(".header__contant-copy")
const Header = () => {
    headerContant.innerHTML += 
    `
    <div class="header_logo">
                <a href="/index.html"><img src="/img/Group 1.svg" alt="logo" class="header-logo__img"></a>
                </div>
                <nav class="nav-main_header">
                    <ul class="nav-main_list">
                        <li class="ul-item">
                            <a href="#" class="nav_li_link nav_li_link-home">Home</a>
                        </li>
                        <li class="ul-item">
                            <a href="#" class="nav_li_link nav_li_link-cars">Cars</a>
                        </li>
                        <li class="ul-item">
                            <a href="#" class="nav_li_link nav_li_link-books">Book now</a>
                        </li>
                        <li class="ul-item">
                            <a href="#" class="nav_li_link nav_li_link-terms">Terms and Conditions</a>
                        </li>
                    </ul>
                </nav>
                <div class="header_Booking-btn">
                    <a href="#" class="btn-Booking orang_btn">Manage Booking</a>
                </div>
    `
}

Header()


let FooterContant = document.querySelector(".footer-div");

const Footer = () => {
    FooterContant.innerHTML += `
    <div class="footer-about">
                    <div class="footerLogo-Wrap">
                        <img src="/img/Group 1.svg" alt="" class="logo-footerImg">
                        <h3 class="footer-h3">HKinvision</h3>
                    </div>
                    <p class="footer-about__text">The World's Best Luxury Car’s Dealing Platform</p>
                </div>

                <div class="footer-wrap-nav">
                    <div class="footer-nav">
                        <h3 class="footer-nav__header footer-nav__header-company">Company</h3>
                        <ul class="footer-nav__list">

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-about">About Us</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-product">Product</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-Testimonial">Testimonial</a>
                            </li>

                        </ul>
                    </div>

                    <div class="footer-nav">
                        <h3 class="footer-nav__header footer-nav__header-support">Support</h3>
                        <ul class="footer-nav__list">
                            
                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-FAQ">FAQ</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-Privacy">Privacy Policy</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-terms">Terms of Services</a>
                            </li>

                        </ul>
                    </div>

                    <div class="footer-nav">
                        <h3 class="footer-nav__header footer-nav__header-Category">Category</h3>
                        <ul class="footer-nav__list">
                            
                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-super">Super Cars</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-sport">Sport Cars</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav__link footer-nav__link-more">More Cars</a>
                            </li>

                        </ul>
                    </div>

                </div>
    `
}

Footer()

let cardsSuperCars = document.querySelector('.cards-supercars');
let urlSyperCar = "http://localhost:8080/SuperCars";
let cardsSportCars = document.querySelector('.SportCars-cards')
let urlSportCar = "http://localhost:8080/SportCars";
let SuvCars = document.querySelector('.cards-SuvCars');
let urlSuvCar = "http://localhost:8080/SuvCars";
let SuperSuvCars = document.querySelector('.cards-SuperSuv')
let urlSuperSuvCars = "http://localhost:8080/SuperSuvCars";

/* Country */


let dubaiCars = document.querySelector(".dubai-cards-cars");
let urlDubaiCars = "http://localhost:8080/Cars-in-Dubai";
let JakartaCars = document.querySelector(".Jakarta-card-cars");
let urlJakartaCars = "http://localhost:8080/Cars-in-Jakarta";
let LondonCars = document.querySelector(".London-card-cars");
let urlLondonCars = "http://localhost:8080/Cars-in-London";
let MadridCars = document.querySelector(".Madrid-card-cars");
let urlMadridCars = "http://localhost:8080/Cars-in-Madrid";
let ParisCars = document.querySelector(".Paris-card-cars");
let urlParisCars = "http://localhost:8080/Cars-in-Paris";
let RomaCars = document.querySelector(".Roma-card-cars");
let urlRomaCars = "http://localhost:8080/Cars-in-Roma";



const getSuperCars = () => {
    fetch(urlSyperCar)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                cardsSuperCars.innerHTML += 
                `
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
                cardsSportCars.innerHTML += 
                `
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
                SuvCars.innerHTML += 
                `
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

const getSuperSuvCars = () => {
    fetch(urlSuperSuvCars)
    .then((resolve) => resolve.json())
    .then((resolve) => {
            resolve.forEach((item) => {
                SuperSuvCars.innerHTML += 
                `
                <div class="card-of-SuperSuvCar">
                <div class="SuperSuvCar-div_wrap" >
                <img src="${item.images}" class="SuperSuvCars-img" />
                    <h4 class="name-of-SuperSuvCar">${item.title}</h4>
                    <p class="category-SuperSuvCar">${item.category}</p>
                    <b class="price-SuperSuvCar">${item.price}</b>
                    <br/>
                    <button class="SuperSuvCar-Manage">to book</button>
                </div>
                </div>
                `
            });    
        })
        .catch((err) => console.log(err))
}

getSuperSuvCars()


const getInLondonCars = () => {
    fetch(urlLondonCars)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                LondonCars.innerHTML += 
                `
                <div class="card-inCountryCar">
                <div class="CountruCars-div_wrap" >
                <img src="${item.images}" class="InCountryCars-img" />
                    <h4 class="name-of-InCountryCar">${item.title}</h4>
                    <p class="category-InCountryCar">${item.category}</p>
                    <b class="price-InCountryCar">${item.price}</b>
                    <br/>
                    <button class="CountryCar-Manage">to book</button>
                </div>
                </div>
                `
            });
        })
        .catch((err) => console.log(err))
}

getInLondonCars()


/* Contry start*/

const getInMadridCars = () => {
    fetch(urlMadridCars)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                MadridCars.innerHTML += 
                `
                <div class="card-inCountryCar">
                <div class="CountruCars-div_wrap" >
                <img src="${item.images}" class="InCountryCars-img" />
                    <h4 class="name-of-InCountryCar">${item.title}</h4>
                    <p class="category-InCountryCar">${item.category}</p>
                    <b class="price-InCountryCar">${item.price}</b>
                    <br/>
                    <button class="CountryCar-Manage">to book</button>
                </div>
                </div>
                `
            });
        })
        .catch((err) => console.log(err))
}

getInMadridCars()

const getInParisCars = () => {
    fetch(urlParisCars)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                ParisCars.innerHTML += 
                `
                <div class="card-inCountryCar">
                <div class="CountruCars-div_wrap" >
                <img src="${item.images}" class="InCountryCars-img" />
                    <h4 class="name-of-InCountryCar">${item.title}</h4>
                    <p class="category-InCountryCar">${item.category}</p>
                    <b class="price-InCountryCar">${item.price}</b>
                    <br/>
                    <button class="CountryCar-Manage">to book</button>
                </div>
                </div>
                `
            });
        })
        .catch((err) => console.log(err))
}

getInParisCars()

const getInDubaiCars = () => {
    fetch(urlDubaiCars)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                dubaiCars.innerHTML += 
                `
                <div class="card-inCountryCar">
                <div class="CountruCars-div_wrap" >
                <img src="${item.images}" class="InCountryCars-img" />
                    <h4 class="name-of-InCountryCar">${item.title}</h4>
                    <p class="category-InCountryCar">${item.category}</p>
                    <b class="price-InCountryCar">${item.price}</b>
                    <br/>
                    <button class="CountryCar-Manage">to book</button>
                </div>
                </div>
                `
            });
        })
        .catch((err) => console.log(err))
}

getInDubaiCars()

const getInRomaCars = () => {
    fetch(urlRomaCars)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                RomaCars.innerHTML += 
                `
                <div class="card-inCountryCar">
                <div class="CountruCars-div_wrap" >
                <img src="${item.images}" class="InCountryCars-img" />
                    <h4 class="name-of-InCountryCar">${item.title}</h4>
                    <p class="category-InCountryCar">${item.category}</p>
                    <b class="price-InCountryCar">${item.price}</b>
                    <br/>
                    <button class="CountryCar-Manage">to book</button>
                </div>
                </div>
                `
            });
        })
        .catch((err) => console.log(err))
}

getInRomaCars()

const getInJakartaCars = () => {
    fetch(urlJakartaCars)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                JakartaCars.innerHTML += 
                `
                <div class="card-inCountryCar">
                <div class="CountruCars-div_wrap" >
                <img src="${item.images}" class="InCountryCars-img" />
                    <h4 class="name-of-InCountryCar">${item.title}</h4>
                    <p class="category-InCountryCar">${item.category}</p>
                    <b class="price-InCountryCar">${item.price}</b>
                    <br/>
                    <button class="CountryCar-Manage">to book</button>
                </div>
                </div>
                `
            });
        })
        .catch((err) => console.log(err))
}

getInJakartaCars()

