searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const product = [
    { id:0, image: STATIC_URL + 'image/book-13.png', title:'SPACE CAT', price:230 },
    { id:1, image: STATIC_URL + 'image/book-14.jpg', title:'ADVENTURE BIBLE', price:280 },
    { id:2, image: STATIC_URL + 'image/book-11.jpg', title:'FIRE DANCE', price:240 },
    { id:3, image: STATIC_URL + 'image/book-16.jpg', title:'THE WILD LIFE', price:150 },
    { id:4, image: STATIC_URL + 'image/book-5.png', title:'ROCK MUSIC', price:100 },
    { id:5, image: STATIC_URL + 'image/book-15.jpg', title:'NORTH POLE', price:420 }
];

// Remove duplicates (not really needed for 1 product, but kept)
const categories = [...new Set(product.map(item => item))];

// Render products
document.getElementById("root").innerHTML = product.map(item =>{
      var { image, title, price } = item;
   return `
    <div class="swiper-slide box">
        <div class="image">
            <img src="${item.image}">
        </div>
        <div class="content">
            <p>${item.title}</p>
            <h2>Rs. ${item.price}</h2>
            <button onclick="addToCart(${item.id})"><b>Add to cart</b></button>
        </div>
    </div>`
}
).join("");

// Swiper
new Swiper(".featured-slider", {
    loop:true,
    spaceBetween:20,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{ slidesPerView:1 },
        768:{ slidesPerView:2 },
        1024:{ slidesPerView:3 },
    }
});

function updateCartCount(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("count").innerHTML = cart.length;
}

// ADD TO CART FUNCTION
function addToCart(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let selectedProduct = product.find(item => item.id === id);
    if(!selectedProduct) return;

    let existing = cart.find(item => item.id === id);

    if(existing){
        existing.qty += 1;
    } else {
        cart.push({...selectedProduct, qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product add in Cart")
    updateCartCount();
}


// Call once on page load to initialize count
updateCartCount();
