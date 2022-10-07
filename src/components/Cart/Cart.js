import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p className='text-center text-lg font-semibold text-orange-400'>Please buy at least one item !!!</p>
    }
    else {
        message = <p className='text-center text-lg font-semibold text-orange-400'>Thanks For Buying !!!</p>
    }
    return (
        <div>
            <h2 className={cart.length === 0 ? `text-center text-2xl mt-3 font-semibold` : `text-center text-orange-600 text-2xl mt-3 font-semibold`}>Order Summary</h2>
            <h2 className={`text-center text-xl mt-3 font-semibold ${cart.length === 2 ? 'text-purple-400' : 'bg-yellow-400'}`}>Order Quantity: {cart.length}</h2>
            <div className='mt-10 px-6'>
                {
                    cart.map(tshirt => <p className='text-lg font-semibold text-orange-400'
                        key={tshirt._id}
                    >
                        {tshirt.name}
                        <button onClick={() => handleRemoveItem(tshirt)} className='ml-2 px-2 text-white bg-red-400 rounded-lg'>X</button>
                    </p>)
                }
            </div>
            {
                message
            }
            {cart.length === 3 ? <p>Thanks For buying 3 Shirt</p> : <p>please buy more</p>}
            <p>&& operator</p>
            {cart.length === 2 && <h2>Double Item</h2>}
            <p>|| or operator</p>
            {cart.length === 4 || <p>Charta Item na</p>}
        </div>
    );
};

export default Cart;