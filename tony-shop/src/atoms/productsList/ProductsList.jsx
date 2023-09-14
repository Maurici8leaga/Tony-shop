import * as React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';

// cosas para el grid
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

const ProductsList = () => {
  // de esta forma se puede obtener el nombre de la lista de productos
  const { id } = useParams();

  // para el item de cada grid
  const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 0,
    color: theme.vars.palette.text.secondary
  }));

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'grey', marginTop: '112px' }}>
      <Container fixed>
        <Grid container justifyContent="center" alignItems="center" spacing={3} sx={{ flexGrow: 1 }}>
          <Grid xs={12}>
            <Item sx={{ bgcolor: 'yellow' }}>ordenar por</Item>
          </Grid>
          <Grid xs={3} direction="column" justifyContent="center" alignItems="center" sx={{ bgcolor: 'green' }}>
            <Item sx={{ bgcolor: 'orange' }}>filtros</Item>
            <Item sx={{ bgcolor: 'orange' }}>filtros</Item>
            <Item sx={{ bgcolor: 'orange' }}>filtros</Item>
            <Item sx={{ bgcolor: 'orange' }}>filtros</Item>
            <Item sx={{ bgcolor: 'orange' }}>filtros</Item>
          </Grid>
          <Grid
            xs={9}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            sx={{ bgcolor: 'purple', height: '400px' }}
          >
            <Item sx={{ bgcolor: 'red' }}>lista de productos</Item>
            <Item sx={{ bgcolor: 'red' }}>lista de productos</Item>
          </Grid>
          <Grid xs={12}>
            <Item sx={{ bgcolor: 'pink' }}>paginaation</Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsList;
