
import { createContext, useState } from "react";

//Crear contexto
export const CartContext = createContext()

//Crear Provider
export function CartProvider ({children }) {
    const [cart, setCart]=useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0){
            //Una forma seria usando structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex] += 1
            return setCart[newCart]
        }

        //Si el producto no esta en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }


    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
