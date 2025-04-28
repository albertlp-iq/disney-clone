import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Slider from './Components/Slider.jsx'
import ProductionHouse from './Components/ProductionHouse.jsx'
import GenreMovieList from './Components/GenreMovieList.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopRated from './Components/TopRated.jsx';
import Search from './Components/Search.jsx'
import ProductionHouseDetail from './Components/ProductionHouseDetail.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="bg-[#1a1a1a] min-h-screen w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Slider/>
              <ProductionHouse/>
              <GenreMovieList/>
            </>
            } />
          <Route path="/top-rated" element={
            <TopRated />
          } />
          <Route path="/search" element={
            <Search />
          } />
          <Route path="/production_house/:id" element={<ProductionHouseDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
