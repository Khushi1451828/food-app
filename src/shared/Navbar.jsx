import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    
      <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
  <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto'>
    <div className='flex items-center justify-between'>
<img src="https://images.squarespace-cdn.com/content/v1/5a1d89e0bff2007c8d1007f5/1605889179622-D5730K19M4Y19HFCZ2U0/ff+new+logo+website.png" alt="" className='h-10 cursor-pointer'/>
    <div className='lg:flex hidden gap-8 items-center'>
    <a href='' className='text-[#191919] text-xl font-medium hover:text-orange-500'>Today Special</a>
    <a href='' className='text-[#191919] text-xl font-medium hover:text-orange-500'>Why fair foods</a>
    <a href='' className='text-[#191919] text-xl font-medium hover:text-orange-500'>Our Menu</a>
    <a href='' className='text-[#191919] text-xl font-medium hover:text-orange-500'>Add Food</a>
    <a href='' className='text-[#191919] text-xl font-medium hover:text-orange-500'>Popular Food</a>
    <button className='bg-[#ee7810] active:scale-90 transition duration-100 transform hover:shadow-xl rounded-full px-8 py-2 text-xl font-medium text-white'>Login</button>
    </div>
    <div className='block lg:hidden z-40' onClick={handleNav}>
    {
        nav?(<RxCross2 size={25} className='text-[#191919] cursor-pointer'/>):<TiThMenu className='text-red-500 cursor-pointer' size={25}/>
    }
    </div> 
    <div className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${nav?"right-0":"right-[-100%]"} pt-24`}>
    <div className='flex flex-col gap-8'>
    <a href='' className='text-[#191919] text-base font-medium hover:text-orange-500'>Today Special</a>
    <a href='' className='text-[#191919] text-base font-medium hover:text-orange-500'>Why fair foods</a>
    <a href='' className='text-[#191919] text-base font-medium hover:text-orange-500'>Our Menu</a>
    <a href='' className='text-[#191919] text-base font-medium hover:text-orange-500'>Add Food</a>
    <a href='' className='text-[#191919] text-base font-medium hover:text-orange-500'>Popular Food</a>
    <button className='bg-[#e64037] active:scale-90 transition duration-100 transform hover:shadow-xl rounded-full px-8 py-2 text-xl font-medium text-white'>Login</button>
    </div>
    </div>
</div>
      
    </div>
    </div>
   
  

  
    
  )
}

export default Navbar
