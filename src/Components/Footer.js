import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineArrowUp } from 'react-icons/ai'

function Footer({className}) {
  return (
    <div className={`${className} relative flex pt-1 pl-2 w-full items-end bg-white text-black border border-black`}>
      <div className='flex flex-row space-x-2 items-end'>
        <p className='sm:block hidden font-bold text-xl'>Matthew J. McArdle</p>
        <a href="https://www.linkedin.com/in/matthew-j-mcardle/">
          <AiFillLinkedin className='fill-blue-600' style={{height: "2em", width: "2em"}}/>
        </a>
        <a href="https://github.com/m-mcardle/">
          <AiFillGithub className='fill-black=' style={{height: "2em", width: "2em"}}/>
        </a>
        <a href="mailto: matthew.j.mcardle@gmail.com">
          <AiOutlineMail className='fill-black' style={{height: "2em", width: "2em"}}/>
        </a>
      </div>
      <div className='block ml-auto mr-5'>
        <button className='flex flex-row space-x-2 items-end' onClick={() => {document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}>
          <p>Back To Top</p>
          <AiOutlineArrowUp className='fill-black' style={{height: "1.5em", width: "1.5em"}}/>
        </button>
      </div>
    </div>
  );
}

export default Footer;