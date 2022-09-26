import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage     from '../pages/HomePage'
import DCPage       from '../pages/DCPage'
import HeroPage     from '../pages/HeroPage'
import MarvelPage   from '../pages/MarvelPage'
import SearchPage   from '../pages/SearchPage'
import ErrorPage    from '../pages/ErrorPage'

const RoutersHeros = () => {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/dc" element={<DCPage />} /> 
      <Route path="/marvel" element={<MarvelPage />} /> 
      <Route path="/hero/:id" element={<HeroPage />} /> 
      <Route path="/search" element={<SearchPage />} /> 
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    
  )
}

export default RoutersHeros