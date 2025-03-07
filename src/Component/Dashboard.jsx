import React from 'react';
import Container from './Share/Conatiner';
import { dashboardCard } from './DAtaBase';
import Card from './Share/Card';
import NavBottom from './Common/NavBottom';
import Button from './Share/Button';

function Dashboard() {
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
      <button className='fixed bottom-10 right-10 bg-orange-500 w-16 h-16 p-3 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600'>
        <img src='/C.svg' alt='Action' className='w-10 h-10' />
      </button>
    </section>
  );
}

export default Dashboard;
