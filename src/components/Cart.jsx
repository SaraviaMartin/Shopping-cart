import "./Cart.css"
import { useId } from "react"
import {CartIcon, ClearCartIcon} from "./Icons.jsx"
import { useCart } from "../hooks/useCart.js"
import {PayTheProduct} from "./PayTheProduct.jsx"

function CartItem ({thumbnail, price, title, quantity, addToCart}){
    return (
        <li>
            <img src={thumbnail} alt={title} />
                <div>
                <strong>
                    {title}
                </strong> - ${price}
                </div>
            <footer>
                <small >
                Cantidad: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const {cart, clearCart, addToCart, payment} = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem 
                        key={product.id}
                        addToCart={()=> addToCart(product)}
                        {...product}
                        />
                    ))}
                </ul>
                <button className="cart-paybutton" onClick={payment}>
                    <PayTheProduct/>
                </button>
                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}