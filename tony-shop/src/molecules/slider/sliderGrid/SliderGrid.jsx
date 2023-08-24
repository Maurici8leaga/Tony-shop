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

import Stack from '@mui/material/Stack';

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
          height: '60vh',
          type: 'loop',
          pagination: false,
          perPage: numberOfSlides,
          gap: 12
        }}
      >
        <SplideSlide>
          <Card
            sx={{
              width: 320,
              boxShadow: 'lg',
              borderRadius: 'none',
              gridColumn: 'span 2',
              flexDirection: 'col',
              flexWrap: 'wrap',
              overflow: 'hidden',
              gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
              transition: 'transform 0.3s, border 0.3s',
              '&:hover': {
                transform: 'translateY(-2px)'
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/3" sx={{ minWidth: 200, minHeight: 200 }}>
                <img
                  src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                  loading="lazy"
                  alt=""
                  style={{ opacity: 1 }}
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
                  bottom: '75%',
                  transform: 'translateY(0%)'
                }}
              >
                <Favorite sx={{ color: '#808080', '&:hover': { color: 'red' } }} />
              </IconButton>
            </CardOverflow>
            <CardContent sx={{ marginTop: '10%', marginBottom: '5%' }}>
              <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black', flexGrow: 1 }}>
                  {/* insertar logica para nombres largos */}
                  Bluetooth Headset
                </Typography>

                <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black' }}>
                  $ 2,900
                </Typography>
              </Stack>

              <Typography level="body-xs">
                {/* insertar logica para resumir el texto y supere cierta cantidad de caracteres */}
                Lorem ipsum dolor .......
              </Typography>
            </CardContent>

            <Button variant="outlined" size="lg">
              Agregar al carrito
            </Button>
          </Card>
        </SplideSlide>

        <SplideSlide>
          <Card
            sx={{
              width: 320,
              boxShadow: 'lg',
              borderRadius: 'none',
              gridColumn: 'span 2',
              flexDirection: 'col',
              flexWrap: 'wrap',
              overflow: 'hidden',
              gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
              transition: 'transform 0.3s, border 0.3s',
              '&:hover': {
                transform: 'translateY(-2px)'
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/3" sx={{ minWidth: 200, minHeight: 200 }}>
                <img
                  src="https://empresasnoffra.com/87000-large_default/pastilla-freno-chery-orinoco-todos-delantera.jpg"
                  loading="lazy"
                  alt=""
                  style={{ opacity: 1 }}
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
                  bottom: '75%',
                  transform: 'translateY(0%)'
                }}
              >
                <Favorite sx={{ color: '#808080', '&:hover': { color: 'red' } }} />
              </IconButton>
            </CardOverflow>
            <CardContent sx={{ marginTop: '10%', marginBottom: '5%' }}>
              <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black', flexGrow: 1 }}>
                  {/* insertar logica para nombres largos */}
                  Bluetooth Headset
                </Typography>

                <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black' }}>
                  $ 2,900
                </Typography>
              </Stack>

              <Typography level="body-xs">
                {/* insertar logica para resumir el texto y supere cierta cantidad de caracteres */}
                Lorem ipsum dolor .......
              </Typography>
            </CardContent>

            <Button variant="outlined" size="lg">
              Agregar al carrito
            </Button>
          </Card>
        </SplideSlide>

        <SplideSlide>
          <Card
            sx={{
              width: 320,
              boxShadow: 'lg',
              borderRadius: 'none',
              gridColumn: 'span 2',
              flexDirection: 'col',
              flexWrap: 'wrap',
              overflow: 'hidden',
              gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
              transition: 'transform 0.3s, border 0.3s',
              '&:hover': {
                transform: 'translateY(-2px)'
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/3" sx={{ minWidth: 200, minHeight: 200 }}>
                <img
                  src="https://www.eluniverso.com/resizer/EmU7BmQQfCE9-HX7HCdtBgqeA9w=/740x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6OMBHHVNTVBWFO7DVPEXZZY4RA.jpg"
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
                  bottom: '75%',
                  transform: 'translateY(0%)'
                }}
              >
                <Favorite sx={{ color: '#808080', '&:hover': { color: 'red' } }} />
              </IconButton>
            </CardOverflow>
            <CardContent sx={{ marginTop: '10%', marginBottom: '5%' }}>
              <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black', flexGrow: 1 }}>
                  {/* insertar logica para nombres largos */}
                  Bluetooth Headset
                </Typography>

                <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black' }}>
                  $ 2,900
                </Typography>
              </Stack>

              <Typography level="body-xs">
                {/* insertar logica para resumir el texto y supere cierta cantidad de caracteres */}
                Lorem ipsum dolor .......
              </Typography>
            </CardContent>

            <Button variant="outlined" size="lg">
              Agregar al carrito
            </Button>
          </Card>
        </SplideSlide>

        <SplideSlide>
          <Card
            sx={{
              width: 320,
              boxShadow: 'lg',
              borderRadius: 'none',
              gridColumn: 'span 2',
              flexDirection: 'col',
              flexWrap: 'wrap',
              overflow: 'hidden',
              gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
              transition: 'transform 0.3s, border 0.3s',
              '&:hover': {
                transform: 'translateY(-2px)'
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/3" sx={{ minWidth: 200, minHeight: 200 }}>
                <img
                  src="https://www.autonocion.com/wp-content/uploads/2018/06/Aceite-motor-2.jpg"
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
                  bottom: '75%',
                  transform: 'translateY(0%)'
                }}
              >
                <Favorite sx={{ color: '#808080', '&:hover': { color: 'red' } }} />
              </IconButton>
            </CardOverflow>
            <CardContent sx={{ marginTop: '10%', marginBottom: '5%' }}>
              <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black', flexGrow: 1 }}>
                  {/* insertar logica para nombres largos */}
                  Bluetooth Headset
                </Typography>

                <Typography level="body-sm" variant="subtitle" sx={{ fontWeight: 'bold', color: 'black' }}>
                  $ 2,900
                </Typography>
              </Stack>

              <Typography level="body-xs">
                {/* insertar logica para resumir el texto y supere cierta cantidad de caracteres */}
                Lorem ipsum dolor .......
              </Typography>
            </CardContent>

            <Button variant="outlined" size="lg">
              Agregar al carrito
            </Button>
          </Card>
        </SplideSlide>
      </Splide>
    </>
  );
};

export default SliderGrid;
