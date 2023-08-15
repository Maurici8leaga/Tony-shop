import React from 'react';
import { Paper, Button } from '@mui/material';

const SliderElement = (prop) => {
  const { item } = prop;

  return (
    <Paper>
      {/* ajustar las medidas de las imagenes despues de crear primero  el container del carrusel */}
      <img src={item.img} alt={`img_${item.name}`} style={{ width: '100%', height: 'auto' }} />
      <h2>{item.name}</h2>

      <Button className="CheckButton">Click</Button>
    </Paper>
  );
};

export default SliderElement;
