import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@root/routes';
import Header from '@molecules/header/Header';
import Footer from '@molecules/footer/Footer';
import '@root/App.scss';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
