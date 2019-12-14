import {UPDATE_CUSTOMER_ACTION,
    CLEAR_CUSTOMER_ACTION,
    START_UPDATING_CUSTOMER_ACTION,
    CustomerType,
    ActionType} from "./types"

export function updateCustomerType(aName: string, aAddress: string) : ActionType {
    var customerType : CustomerType = {name: aName, address : aAddress};
    return {
        type: UPDATE_CUSTOMER_ACTION,
        payload: customerType
    }
}

export function clearCustomerType() : ActionType {
    return {
        type: CLEAR_CUSTOMER_ACTION
    }
}

export function startUpdating() : ActionType {
    return {
        type: START_UPDATING_CUSTOMER_ACTION,
    }
}