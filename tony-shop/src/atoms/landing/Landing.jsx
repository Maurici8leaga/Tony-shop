import Header from '@molecules/header/Header';
import Slider from '@molecules/slider/Slider';
import SliderGrid from '@molecules/slider/sliderGrid/SliderGrid';
import SliderBrand from '@molecules/slider/sliderBrand/SliderBrand';
import ListCategory from '@molecules/listCategory/ListCategory';
import Footer from '@molecules/footer/Footer';
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

      <Container fixed>
        <section className="mg-slider">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Productos en ofertas
          </Typography>

          <SliderGrid />
        </section>

        <section className="mg-slider">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Lo mas vendido
          </Typography>

          <SliderGrid />
        </section>

        <section className="mg-listCatg">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Categorias mas buscadas
          </Typography>
          <ListCategory />
        </section>

        <section className="mg-listCatg">
          <SliderBrand />
        </section>

        <div className="prueba">PROBANDO PROBANDO</div>
      </Container>

      <Footer />
    </div>
  );
};

export default Landing;
