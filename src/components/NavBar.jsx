import imgDc from '../../assets/Pages/Dc.png'
import imgMv from '../../assets/Pages/Mv.png'
import imgHs from '../../assets/Pages/Hs.png'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = ({page}) => {


  const navigate = useNavigate();
  const onLogout = () =>{
    navigate('/login',{
      replace: true
    });
  }

  const processImg = () =>{
    switch (page) {
      case 'marvel':
        return imgMv;
        break;
      case 'dc':
        return imgDc;
        break;
      default:
        return imgHs;
        break;
    }
  }
 
  let img = processImg();

  return (
    <div className="bg-slate-900 w-full h-[100px] flex flex-row">
      <img src={img} alt="img" className='w-[400px]' />
      <nav className='w-[calc(100%-400px)] h-[100px] flex justify-end items-center'>

        <NavLink to={'/marvel'} className={({isActive})=>`${isActive?'border shadow-lg shadow-rose-500/50':'' }
        w-[100px] h-[40px] mr-3 bg-rose-700 hover:bg-rose-600 flex items-center justify-center text-lg text-white cursor-pointer`}> 
          Marvel  
        </NavLink>

        <NavLink to={'/dc'} className={({isActive})=>`${isActive?'border shadow-lg shadow-sky-500/50':'' }
        w-[100px] h-[40px] mr-3 bg-sky-700 hover:bg-sky-600 flex items-center justify-center text-lg text-white cursor-pointer`}> 
          Dc Comics  
        </NavLink>

        <NavLink to={'/search'} className={({isActive})=>`${isActive?'border shadow-lg shadow-cyan-500/50':'' }
        w-[100px] h-[40px] mr-3 bg-cyan-700 hover:bg-cyan-600 flex items-center justify-center text-lg text-white cursor-pointer`}> 
          Buscar 
        </NavLink>

        <button onClick={onLogout} className='w-[100px] h-[40px] mr-3  bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-lg text-white cursor-pointer'> 
          Salir 
        </button>
      </nav>
    </div>
  )
}

export default NavBar