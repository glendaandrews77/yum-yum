

import"./CartFood.css";

function CartFood(food) {

    function getTotal(){
        let total = food.data.price * food.data.Quantity;
        return total.toFixed(2);
}


return (
    <div className="cart-food">
        <img src={'/images/' + food.data.image} alt=""></img>

        <div className="info d-flex justify-content-center flex-column align-items-center">
            <h5>{food.data.title}</h5>
            <p>{food.data.category}</p>
        </div>

        <label>{food.data.price}</label>
        <label>{food.data.Quantity}</label>
        <label className="total">${getTotal()}</label>
    </div>
);
}



export default CartFood;