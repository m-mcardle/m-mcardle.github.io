function BaseCard({title, children}) {
    return (
      <div className="m-5 border border-gray-600 min-h-[50px]">
        <p className='font-bold text-2xl m-1'><b>{title}</b></p>
        <hr/>
        {children}
      </div>
    );
}

export default BaseCard;