import { cart } from "../../data/cart.js";
import { orders } from "../../data/orders.js";
import { renderNavBarandFooter, renderStoreHeader } from "./utils/rendering.js";



renderNavBarandFooter();
renderStoreHeader();



console.log(cart + " " + orders);
