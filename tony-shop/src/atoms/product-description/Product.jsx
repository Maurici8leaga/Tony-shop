import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
// css
import '../product-description/Product.scss';

const Product = () => {
  const { idProduct } = useParams();

  return (
    <div className="bg-container-grid">
      <Container fixed>
        <div className="container-prueba ">
          <div className="img-product">div1</div>
          <div className="menu">div2</div>
          <div className="info">div3</div>
          <div className="pregunta">div4</div>
          <div className="calificacion">div5</div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
