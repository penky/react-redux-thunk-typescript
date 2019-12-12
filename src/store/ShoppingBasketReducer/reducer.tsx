import {Reducer} from "redux";
import {ShoppingBacketState} from "./state";
import {ActionType, CLEAR_SHOPPING_BASKET_TYPE, ADD_TO__SHOPPING_BASKET_TYPE} from "./types";


const initialState: ShoppingBacketState = {
    shoppingBasketType : { basketItems: ['Beer','Crisps']}
};

export const ShoppingBasketReducer : Reducer<ShoppingBacketState, ActionType> = (state = initialState, action: ActionType) => {
    var newShoppingBasketType = {...state.shoppingBasketType};

    switch(action.type) {
        case ADD_TO__SHOPPING_BASKET_TYPE:
            console.log(ADD_TO__SHOPPING_BASKET_TYPE);
            let newBasketItems : string[] = [...state.shoppingBasketType.basketItems];
            newBasketItems.push(action.payload);
            newShoppingBasketType.basketItems = newBasketItems;
            return {
                ...state,
                shoppingBasketType: newShoppingBasketType
            };
        case CLEAR_SHOPPING_BASKET_TYPE:
            console.log(CLEAR_SHOPPING_BASKET_TYPE);
            let emptyBasketItems : string[] = [];
            newShoppingBasketType.basketItems = emptyBasketItems;
            return {
                ...state,
                shoppingBasketType: newShoppingBasketType
            };
        default:
            return state;
    }
};