import { getFromStorage, saveToStorage } from "../shop/scripts/utils/storage.js";
import { products } from "./products.js";

let matchingProduct;
let qtyContainer = document.querySelector(".js-cart-quantity");
qtyContainer.innerHTML = getFromStorage("cartQty") || 0;

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

    let cartQuantity = 0;
    cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity
    })
    
    qtyContainer.innerHTML = cartQuantity;
    
    saveToStorage("cartQty", cartQuantity);
    saveToStorage("cart", cart);
}