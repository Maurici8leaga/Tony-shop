import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@root/routes';
import '@root/App.scss';

const App = () => (
  <>
    <BrowserRouter>
      {/* ojo puede que aqui vaya Header.jsx y Footer */}
      <AppRouter />
    </BrowserRouter>
  </>
);

export default App;
