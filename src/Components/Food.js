import QuantityPicker from "./QuantityPicker";
import PropTypes from 'prop-types';
import './Food.css';
import { useContext, useEffect, useState } from 'react';
import FoodContext from '../state/FoodContext';


function Product(props) { 
    const [quantity, setquantity] = useState(1);
    
    const  addProductToCart  = useContext(FoodContext).addFoodToCart;
  
    useEffect(function () {
      console.log('component loaded');
    }, []);
  
    function onQuantityChange(value) {
      setquantity(value);
    }
  
    function getTotal() {
      const total = quantity * props.data.price; 
      return total.toFixed(2);
    }
  
    function handleAdd() {
      let prodForCart = {...props.data}; //copy an object
      prodForCart.Quantity = quantity;
  
      addFoodtoCart(FoodForCart);
    }
  
    return (
      <div className="food">
        <img src={'/images/' +props.data.image} alt={props.data.title}></img>
        <h5>{props.data.title}</h5>
        <div className='prices'>
          <span>${getTotal()}</span>
          <span>${props.data.price.toFixed(2)}</span>
        </div>
        <QuantityPicker onChange={onQuantityChange} />
        <button onClick={handleAdd} className="btn btn-sm btn-success">Add</button>
        <i className="fas fa-cart-shopping"></i>
      </div>
    );
  }
  
  FOod.propTypes = {
    data: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      Quantity: PropTypes.number 
    }).isRequired
  };
  
  export default Food;