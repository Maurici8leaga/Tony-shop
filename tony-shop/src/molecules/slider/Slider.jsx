import React from 'react';
import SliderElement from './SliderElement';
import Carousel from 'react-material-ui-carousel';

const Slider = () => {
  const items = [
    {
      name: 'Random Name #1',
      img: 'https://picsum.photos/200'
    },
    {
      name: 'Random Name #2',
      img: 'https://picsum.photos/200'
    }
  ];

  return (
    // acomodar el margin top despues de conntainer del carrusel
    <Carousel sx={{ mt: 10 }}>
      {items.map((item, i) => (
        <SliderElement key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Slider;
