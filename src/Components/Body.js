import React from 'react'
import useFetchProducts from '../Utils/useFetchProducts'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Body = () => {

    const {categoryList} = useFetchProducts();
    console.log(categoryList);

    if (categoryList.length === 0 ){
        return <div>LOADING .....</div>
    }
  return (
    <div className='bg-lime-300 flex flex-wrap h-full w-full justify-around cursor-pointer'>
        {categoryList.map((item)=>(

            <Link to={`/product/${item.id}`}><ProductCard key = { item.id} item={item}/></Link>
            
        ))}
    </div>
  )
}

export default Body
