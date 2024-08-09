import React from 'react'

const ProductCard = ({item , index}) => {
  return (
    <div className='flex flex-row '> 
        <div className=' w-64 h-80  shadow-lg m-4 rounded-lg transition-transform duration-300 hover:scale-105' >
            <img className='w-full h-3/4 rounded-md ' src={item.thumbnailImage} alt='product card'></img>
            <h1 className='text-center font-bold mt-2'>{item.name}</h1>
    </div>
    </div>
  )
}

export default ProductCard;
