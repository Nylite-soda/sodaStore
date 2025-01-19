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
    // const amount = document.getElementById('amount').value * 100; // Convert to kobo

    const handler = PaystackPop.setup({
        key: 'YOUR_PUBLIC_KEY', // Replace with your Paystack public key
        email: email,
        amount: amount,
        currency: 'NGN', // Replace with your currency (e.g., USD, GHS)
        callback: function (response) {
            // Handle successful payment
            alert('Payment complete! Reference: ' + response.reference);
            // Optionally, you can verify the payment on your backend
        },
        onClose: function () {
            alert('Payment window closed.');
        },
    });

    handler.openIframe(); // Open the Paystack payment popup
}

const amount = JSON.parse(localStorage.getItem('total'));

document.querySelector(".total-amount").innerHTML = `₦ ${formatCurrency(amount)}`;

