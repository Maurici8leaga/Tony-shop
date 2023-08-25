import Header from '@molecules/header/Header';
import Slider from '@molecules/slider/Slider';
import SliderGrid from '@molecules/slider/sliderGrid/SliderGrid';
import ListCategory from '@molecules/listCategory/ListCategory';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// scss
import '@atoms/landing/Landing.scss';

const Landing = () => {
  return (
    <div>
      <Header />

      <div style={{ marginTop: '100px', marginBottom: '80px' }}>
        <Slider />
      </div>

      <Container fixed className="mg-slider">
        <Typography variant="h6" sx={{ mb: 2 }}>
          Productos en ofertas
        </Typography>

        <SliderGrid />
      </Container>

      <Container fixed className="mg-slider">
        <Typography variant="h6" sx={{ mb: 2 }}>
          Lo mas vendido
        </Typography>

        <SliderGrid />
      </Container>

      <Container fixed className="mg-slider">
        <ListCategory />
      </Container>

      <h1 className="prueba"> SOY EL LANDING PAGE</h1>
    </div>
  );
};

export default Landing;
