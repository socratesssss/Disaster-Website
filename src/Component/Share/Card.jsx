import React from 'react'
import Title from './Title'
import Peragrap from './Peragrap'
import Button from './Button'

function Card({ img, title, des, price }) {

    return (
        <div className='space-y-2 cursor-pointer'>

            < div className='relative '>
                <img src={img} className='rounded-[10px]    ' alt="" />


                <Button className='rounded-[40px] gap-1 md:gap-2 absolute md:top-3 top-2 md:right-3 right-2 bg-white border-none flex text-[10px] md:text-xs  font-bold text-black'><img src="/cloud.svg" className='w-3 lg:w-auto' alt="" /> Blizzard</Button>

            </div>


            <h1 className='md:text-base text-sm text-black font-bold'>{title}</h1>

            <Peragrap className='md:text-sm text-xs'>{des}</Peragrap>
            <h1 className='md:text-base text-sm text-black font-bold'>{price}</h1>
        </div>
    )
}

export default Card