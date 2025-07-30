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
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Offset for fixed navbar */}
      <div className="pt-16">
        <ToastContainer position='bottom-right' />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}


export default App;
