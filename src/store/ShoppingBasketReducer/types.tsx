
export const ADD_TO__SHOPPING_BASKET_TYPE = 'UPDATE_SHOPPING_BASKET_TYPE';
export const CLEAR_SHOPPING_BASKET_TYPE = 'ANOTHER_SHOPPING_BASKET_TYPE';


export interface ShoppingBasketAction {
    basketItems: string[]
}

export interface AddToShoppingBasketAction {
    type: typeof ADD_TO__SHOPPING_BASKET_TYPE
    payload: string
}

export interface ClearShoppingBasket {
    type: typeof CLEAR_SHOPPING_BASKET_TYPE
}


export type ActionType = AddToShoppingBasketAction | ClearShoppingBasket;
