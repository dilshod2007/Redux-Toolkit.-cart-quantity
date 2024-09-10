import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'



const Single = () => {

  const { id } = useParams()

  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])


  return (
    <>
      <div className="product-card p-4 border rounded-md shadow-lg transition-all duration-300 hover:shadow-xl flex gap-[60px]">
        <div>
          <img className="product-image w-[450px] h-[450px] object-cover mb-4" src={data.thumbnail} alt={data.title} />
        </div>
        <div className=' my-auto'>
          <h1 className="product-title text-2xl font-bold mb-2">{data.title}</h1>
          <p className="product-description text-gray-700 mb-4 border-b pb-4 w-[500px]">{data.description}</p>
          <p className="product-price text-lg font-bold text-green-600 mb-2">${data.price}</p>
          <p className="product-category text-gray-500 mb-1">Category: {data.category}</p>
          <p className="product-brand text-gray-500 mb-1 ml-[10px]">Brand: {data.brand}</p>
          <p className="product-stock text-gray-500 mb-1 ml-[10px]">Stock: {data.stock}</p>


        </div>

      </div>


      <div className="footer-bottom container mx-auto mt-8 text-center border-t border-gray-700 pt-4 mt-[200px] p-4">
        <p className="footer-copyright text-sm text-gray-400 hover:text-gray-200">
          Copyright © 2023 All rights reserved
        </p>
      </div>



    </>
  )
}

export default Single