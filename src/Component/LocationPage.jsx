import React from 'react'
import Container from './Share/Conatiner'
import Peragrap from './Share/Peragrap'
import { locationCard } from './DAtaBase'
import CardLast from './Share/CardLast'
import { Activities } from './DAtaBase'
import { Documents } from './DAtaBase'

function LocationPage() {
  return (
    <section>

      <Container className='md:grid flex flex-col-reverse gap-10 py-10  pb-40  grid-reverce md:grid-cols-12 '>
        {/* right section */}
        <div className='col-span-7'>

          {/* Tulare County,  Los Angles, CA 23415 */}

          <div className='border-b-2 pb-10 border-[#E4E4E7]'>
            <div className='flex items-center gap-3'>
              <img src="Vector(1).svg" className='bg-[#F4F4F5] p-2 rounded-full size-[37px]' alt="Vector (1).svg" />
              <div className='space-y-2'>
                <Peragrap className='text-sm'>Location</Peragrap>
                <Peragrap className='text-black font-bold text-xl'>Tulare County,  Los Angles, CA 23415</Peragrap>
              </div>
            </div>

          </div>

          {/* Description */}
          <div className='py-10 border-b-2 border-[#E4E4E7]'>
            <Peragrap className='font-bold text-black text-sm'>
              Description
            </Peragrap>
            <Peragrap className='text-base'>
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho
            </Peragrap>
          </div>


          {/* card section */}
          <div className='py-10 gap-3 border-b-2 border-[#E4E4E7]'>
            <div className='flex justify-between pb-4'>
              <Peragrap className='text-sm font-bold  text-black'>
                Locations
              </Peragrap>
              <a href="" className='underline text-secondary  underline-offset-4'> See all</a>
            </div>


            <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
              {locationCard.map((item, i) => (
                <CardLast key={i} img={item.img} P={item.P} price={item.price} Title={item.Title} />
              ))}

            </div>
          </div>
          {/* Activities */}

          <div className='py-10 border-b-2 border-[#E4E4E7]'>
            {/* Card */}
            <div className='flex  justify-between pb-4'>
              <Peragrap className='text-sm font-bold  text-black'>
                Locations
              </Peragrap>
              <a href="" className='underline text-secondary  underline-offset-4'> See all</a>
            </div>
            <div className='space-y-[15px]'>
              {Activities.map((item, i) => (
                <div key={i} className='flex bg-[#F4F4F5] p-3 rounded-[10px] gap-[10]'>
                  <img src={item.img} className='w-[78px] h-[78px] rounded-[10px] object-cover' alt="" />
                  <div className='space-y-[5px] px-4'>
                    <h1 className='text-base text-black font-bold'>{item.title}</h1>

                    <Peragrap className='text-sm'>{item.des}</Peragrap>
                    <h1 className='text-base text-black font-bold'>{item.price}</h1>
                  </div>

                </div>
              ))

              }
            </div>


          </div>

          {/*  */}
          <div className='py-10 border-b-2 border-[#E4E4E7]'>
            {/* Card */}
            <div className='flex  justify-between pb-4'>
              <Peragrap className='text-sm font-bold  text-black'>
                Locations
              </Peragrap>
              <a href="" className='underline text-secondary  underline-offset-4'> See all</a>
            </div>
            <div className='space-y-[15px]'>
              {Documents.map((item, i) => (
                <div key={i} className='flex bg-[#F4F4F5] p-3 rounded-[10px] gap-[10]'>
                  <img src={item.img} className='w-[78px] h-[78px] rounded-[10px] object-cover' alt="" />
                  <div className='space-y-[5px] px-4'>
                    <h1 className='text-base text-black font-bold'>{item.title}</h1>

                    <Peragrap className='text-sm'>{item.des}</Peragrap>
                    <h1 className='text-base text-black font-bold'>{item.price}</h1>
                  </div>

                </div>
              ))

              }
            </div>


          </div>
        </div>

        {/* left section */}
        <div className='col-span-5'>
          <Peragrap className='text-sm'>
            Incident Map
          </Peragrap>

          <img src="LocationImg.svg" className='w-full  sm:h-[503px]' alt="LocationImg.svg" />

          <Peragrap className='text-sm'>
            Start 19.1232, -118.233     End 19.3245, -119.2323
          </Peragrap>
        </div>





      </Container>
    </section>
  )
}

export default LocationPage