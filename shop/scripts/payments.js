import { cart } from "../../data/cart.js";
import { getOrdersFromCart, orders } from "../../data/orders.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { formatCurrency } from "./utils/moneyUtil.js";
import { renderNavBarandFooter } from "./utils/rendering.js";
import { getFromStorage, saveToStorage } from "./utils/storage.js";


renderNavBarandFooter();
renderPaymentSummary();

const amount = JSON.parse(localStorage.getItem('total'));

document.querySelector(".total-amount").innerHTML = `₦ ${formatCurrency(amount)}`;

export let ref;

export function payWithPaystack() {
    const email = document.getElementById('email').value;

    if(!email){
        alert("Kindly enter Payer's email");
        return;
    }

    const handler = PaystackPop.setup({
        key: 'pk_test_8bbbaf3344e247196567482948a2d26f6b1d9464',
        email: email,
        amount: amount,
        currency: 'NGN',
        callback: function (response) {
            const promise = new Promise((resolve) => {
                const ref = response.reference;
                saveToStorage("ref", ref);
                resolve("orders.html")
            });
    
            promise.then((url) => {
                window.location.href = url;
                orders = cart;
                cart = [];
                saveToStorage("orders", orders)
                saveToStorage("cart", cart)
            });
        },
        onClose: function () {
            alert("You will be redirected soon!");
        },
    });

    handler.openIframe();
}
