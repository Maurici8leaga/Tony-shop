import '@atoms/landing/Landing.scss';
// import Header from '../../molecules/header/Header';
import Header from '@molecules/header/Header';
import Slider from '@molecules/slider/Slider';

const Landing = () => {
  return (
    <div>
      <Header />

      <Slider />

      <h1 className="prueba"> SOY EL LANDING PAGE</h1>
    </div>
  );
};

export default Landing;
