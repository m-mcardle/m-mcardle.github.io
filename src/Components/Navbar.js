import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiOfficeBuilding, HiDocumentText, HiTable } from "react-icons/hi";

function NavBar() {
    return (
      <div className='flex items-end relative bg-white text-black z-20 space-x-5'>
        <p className='lg:flex hidden pl-5 text-xl font-bold text-center'>
          Matthew's McArdle GitHub Pages
        </p>
        <NavLink exact="true" to="/" className="flex text-center pl-1 hover:bg-gray-200">
          <AiFillHome className="flex my-auto sm:h-5 sm:w-5 h-3 w-3"/>
          <p className='flex my-auto sm:text-lg text-xs'>Home</p>
        </NavLink>
        <NavLink exact="true" to="/MagnetPage" className="flex text-center pl-1 hover:bg-gray-200">
          <HiOfficeBuilding className="flex my-auto sm:h-5 sm:w-5 h-3 w-3"/>
          <p className='md:flex hidden my-auto text-lg'>Magnet Forensics</p>
          <p className='md:hidden flex my-auto sm:text-lg text-xs'>Co-op</p>
        </NavLink>
        <NavLink exact="true" to="/ResumePage" className="flex text-center pl-1 hover:bg-gray-200">
          <HiDocumentText className="flex my-auto sm:h-5 sm:w-5 h-3 w-3"/>
          <p className='flex my-auto sm:text-lg text-xs'>Resume</p>
        </NavLink>
        <NavLink exact="true" to="/TierLists/F1" className="flex text-center pl-1 hover:bg-gray-200">
          <HiTable className="flex my-auto sm:h-5 sm:w-5 h-3 w-3"/>
          <p className='flex my-auto sm:text-lg text-xs'>Tier Lists</p>
        </NavLink>
      </div>
    );
}

export default NavBar;