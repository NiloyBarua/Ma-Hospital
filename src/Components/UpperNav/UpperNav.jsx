import logo from '../../assets/Logo-01.png';

const UpperNav = () => {
   

    
    
    return (
        <div className="navbar text-black flex justify-between w-full ">
            <div className="navbar-start">
                <img className='w-16 h-16 md:ml-6' src={logo} alt="" />
                <a className="ml-5 font-bold  text-2xl">Ma General Hospital</a>
            </div>


            <div className='md:mr-6'>
                <label className="input input-bordered bg-slate-200 text-black flex items-center gap-2">
                    <input type="text" className="grow " id='place' placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>

        <div className="flex mt-3 ">
            <div className="   bg-red-600 text-sm text-white px-10 py-1">
                <p className="mb-0">Emergency </p>
                <p>0184578568</p>
            </div>
            <div className="  bg-blue-950 text-sm text-white px-10 py-1">
            <p>Appointment </p>
            <p>01858469585</p>
            </div>
        </div>


        </div>
    ); 
};

export default UpperNav;