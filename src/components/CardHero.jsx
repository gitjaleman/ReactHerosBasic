import React from 'react'

const CardHero = ({hero}) => {

  const {id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
  return (
    <div className='w-full h-[calc(100%-100px)] p-5' >
      <div className='w-[600px] h-[480px] bg-slate-900 flex flex-row'>
        <div className='w-[300px] h-[480px]' >
          <img 
            src={`/assets/Heros/${id}.jpg`} 
            alt={id}  
            className='w-[100%]'
          />
        </div>
        <div className='w-[300px] h-[480px] flex flex-col'>

          <div className='w-full h-8 flex justify-center items-center text-white text-2xl font-semibold'>
            {
              superhero
            }
          </div>

          <div className='p-4'>
            <div className='flex flex-row text-white border-b border-slate-400 mb-2'>
              <div className='text-slate-400 mr-4 w-[100px]' >Alter ego: </div>
              <div>{alter_ego}</div>
            </div>
            <div className='flex flex-row text-white border-b border-slate-400 mb-2'>
              <div className='text-slate-400 mr-4 w-[100px]' >Publicado: </div>
              <div>{publisher}</div>
            </div>
            <div className='flex flex-row text-white border-b border-slate-400 mb-2'>
              <div className='text-slate-400 mr-4 w-[100px]' >1er Aparición: </div>
              <div>{first_appearance}</div>
            </div>
          </div>

          <div className='p-5  text-slate-500 '>
            {
              characters
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardHero