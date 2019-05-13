const ACTION_CART_ADD = 'cart/add';
const ACTION_CART_REMOVE = 'cart/remove';

const getValue = (quantity, price)=>{
    return Math.floor((price * 100) * quantity) / 100;
};

export default action => (state, props) => {
    switch (action.type) {
        case ACTION_CART_ADD:
            let quantity = action.quantity || 1,
                found = false,
                products = state.products.map((entry, idx) => {
                    if (entry.product.id === action.product.id) {
                        found = idx;
                    }
                    return entry;
                });
            if(found === false){
                products.push({
                    product: action.product,
                    quantity,
                    value: getValue(action.product.price[state.currency], quantity)
                });
            }
            return {
                products,
            };
        case ACTION_CART_REMOVE:
            return {
                products: state.products.filter((entry) => entry.product.id !== action.product.id),
            };
        default:
            return {};
    }
};

const addToCart = (product, quantity) => ({
    type: ACTION_CART_ADD,
    product,
    quantity: parseInt(quantity, 10),
});

const removeFromCart = product => ({
    type: ACTION_CART_REMOVE,
    product,
});

export {addToCart, removeFromCart};