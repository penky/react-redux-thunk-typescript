import {Reducer} from "redux";
import {CustomerState} from "./state";
import {ActionType, CLEAR_CUSTOMER_ACTION, UPDATE_CUSTOMER_ACTION} from "./types";


const initialState: CustomerState = {
    customerType : {name : 'john doh!', address: ' down the road'}
};

export const CustomerReducer : Reducer<CustomerState, ActionType> = (state = initialState, action: ActionType) => {
    switch(action.type) {
        case UPDATE_CUSTOMER_ACTION:
            console.log(UPDATE_CUSTOMER_ACTION);
            return {
                ...state,
                customerType: action.payload
            };
        case CLEAR_CUSTOMER_ACTION:
            console.log(CLEAR_CUSTOMER_ACTION);
            var newCustomerType = {name: '', address: ''};
            return {
                ...state,
                customerType: newCustomerType
            };
        default:
            return state;
    }
};