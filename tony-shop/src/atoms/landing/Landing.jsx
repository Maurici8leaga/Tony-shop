import '@atoms/landing/Landing.scss';
// import Header from '../../molecules/header/Header';
import Header from '@molecules/header/Header';
import Slider from '@molecules/slider/Slider';
import SliderGrid from '@molecules/slider/sliderGrid/SliderGrid';

const Landing = () => {
  return (
    <div>
      <Header />

      <div style={{ marginTop: '100px' }}>
        <Slider />
      </div>

      <div style={{ marginTop: '250px' }}>
        <SliderGrid />
      </div>

      <h1 className="prueba"> SOY EL LANDING PAGE</h1>
    </div>
  );
};

export default Landing;
