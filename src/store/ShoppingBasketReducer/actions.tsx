import {ActionType, CLEAR_SHOPPING_BASKET_TYPE, ADD_TO__SHOPPING_BASKET_TYPE} from "./types"
import {push} from "connected-react-router";

export function addToShoppingBasket(newBasketItem: string) : ActionType {
    return {
        type: ADD_TO__SHOPPING_BASKET_TYPE,
        payload: newBasketItem
    }
}

export function clearShoppingBasket() : ActionType {
    return {
        type: CLEAR_SHOPPING_BASKET_TYPE
    }
}

export function gotoCustomer() {
    return push("testingUrl");
}