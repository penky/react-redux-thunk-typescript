import React from 'react';
import {connect, MapDispatchToPropsParam, MapStateToProps} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {ActionType as ShoppingActionType}  from "../store/ShoppingBasketReducer/types";
import {ActionType as CustomerActionType}  from "../store/CustomerReducer/types";
import {RootState} from "../store";
import * as shoppingBasketActions from "../store/ShoppingBasketReducer/actions";
import {CallHistoryMethodAction} from "connected-react-router";

interface OwnState {
    newItem : string;
}

interface OwnProps {}

interface DispatchProps {
    onAddToShoppingBasket: (newItem : string) => void
    onClearShoppingBasket: () => void
    onGotoCustomer: () => void
}

interface StateProps {
    basketItems: string[]
}


type Props = StateProps & OwnProps & DispatchProps;

class ShoppingBasketComponent extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            newItem : ""
        }
    }

    componentDidMount(): void {
    }

    onChangeNewItem(event : any) {
        this.setState({newItem: event.target.value})
    }

    render() {
        return (
            <div>
                <p>Shopping Basket List:</p>
                <button onClick={this.props.onClearShoppingBasket.bind(this)}>Clear</button>
                <br /><br />
                <button onClick={this.props.onAddToShoppingBasket.bind(this,this.state.newItem)}>Add</button>
                <input autoFocus={true} onChange={this.onChangeNewItem.bind(this)} value={this.state.newItem}/>
                {this.props.basketItems.map((item,index) => (<p key={index}>{item}</p>))}
                <button onClick={this.props.onGotoCustomer.bind(this)}>Go to Customer</button>
            </div>
        );
    }

}

const mapStateToProps : MapStateToProps<StateProps,OwnProps,RootState> = (rootState: RootState, ownProps : OwnProps): StateProps => {
    return {
        basketItems : rootState.shoppingBasketReducer.shoppingBasketType.basketItems,
    }
};

var mapDispatchToProps : MapDispatchToPropsParam<DispatchProps, OwnProps>;
mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, ShoppingActionType | CustomerActionType | CallHistoryMethodAction<any>>, OwnProps) => {
    return {
        onAddToShoppingBasket : async (name : string) => {
            dispatch(shoppingBasketActions.addToShoppingBasket(name))
        },
        onClearShoppingBasket : async () => {
            dispatch(shoppingBasketActions.clearShoppingBasket())
        },
        onGotoCustomer : async () => {
            dispatch(shoppingBasketActions.gotoCustomer())
        }
    }
};

export default connect<StateProps,DispatchProps, OwnProps, RootState>(mapStateToProps,mapDispatchToProps)(ShoppingBasketComponent);
