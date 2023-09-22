import React, { useState } from 'react';
// component mui
import Drawer from '@mui/material/Drawer';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
// static data
import { mainColors } from '@services/utils/static.data';

const MenuSortBy = (prop) => {
  const { openDrawer, closeDrawer, filterState, setFilterState } = prop;

  const { darkBlue } = mainColors;

  // state para el checkbox
  const [checked, setChecked] = useState(filterState);

  const settingCheckbox = (event) => {
    setChecked(event.target.value);
    setFilterState(event.target.value);
  };

  console.log(filterState, 'este es el state');

  return (
    <Drawer open={openDrawer} anchor="left" onClose={() => closeDrawer(false)}>
      <Box sx={{ width: { xs: '350px', lg: '400px' } }}>
        <List>
          <ListItem sx={{ py: 1, display: 'flex', flexDirection: 'row-reverse' }}>
            <IconButton onClick={() => closeDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </ListItem>

          <ListItem>
            <Typography variant="h6" sx={{ color: darkBlue }}>
              Ordenar por:
            </Typography>
          </ListItem>

          <ListItem
            divider={true}
            secondaryAction={
              <Radio
                checked={checked === 'Menor precio'}
                onChange={settingCheckbox}
                value="Menor precio"
                name="radio-button-1"
                inputProps={{ 'aria-label': 'sortBy-MayorPrice' }}
              />
            }
          >
            Menor precio
          </ListItem>
          <ListItem
            divider={true}
            secondaryAction={
              <Radio
                checked={checked === 'Mayor precio'}
                onChange={settingCheckbox}
                value="Mayor precio"
                name="radio-button-2"
                inputProps={{ 'aria-label': 'sortBy-MinorPrice' }}
              />
            }
          >
            Mayor precio
          </ListItem>
          <ListItem
            divider={true}
            secondaryAction={
              <Radio
                checked={checked === 'Calificacion'}
                onChange={settingCheckbox}
                value="Calificacion"
                name="radio-button-3"
                inputProps={{ 'aria-label': 'sortBy- Calification' }}
              />
            }
          >
            Calificacion
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuSortBy;
