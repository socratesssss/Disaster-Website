import React from 'react'
import Title from './Title'
import Peragrap from './Peragrap'

function NewCard({img,title,p}) {
    return (
        <div className='md:w-[214px] cursor-pointer p-2 hover:bg-gray-300  border-[#E4E4E7] border-1 space-y-4 py-3 rounded-[10px] bg-[#F4F4F5]'>
<div className='lg:mt-6 mt-3 lg:ml-4 ml-2'>
<img src={img} className='lg:size-[54px] size-8 ' alt="Frame (2).svg" />
</div>
            <div className='flex flex-col justify-center  items-center lg:mt-14  gap-3 '>    
                    <Title className='md:w-[190px] w-[150px] text-[20px] leading-8' > {title}</Title>
                <Peragrap className='md:w-[190px] w-[150px] text-sm'>{p}.</Peragrap></div>
        </div>
    )
}

export default NewCard