import { cart, findProduct } from "../../data/cart.js";
import { inNaira, priceInNaira } from "./utils/moneyUtil.js";


export function renderPaymentSummary(){
    let paymentSummary = document.querySelector('.js-payment-summary');
    paymentSummary.innerHTML = ``;

    let price;
    cart.forEach(cartItem => {
        let matchingProduct = findProduct(cartItem.id);
        price = priceInNaira(matchingProduct.priceCents) * cartItem.quantity;
        console.log(price)
    });

    paymentSummary.innerHTML = `
        
          <div class="payment-summary-title">
            Order Summary
          </div>

        <div class="payment-summary-display">
          <div class="payment-summary-row">
            <div class="cost-info">Items x3: <div class="payment-summary-money">$42.75</div></div>
          </div>

          <div class="payment-summary-row">
            <div class="cost-info">Shipping &amp; handling: <div class="payment-summary-money">$4.99</div></div>
          </div>

          <div class="payment-summary-row">
            <div class="cost-info subtotal-row">Total before tax:<div class="payment-summary-money subtotal">$47.74</div></div>
          </div>

          <div class="payment-summary-row">
            <div class="cost-info">Estimated tax (10%): <div>$4.77</div></div>
          </div>

          <div class="payment-summary-row total-row">
            <div class="cost-info">Order total: <div class="payment-summary-money">$52.51</div></div>
          </div>
        </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `;
}
