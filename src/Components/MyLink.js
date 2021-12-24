import { Link } from "react-router-dom";

function MyList({to, text="here"}) {
  return (
    <Link to={to} className='font-bold inline hover:underline'>{text}</Link>
  );
}

export default MyList;