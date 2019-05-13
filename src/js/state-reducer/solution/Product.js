import React, { useState } from 'react';
import { dispatch as cartDispatch } from './Cart';
import { addToCart, removeFromCart } from './cartReducer';

const Product = ({data}) => {
    const [state, setState] = useState({inCart: false, currency: 'RON'});

    return (<li>
        <div>
            <span>{data.name} </span>
            <span>{data.price[state.currency]}{state.currency}</span>
        </div>
        <div>
        {!state.inCart && <button onClick={() => cartDispatch(addToCart(data, 1), () => setState({inCart: true}))}>Add to cart</button>}
        {state.inCart && <a href={'javascript://'} onClick={() => cartDispatch(removeFromCart(data), () => setState({inCart: false}))}>remove from cart</a>}
        </div>
    </li>);
};

export default Product;
