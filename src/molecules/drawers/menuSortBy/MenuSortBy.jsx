import React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
// component mui
import Drawer from '@mui/material/Drawer';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';

// OJO HAY QUE AGREGAR FUNCIONALIDAD PARA QUE ORDENE LOS ELEMENTOS DEL CONTENIDO
const MenuSortBy = (props) => {
  const { openDrawer, closeDrawer, checked, setChecked } = props;

  // OJO hay que tener por defecto un checked de manera que tenga un orden principal y luego user pueda cambiarlo si quiere

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
            <Typography variant="h6" sx={{ color: 'var(--darkBlue)' }}>
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
              sx={{ height: '60px', color: 'var(--darkBlue)' }}
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
              sx={{ height: '60px', color: 'var(--darkBlue)' }}
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
              sx={{ height: '60px', color: 'var(--darkBlue)' }}
            >
              Calificacion
            </ListItem>
          </Box>
        </List>
      </Box>
    </Drawer>
  );
};

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observer
MenuSortBy.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ellos
  openDrawer: PropTypes.bool,
  // si el prop no lleva isRequired, significa que su presencia en el component puede ser opcional
  closeDrawer: PropTypes.func,
  checked: PropTypes.string,
  setChecked: PropTypes.func
};

export default MenuSortBy;
