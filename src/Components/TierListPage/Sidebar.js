function Sidebar({currentPage}) {
  return (
    <div className='flex-col items-end fixed bg-black text-white z-20 mx-2'>
      <p className='flex-row mt-10 text-xl font-bold'>
        Select Tier List
      </p>
      <div className='flex-row'>
      <a href="/TierLists/F1" className={currentPage === "F1" ? "font-bold text-gray-400" : undefined}>F1 Drivers</a>
      </div>
      <div className='flex-row'>
        <a href="/TierLists/UFC" className={currentPage === "UFC" ? "font-bold text-gray-400" : undefined}>UFC Fighters</a>
      </div>
      <div className='flex-row'>
        <a href="/TierLists/Food" className={currentPage === "Food" ? "font-bold text-gray-400" : undefined}>Fast Food</a>
      </div>
    </div>
  );
}

export default Sidebar;