import React from 'react';
import {connect, MapDispatchToPropsParam, MapStateToProps} from "react-redux";
import {RootState} from "../store";
import {ThunkDispatch} from "redux-thunk";
import {ActionType} from "../store/CustomerReducer/types";
/*import {FirstState} from "../store/CustomerReducer/state";*/
import * as customerActions from "../store/CustomerReducer/actions";

interface OwnState {
    localName : string,
    localAddress : string
}

interface OwnProps {}

interface DispatchProps {
    onUpdateFirstType: (aName : string, aAddress : string) => void,
    onClearCustomer: () => void
}

interface StateProps {
    name: string,
    address : string
}


type Props = StateProps & OwnProps & DispatchProps;

class CustomerComponent extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            localName : "",
            localAddress : ""
        }
    }

    componentDidMount(): void {
    }

    onChangeName(event : any) {
        this.setState({localName: event.target.value})
    }

    onChangeAddress(event : any) {
        this.setState({localAddress: event.target.value})
    }

    render() {
        return (
            <div>
                <p>Customer Component</p>
                <button onClick={this.props.onClearCustomer.bind(this)}>Clear</button>
                <br/><br/>
                <button onClick={this.props.onUpdateFirstType.bind(this,this.state.localName,this.state.localAddress)}>Update</button>
                <br/>
                <label>Name:</label>
                <input onChange={this.onChangeName.bind(this)} value={this.state.localName}/>
                <br/>
                <label>Address:</label>
                <input onChange={this.onChangeAddress.bind(this)} value={this.state.localAddress}/>
                <p>name:{this.props.name}</p>
                <p>id:{this.props.address}</p>
            </div>
        );
    }

}

const mapStateToProps : MapStateToProps<StateProps,OwnProps,RootState> = (rootState: RootState, ownProps : OwnProps): StateProps => {
    return {
        name : rootState.customerReducer.customerType.name,
        address : rootState.customerReducer.customerType.address
    }
};

var mapDispatchToProps : MapDispatchToPropsParam<DispatchProps, OwnProps>;
mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, ActionType>, OwnProps) => {
    return {
        onUpdateFirstType : async (aName : string, aAddress : string) => {
            dispatch(customerActions.updateCustomerType(aName,aAddress))
        },
        onClearCustomer : async () => {
            dispatch(customerActions.clearCustomerType())
        }
    }
};

export default connect<StateProps,DispatchProps, OwnProps, RootState>(mapStateToProps,mapDispatchToProps)(CustomerComponent);
