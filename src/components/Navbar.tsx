import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div>
        <nav className='bg-yellow-600 text-white h-12 py-2 px-3 flex justify-between items-center'>
        <div>
         <h1 className='text-5xl text-white font-serif'>MANZARI</h1>
        </div>
    <div>
        <img src='/serch.png'
         alt='img'
         className='w-130 h-80' /></div>
    <div>
        <ul className='flex space gap-x-4'>  
        <li><a href='#!'>home</a></li>
        <li><a href="#!">contact</a></li>
        <li><a href="#!">shop</a></li></ul>
        
    </div></nav>
    
    </div>
  )
}

export default Navbar