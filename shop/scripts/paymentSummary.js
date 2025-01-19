import { cart, findProduct, updateQtyHTML } from "../../data/cart.js";
import { getDeliveryOptions } from "../../data/deliveryOptions.js";
import { formatCurrency, priceInNaira } from "./utils/moneyUtil.js";
import { saveToStorage } from "./utils/storage.js";


export function renderPaymentSummary(){
    let paymentSummary = document.querySelector('.js-payment-summary');
    paymentSummary.innerHTML = ``;

    let price = 0;
    let shippingCost = 0;
    cart.forEach(cartItem => {
        let matchingProduct = findProduct(cartItem.id);
        price += priceInNaira(matchingProduct.priceCents) * cartItem.quantity;

        const deliveryOption  = getDeliveryOptions(cartItem.deliveryOptionId);
        shippingCost += priceInNaira(deliveryOption.priceCents);
    });

    const totalBeforeTaxCents = price + shippingCost;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;

    paymentSummary.innerHTML = `
        
          <div class="payment-summary-title">
            Order Summary
          </div>

        <div class="payment-summary-display">
          <div class="payment-summary-row">
            <div class="cost-info"><span>Items (<span class="js-cart-quantity"></span>):</span> <div class="payment-summary-money">₦ ${formatCurrency(price)}</div></div>
          </div>

          <div class="payment-summary-row">
            <div class="cost-info">Shipping &amp; handling: <div class="payment-summary-money">₦ ${formatCurrency(shippingCost)}</div></div>
          </div>

          <div class="payment-summary-row">
            <div class="cost-info subtotal-row">Total before tax:<div class="payment-summary-money subtotal">₦ ${formatCurrency(totalBeforeTaxCents)}</div></div>
          </div>

          <div class="payment-summary-row">
            <div class="cost-info">Estimated tax (10%): <div>₦ ${formatCurrency(taxCents)}</div></div>
          </div>

          <div class="payment-summary-row total-row">
            <div class="cost-info">Order total: <div class="payment-summary-money">₦ ${formatCurrency(totalCents)}</div></div>
          </div>
        </div>

          <button class="place-order-button button-primary" onclick="window.location.href = 'payments.html';">
            Place your order
          </button>
    `;
    saveToStorage("total", totalCents);
    updateQtyHTML();
}
