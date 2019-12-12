import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {CustomerReducer} from "./CustomerReducer/reducer";
import {ShoppingBasketReducer} from "./ShoppingBasketReducer/reducer";

const rootReducer = combineReducers({
    customerReducer : CustomerReducer,
    shoppingBasketReducer : ShoppingBasketReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer)
    );

    return store;
}