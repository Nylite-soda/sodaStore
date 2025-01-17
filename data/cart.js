import { getFromStorage, saveToStorage } from "../shop/scripts/utils/storage.js";
import { products } from "./products.js";

let matchingProduct;
let qtyContainer;
export let cartQuantity;

document.addEventListener('DOMContentLoaded', () => {
    cartQuantity = getFromStorage("cartQty") || 0;
    qtyContainer = document.querySelector(".js-cart-quantity");
    qtyContainer.innerHTML = cartQuantity;
});

export const cart  = getFromStorage("cart") || [];

export function findProduct(id) {
    for (let product of products) {
        if (product.id === id) {
            return matchingProduct = product
        }
    }
}

export function addToCart (id) {
    findProduct(id);

    let itemInCart;
    cart.forEach(cartItem => {
        if (matchingProduct.id === cartItem.id) {
            itemInCart = cartItem;
        }
    });

    if (itemInCart) {
        itemInCart.quantity += 1;
    } else {
        cart.unshift({
            id: matchingProduct.id,
            quantity: 1
        });
    }
    updateCartQuantity();
    saveToStorage("cart", cart);
}

export function removeFromCart(id) {}

export function updateCartQuantity(){
    cartQuantity = 0;
    cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity
    })
    
    qtyContainer.innerHTML = cartQuantity;
    saveToStorage("cartQty", cartQuantity);
}