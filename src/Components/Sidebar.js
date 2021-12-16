import '../index.css';

function Sidebar() {
  return (
    <div className='flex-col items-end fixed bg-black text-white z-20 mx-2'>
      <p className='flex-row mt-10'>
        Select Tier List
      </p>
      <div className='flex-row'>
      <a href="/TierLists/F1">F1 Drivers</a>
      </div>
      <div className='flex-row'>
        <a href="/TierLists/UFC">UFC Fighters</a>
      </div>
    </div>
  );
}

export default Sidebar;