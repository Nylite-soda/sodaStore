import { getFromStorage, saveToStorage } from "../shop/scripts/utils/storage.js";
import { products } from "./products.js";

let matchingProduct;
let qtyContainer;
export let cartQuantity;

export function updateQtyHTML() {
    cartQuantity = getFromStorage("cartQty") || 0;
    qtyContainer = document.querySelectorAll(".js-cart-quantity");
    qtyContainer.forEach(container => {
        console.log(container)
        container.innerHTML = cartQuantity;
    });
}

export let cart  = getFromStorage("cart") || [];

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
            quantity: 1,
            deliveryOptionId: 1
        });
    }
    updateCartQuantity();
    saveToStorage("cart", cart);
}

export function removeFromCart(id) {
    cart = cart.filter(cartItem => cartItem.id !== id);
    updateCartQuantity();
    saveToStorage("cart", cart);
}

export function updateCartQuantity(){
    cartQuantity = 0;
    cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity
    })
    
    saveToStorage("cartQty", cartQuantity);
    updateQtyHTML();
}

export function reduceQty(id){
    let itemInCart;
    cart.forEach(cartItem => {
        if (id === cartItem.id) {
            itemInCart = cartItem;
        }
    });

    if (itemInCart.quantity === 1) {
        document.querySelector(`.js-cart-item-container-${id}`).remove();
        removeFromCart(id);
    } else{
        itemInCart.quantity -= 1;
        updateCartQuantity();
        saveToStorage("cart", cart);
    }
}
export function increaseQty(id){
    let itemInCart;
    cart.forEach(cartItem => {
        if (id === cartItem.id) {
            itemInCart = cartItem;
        }
    });

    itemInCart.quantity += 1;
    updateCartQuantity();
    saveToStorage("cart", cart);
}

export function updateDeliveryOption(productId, deliveryOptionId){
    let itemInCart;
    cart.forEach(cartItem => {
        if (productId === cartItem.id) {
            itemInCart = cartItem;
        }
    });

    itemInCart.deliveryOptionId = deliveryOptionId;
    saveToStorage("cart", cart);
}