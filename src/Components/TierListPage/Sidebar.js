import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className='md:flex flex-col hidden items-end fixed bg-black text-white z-20 mx-2'>
      <p className='flex-row mt-10 lg:text-xl font-bold'>
        Select Tier List
      </p>
      <div className='flex-row'>
        <NavLink exact="true" to="/TierLists/F1">
          <p className='flex my-auto'>F1</p>
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
  );
}

export default Sidebar;