import {Reducer} from "redux";
import {CustomerState} from "./state";
import {ActionType, CLEAR_CUSTOMER_ACTION, START_UPDATING_CUSTOMER_ACTION, UPDATE_CUSTOMER_ACTION} from "./types";


const initialState: CustomerState = {
    customerType : {name : 'john doh!', address: ' down the road'},
    updating : false
};

export const CustomerReducer : Reducer<CustomerState, ActionType> = (state = initialState, action: ActionType) => {
    switch(action.type) {
        case UPDATE_CUSTOMER_ACTION:
            console.log(UPDATE_CUSTOMER_ACTION);
            return {
                ...state,
                customerType: action.payload,
                updating : false
            };
        case CLEAR_CUSTOMER_ACTION:
            console.log(CLEAR_CUSTOMER_ACTION);
            var newCustomerType = {name: '', address: ''};
            return {
                ...state,
                customerType: newCustomerType,
                updating: false
            };
        case START_UPDATING_CUSTOMER_ACTION:
            return {
                ...state,
                updating: true
            };
        default:
            return state;
    }
};