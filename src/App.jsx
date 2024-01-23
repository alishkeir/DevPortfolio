import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataContextProvider from './context/DataContextProvider';

import Header from '@components/Header';
import AboutPage from '@pages/About';
import PortfolioPage from '@pages/Portfolio';
import ResumePage from '@pages/Resume';
PortfolioPage;
// import Footer from '@components/Footer';
import NotFoundPage from '@pages/404';

import './App.css';

function App() {
  return (
    <>
      <DataContextProvider>
        <BrowserRouter>
          <Header />
          <div className='main-wrapper'>
            <Routes>
              <Route path='/' element={<AboutPage />} />
              <Route path='/portfolio' element={<PortfolioPage />} />
              <Route path='/resume' element={<ResumePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </DataContextProvider>
    </>
  );
}

export default App;
