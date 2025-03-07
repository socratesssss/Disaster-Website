import React, { useState } from 'react';
import Container from './Share/Conatiner';
import { dashboardCard } from './DAtaBase';
import Card from './Share/Card';
import NavBottom from './Common/NavBottom';
import Button from './Share/Button';
import CloseIcon from '@mui/icons-material/Close';
import Peragrap from './Share/Peragrap';

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => setIsOpen((prev) => !prev);

  return (
    <section className='relative'>
      <NavBottom >
        <Button className='bg-[#F26922] hover:bg-orange-600 text-white'>
          Cypher AI
        </Button>
      </NavBottom>
      <Container className='my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {dashboardCard.map((item, i) => (
          <Card key={i} img={item.img} des={item.des} price={item.price} title={item.title} />
        ))}
      </Container>
      {/* Floating Action Button */}
      {isOpen ? <button onClick={toggler} className='fixed bottom-10 z-50 right-10 bg-gray-200 sm:w-16 w-10 h-10 sm:h-16 p-2 sm:p-3 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-400'>
        <CloseIcon className='' />
      </button>
        :
        <button onClick={toggler} className='fixed bottom-10 right-10 bg-orange-500 sm:w-16 w-10 h-10 sm:h-16 p-2 sm:p-3 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600'>
          <img src='/C.svg' alt='Action' className='sm:w-10 w-6 h-6 sm:h-10' />
        </button>

      }

      {
        isOpen && <div className='w-[331px] h-[475px] bg-[#F4F4F5] fixed  bottom-24 sm:bottom-30 rounded-[12px] overflow-hidden right-3  sm:right-14'>

          <div className='bg-[#F26922]'>
            <h1 className='text-white font-bold text-lg py-4 px-3'>Chat with Cypher</h1>
          </div>

          <div className=' px-3 h-[273px] py-3 '>
            <Peragrap className='text-xs max-w-[213px] text-white  py-4  absolute right-3 mt-1 px-3 rounded-[7px] bg-[#3F3F46]'>
              Lorem ipsum dolar sit general sac mascho werho
            </Peragrap>
            <Peragrap className='text-xs max-w-[213px] text-secondary  absolute left-3 mt-20  py-4 px-3 rounded-[7px] bg-[#F4F4F5] border-1 border-[#E4E4E7]'>
              Lorem ipsum dolar sit general sac mascho werho
            </Peragrap>
            <Peragrap className='text-xs max-w-[213px] text-secondary  absolute left-3 mt-40  py-4 px-3 rounded-[7px] bg-[#F4F4F5] border-1 border-[#E4E4E7]'>
              Lorem ipsum dolar sit general sac mascho werho
            </Peragrap>
            <Peragrap className='text-xs max-w-[213px] text-white  py-4  absolute right-3 mt-60 px-3 rounded-[7px] bg-[#3F3F46]'>
              Lorem ipsum dolar sit general sac mascho werho
            </Peragrap>

          </div>
          <div className=' w-full mt-13  px-3'>
            <input type="text" className='border-1 w-full rounded-[6px] px-3 py-2 border-[#E5E7EB]' placeholder='Enter your question...' />

            <div className='flex justify-between items-center py-3 mb-2' >
              <div className='flex gap-2'>
                <img src="message1.png" className='size-6' alt="" />
                <img src="message2.png" className='size-6' alt="" />
                <img src="message3.png" className='size-6' alt="" />
              </div>
              <button className='bg-[#F26922] px-6 rounded-[15.5px] py-2 text-xs text-white'>Send</button>

            </div>

            <div>

            </div>
          </div>

        </div>
      }
    </section>
  );
}

export default Dashboard;
