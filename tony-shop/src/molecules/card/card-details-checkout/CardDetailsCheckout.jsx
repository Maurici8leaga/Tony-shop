import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/material/Button';
// css
import '../card-details-checkout/CardDetailsCheckout.scss';

const CardDetailsCheckout = (prop) => {
  const { imgProduct, titleProduct, qtyProduct, priceProduct } = prop;

  return (
    <div className="card-details-checkout">
      <Stack direction="row" justifyContent="space-evenly" alignItems="center" sx={{ marginY: '1rem' }}>
        <Typography variant="h6">Detalles</Typography>
        <Typography variant="subtitle1" sx={{ color: 'grey' }}>
          (1 productos)
          {/* aaqui debe sacar la cuenta cuantos productos hay en el card */}
        </Typography>
      </Stack>

      <List sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
        {/* este listitem se repetira por cada elemento en la db */}
        <ListItem>
          <Card color="neutral" orientation="horizontal" variant="outlined" sx={{ width: '100%' }}>
            <AspectRatio ratio="1" sx={{ width: 90, alignSelf: 'center' }}>
              <img
                srcSet={imgProduct}
                loading="lazy"
                alt="img-product" // colorcar un alt org
              />
            </AspectRatio>

            <CardContent sx={{ justifyContent: 'center' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack gap={1}>
                  {/* colocar logica para reducir el titulo */}
                  <Typography variant="body1">{titleProduct}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'lighter' }}>
                    {qtyProduct} un
                  </Typography>
                </Stack>

                <Typography variant="body1">${priceProduct}</Typography>
              </Stack>
            </CardContent>
          </Card>
        </ListItem>
      </List>

      <Stack justifyContent="end" sx={{ width: '100%', marginY: '1.2rem', paddingX: '16px' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginY: '.5rem' }}>
          <Typography variant="body1">Delivery</Typography>
          <Typography variant="body1" sx={{ color: 'green' }}>
            Gratis
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginY: '.5rem' }}>
          <Typography variant="body1">Total:</Typography>
          <Typography variant="body1">$11.11</Typography>
          {/* debe ir logica para sumar todo y que vaya aqui */}
        </Stack>

        <Button variant="contained" sx={{ marginY: '.5rem' }}>
          Pagar{' '}
        </Button>
      </Stack>
    </div>
  );
};

export default CardDetailsCheckout;
