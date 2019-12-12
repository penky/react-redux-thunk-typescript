
export const UPDATE_CUSTOMER_ACTION = 'UPDATE_CUSTOMER_ACTION';
export const CLEAR_CUSTOMER_ACTION = 'CLEAR_CUSTOMER_ACTION';


export interface CustomerType {
    name: string
    address: string
}

export interface UpdateCustomerType {
    type: typeof UPDATE_CUSTOMER_ACTION
    payload: CustomerType
}

export interface ClearCustomerType {
    type: typeof CLEAR_CUSTOMER_ACTION
}


export type ActionType = UpdateCustomerType | ClearCustomerType;
