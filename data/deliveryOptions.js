
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { inNaira } from '../shop/scripts/utils/moneyUtil.js';
 
export const deliveryOptions = [
    {
        id: 1,
        deliveryTime: 14,
        priceCents: 0,
    },
    {
        id: 2,
        deliveryTime: 5,
        priceCents: 199,
    },
    {
        id: 3,
        deliveryTime: 3,
        priceCents: 599,
    }
]


export function renderDeliveryOptions(matchingProduct, cartItem){
    let html = ``;
    let deliveryDate;
    
    deliveryOptions.forEach(option => {
        console.log(option);
        deliveryDate= generateDeliveryDate(option);
        const price = option.priceCents === 0 ? "FREE Shipping" : `${inNaira(option.priceCents)} - Shipping`
        const isChecked = option.id === Number(cartItem.deliveryOptionId) ? "checked" : ""
        html+=
        `
            <div class="delivery-option js-delivery-option" data-product-id=${matchingProduct.id} data-delivery-id=${option.id}>
                <input type="radio" ${isChecked ? "checked" : ""}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                <div>
                    <div class="delivery-option-date">
                        ${deliveryDate}
                    </div>
                    <div class="delivery-option-price">
                        ${price}
                    </div>
                </div>
            </div>`
    })
    return html;
}

export function generateDeliveryDate(option){
    let deliveryDate;
    const today = dayjs();
    return deliveryDate = today.add(
        option.deliveryTime, "days"
    ).format("dddd, MMMM D")
}