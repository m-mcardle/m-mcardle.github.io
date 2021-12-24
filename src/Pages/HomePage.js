import MyLink from '../Components/MyLink';
import NavBar from '../Components/Navbar';
import DropDownSection from '../Components/DropDownSection';

import InfoSection from '../Components/HomePage/InfoSection';

import { Images } from '../Data/Images';

function HomePage() {
  return (
    <div className="font-mono">
      <NavBar/>
      <div className='pt-5 bg-gradient-to-r from-gray-400 to-gray-200'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 h-max px-5 2xl:mx-48'>
          <InfoSection span='md:col-span-3' rowSpan='row-span-2'>
            <p className='font-bold text-6xl text-center'>Matthew J. McArdle</p>
            <div className='flex flex-row m-2'>
              <img src={Images.Me} alt="Matthew McArdle" className='max-h-[200px]'/>
              <p className='mx-2'>
                Welcome to my website! On this page I have a few cards that go over some of my interests and experiences.
                I also have a separate <MyLink to="/MagnetPage" text='page'/> going over my amazing experience at Magnet Forensics during my co-op term.
                You can also find a <MyLink to="/ResumePage" text='Digital Resume'/> on another page of this website.
                I also built out a silly little <MyLink to="/TierLists/F1" text='Tier List Page'/> as a side project to learn more about React.js so if you want to see how I rank F1 drivers, UFC fighters and some fast food places go take a look, and see how your picks compare to mine.
              </p>
            </div>
          </InfoSection>
          <InfoSection>
            <img src={Images.Guelph} alt="University of Guelph" className='max-h-[100px] mx-auto'/>
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
            <img src={Images.Magnet} alt="Magnet Forensics" className='max-h-[100px] mx-auto'/>
            <p className="m-2">
            I've just completed an amazing co-op term at Magnet Forensics.
            They are a Waterloo company specializing in building tools for Law Enforcement or Private Investigators to uncover digital evidence on devices.<br/>
            If you want to learn more about it click <MyLink to="MagnetPage" /> to go to my page dedicated to my experience there.
            </p>
          </InfoSection>
          <InfoSection span="md:col-span-3"  hover={false}>
            <div>
              <img src={Images.F1} alt="F1" className='max-h-[100px] mx-auto'/>
              <p className='m-2 text-center'>
                One of my biggest interests is Formula 1. 
                My family has always been racing fans, so as a kid I was always watching alongside my Mom and Dad, but more recently took a much larger interest in the sport.
              </p>
              <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                <InfoSection>
                  <div>
                    <div className='flex flex-row my-auto'>
                      <img src={Images.Lando} alt="Lando Norris" className='hidden lg:flex flex-col max-h-[50px] my-auto mx-auto'/>
                      <img src={Images.McLaren} alt="McLaren" className='flex flex-col max-h-[50px] my-auto mx-auto'/>
                    </div>
                    <div className='flex flex-row'>
                      <p className='inline'>
                      My favourite driver on the grid currently is Lando Norris, so I in turn root for the McLaren F1 team.
                      If you want to see how I ranked all other drivers of the 2021 season, click <MyLink to="/TierLists/F1"/>.
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
                        <img src={Images.F1Chat} alt="F1 Twitch Chat Extension" className='flex flex-col max-h-[300px] mx-auto'/>
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
                        <img src={Images.Visualizer} alt="F1 Standings Visualizer" className='flex flex-col max-h-[300px] mx-auto'/>
                      </div>
                    }/>
                  </div>
                </InfoSection>
                <InfoSection>
                  <img src={Images.Gulf} alt="Gulf McLaren F1 car" className='flex flex-col max-h-[300px] mx-auto'/>
                </InfoSection>
              </div>
            </div>
          </InfoSection>
          <InfoSection>
            <p className='font-bold text-xl my-2 mx-auto text-center'>UFC</p>
            <p className='inline'>
              UFC is pretty neat. Favourite fighter is Khabib.
              If you want to see how I rank a bunch of other fighters, check out my Tier List page by clicking <MyLink to="/TierLists/UFC"/>.
            </p>
            <img src={Images.Khabib} alt="Khabib Nurmagomedov" className='flex flex-col max-h-[300px] mx-auto'/>
          </InfoSection>
          <InfoSection>
            <p className='font-bold text-xl my-2 mx-auto text-center'>NHL</p>
            <p>
              Been a hockey fan my whole life, but more recently haven't had the same interest.
              Favourite player in Marc Andre Fleury cause he's the goat, so I've basically been bouncing around who I support cause he keeps getting traded.
            </p>
            <img src={Images.Fluery} alt="Marc Andre Fleury" className='flex flex-col max-h-[300px] mx-auto'/>
          </InfoSection>
          <InfoSection rowSpan='row-span-2 content-between'>
            <div className='flex-row row-span-1'>
              <p className='font-bold text-xl my-2 mx-auto text-center'>Track Days</p>
              <p>
                One of my favourite ways to spend a day is driving at a track. 
              One of my favourite ways to spend a day is driving at a track. 
                One of my favourite ways to spend a day is driving at a track. 
                My Dad and I have joined a group of some really fun people to rent out the Grand Bend Motorplex for some open lapping every other week of the summer.
                Most of our driving is done in my Dad's Ariel Atom or my Hyundai Veloster N but I've been lucky enough to try out a Lotus Elise, Caterham 7, and a fun little Fiat 500 Abarth.
              </p>
            </div>
            <div>
              <img src={Images.GrandBend} alt="Grand Bend Motorplex" className='m-1 max-h-[300px]'/>
            </div>
            <div>
              <div className='flex flex-row overflow-auto'>
                  <img src={Images.Atom} alt="Ariel Atom" className='m-1 max-h-[300px]'/>
                  <img src={Images.Lotus} alt="Lotus Elise" className='m-1 max-h-[300px]'/>
                  <img src={Images.Caterham} alt="Caterham 7" className='m-1 max-h-[300px]'/>
                  <img src={Images.Veloster} alt="Veloster N" className='m-1 max-h-[300px]'/>
                  <img src={Images.Fiat} alt="Fiat 500" className='m-1 max-h-[300px]'/>
              </div>
              <p className='text-xs opacity-50 text-center'>Scroll to see all the cars I've driven so far</p>
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
            <img src={Images.iRacing} alt="iRacing" className='m-1 max-h-[300px]'/>
          </InfoSection>
          <InfoSection>
            <p className='font-bold text-xl my-2 mx-auto text-center'>
              Video Games
            </p>
            <p>
              Mainly into FPS games and Sports Games, and at the moment I basically only play Rocket League with my roommates.
            </p>
            <img src={Images.RocketLeague} alt="Rocket League" className='m-1 max-h-[300px]'/>
          </InfoSection>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
