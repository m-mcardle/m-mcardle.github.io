function TextSection({heading, children}) {
  return(
    <div className='flex-col mx-5'>
      <p className='font-bold text-lg'>{heading}</p>
      {children}
    </div>
  );
}

export default TextSection;
