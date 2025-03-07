import React from 'react'
import Container from '../Share/Conatiner'
import SecondNav from '../Common/SecondNav'
import Title from '../Share/Title'
import Peragrap from '../Share/Peragrap'
import { useNavigate } from 'react-router-dom'

function Page3() {
    const navigate = useNavigate();
  return (
    <section>
         <SecondNav onClick2={()=>navigate('/Incidents/NewIncident/GetStarted/Page3/Page4')} onClick1={()=>navigate('/Incidents/NewIncident/GetStarted')}>Next step</SecondNav>
        <Container className='justify-center items-center flex '>
        <div className='md:w-2/3 w-5/6 my-17'>


        <div className='space-y-5'>
                <Title>
                Let’s give the incident a title?

                </Title>
                <Peragrap className='text-sm'>
                Make a title that will easily identify the incidents
                </Peragrap>

                <input className='bg-[#F4F4F5] px-3 py-4 rounded-[6px]  w-full' placeholder='Add title here'  type="text" />

            </div>
        <div className='space-y-5 mt-10'>
                <Title>
                Describe what happened during the incident?

                </Title>
                <Peragrap className='text-sm'>
                Share some information about the incident. The when, where, how. 
                </Peragrap>

                <input className='bg-[#F4F4F5] px-3 py-4 rounded-[6px] h-[127px]  w-full' placeholder='Type here'  type="text" />

            </div>
            

        </div>
           


        </Container>


    </section>
  )
}

export default Page3