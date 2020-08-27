import { createBrowserHistory } from 'history';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {CustomerReducer} from "./CustomerReducer/reducer";
import {ShoppingBasketReducer} from "./ShoppingBasketReducer/reducer";
import { logger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router'


export const history = createBrowserHistory();
const rootReducer = combineReducers({
    customerReducer : CustomerReducer,
    shoppingBasketReducer : ShoppingBasketReducer,
    router: connectRouter(history)
});

export type RootState = ReturnType<typeof rootReducer>;
const reactRouterMiddleware = routerMiddleware(history);

export default function configureStore() {
    const middlewares = [
        thunkMiddleware,
        logger,
        reactRouterMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer)
    );

    return store;
}