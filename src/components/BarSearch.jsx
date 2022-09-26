import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'


const BarSearch = () => {

  const navigate = useNavigate();

  const {formState,onInputChange,onResetForm}= useForm({
    search:''
  })

  const {search} = formState;
  
  const onSubmit = (e) =>{
    e.preventDefault();
    if (search.trim().length<=1) {
      navigate(`?q=`)
    }else{
      navigate(`?q=${search}`)
      onResetForm();
    }
    
  }
 
  return (
    <div className='w-full h-10 bg-slate-800 flex items-center justify-end'>
      <form className='w-[500px] h-[30px]   mr-3 flex flex-row' onSubmit={onSubmit}>
        <input className='w-[400px] h-[30px] border-b border-slate-50 bg-slate-800 focus:outline-none mr-[10px] text-right pr-2 text-white text-xl' 
          autoComplete='off'
          name='search'
          onChange={onInputChange}
          value={search}
        />
        <button className='w-[90px] h-[30px] ml-[10px]  bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-lg text-white cursor-pointer' >Buscar</button>
      </form>
    </div>
  )
}

export default BarSearch