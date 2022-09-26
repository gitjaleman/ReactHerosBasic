import React from 'react'
import NavBar from '../components/NavBar'
import BarSearch from '../components/BarSearch'
import { useLocation } from 'react-router-dom'
import queryString from'query-string';
import getHerosByName from '../helpers/getHerosByName';
import ItemHero from '../components/ItemHero';


const SearchPage = () => {

  const location = useLocation();
  const {q=''} = queryString.parse(location.search)
  const data = getHerosByName(q);


  return (
    <>
      <NavBar page={'search'} />
      <BarSearch   />
      {
        data.map(hero=>(
          <ItemHero key={hero.id} hero={hero} />
        ))
      }
    </>
  )
}

export default SearchPage