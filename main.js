const menuEmail = document.querySelector('.navbar-email');
const menuIconMobile = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container ')

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIconMobile.addEventListener ('click', toggleMobileMenu)
menuCarritoIcon.addEventListener ('click', toggleCarritoAside)

//La función classList.toggle en JavaScript se utiliza para alternar la presencia de una clase en un elemento HTML. Permite agregar una clase si no está presente en el elemento y eliminarla si ya está presente.

function toggleDesktopMenu(){
     const isAsideClosed = shoppingCartContainer.classList.contains ('inactive');

     if (!isAsideClosed){
          shoppingCartContainer.classList.add ('inactive');
     }
     desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
     const isAsideClosed = shoppingCartContainer.classList.contains ('inactive');

     if (!isAsideClosed){
          shoppingCartContainer.classList.add ('inactive');
     }
     mobileMenu.classList.toggle ('inactive');
}

function toggleCarritoAside(){    
     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
     if (!isMobileMenuClosed){
          mobileMenu.classList.add('inactive')
     }
     shoppingCartContainer.classList.toggle ('inactive');
}

const productList = [];
productList.push({
     name: 'Bike',
     price: 120,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
     name: 'Pantalla',
     price: 220,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
     name: 'PC',
     price: 620,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


function renderProductos (arr){
     for (product of productList){
          const productCard = document.createElement ('div');
          productCard.classList.add('product-card')
     
          const productImg = document.createElement ('img');
          productImg.setAttribute('src', product.image)
          //product = {name, price, image} -> product.image
     
          const productInfo = document.createElement ('div');
          productInfo.classList.add('product-info')
     
          const productInfoDiv = document.createElement ('div');
          
     
          const productPrice = document.createElement ('p');
          productPrice.innerText = '$' + product.price
          const productName = document.createElement ('p');
          productName.innerText = product.name
     
          productInfoDiv.appendChild(productPrice);
          productInfoDiv.appendChild(productName);
     
          const productInfoFigure = document.createElement ('figure');
          const productImgCart = document.createElement ('img');
          productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
          productInfoFigure.appendChild(productImgCart);
     
          productInfo.appendChild(productInfoDiv);
          productInfo.appendChild(productInfoFigure);
     
          productCard.appendChild(productImg);
          productCard.appendChild(productInfo);
     
          cardsContainer.appendChild (productCard);          
     }
}

renderProductos(productList);