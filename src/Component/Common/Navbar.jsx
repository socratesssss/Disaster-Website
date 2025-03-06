import React from 'react';
import Container from '../Share/Conatiner';
import { Link, useLocation } from 'react-router-dom';
import { navItem } from '../DAtaBase';
import { userData } from '../DAtaBase';
import UserInfo from './Userinfo';
import Title from '../Share/Title';
import NavBottom from './NavBottom';

function Navbar() {
    const location = useLocation();
   
    const Lenght = navItem.length
   

    return (
        <section className="bg-[#F1F1F3] pb-4">
            <div className="border-accent  border-b-3">
                <Container className="">
                    {/* Top Section */}
                    <div className="md:flex hidden justify-between  items-center w-full">
                        {/* Logo */}
                        <div>
                            <img src="/logo.svg" className="w-[131px] h-auto" alt="Logo" />
                        </div>
                       
                        {/* Navigation Links */}
                        <div className="flex items-center relative space-x-4">
                            {navItem.map((item, index) => (
                                <div className='py-8 ' key={index}>
                                    <Link
                                        to={item.path}
                                        className={`font-normal transition-all duration-300  text-accent text-sm p-2 mb-20 underline-offset-4 ${
                                            location.pathname === item.path ? '!text-[#09090B] !font-bold' : ' hover:text-gray-600'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                {
                                    location.pathname === item.path &&     <div className='w-18 h-[3px] absolute bottom-[-3px] rounded-[10px] bg-black mx-1'>

                                    </div>
                                }
                                </div>
                            ))}
                        </div>

                        {/* User Info */}
                        {
                            userData.map((item,index)=>(
                                <UserInfo key={index} email={item.email} name={item.name} dp={item.dp}/>
                            ))
                        }
                    </div>
                    

                   
                </Container>
            </div>
          
        </section>
    );
}

export default Navbar;