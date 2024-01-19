// component UI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Grid from '@mui/material/Grid';
// component jsx
import Spinner from '@molecules/loader/Spinner';
import Slider from '@molecules/slider/Slider';
import SliderGrid from '@molecules/slider/sliderGrid/SliderGrid';
import SliderBrand from '@molecules/slider/sliderBrand/SliderBrand';
import ListCategory from '@molecules/listCategory/ListCategory';
// static data
import { listCategory } from '@services/utils/static.data';
// scss
import '@atoms/landing/Landing.scss';

const Landing = () => {
  const loading = false; // temporal

  // falta incorporar el loading para que muestre el spinner cuando carga
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <div style={{ marginTop: '100px', marginBottom: '80px' }}>
        <Slider />
      </div>

      <Container fixed>
        <section id="listSale" className="mg-slider">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Productos en ofertas
          </Typography>

          {/* falta agregarlo prop de la data del DB a este component */}
          <SliderGrid />
        </section>

        <section id="listPopular" className="mg-slider">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Lo mas vendido
          </Typography>

          {/* falta agregarlo prop de la data del DB a este component */}
          <SliderGrid />
        </section>

        <section id="listCatg" className="mg-listCatg">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Categorias mas buscadas
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container component="ul" spacing={2} sx={{ listStyleType: 'none', flexGrow: 1 }}>
              {listCategory.map((item) => (
                <ListCategory
                  key={item.id}
                  image={item.icon}
                  name={item.name}
                  href={`/list-of-products/${item.name}`}
                  width={100}
                  objectFit={'contain'}
                />
              ))}
            </Grid>
          </Box>
        </section>

        <section className="mg-listCatg">
          <SliderBrand />
        </section>
      </Container>
    </div>
  );
};

export default Landing;
