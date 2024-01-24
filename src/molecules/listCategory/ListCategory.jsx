import React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
import Grid from '@mui/material/Grid';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

// este componente cumple con el principio SOLID OPEN/CLOSE
const ListCategory = (props) => {
  const { width, href, image, name, bpXs, bpSm, bpMd, bpLg, objectFit } = props;
  // los props bpXs, bpSm, bpMd, bpLg son por si se quiere personalizar los breakpoints

  return (
    <>
      <Grid
        component="li"
        xs={bpXs || 6}
        sm={bpSm || 4}
        md={bpMd || 3}
        lg={bpLg || 2}
        item
        sx={{ justifyContent: 'center' }}
      >
        <Card sx={{ minWidth: width, borderRadius: '3px' }}>
          <CardOverflow component="a" href={href} sx={{ borderBottom: '1px solid #eaeaea' }}>
            <AspectRatio objectFit={`${objectFit || 'cover'}`}>
              <img src={image} alt={`img_${name}`} />
            </AspectRatio>
          </CardOverflow>

          <CardContent sx={{ bgcolor: 'none' }}>
            <Typography
              level="title-md"
              fontWeight="md"
              sx={{ textAlign: 'center', textTransform: 'uppercase', color: 'var(--darkBlue)' }}
            >
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observer
ListCategory.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ellos
  width: PropTypes.number,
  href: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  bpXs: PropTypes.number,
  bpSm: PropTypes.number,
  bpMd: PropTypes.number,
  bpLg: PropTypes.number,
  objectFit: PropTypes.string
};

export default ListCategory;
