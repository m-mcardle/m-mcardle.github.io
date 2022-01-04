function NavigateButton({text, clicked}) {
  return (
    <button className="flex text-center hover:bg-sky-800" onClick={clicked}>
      <p className='flex my-auto sm:text-md text-sm'>{text}</p>
    </button>
  );
}

export default NavigateButton;