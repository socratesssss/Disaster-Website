import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom'; 
import Container from '../Share/Conatiner';
import Title from '../Share/Title';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Share/Button';
import Peragrap from '../Share/Peragrap';

function SecondNav({ children,onClick1,onClick2 }) {
    // const location = useLocation(); 
    // const pathSegments = location.pathname.split("/").filter(Boolean);
    const navigate = useNavigate()

    return ( 
        <div className='pt-8 pb-4 bg-[#F1F1F3]'>
            <Container className="flex justify-between items-center">
                <div className='flex justify-center items-center gap-[13px]'>
                    {/* ✅ Show welcome message when on home page */}
                    <button onClick={()=>( navigate("/"))} className='p-2 border-[#E4E4E7] border-2 bg-white rounded-full'>
                        <CloseIcon/>

                    </button>
                  
                       
                  
                    
                  
                        <div>
                            <Peragrap>Home - Incidents - New Incident</Peragrap>
                        <Title>New Incident</Title>
                        </div>
                     
                    
                   
                </div>
                <div>
                    <img src="/Load.svg" className='max-w-[567px]' alt="loading" />
                </div>

                <div className='flex gap-[14px]'>
                   
                   <Button onClick={onClick1} className='px-12 font-bold text-secondary '>Back</Button>
                   <Button onClick={onClick2} className='px-12 font-bold bg-[#F26922] text-white '>{children}</Button>

                  
                   
                </div>
            </Container>
        </div>
    );
}

export default SecondNav;
