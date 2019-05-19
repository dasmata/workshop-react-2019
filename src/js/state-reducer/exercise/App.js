/**
 * State reducer exercise
 *
 * Create 2 buttons that increment/decrement the quantity for each product
 * in the shopping cart. In order to do this, you should create 2 actions
 * ACTION_CART_INCREASE and ACTION_CART_DECREASE that will be processed by
 * the cart reducer
 */

import React from 'react';
import Cart from './Cart';
import Product from './Product';

const products = [
    {
        id: 1,
        name: '1st product',
        price: {'RON': 34.5, 'EUR': 8.5},
    },
    {
        id: 2,
        name: 'second product',
        price: {'RON': 2.99, 'EUR': 0.5},
    },
    {
        id: 3,
        name: 'third product',
        price: {'RON': 54, 'EUR': 10.2},
    },
];

export default class App extends React.Component {
    render () {
        return (<div>
            <Cart/>
            <ul>
                {products.map((prod) => (
                    <Product key={prod.id} data={prod}/>
                ))}
            </ul>
        </div>);
    }
}