import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
// static data
import { opcionMenuProfile } from '@services/utils/static.data';
// css
import '../menu-profile/MenuProfile.scss';

const MenuProfile = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <Box className="box-menu">
      <List sx={{ width: '100%' }}>
        {opcionMenuProfile.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            disableGutters
            secondaryAction={
              <IconButton>
                <ArrowForwardIosOutlinedIcon />
              </IconButton>
            }
          >
            <ListItemButton onClick={() => handleClick(item.url)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.type} />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        <ListItem disablePadding disableGutters>
          <ListItemButton onClick={() => handleClick('/login')}>
            <ListItemIcon>
              <DoorFrontOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesion" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuProfile;
