import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar';
import CardHero from '../components/CardHero';
import getHerosBySuperhero from '../helpers/GetHerosBySuperhero'

const HeroPage = () => {
  const {id} = useParams();
  const data = getHerosBySuperhero(id);
  if (!data) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className='w-full h-screen'>
      <NavBar page={''} />
      <CardHero hero={data} />
    </div>
      
    
  )
}

export default HeroPage