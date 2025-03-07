import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './Share/Conatiner';
import { dashboardCard } from './DAtaBase';
import Card from './Share/Card';
import NavBottom from './Common/NavBottom';
import AddIcon from '@mui/icons-material/Add';
import Button from './Share/Button';


function Incidents() {
  const navigate = useNavigate();

  return (
    <section>
      {/* ✅ Pass onClick properly */}
      <NavBottom>
        <Button 
          onClick={() => navigate("/Incidents/NewIncident")} 
          className="bg-[#F26922] hover:bg-orange-600 text-white"
        >
          <AddIcon sx={{ fontSize: "16px" }} /> New Incident
        </Button>
      </NavBottom>

      <Container className='my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {dashboardCard.slice().reverse().map((item, i) => (
          <Card key={i} img={item.img} des={item.des} price={item.price} title={item.title} />
        ))}
      </Container>
    </section>
  );
}

export default Incidents;
