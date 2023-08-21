import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../sliderGrid/SliderGrid.scss';

//  cosas para el card
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

const SliderGrid = () => {
  return (
    <>
      <Splide
        tag="section"
        aria-label="prueba"
        options={{
          width: '100vw',
          height: '45vh',
          type: 'loop',
          perPage: 4,
          gap: 12,
          breakpoints: { 740: { perPage: 2 } }
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
