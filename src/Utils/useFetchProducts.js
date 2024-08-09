import { useEffect, useState } from 'react';
import {PRODUCTS_API} from './constants';

 const useFetchProducts = (productId)=>{

    const [categoryList , setCategoryList] = useState([]);

    useEffect(()=>{
            fetchProducts();
    },[]);

    const fetchProducts = async()=>{
        try{
            const response = await fetch(`${PRODUCTS_API}/${productId ? productId: ""}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
            const json = await response.json();
            console.log(json);
            setCategoryList(json);


        }catch(error){
            console.error('Failed to fetch products:', error);
        }
    }
    return {categoryList};
}

export default useFetchProducts;