import React from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
// static data
import { opcionMenuProfile } from '@services/utils/static.data';

function MenuProfileAdaptive() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <Stack direction="row" justifyContent="space-evenly" alignContent="center" spacing={4}>
      {opcionMenuProfile.map((item) => (
        <IconButton key={item.id} color="primary" onClick={() => handleClick(item.url)}>
          {item.icon}
        </IconButton>
      ))}
      <IconButton color="secundary" onClick={() => handleClick('/login')}>
        <DoorFrontOutlinedIcon />
      </IconButton>
    </Stack>
  );
}

export default MenuProfileAdaptive;
