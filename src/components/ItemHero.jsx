import React from 'react'
import { Link } from 'react-router-dom'

const ItemHero = ({hero}) => {
  
  return (
    <div className='m-3 w-[300px] h-[160px]   bg-slate-900 flex flex-row'>
      <img 
        src={`/assets/Heros/${hero.id}.jpg`} 
        alt={hero.id}  
        className='w-[100px]'
      />
      <div className='w-[200px] h-[160px] g-slate-500 flex flex-col text-white'>
        <div className='w-full h-[36px]  text-xl flex items-center justify-center'>
          {hero.superhero}
        </div>
        <div className='w-full h-[90px] flex items-center justify-start '>
          <div className='p-2'>
            <p>{hero.alter_ego}</p>
            <p>{hero.first_appearance}</p>
          </div>
        </div>
        <div className='w-full h-[34px] flex items-center justify-center'>
          <Link to={`/hero/${hero.id}`} className='w-[80px] h-[28px] bg-slate-600 hover:bg-slate-500 flex items-center justify-center cursor-pointer '>
            Ver Más
          </Link>

        </div>

      </div>
    </div>
    
  )
}

export default ItemHero