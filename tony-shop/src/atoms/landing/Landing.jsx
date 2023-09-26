// component UI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Grid from '@mui/material/Grid';
// component jssx
import Slider from '@molecules/slider/Slider';
import SliderGrid from '@molecules/slider/sliderGrid/SliderGrid';
import SliderBrand from '@molecules/slider/sliderBrand/SliderBrand';
import ListCategory from '@molecules/listCategory/ListCategory';
// static data
import { listCategory } from '@services/utils/static.data';
// scss
import '@atoms/landing/Landing.scss';

const Landing = () => {
  return (
    <div>
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

          <Box sx={{ flexGrow: 1 }}>
            <Grid container component="ul" spacing={2} sx={{ listStyleType: 'none', flexGrow: 1 }}>
              {listCategory.map((item) => (
                <ListCategory
                  key={item.id}
                  image={item.icon}
                  name={item.name}
                  href={`/list-of-products/${item.name}`}
                  width={100}
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
