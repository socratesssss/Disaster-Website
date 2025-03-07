import React from 'react';
import { navItem,userData } from '../DAtaBase';// Fixed import
import { Link, useLocation } from 'react-router-dom';
import UserInfo from './Userinfo';
import CloseIcon from '@mui/icons-material/Close';

function MobileMenu({toggleMenu}) {
    const location = useLocation(); // Fixed missing location

    return (
        <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-auto'>
            <div>
                <button onClick={toggleMenu} className='flex justify-end absolute top-3 right-3'>
                    <CloseIcon sx={{fontSize:40,}}/>
                </button>
                {/* User Info */}
                {userData.map((item, index) => (
                    <UserInfo key={index} email={item.email} name={item.name} dp={item.dp} />
                ))}

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 pt-3 items-center">
                    {navItem.map((item, index) => (
                        <div key={index}>
                            <Link
                                to={item.path}
                                className={`font-normal transition-all duration-300 text-accent text-sm p-2 underline-offset-4 ${
                                    location.pathname === item.path ? '!text-[#09090B] !font-bold' : 'hover:text-gray-600'
                                }`}
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
