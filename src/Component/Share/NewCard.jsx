import React from 'react'
import Title from './Title'
import Peragrap from './Peragrap'

function NewCard({img,title,p}) {
    return (
        <div className='w-[214px] cursor-pointer h-[241px] hover:bg-gray-300  border-[#E4E4E7] border-1 space-y-4 rounded-[10px] bg-[#F4F4F5]'>
<div className='mt-6 ml-4'>
<img src={img} className='size-[54px] ' alt="Frame (2).svg" />
</div>
            <div className='flex flex-col justify-center  items-center mt-14  gap-3 '>        <Title className='w-[190px] text-[20px text-center]'> {title}</Title>
                <Peragrap className='w-[190px] text-sm'>{p}.</Peragrap></div>
        </div>
    )
}

export default NewCard