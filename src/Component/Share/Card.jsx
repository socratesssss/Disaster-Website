import React from 'react'
import Title from './Title'
import Peragrap from './Peragrap'
import Button from './Button'

function Card({ img, title, des, price }) {

    return (
        <div className='space-y-2 cursor-pointer'>

            < div className='relative '>
                <img src={img} className='rounded-[10px]   ' alt="" />


                <Button className='rounded-[40px] gap-2 absolute top-3 right-3 bg-white border-none flex font-bold text-black'><img src="/cloud.svg" alt="" /> Blizzard</Button>

            </div>


            <h1 className='text-base text-black font-bold'>{title}</h1>

            <Peragrap className='text-sm'>{des}</Peragrap>
            <h1 className='text-base text-black font-bold'>{price}</h1>
        </div>
    )
}

export default Card