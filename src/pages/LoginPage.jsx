import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-900'>
      <Link to={'/'} 
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >INGRESAR</Link>
    </div>
  )
}

export default LoginPage


