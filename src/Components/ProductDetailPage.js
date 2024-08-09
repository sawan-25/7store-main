import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchProducts from '../Utils/useFetchProducts';

const ProductDetailPage = () => {

    const {productId} = useParams();

    const productInfo = useFetchProducts(productId);
    const {categoryList} = productInfo;
    const {featuredImage , name, description} =categoryList;
    console.log("CLLLLLLLLLLL",categoryList)
    // console.log("INFOooooooo===>",name, description)
  return (
    <div>
            <ul>
                <li><img src={featuredImage} alt ="product-image"></img></li>
                <li>{name}</li>
                <li>{description}</li>
            </ul>
      
    </div>
  )
}

export default ProductDetailPage
