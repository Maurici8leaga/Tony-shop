import React, { useState } from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/joy/Avatar';

const ImageGallery = (prop) => {
  const { images } = prop;

  const [ImgProduct, setImgProduct] = useState(images[0].img); // aqui habria que cambiar por el primer nombre que tenga el objeto de la db

  const showImgProduct = (img) => {
    setImgProduct(img);
  };

  return (
    <AspectRatio objectFit="contain" minHeight={500}>
      <img srcSet={ImgProduct} alt="image of product" />
      <Stack
        direction={'row'}
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{ marginTop: '.5rem', position: 'absolute', bottom: '5px', left: '50%', right: '50%' }}
      >
        {images.map((e) => (
          <Avatar
            key={e.id} // cambiar por unn verdadero ID
            alt={`img-product-${e.id}`} // OJO cambiar por el nombre del producto al ALT
            variant="outlined"
            src={e.img}
            size="lg"
            sx={{
              cursor: 'pointer',
              border: `${ImgProduct === e.img ? '1px solid var(--red)' : '1px solid #bdbdbd'}`,
              '&:hover': { border: '1px solid var(--red)' }
            }}
            onClick={() => showImgProduct(e.img)}
          />
        ))}
      </Stack>
    </AspectRatio>
  );
};

export default ImageGallery;
