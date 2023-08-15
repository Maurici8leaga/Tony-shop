import '@atoms/landing/Landing.scss';
// import Header from '../../molecules/header/Header';
import Header from '@molecules/header/Header';
import Slider from '@molecules/slider/Slider';

const Landing = () => {
  return (
    <div>
      <Header />
      {/* ACOMODAR EL CARRUSEL DEBE IR EN UN CONTAINER */}
      <div style={{ width: 600, height: 450 }}>
        <Slider />
      </div>
      <h1 className="prueba"> SOY EL LANDING PAGE</h1>
    </div>
  );
};

export default Landing;
