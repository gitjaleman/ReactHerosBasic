import React from 'react'
import getHerosByPublisher from '../helpers/getHerosByPublisher'
import ItemHero from './ItemHero'

const ListHeros = ({page}) => {

  const dataHeros  =  getHerosByPublisher(page)
  return (
    <div className='flex flex-wrap'>
      {
        dataHeros.map(hero=>(
          <ItemHero key={hero.id} hero={hero} />
        ))
      }
    </div>
   
  )
}

export default ListHeros