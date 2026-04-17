import { useState } from 'react';
import Home from './pages/Home';
import PlaisioCaseStudy from './pages/PlaisioCaseStudy';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      {currentPage === 'home' && <Home navigateTo={setCurrentPage} />}
      {currentPage === 'plaisio' && <PlaisioCaseStudy navigateTo={setCurrentPage} />}
    </>
  );
}
