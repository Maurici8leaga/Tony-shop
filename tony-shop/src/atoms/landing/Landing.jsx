import '@atoms/landing/Landing.scss';
// import Header from '../../molecules/header/Header';
import Header from '@molecules/header/Header';
import Slider from '@molecules/slider/Slider';
import SliderGrid from '@molecules/slider/sliderGrid/SliderGrid';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Landing = () => {
  return (
    <div>
      <Header />

      <div style={{ marginTop: '100px' }}>
        <Slider />
      </div>

      {/* <Container style={{ marginTop: '200px' }}>
        <Typography variant="h6">Ofertas</Typography>

        <SliderGrid />
      </Container> */}

      <div style={{ marginTop: '200px', marginLeft: '40px', marginRight: '40px' }}>
        <Typography variant="h6">Ofertas</Typography>

        <SliderGrid />
      </div>

      <h1 className="prueba"> SOY EL LANDING PAGE</h1>
    </div>
  );
};

export default Landing;
