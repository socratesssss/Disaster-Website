import React from 'react'
import Container from './Share/Conatiner'
import { dashboardCard } from './DAtaBase'

import Card from './Share/Card'
import NavBottom from './Common/NavBottom'
import Button from './Share/Button'

function Dashboard() {
  return (
   <section className='relative'>
    <NavBottom children='Sort By: Date modified'>
        <Button className='bg-[#F26922]  hover:bg-orange-600 text-white'>
        Cypher AI
        </Button>
    </NavBottom>
    <Container className='my-10 grid grid-cols-4 gap-6'>
       {
        dashboardCard.map((item,i)=>(
            <Card key={i} img={item.img} des={item.des} price={item.price} title={item.title}/>
        ))
       }

    

       
    </Container>
 {/* <button>  <img src="/C.svg" className='bg-orange-500 w-18 p-3 absolute top-[80%] right-20 rounded-full h-18' alt="" /></button> */}
   </section>
  )
}

export default Dashboard