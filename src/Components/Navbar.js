import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div className='flex items-end relative bg-white text-black z-20'>
        <p className='lg:flex hidden mx-5 text-xl font-bold text-center'>
          Matthew's McArdle GitHub Pages
        </p>
        <NavLink exact="true" to="/" className="flex sm:mx-5 mx-1 text-center pl-1 hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="flex my-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <p className='flex my-auto'>Home</p>
        </NavLink>
        <NavLink exact="true" to="/MagnetPage" className="flex sm:mx-5 mx-1 text-center pl-1 hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="flex my-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
          </svg>
          <p className='md:flex hidden my-auto'>Magnet Forensics</p>
          <p className='md:hidden flex my-auto'>Co-op</p>
        </NavLink>
        <NavLink exact="true" to="/ResumePage" className="flex sm:mx-5 mx-1 text-center pl-1 hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="flex my-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
          <p className='flex my-auto'>Resume</p>
        </NavLink>
        <NavLink exact="true" to="/TierLists" className="flex sm:mx-5 mx-1 text-center pl-1 hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="flex my-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
          </svg>
          <p className='flex my-auto'>Tier Lists</p>
        </NavLink>
      </div>
    );
}

export default NavBar;