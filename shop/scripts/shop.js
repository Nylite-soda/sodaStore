
import { products } from "../../data/products.js";
import {inNaira } from "./utils/moneyUtil.js";
import { addToCart } from "../../data/cart.js";
import { renderNavBarandFooter, renderProducts, renderStoreHeader } from "./utils/rendering.js";


renderNavBarandFooter();
renderStoreHeader();

const todayDealsDisplayGrid = document.querySelector(".js-today-deals-products-grid");

renderProducts(8, todayDealsDisplayGrid);

const addToCartButtons = document.querySelectorAll(".js-add-to-cart-button");
// const 

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let timeOutId;
        if (timeOutId) {
            clearTimeout(timeOutId);
        };

        addToCart(button.dataset.productId);

        button.previousElementSibling.style.opacity = "1";
        timeOutId = setTimeout(() => {
            button.previousElementSibling.style.opacity = "0";
        }, 2000);
    });
});