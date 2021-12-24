import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
    <div className='md:flex md:mt-10 flex-col hidden fixed bg-black text-white z-20 mx-2'>
      <p className='flex-row lg:text-xl font-bold underline'>
        Select Tier List
      </p>
      <div className='flex-row'>
        <NavLink exact="true" to="/TierLists/F1">
          <p className='flex my-auto'>F1 Drivers</p>
        </NavLink>
      </div>
      <div className='flex-row'>
        <NavLink exact="true" to="/TierLists/UFC">
          <p className='flex my-auto'>UFC Fighters</p>
        </NavLink>
      </div>
      <div className='flex-row'>
        <NavLink exact="true" to="/TierLists/Food">
          <p className='flex my-auto'>Fast Food</p>
        </NavLink>
      </div>
    </div>
    <div className='flex mt-5 flex-row md:hidden bg-black text-white z-20 space-x-4 justify-items-stretch'>
      <p className='flex lg:text-xl font-bold'>
        Select Tier List:
      </p>
      <div className="flex">
        <NavLink exact="true" to="/TierLists/F1">
          <p className='flex my-auto'>F1</p>
        </NavLink>
      </div>
      <div className="flex">
        <NavLink exact="true" to="/TierLists/UFC">
          <p className='flex my-auto'>UFC</p>
        </NavLink>
      </div>
      <div className="flex">
        <NavLink exact="true" to="/TierLists/Food">
          <p className='flex my-auto'>Food</p>
        </NavLink>
      </div>
    </div>
    </>
  );
}

export default Sidebar;