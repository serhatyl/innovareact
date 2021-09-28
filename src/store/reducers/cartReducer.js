import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialStates/cartItems";

const intialState = {
    cartItems:cartItems
}

export default function cartReducer(state = intialState,{type,payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id===payload.id)
            if(product){
                product.quantity++;
                return {...state};
            }else{
                return {
                    ...state,
                    cartItems:[...cartItems,{quantity:1,product:payload}]
                }
            }
    
        default:
           return state;
    }
}

//immutablity