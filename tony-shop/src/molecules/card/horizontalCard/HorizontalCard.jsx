import * as React from 'react';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Input from '@mui/joy/Input';
import { mainColors } from '@services/utils/static.data';

const HorizontalCard = (prop) => {
  const { darkBlue } = mainColors;
  const { inputRef, imgProduct, nameProduct, priceProduct } = prop;

  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      color="primary"
      sx={{
        width: 300,
        '&:hover': { boxShadow: 'md', borderColor: `${darkBlue}` },
        my: 2
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img src={imgProduct} alt={`img_${nameProduct}`} />
      </AspectRatio>

      <CardContent>
        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
          <Typography level="title-lg" id="card-description" sx={{ flexGrow: 1 }}>
            {/* colocar logica para recortar el nombre y no se extienda tanto */}
            {nameProduct}
          </Typography>

          <IconButton color="danger" size="sm" variant="plain">
            <DeleteIcon />
          </IconButton>
        </Stack>

        <Stack spacing={1.5} sx={{ width: 120, py: 1, alignItems: 'center' }} direction={'row'}>
          <Typography level="title-lg" id="card-price-description" sx={{ flexGrow: 1 }}>
            {`$${priceProduct}`}
          </Typography>

          <Input
            type="number"
            // el defaultValue debe ir con lo que el cliente coloque por primera vez
            defaultValue={1}
            // OJO el max debe ir con respecto a lo que se tenga en la base de datos
            slotProps={{
              input: {
                ref: inputRef,
                min: 1,
                max: 10,
                step: 1
              }
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default HorizontalCard;
