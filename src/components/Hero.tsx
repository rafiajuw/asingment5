import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div><br></br><br></br><br></br>
<nav className='flex justify-around'>
    <div>
        <h1 className='font-
Libre Bodoni text-4xl h-16 font-bold'>IMPECCABLE <br></br>CRAFTSMANSHIP AND <br></br>FINESSE
        </h1><br></br>
        <br></br>
        <br></br>
        <p className='text-yellow-600 font-Libre Bodoni top-2/4 left-40 '>An example of intricate workmanship and detail,<br></br>elegant necklaces and long and short chains form a part <br></br>of our desirable collection.</p>
    </div>
    <div>
        <img 
        src='/img.png'
         alt='img'
         className='w-80 h-3/4  rounded-tl-3xl rounded-br-3xl'
    />
        </div>
</nav>

<div className='flex justify-center'>


<button className='bg-yellow-600  text-white font-bold py-2 px-3 w-72 h-14 rounded top-96 left-44'>Explore now</button>

    </div></div>
  )
}

export default Hero