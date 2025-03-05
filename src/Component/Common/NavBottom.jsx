import React from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import Container from '../Share/Conatiner';
import Title from '../Share/Title';
import Button from '../Share/Button';
import Peragrap from '../Share/Peragrap';

function NavBottom({ children }) {
    const location = useLocation(); 
    const pathSegments = location.pathname.split("/").filter(Boolean);

    return ( 
        <div className='pt-8 pb-4 bg-[#F1F1F3]'>
            <Container className="flex justify-between items-center">
                <div>
                    {/* ✅ Show welcome message when on home page */}
                    {location.pathname === "/" ? (
                       <Peragrap>Welcome back</Peragrap>
                    ) : (
                        <nav className="flex items-center space-x-1 text-xs font-normal cursor-pointer text-[#71717A]">
                            {pathSegments.map((segment, index) => {
                                const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
                                const isLast = index === pathSegments.length - 1;

                                return (
                                    <span key={index} className="flex items-center space-x-1">
                                        <span>/</span>
                                        {isLast ? (
                                            <span className="font-normal">{segment}</span>
                                        ) : (
                                            <Link to={path} className="text-blue-500 hover:underline">
                                                {segment}
                                            </Link>
                                        )}
                                    </span>
                                );
                            })}
                        </nav>
                    )}
                    {
                        location.pathname ==='/'?(
                            <Title>Dashboard</Title>
                        ):(
                            <Title>{pathSegments}</Title>
                        )
                    }
                   
                </div>

                <div className='flex gap-[14px]'>
                    <Button className='flex gap-1 max-h-[42px]'>
                        <img src="./Frame.svg" className='w-[18px]' alt="Search Icon" /> Search Incident
                    </Button>
                    < Button>Sort By: Date modified</Button> 

                    {/* ✅ This is where the "New Incident" button will be injected */}
                    {children}
                </div>
            </Container>
        </div>
    );
}

export default NavBottom;
