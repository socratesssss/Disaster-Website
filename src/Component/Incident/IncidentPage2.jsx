import React, { useState } from 'react';
import SecondNav from '../Common/SecondNav';
import { useNavigate } from 'react-router-dom';
import Title from '../Share/Title';
import Container from '../Share/Conatiner';
import Button from '../Share/Button';



import Framesvg from '../../../public/Framesvg';
import Framesvg2 from '../../../public/Framesvg2';
import Framesvg3 from '../../../public/Framesvg3';
import Framesvg4 from '../../../public/Framesvg4';
import Framesvg5 from '../../../public/Framesvg5';
import Framesvg6 from '../../../public/Framesvg6';
import Framesvg7 from '../../../public/Framesvg7';
import Framesvg8 from '../../../public/Framesvg8';
import Framesvg9 from '../../../public/Framesvg9';
import Framesvg10 from '../../../public/Framesvg10';
import Framesvg11 from '../../../public/Framesvg11';
import Framesvg12 from '../../../public/Framesvg12';
import Framesvg13 from '../../../public/Framesvg13';
import Framesvg14 from '../../../public/Framesvg14';
import Framesvg15 from '../../../public/Framesvg15';
import Framesvg16 from '../../../public/Framesvg16';
import Framesvg17 from '../../../public/Framesvg17';
import Framesvg18 from '../../../public/Framesvg18';

function IncidentPage2() {
  const describesTheIncident = [
    { svg: Framesvg, title: 'Avalanche' },
    { svg: Framesvg2, title: 'Biological' },
    { svg: Framesvg3, title: 'Blizzard' },
    { svg: Framesvg4, title: 'Cold/Freezing' },
    { svg: Framesvg5, title: 'Drought' },
    { svg: Framesvg6, title: 'Earthquake' },
    { svg: Framesvg7, title: 'Flooding' },
    { svg: Framesvg8, title: 'Heat Wave' },
    { svg: Framesvg9, title: 'Hail' },
    { svg: Framesvg10, title: 'Lightning' },
    { svg: Framesvg11, title: 'Man Made' },
    { svg: Framesvg12, title: 'Mudslide' },
    { svg: Framesvg13, title: 'Severe Storm' },
    { svg: Framesvg14, title: 'Strong Wind' },
    { svg: Framesvg15, title: 'Tornado' },
    { svg: Framesvg16, title: 'Tsunami' },
    { svg: Framesvg17, title: 'Volcanic Eruption' },
    { svg: Framesvg18, title: 'Wildfire' },
  ];

  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

 

  const toggleSelection = (title) => {
    setSelected((prevSelected) =>
      prevSelected.includes(title)
        ? prevSelected.filter((item) => item !== title)
        : [...prevSelected, title]
    );
  };

  return (
    <section>
      <SecondNav onClick2={()=> navigate("/Incidents/NewIncident/GetStarted/Page3")} onClick1={() => navigate("/Incident/NewIncident")} >Next step</SecondNav>
      <Container className="flex flex-col justify-center items-center py-16">
        <div className="space-y-[22px]">
          <Title className="text-2xl text-start">Which of these best describes the incident?</Title>
          <div className="grid grid-cols-4 gap-3">
            {describesTheIncident.map((item, index) => {
              const isSelected = selected.includes(item.title);
              return (
                <Button 
                  key={index} 
                  className={`w-[180px] h-[69px] flex items-center justify-center gap-3 
                    bg-${isSelected ? '[#F26922] hover:bg-[#F26922]' : '[#F4F4F5]'}
                    text-${isSelected ? 'white' : 'secondary'}
                    `}
                  onClick={() => toggleSelection(item.title)}
                >
                  <item.svg className="group-hover:text-white" />
                  {item.title}
                </Button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default IncidentPage2;
