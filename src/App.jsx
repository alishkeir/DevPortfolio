import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from '@pages/About';
import Header from '@components/Header';
import Footer from '@components/Footer';
import NotFoundPage from '@pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main-wrapper'>
          <Routes>
            <Route path='/' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
