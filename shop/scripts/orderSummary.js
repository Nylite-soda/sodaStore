import { cart, findProduct } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { inNaira } from "./utils/moneyUtil.js";




export function renderOrderSummary(){
    const orderSummary = document.querySelector('.js-order-summary');
    if (cart.length === 0) {
        orderSummary.innerHTML = `
            <div class="empty-cart flex">
                Your cart is empty. <a href="shop-home.html" class="link-primary">Continue shopping</a>
            </div>
        `;
        return;
    }  
    for (let cartItem of cart) {
        let matchingProduct = findProduct(cartItem.id);
        orderSummary.innerHTML += `
            <div class="cart-item-container">
                <div class="delivery-date">
                    Delivery date: Tuesday, June 21
                </div>

                <div class="cart-item-details-grid">
                <div class="details flex">
                    <img class="product-image"
                        src=${matchingProduct["image"]}>

                    <div class="cart-item-details">
                        <div class="product-name">
                            ${matchingProduct["name"]}
                        </div>
                        <div class="product-rating-container flex">
                            <img class="product-rating-stars"
                            src="images/ratings/rating-${matchingProduct["rating"].stars * 10}.png">
                            <div class="product-rating-count link-primary">
                            (${matchingProduct["rating"].count} Reviews)
                            </div>
                        </div>
                        <div class="product-price">
                            ${inNaira(matchingProduct["priceCents"])}
                        </div>
                        <div class="product-quantity">
                            <span class="flex quantity-display">
                                Quantity
                                <div class="update-qty flex"><button class="qty qty-left">-</button><div class="qty qty-value flex">${cartItem.quantity}</div><button class="qty qty-right">+</button></div>
                            </span>
                            <span class="delete-quantity-link link-primary">
                                <svg class="bin" width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.15789 26.8421C3.15789 28.5837 4.57421 30 6.31579 30H22.1053C23.8468 30 25.2632 28.5837 25.2632 26.8421V7.89474H3.15789V26.8421ZM6.31579 11.0526H22.1053L22.1068 26.8421H6.31579V11.0526ZM18.9474 3.15789V0H9.47368V3.15789H0V6.31579H28.4211V3.15789H18.9474Z" fill="#45322C"/>
                                    <path d="M9.47363 14.2105H12.6315V23.6842H9.47363V14.2105ZM15.7894 14.2105H18.9473V23.6842H15.7894V14.2105Z" fill="#45322C"/>
                                </svg>
                                Delete
                            </span>
                        </div>
                    </div>
                </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                            Choose a delivery option:
                        </div>
                        <div class="delivery-option">
                            <input type="radio" checked
                                class="delivery-option-input"
                                name="delivery-option-${matchingProduct.id}">
                            <div>
                                <div class="delivery-option-date">
                                    Tuesday, June 21
                                </div>
                                <div class="delivery-option-price">
                                    FREE Shipping
                                </div>
                            </div>
                        </div>
                        <div class="delivery-option">
                            <input type="radio"
                                class="delivery-option-input"
                                name="delivery-option-${matchingProduct.id}">
                            <div>
                                <div class="delivery-option-date">
                                    Wednesday, June 15
                                </div>
                                <div class="delivery-option-price">
                                    $4.99 - Shipping
                                </div>
                            </div>
                        </div>
                        <div class="delivery-option">
                            <input type="radio"
                                class="delivery-option-input"
                                name="delivery-option-${matchingProduct.id}">
                            <div>
                                <div class="delivery-option-date">
                                    Monday, June 13
                                </div>
                                <div class="delivery-option-price">
                                    $9.99 - Shipping
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}