import book from '../helpers/book.js';
import util from '../helpers/util.js';

import cart from './cart.js';

const makeStore = () =>{
    const bookInfo = book.getBook();
    let domString = '<h2>Our Only Book</h2>';
    domString += `<h3>${bookInfo.price}</h3>`;
    //domString += `<img class='book-cover' src='${bookInfo.image}' alt='book cover'>`;
    domString += `<button id='cart-button' class='btn btn-danger'>Add to cart</button>`
    util.printToDom('store-container', domString);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};

const addToCartEvent = (e) =>{
    e.preventDefault();
    const bookInfo = book.getBook();
    cart.setCart(bookInfo);
    cart.cartToDom();
};

export default { makeStore };