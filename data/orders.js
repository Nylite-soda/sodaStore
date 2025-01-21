import { renderNavBarandFooter, renderStoreHeader } from "../shop/scripts/utils/rendering.js";
import { getFromStorage } from "../shop/scripts/utils/storage.js";
import { cart } from "./cart.js";


export let orders  = getFromStorage("orders") || [];

export function getOrdersFromCart(){
    return orders = cart;
}

console.log(orders);

// function generateOrderHTML(orders) {
//     const itemsHTML = orders.map(item => `
//       <div class="order-item">
//         <div class="item-image">
//           <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
//         </div>
//         <div class="item-details">
//           <h3>${item.name}</h3>
//           <p>Quantity: ${item.quantity}</p>
//           <p>Price: ${item.price}</p>
//         </div>
//       </div>
//     `).join('');

//     return `
//       <div class="order-card">
//         <div class="order-header">
//           <div>
//             <h2>Order ${order.id}</h2>
//             <p>Placed on ${formatDate(order.date)}</p>
//           </div>
//           <div>
//             <strong>Status: ${order.status}</strong>
//           </div>
//         </div>
//         <div class="order-items">
//           ${itemsHTML}
//         </div>
//         <div class="tracking-status">
//           <div class="status-dot"></div>
//           <div>
//             <strong>${order.tracking.status}</strong>
//             <p>${order.tracking.location}</p>
//           </div>
//         </div>
//         <div class="order-actions">
//           <button onclick="trackOrder('${order.id}')">Track Order</button>
//           <button onclick="viewDetails('${order.id}')">View Details</button>
//         </div>
//       </div>
//     `;
//   }