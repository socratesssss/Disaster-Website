import React from 'react'
import SecondNav from '../Common/SecondNav'
import Container from '../Share/Conatiner'
import { useNavigate } from 'react-router-dom'
import Title from '../Share/Title';
import Peragrap from '../Share/Peragrap';
import { Locations } from '../DAtaBase';
import SearchIcon from '@mui/icons-material/Search';

function Page4() {
    const navigate = useNavigate();
    const style = Locations;
    return (
        <section>
            <SecondNav onClick2={() => navigate('/Locations')} onClick1={() => navigate('/Incidents/NewIncident/GetStarted/Page3')}>
                Finished
            </SecondNav>

            <Container className='flex justify-center items-center'>
                <div className='w-2/3 py-10 space-y-3'>

                    <Title>
                        Where’s the incident?
                    </Title>
                    <Peragrap className='text-sm w-[518px]  leading-6'>
                        Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide
                    </Peragrap>


                    <div
                        style={{
                            background: `url(${style}) no-repeat center/cover`,

                        }}
                        className='bg-[url(`${style}`)] w-full h-[490px]'>

                        <div className=' pt-3 pl-3 flex flex-col  space-y-3'>
                            <div className='relative '>
                                <div className='absolute  top-3.5 left-2 flex justify-center items-center'>
                                    <SearchIcon className='text-secondary ' />
                                    <Peragrap>
                                        Enter incident address or GPS

                                    </Peragrap>
                                </div>



                                <input type="text" className='bg-[#F4F4F5] w-[224px]  p-3 border-1 border-[#E4E4E7] rounded-[6px]' />
                            </div>
                            <div className='relative '>
                                <div className='absolute  top-3.5 left-2 flex justify-center items-center'>
                                    <SearchIcon className='text-secondary ' />
                                    <Peragrap>
                                    Pinpoint damage

                                    </Peragrap>
                                </div>



                                <input type="text" className='bg-[#F4F4F5] w-[224px]  p-3 border-1 border-[#E4E4E7] rounded-[6px]' />
                            </div>

                        </div>


                    </div>

                </div>
            </Container>


        </section>

    )
}

export default Page4