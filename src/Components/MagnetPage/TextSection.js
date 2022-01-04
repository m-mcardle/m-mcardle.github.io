function TextSection({heading, subheading, children}) {
  return(
    <div className='group flex-col mx-5 space-y-2'>
      <div className="flex flex-row">
        <p className='text-lg font-bold'>{heading}</p>
        <p className="text-sm mx-3 my-auto">{subheading}</p>
      </div>
      {children}
    </div>
  );
}

export default TextSection;
