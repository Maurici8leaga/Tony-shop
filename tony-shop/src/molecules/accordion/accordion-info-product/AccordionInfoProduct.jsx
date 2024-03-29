import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/joy/Divider';

const AccordionInfoProduct = (prop) => {
  const { characteristicsProduct, descriptionProduct } = prop;

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '20px' }}>
        Informacion del producto
      </AccordionSummary>
      <AccordionDetails sx={{ width: '100%', margin: 'auto' }}>
        <Typography variant="subtitle1" sx={{ marginBottom: '.5rem' }}>
          Caracteristicas
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '60%',
            height: 'auto',
            margin: 'auto'
          }}
        >
          <List>
            {characteristicsProduct.map((item, index) => {
              const [feature, value] = Object.entries(item)[0];
              return (
                <ListItem
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: `${index % 2 === 0 ? '#E6E6E6' : 'none'}`,
                    overflow: 'hidden'
                  }}
                >
                  <ListItemText sx={{ width: '50%', height: 'auto' }}>
                    <Typography variant="body2">{feature}</Typography>
                  </ListItemText>
                  <ListItemText sx={{ width: '50%', height: 'auto' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'lighter' }}>
                      {value}
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Divider sx={{ margin: '2rem 0rem' }} />

        <Typography variant="body1" sx={{ marginBottom: '.5rem' }}>
          Descripcion
        </Typography>

        <Typography variant="body2" align="justify" sx={{ fontWeight: 'lighter' }}>
          {descriptionProduct}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionInfoProduct;
