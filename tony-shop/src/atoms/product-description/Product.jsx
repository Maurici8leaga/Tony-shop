import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '@molecules/image-Gallery/ImageGallery';
import CardProduct from '@molecules/card/cardProduct-details/CardProduct';
import CardProductAdaptive from '@molecules/card/cardProduct-details/CardProduct-adaptive/CardProductAdaptive';
import AccordionInfoProduct from '@molecules/accordion/accordion-info-product/AccordionInfoProduct';
import AccordionQA from '@molecules/accordion/accordion-q&a/AccordionQA';
import AccordionRateProduct from '@molecules/accordion/accordion-rate-product/AccordionRateProduct';
import SliderGrid from '@molecules/slider/sliderGrid/SliderGrid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { rangeCalification, imgsProduct, caracteristicasProductoTabla } from '@services/utils/static.data';
import '../product-description/Product.scss';

const Product = () => {
  const { idProduct } = useParams();

  const [qtySelected, SetqtySelected] = useState(1);

  return (
    <div className="bg-container-product">
      <Container fixed>
        <div className="container-grid-product">
          <div className="img-product-section">
            <ImageGallery images={imgsProduct} />
          </div>
          <aside className="card-product-description">
            <CardProduct
              titleProduct={'Casco Integral Hro518 Cremer Visor Doble Ahumado'}
              productPrice={11.11}
              avgRate={3}
              qtyProduct={10}
              qtySelected={qtySelected}
              SetqtySelected={SetqtySelected}
            />
          </aside>
          <div className="card-product-description-adaptive">
            <CardProductAdaptive
              titleProduct={'Casco Integral Hro518 Cremer Visor Doble Ahumado'}
              productPrice={11.11}
              avgRate={3}
              qtyProduct={10}
              imgsProduct={imgsProduct}
              qtySelected={qtySelected}
              SetqtySelected={SetqtySelected}
            />
          </div>
          <div className="info-product-section">
            <AccordionInfoProduct
              characteristicsProduct={caracteristicasProductoTabla}
              descriptionProduct={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              }
            />
          </div>
          <div className="question-and-answers-section">
            <AccordionQA />
          </div>
          <div className="calification-product-section">
            <AccordionRateProduct rangeCalification={rangeCalification} />
          </div>
        </div>

        <Stack direction={'column'} sx={{ marginTop: '2rem' }}>
          <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
            Sugerencias de interes
          </Typography>
          <SliderGrid />
        </Stack>
      </Container>
    </div>
  );
};

export default Product;
