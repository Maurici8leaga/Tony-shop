import React from 'react';
import './SliderElement.scss';
// import { Paper, Button } from '@mui/material';

const SliderElement = (prop) => {
  // const { item } = prop;

  return (
    <div className="card">
      <p className="text">{prop.name}</p>
    </div>
  );
};

export default SliderElement;
