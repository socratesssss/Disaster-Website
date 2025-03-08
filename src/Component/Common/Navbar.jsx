import React, { useState } from 'react';
import Container from '../Share/Conatiner';
import { Link, useLocation } from 'react-router-dom';
import { navItem } from '../DAtaBase';
import { userData } from '../DAtaBase';
import UserInfo from './Userinfo';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const location = useLocation();

    const Lenght = navItem.length


    return (
        <section className="bg-[#F1F1F3] pb-4">
            <div className="border-accent  border-b-3">
                <Container className="flex justify-between">
                    {/* Top Section */}
                    <div className="flex justify-between  items-center w-full">
                        {/* Logo */}
                        <div>
                            <img src="/logo.svg" className="w-[131px] h-auto" alt="Logo" />
                        </div>

                        {/* Navigation Links */}
                        <div className='lg:flex hidden'>
                            <div className="flex items-center relative space-x-4">
                                {navItem.map((item, index) => (
                                    <div className='py-8 ' key={index}>
                                        <Link
                                            to={item.path}
                                            className={`font-normal transition-all duration-300  text-accent text-sm p-2 mb-20 underline-offset-4 ${location.pathname === item.path ? '!text-[#09090B] !font-bold' : ' hover:text-gray-600'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                        {
                                            location.pathname === item.path && <div className='w-18 h-[3px] absolute bottom-[-3px] rounded-[10px] bg-black mx-1'>

                                            </div>
                                        }
                                    </div>
                                ))}
                                {/* User Info */}

                            </div>
                        


                        </div>
                      <div className='lg:flex hidden'>
                      {
                                userData.map((item, index) => (
                                    <UserInfo key={index} email={item.email} name={item.name} dp={item.dp} />
                                ))
                            }
                      </div>
                    </div>
                    <div onClick={toggleMenu} className='flex lg:hidden items-center py-3 gap-2'>

                        <button className=' items-center'>
                            <img src="dp.svg" className='w-20' alt="" />

                        </button>
                        <button>
                            <MenuIcon sx={{ fontSize: 40, }} />
                        </button>
                    </div>



                </Container>
            </div>
            {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}

        </section>
    );
}

export default Navbar;