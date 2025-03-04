import React from 'react'
import Title from './Title'
import Peragrap from './Peragrap'
import Button from './Button'

function Card({ img, title, des, price }) {

    return (
        <div className='space-y-2 max-w-[306px] max-h-[337px] cursor-pointer'>

            < div className='relative '>
                <img src={img} className='object-cover rounded-[10px] w-[306px] h-[243px]  ' alt="" />


                <Button className='rounded-[40px] gap-2 absolute top-3 right-3 bg-white border-none flex font-bold text-black'><img src="/cloud.svg" alt="" /> Blizzard</Button>

            </div>


            <Title className='text-base'>{title}</Title>

            <Peragrap className='text-sm'>{des}</Peragrap>
            <Title className='text-base'>{price}</Title>
        </div>
    )
}

export default Card