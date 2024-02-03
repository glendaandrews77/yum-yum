import React, { useState } from 'react';
import FoodContext from '../src/Components/FoodContext'; // Change to FoodContext

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 1324, name: 'Gigi' });

    function addProductToCart(prod) {
        // MODIFY and state Object or State Array
        // create a copy
        let copy = [...cart];
        // modify the copy
        copy.push(prod);
        // set the copy back
        setCart(copy);
    }

    function removeProductFromCart() {
        console.log("global remove");
    }

    return (
        <FoodContext.Provider
            value={{
                cart: cart,
                user: user,
                addFoodToCart: addFoodt4oCart,
                removeFoodtFromCart: removeFoodFromCart,
            }}
        >
            {props.children}
        </FoodContext.Provider>
    );
}

export default GlobalState;
