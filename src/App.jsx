import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import AboutPage from '@pages/About';
import PortfolioPage from '@pages/Portfolio';
PortfolioPage;
// import Footer from '@components/Footer';
import NotFoundPage from '@pages/404';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main-wrapper'>
          <Routes>
            <Route path='/' element={<AboutPage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
