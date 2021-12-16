import '../index.css';
import city from "../Images/city.jpeg";
import NavBar from '../Components/Navbar';
import Header from '../Components/Header';
import logo from "../Images/magnet-logo.png";

function MagnetPage() {
  return (
    <div className="font-mono">
      <NavBar/>
      <div className="px-5" style={{ backgroundImage: `url(${city})`}}>
        <Header altDescription='Magnet Forensics Logo' pageDescription='Magnet Forensics Co-op' color='bg-blue-magnet' image={logo}/>
        <div className='bg-white mx-48 border-4 border-neutral-900 min-h-screen px-5'>

        </div>
      </div>
    </div>
  );
}

export default MagnetPage;
