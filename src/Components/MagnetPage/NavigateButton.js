function NavigateButton({text, clicked, icon}) {
  return (
    <button className="flex flex-row text-center hover:bg-sky-800 space-x-2" onClick={clicked}>
      {icon}
      <p className='flex my-auto text-xs'>{text}</p>
    </button>
  );
}

export default NavigateButton;