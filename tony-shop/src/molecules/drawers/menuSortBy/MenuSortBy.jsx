import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import { mainColors } from '@services/utils/static.data';

const MenuSortBy = (prop) => {
  const { openDrawer, closeDrawer, checked, setChecked } = prop;

  const { darkBlue } = mainColors;

  const settingCheckbox = (event) => {
    setChecked(event.target.value);
  };

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

          <Box sx={{ mt: 2 }}>
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
              sx={{ height: '60px', color: darkBlue }}
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
              sx={{ height: '60px', color: darkBlue }}
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
              sx={{ height: '60px', color: darkBlue }}
            >
              Calificacion
            </ListItem>
          </Box>
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuSortBy;
