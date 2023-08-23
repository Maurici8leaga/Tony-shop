import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// static data
import { useSplide } from '@hooks/useSplide';
// scss
import '../sliderGrid/SliderGrid.scss';

//  cosas para el card
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Favorite from '@mui/icons-material/Favorite';

const SliderGrid = () => {
  // number slide per breakpoint
  const numberOfSlides = useSplide();

  return (
    <>
      <Splide
        tag="section"
        aria-label="prueba"
        options={{
          width: '100vw',
          height: '45vh',
          type: 'loop',
          pagination: false,
          perPage: numberOfSlides,
          gap: 12
        }}
      >
        <SplideSlide>
          <Card variant="outlined" sx={{ width: 320 }}>
            <div>
              <Typography level="title-lg">Yosemite National Park</Typography>
              <Typography level="body-sm">April 24 to May 02, 2021</Typography>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
              >
                <BookmarkAdd />
              </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
              <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        </SplideSlide>

        <SplideSlide>
          <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>

              <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="grey "
                sx={{
                  position: 'absolute',
                  zIndex: 2,
                  // borderRadius: '0%',
                  borderRadius: '50%',
                  right: '1rem',
                  bottom: '70%',
                  transform: 'translateY(0%)'
                }}
              >
                <Favorite sx={{ color: '#808080', '&:hover': { color: 'red' } }} />
              </IconButton>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs" sx={{ fontWeight: 'bold', color: 'black' }}>
                Bluetooth Headset
              </Typography>

              <Typography level="body-sm">Lorem ipsum dolor .......</Typography>
              <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl' }}>
                2,900 THB
              </Typography>
            </CardContent>
            <CardOverflow>
              <Button variant="solid" color="danger" size="lg">
                Add to cart
              </Button>
            </CardOverflow>
          </Card>
        </SplideSlide>

        <SplideSlide>
          <Card variant="outlined" sx={{ width: 320 }}>
            <div>
              <Typography level="title-lg">Yosemite National Park</Typography>
              <Typography level="body-sm">April 24 to May 02, 2021</Typography>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
              >
                <BookmarkAdd />
              </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
              <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        </SplideSlide>

        <SplideSlide>
          <Card variant="outlined" sx={{ width: 320 }}>
            <div>
              <Typography level="title-lg">Yosemite National Park</Typography>
              <Typography level="body-sm">April 24 to May 02, 2021</Typography>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
              >
                <BookmarkAdd />
              </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
              <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        </SplideSlide>
      </Splide>
    </>
  );
};

export default SliderGrid;
