import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const title = "7STORE"
  return (
    <>
     <div className= ' w-full h-24 flex flex-row justify-between bg-lime-300 text-orange-600  text-center cursor-pointer font-light text-3xl'> 
        <h1>{title}</h1>
        <nav >
            

            <ul className='flex flex-row gap-3'>
            <li className='font-thin'><Link to='/'>Home</Link></li>
            <li className='font-thin'><Link to='/developer'>Developer</Link></li>
            <li className='font-thin'><Link to='/cart'>Cart</Link></li>
          </ul>

    
            
        </nav>
           
        
        
     </div>
    </>
  )
}

export default Header
