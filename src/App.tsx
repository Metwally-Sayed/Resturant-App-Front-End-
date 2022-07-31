import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Ordersuccess from './components/Cart/Ordersuccess';
import Checkout from './components/Cart/Checkout';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Dashbord from './components/Kitchen/Dashbord';

function App(): JSX.Element {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ordersuccess" element={<Ordersuccess />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
