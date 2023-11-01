import React from 'react';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Rating from '@mui/material/Rating';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const AccordionRateProduct = (prop) => {
  const { rangeCalification } = prop;

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '20px' }}>
        Calificaciones
      </AccordionSummary>
      <AccordionDetails sx={{ width: '250px', height: 'auto', margin: 'auto' }}>
        <List>
          {rangeCalification.map((item) => (
            <ListItem key={item.id} alignItems="center">
              <ListItemIcon>
                <Rating name="rating-product" value={item.value} readOnly />
              </ListItemIcon>

              <ListItemText>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginLeft: 1 }}>
                  {' '}
                  ({item.mount})
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionRateProduct;
