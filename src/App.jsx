import './App.css';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer position='bottom-right' />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
