function Header({altDescription, pageDescription, textColor = "text-black", color = "bg-blue-500", image = undefined, content = undefined}) {
    return (
      <div className={`flex-col z-20 relative xl:mx-48 xl:min-w-min min-w-full border-4 border-gray-600 items-center flex justify-center ${color} ${textColor}`}>
        <p className="text-3xl font-bold text-center mt-8 mb-3"> 
          {pageDescription}
        </p>
        {content ? content : undefined}
        {image ? <img className='object-scale-down h-48 w-48 center' src={image} alt={altDescription}/> : undefined}
      </div>
    );
}

export default Header;