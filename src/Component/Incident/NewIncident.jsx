import React from 'react'
import Container from '../Share/Conatiner'
import Title from '../Share/Title'
import Peragrap from '../Share/Peragrap'
import NewCard from '../Share/NewCard';
import { NewCardData } from '../DAtaBase';
import Button from '../Share/Button';
import { useNavigate } from 'react-router-dom';


function NewIncident() {
  const navigate = useNavigate();
  return (
   <section className='h-screen'>
    <Container className='flex flex-col justify-center gap-8 sm:gap-[33px] items-center mt-10 sm:mt-13 md:mt-15 lg:mt-17'>

       <div className=' justify-center items-center gap-[14px]'>
       <Title className='text-3xl lg:text-[32px]'>Let’s get started</Title>
       <Peragrap className='text-base w-[330px] sm:w-[440px] md:w-[468px]'> Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</Peragrap>
       </div>
       <img src="/bottonBorder.svg" alt="bottonBorder.svg" className=''/>

       <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-[55px]'>
        {
            NewCardData.map((item,index)=>(
                <NewCard  img={item.img} key={index} title={item.title} p={item.p}/>
            ))
        }
       </div>

       <Button onClick={()=> (navigate('/Incidents/NewIncident/GetStarted'))} className='bg-[#F26922]  hover:bg-orange-600  text-xs sm:my-12 px-9 font-bold text-white'>Get started</Button>
    </Container>


   </section>
  )
}

export default NewIncident