import React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const ButtonSlider = (prop) => {
  const { text, id, href } = prop;

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 40,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15
      },
      '& .MuiImageMarked-root': {
        opacity: 0
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor'
      }
    }
  }));

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }));

  return (
    <>
      <ImageButton
        focusRipple
        key={`btn-slider-${id}`}
        style={{
          width: '20px',
          marginTop: '1rem'
        }}
      >
        <Image>
          <Typography
            component="a"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              textDecoration: 'none'
            }}
            href={href}
          >
            {text}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
    </>
  );
};

export default ButtonSlider;
