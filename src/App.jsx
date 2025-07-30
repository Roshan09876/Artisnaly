import './App.css';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Contactus from './pages/Contactus';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Offset for fixed navbar */}
      <div className="pt-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer position='bottom-right' />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contactus />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}


export default App;
