import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Grid from '@mui/material/Grid';
import ListCategory from '@molecules/listCategory/ListCategory';
import { listMotorcycleBrand } from '@services/utils/static.data';

const MotorCycleMenu = () => {
  return (
    <div style={{ marginTop: '100px', marginBottom: '80px', height: '100vh' }}>
      <Container fixed>
        <Typography
          variant="h5"
          sx={{
            marginTop: '10rem',
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Respuestos para motos
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container component="ul" spacing={2} sx={{ listStyleType: 'none', flexGrow: 1 }}>
            {listMotorcycleBrand.map((item) => (
              <ListCategory
                key={item.id}
                image={item.img}
                name={item.name}
                href={`/list-of-products/${item.name}`}
                width={0}
                bpMd={4}
                bpLg={4}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MotorCycleMenu;
