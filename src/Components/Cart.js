import { useContext } from 'react';
import FoodContext from './FoodContext';
import CartFood from './CartFood';
import "./Cart.css";

function Cart() {
    const { cart } = useContext(FoodContext);

    return (
        <div className="cart page">
            <h1>Finished Sipping & Slurpping? Click Order Now!</h1>
            <h4> You have {cart.length} items in the shopping cart</h4>

            <div className="food-list">
                {Cart.map((food) => <CartFood key={food._id} data={food} /> )}
            </div>
        </div>
    );
}

export default Cart;



