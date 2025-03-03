import React from 'react'
import Container from '../Share/Conatiner';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const navItem = [
        { name: ' Dashboard', path: '/' },
        { name: 'Incidents', path: '/Incidents' },
        { name: 'Locations', path: '/Locations' },
        { name: 'Activities', path: '/Activities' },
        { name: 'Documents', path: '/Documents' },
        { name: 'Cypher AI', path: '/CypherAI' },
    ];
    return (
        <section>
            <Container className={' py-4  bg-[#E4E4E7]'}>
                {/* top */}
                <div className='justify-between flex items-center w-full'>
                    <div>
                        <img src="/logo.svg" className='w-[131px] h-auto  ' alt="" />
                    </div>
                    {/* nav */}
                    <div className='flex items-center space-x-4'>
                        {navItem.map((item, index) => (
                            <div  className=''>
                                 <Link
              key={index}
              to={item.path}
              className={` font-normal text-accent text-sm p-2 hover:underline underline-offset-4 hover:text-gray-600`}
            >
              {item.name}
            </Link>
                            </div>
                        ))}

                    </div>
                    {/* UserInfo */}
                    <div className='flex gap-2 items-center '>
                        <img src="/bel.svg" className='' alt="notificatio" />
                        <img src="/dp.svg" className='' alt="" />
                        <div className='flex gap-[2px] text-accent flex-col'>
                            <p className='font-semibold '>Usman Zafar</p>
                            <p className='text-sm '>usmanzafar@gmail.com</p>

                        </div>

                    </div>

                </div>






            </Container>
        </section >
    )
}

export default Navbar