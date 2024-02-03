import { createContext} from 'react';

const FoodContext = createContext({
    cart: [],
    user: {},
    addFoodtoCart: ()=>{},
    removeFoodFromCart: ()=> {}

});



export default FoodContext;