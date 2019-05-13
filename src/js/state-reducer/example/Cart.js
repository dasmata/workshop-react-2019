import React from 'react';
import reducer, {addToCart, removeFromCart} from './cartReducer';

let dispatch = null;

export default class Cart extends React.Component {
    state = {products: [], currency: 'RON'};

    dispatch = (action, callback) => {
        this.setState(reducer(action), callback);
    };

    componentDidMount () {
        dispatch = this.dispatch;
    }

    render () {
        return <div style={{border: '1px solid black', padding: '5px'}}>
            <div>Shooping cart</div>
            <ul>
                {
                    this.state.products.map((entry) => {
                        return <li key={entry.product.id}>
                            <span>{entry.product.name} </span>
                            <span>({entry.quantity} buc) </span>
                            <span>{entry.value}{this.state.currency}</span>
                        </li>;
                    })
                }
            </ul>
        </div>;
    }
}

export { dispatch };