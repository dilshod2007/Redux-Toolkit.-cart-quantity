import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/cart-slice'


const Cart = () => {
    const cartProducts = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    const handleRemoveCart = (product) => {
        dispatch(removeFromCart(product))
    }
    return (
        <>
            <div className='p-6 bg-gray-100'>
                {
                    cartProducts.map(product => (
                        <div key={product.id} className='bg-white rounded-lg shadow-lg p-4 mb-4 flex items-center justify-between'>
                            <img src={product.thumbnail} alt={product.title} className='h-24 w-24 object-cover rounded-lg shadow-md mr-4' />
                            <div className='flex flex-col flex-grow'>
                                <h1 className='text-lg font-semibold text-gray-800 mb-2'>{product.title}</h1>
                                <p className='text-gray-600 mb-1'>Quantity: {product.quantity}</p>
                                <p className='text-gray-600 mb-2'>Price: ${product.price}</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <button onClick={() => handleRemoveCart(product)} className='bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-200'>
                                    -
                                </button>
                                <p className='text-lg font-medium text-gray-800'>{product.quantity * product.price}</p>
                                <button onClick={() => handleAddToCart(product)} className='bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition duration-200'>
                                    +
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Cart