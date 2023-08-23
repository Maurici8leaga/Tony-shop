import Header from '@molecules/header/Header';
import Slider from '@molecules/slider/Slider';
import SliderGrid from '@molecules/slider/sliderGrid/SliderGrid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// scss
import '@atoms/landing/Landing.scss';

const Landing = () => {
  return (
    <div>
      <Header />

      <div style={{ marginTop: '100px' }}>
        <Slider />
      </div>

      <Container style={{ marginTop: '80px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Productos en ofertas
        </Typography>

        <SliderGrid />
      </Container>

      <h1 className="prueba"> SOY EL LANDING PAGE</h1>
    </div>
  );
};

export default Landing;
