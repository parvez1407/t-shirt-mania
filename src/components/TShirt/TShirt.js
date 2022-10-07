import React from 'react';

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='border-gray-700 border-2 bg-slate-100 drop-shadow-md rounded-lg relative'>
            <div className='p-3'>
                <img className='rounded-t-lg' src={picture} alt="" />
                <div className='mt-3'>
                    <h3 className='mb-5'>Name: {name}</h3>
                    <p>Price: ${price}</p>

                </div>
            </div>
            <button onClick={() => handleAddToCart(tshirt)} className='text-center w-full bg-orange-300 hover:bg-orange-400 py-2 rounded-b-lg font-semibold absolute bottom-0'>Buy This</button>
        </div>
    );
};

export default TShirt;