import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-[90%] relative ">
        <div className="w-full flex items-center justify-center">
          <img src="/assets/Pages/home.png" alt="#" />
        </div>

 

        <Link to={'marvel'} className="bg-rose-700 hover:bg-rose-600
                           text-white  rounded-sm absolute 
                           top-[10%] left-[20%] w-32 h-16
                           flex items-center justify-center
                           text-2xl font-bold">
          MARVEL 
        </Link>

        
        
        <Link to={'dc'} className="bg-sky-700 hover:bg-sky-600
                           text-white  rounded-sm absolute 
                           top-[10%] right-[20%] w-32 h-16
                           flex items-center justify-center
                           text-2xl ">
          <div className="font-bold">DC   C</div>omics 
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
