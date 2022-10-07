import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('t-shirt already added');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('Successfully Added')
        }
    }
    const handleRemoveItem = tshirt => {
        console.log(tshirt);
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }
    return (
        <div className='container mx-auto w-10/12 mt-16'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='grid col-span-9'>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            tshirts.map(tshirt => <TShirt
                                key={tshirt._id}
                                tshirt={tshirt}
                                handleAddToCart={handleAddToCart}
                            ></TShirt>)
                        }
                    </div>
                </div>
                <div className='grid col-span-3 bg-slate-200 drop-shadow-lg'>
                    <Cart
                        cart={cart}
                        handleRemoveItem={handleRemoveItem}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;