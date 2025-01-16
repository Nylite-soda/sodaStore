import { renderNavBarandFooter } from "../../scripts/home.js";
import { products } from "../../data/products.js";
import {inNaira } from "./utils/moneyUtil.js";
import { addToCart } from "../../data/cart.js";


renderNavBarandFooter();

const todayDealsDisplayGrid = document.querySelector(".js-today-deals-products-grid");

export function renderProducts(num, grid) {
    for (let i = 0; i < num; i++) {
        grid.innerHTML += `
        <div class="product-container flex">
        <div class="product-image-container">
          <img class="product-image"
            src=${products[i]["image"]}>
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${products[i]["name"]}
        </div>

        <div class="product-rating-container flex">
          <img class="product-rating-stars"
            src="images/ratings/rating-${products[i]["rating"].stars * 10}.png">
          <div class="product-rating-count link-primary">
          (${products[i]["rating"].count} Reviews)
          </div>
        </div>

        <div class="product-price">
          ${inNaira(products[i]["priceCents"])}
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart flex">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button js-add-to-cart-button" data-product-id=${products[i]["id"]}>
          Add to Cart
        </button>
      </div>
        `;
    }
}

renderProducts(8, todayDealsDisplayGrid)

const addToCartButtons = document.querySelectorAll(".js-add-to-cart-button");
// const 

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        addToCart(button.dataset.productId);

        button.previousElementSibling.style.opacity = "1";
        setTimeout(() => {
            button.previousElementSibling.style.opacity = "0";
        }, 2000);
    });
});