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