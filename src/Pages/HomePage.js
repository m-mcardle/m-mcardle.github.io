import NavBar from '../Components/Navbar';
import DropDownSection from '../Components/DropDownSection';

import InfoSection from '../Components/HomePage/InfoSection';

import Guelph from '../Images/guelph.png';
import Magnet from '../Images/magnet-logo.png';
import F1 from '../Images/F1-logo.png'
import Lando from '../Images/Drivers/lando.png'
import McLaren from '../Images/mclaren.png'
import F1Chat from '../Images/F1_Chat_Extension.png';
import Visualizer from '../Images/F1-Visualizer.png';
import Lotus from '../Images/lotus.png';
import Caterham from '../Images/caterham.png';
import Atom from '../Images/atom.jpeg';
import Veloster from '../Images/veloster.png';
import Gulf from '../Images/gulf.jpeg';
import Khabib from '../Images/Fighters/khabib.png';
import Fluery from '../Images/fleury.gif';
import iRacing from '../Images/iracing.png';
import RocketLeague from '../Images/rocketleague.webp';

function HomePage() {
  return (
    <div className="font-mono">
      <NavBar/>
      <div className='pt-5 bg-gray-200'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 h-max px-5 2xl:mx-48'>
          <div className="md:col-span-3 col-span-1 mx-auto text-4xl">
            Welcome to my GitHub pages!
          </div>
          <InfoSection>
            <img src={Guelph} alt="University of Guelph" className='max-h-[100px] mx-auto'/>
            <p className="m-2">
            My name is Matt McArdle and I am a Software Engineering student at the University of Guelph.
            </p>
            <DropDownSection extraSection={
              <ul className='ml-3 list-disc'>
                <li>3rd year student</li>
                <li>Planning to take a Minor in business</li>
                <li>Deans List student with GPA of 87.9% GPA</li>
              </ul>
            }/>
          </InfoSection>
          <InfoSection span="md:col-span-2">
            <img src={Magnet} alt="Magnet Forensics" className='max-h-[100px] mx-auto'/>
            <p className="m-2">
            I've just completed an amazing co-op term at Magnet Forensics.
            They are a Waterloo company specializing in building tools for Law Enforcement or Private Investigators to uncover digital evidence on devices.<br/>
            If you want to learn more about it click <a href="/MagnetPage" className="font-bold">here</a> to go to my page dedicated to my experience there.
            </p>
          </InfoSection>
          <InfoSection span="md:col-span-3"  hover={false}>
            <div>
              <img src={F1} alt="F1" className='max-h-[100px] mx-auto'/>
              <p className='m-2 text-center'>
                One of my biggest interests is Formula 1. 
                My family has always been racing fans, so as a kid I was always watching alongside my Mom and Dad, but more recently took a much larger interest in the sport.
              </p>
              <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                <InfoSection>
                  <div>
                    <div className='flex flex-row my-auto'>
                      <img src={Lando} alt="Lando Norris" className='hidden lg:flex flex-col max-h-[50px] my-auto mx-auto'/>
                      <img src={McLaren} alt="McLaren" className='flex flex-col max-h-[50px] my-auto mx-auto'/>
                    </div>
                    <div className='flex flex-row'>
                      <p className='flex flex-col'>
                      My favourite driver on the grid currently is Lando Norris, so I in turn root for the McLaren F1 team.
                      </p>
                    </div>
                  </div>
                </InfoSection>
                <InfoSection span='md:col-span-2' rowSpan='row-span-2'>
                  <div>
                    <p className='text-xl font-bold text-center'>
                      Personal F1 Projects
                    </p>
                    <p className='my-2'>
                    I've used my interest in Formula 1 to spark ideas for a few side projects. 
                    </p>
                    <p className='my-2'>
                    The first one was to embed a Twitch chat element into the official F1TV player.
                    The idea behind it was that I thought it would be neat to include a live chat for F1 fans to all be in during the race.
                    I haven't made an effort to actually get anyone to adopt it yet, but it was a fun project to do no matter what.
                    </p>
                    <DropDownSection extraSection={
                      <div>
                        <img src={F1Chat} alt="F1 Twitch Chat Extension" className='flex flex-col max-h-[300px] mx-auto'/>
                      </div>
                    }/>
                    <p className='my-2'>
                    The second one was to build out a standings visualizer for depicting championship battles as seasons progress.
                    The inspiration came to me while watching the amazing 2021 F1 season unfold. 
                    This included a back and forth battle between Max Verstappen and Lewis Hamilton which ended up with them being TIED on points going into the 22nd/final race.
                    I wanted to visually see their points totals progress (because I love graphed statistics), so I used the public <a href="https://ergast.com/mrd/" className='font-bold'>Ergast F1 API </a> 
                    to get results and used the Python Plot.ly library to graph them.
                    </p>
                    <DropDownSection extraSection={
                      <div>
                        <img src={Visualizer} alt="F1 Standings Visualizer" className='flex flex-col max-h-[300px] mx-auto'/>
                      </div>
                    }/>
                  </div>
                </InfoSection>
                <InfoSection>
                  <img src={Gulf} alt="Gulf McLaren F1 car" className='flex flex-col max-h-[300px] mx-auto'/> {/* 2xl:max-h-max */}
                </InfoSection>
              </div>
            </div>
          </InfoSection>
          <InfoSection>
            <p className='font-bold text-xl my-2 mx-auto text-center'>UFC</p>
            <p>
              UFC is pretty neat. Favourite fighter is Khabib.
            </p>
            <img src={Khabib} alt="Khabib Nurmagomedov" className='flex flex-col max-h-[300px] mx-auto'/>
          </InfoSection>
          <InfoSection>
            <p className='font-bold text-xl my-2 mx-auto text-center'>NHL</p>
            <p>
              Been a hockey fan my whole life, but more recently haven't had the same interest.
              Favourite player in Marc Andre Fleury cause he's the goat, so I've basically been bouncing around who I support cause he keeps getting traded.
            </p>
            <img src={Fluery} alt="Marc Andre Fleury" className='flex flex-col max-h-[300px] mx-auto'/>
          </InfoSection>
          <InfoSection rowSpan='row-span-2'>
            <p className='font-bold text-xl my-2 mx-auto text-center'>Track Days</p>
            <p>
              One of my favourite ways to spend a day is driving at a track. 
              My Dad and I have joined a group of some really fun people to rent out the Grand Bend Motorplex for some open lapping every other week of the summer.
              Most of our driving is done in my Dad's Ariel Atom or my Hyundai Veloster N but I've been lucky enough to try out a Lotus Elise, Caterham 7, and a fun little Fiat 500 Abarth.
            </p>
            <div className='flex flex-row overflow-auto'>
              <img src={Atom} alt="Ariel Atom" className='m-1 max-h-[300px]'/>
              <img src={Lotus} alt="Lotus Elise" className='m-1 max-h-[300px]'/>
              <img src={Caterham} alt="Caterham 7" className='m-1 max-h-[300px]'/>
              <img src={Veloster} alt="Veloster N" className='m-1 max-h-[300px]'/>
            </div>
          </InfoSection>
          <InfoSection>
            <p className='font-bold text-xl my-2 mx-auto text-center'>
              Sim Racing
            </p>
            <p>
              One hobby I've really taken a liking to is Sim Racing. 
              At my parents place I have a setup with a Thrustmaster T500 and a decent PC that can handle most sims. 
              My go-to sim is iRacing and I typically try and race open-wheelers like the Formula 3 or Formula Renault.
            </p>
            <img src={iRacing} alt="iRacing" className='m-1 max-h-[300px]'/>
          </InfoSection>
          <InfoSection>
            <p className='font-bold text-xl my-2 mx-auto text-center'>
              Video Games
            </p>
            <p>
              Mainly into FPS games and Sports Games, and at the moment I basically only play Rocket League with my roommates.
            </p>
            <img src={RocketLeague} alt="Rocket League" className='m-1 max-h-[300px]'/>
          </InfoSection>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
