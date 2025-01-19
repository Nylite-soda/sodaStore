import { renderPaymentSummary } from "./paymentSummary.js";
import { formatCurrency } from "./utils/moneyUtil.js";
import { renderNavBarandFooter } from "./utils/rendering.js";


renderNavBarandFooter();
renderPaymentSummary();

const amount = JSON.parse(localStorage.getItem('total'));

document.querySelector(".total-amount").innerHTML = `₦ ${formatCurrency(amount)}`;

export function payWithPaystack() {
    const email = document.getElementById('email').value;

    if(!email){
        alert("Kindly enter Payer's email");
        return;
    }
    console.log('got here')

    const handler = PaystackPop.setup({
        key: 'pk_test_8bbbaf3344e247196567482948a2d26f6b1d9464', 
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


