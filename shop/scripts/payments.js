import { renderPaymentSummary } from "./paymentSummary.js";
import { formatCurrency } from "./utils/moneyUtil.js";
import { renderNavBarandFooter } from "./utils/rendering.js";
import 'https://js.paystack.co/v1/inline.js';


renderNavBarandFooter();
renderPaymentSummary();

export function payWithPaystack() {
    const email = '';

    if(!email){
        alert("Kindly enter Payer's email");
        return;
    }
    email = document.getElementById('email').value;
    console.log('got here')

    const handler = PaystackPop.setup({
        key: 'pk_live_e8bc5b678aea8c2d0fb67cf9a8901a6616e81985', 
        email: email,
        amount: amount,
        currency: 'NGN', 
        callback: function (response) {
            alert('Payment complete! Reference: ' + response.reference);
        },
        onClose: function () {
            alert('Payment window closed.');
        },
    });

    handler.openIframe();
}

const amount = JSON.parse(localStorage.getItem('total'));

document.querySelector(".total-amount").innerHTML = `₦ ${formatCurrency(amount)}`;

