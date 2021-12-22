function Square({className, children}) {
  return (
    <div className={`flex-initial py-5 border-b h-[4rem] ${className}`}>
      {children}
    </div>
  );
}

export default Square;
