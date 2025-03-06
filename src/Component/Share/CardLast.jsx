import React from 'react'

import Peragrap from './Peragrap'


function CardLast({ img, Title, P, price }) {

    return (
        <div className='space-y-2  cursor-pointer'>

            < div className='relative '>
                <img src={img} className='object-cover  rounded-[10px] object-cover  ' alt="" />


                <button className='rounded-[40px] gap-1 p-1 text-[10px] absolute top-1 right-1 bg-white py-1 border-none flex font-bold text-black'><img src="/cloud.svg" alt="" /> Blizzard</button>

            </div>


            <h1 className='text-base text-black font-bold'>{Title}</h1>

            <Peragrap className='text-sm'>{P}</Peragrap>
            <h1 className='text-base text-black font-bold'>{price}</h1>
        </div>
    )
}

export default CardLast