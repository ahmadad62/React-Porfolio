import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import PortfolioDetails, { portfolioDetailsLoader } from './pages/portfolio/PortfolioDetails';
import PortfolioError from './pages/portfolio/PortfolioError';
import Portfolio, { portfolioLoader } from './pages/portfolio/Portfolio';
import Media from './pages/contact/Media';
import ContactInfo, { contactAction } from './pages/contact/ContactInfo';
import NotFound from './pages/NotFound';

import RootLayout from './layouts/RootLayout';
import ContactLayout from './layouts/ContactLayout';
import PortfolioLayout from './layouts/PortfolioLayout';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import "./App.module.scss"
import "./style/dark.scss"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactLayout />}>
        <Route path='media' element={<Media />} />
        <Route path='contactInfo' element={<ContactInfo />} action={contactAction} />
      </Route>
      <Route path="portfolio" element={<PortfolioLayout />} errorElement={<PortfolioError />}>
        <Route
          index
          element={<Portfolio />}
          loader={portfolioLoader}
          errorElement={<PortfolioError />}
        />
        <Route
          path=':id'
          element={<PortfolioDetails />}
          loader={portfolioDetailsLoader}
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ))

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "" : "app dark"}>
      < RouterProvider router={router} />
    </div>
  );
}

export default App


