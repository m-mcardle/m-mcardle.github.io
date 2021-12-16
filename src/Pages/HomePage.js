import '../index.css';
import NavBar from '../Components/Navbar';
import Header from '../Components/Header';

function HomePage() {
  return (
    <div className="font-mono">
      <NavBar/>
      <div className="px-5">
        <Header altDescription='Magnet Forensics Logo' pageDescription='Matthew J. McArdle' color='bg-red-600'/>
        <div className='bg-red-400 mx-48 border-4 border-neutral-900 min-h-screen px-5'>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
