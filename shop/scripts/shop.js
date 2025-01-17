
import { products } from "../../data/products.js";
import { addToCart } from "../../data/cart.js";
import { renderNavBarandFooter, renderProducts, renderStoreHeader } from "./utils/rendering.js";


renderNavBarandFooter();
renderStoreHeader();

const todayDealsDisplayGrid = document.querySelector(".js-today-deals-products-grid");
if (todayDealsDisplayGrid){ renderProducts(8, todayDealsDisplayGrid);}

const topPicksDisplayGrid = document.querySelector(".js-top-picks-products-grid");
if (topPicksDisplayGrid){renderProducts(16, topPicksDisplayGrid);}

const allProductsDisplayGrid = document.querySelector(".js-shop-products-grid");
if (allProductsDisplayGrid){renderProducts(products.length, allProductsDisplayGrid);}

const popularProductsDisplayGrid = document.querySelector(".js-popular-products-grid");
if (popularProductsDisplayGrid){renderProducts(3, popularProductsDisplayGrid);}

const addToCartButtons = document.querySelectorAll(".js-add-to-cart-button");

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