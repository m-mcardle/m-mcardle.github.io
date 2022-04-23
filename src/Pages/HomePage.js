import { Images } from '../Data/Images';

import { useState } from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { animated, useSpring, config } from 'react-spring';

import { GoChevronDown } from 'react-icons/go';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import Skillbar from '../Components/HomePage/SkillBar';
import NavBar from '../Components/Navbar';


function HomePage() {

  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 50,
    config: config.slow,
    onRest: () => set(!flip),
  })

  return (
    <div className='font-mono'>
      <NavBar/>
      <Parallax pages={5} className='bg-black text-white'>
        {/* Background with stars */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: `url(stars.jpg)`,
            backgroundSize: 'cover'
          }}
        >
        </ParallaxLayer>

        {/* Contact Info */}
        <ParallaxLayer
          offset={1}
          speed={2}
          sticky={{start: 1.25, end: 5}}
          style={{right: 0, width: 25}}
        >
          <ContactInfo />
        </ParallaxLayer>

        {/* Hello Message */}
        <ParallaxLayer
          offset={0.5}
          speed={2}
          factor={0.5}
        >
          <div className='text-center'>
            <p className='sm:text-[72px] text-[52px]'>Hello World!</p>
          </div>
          <animated.div style={props} className='fixed bottom-0 left-[50%] translate-x-[-50%]'>
            <p className='text-sm font-light text-center'>Scroll</p>
            <GoChevronDown color='white' size={64}/>
          </animated.div>
        </ParallaxLayer>

        {/* Introduction, Education, and Skills */}
        <ParallaxLayer
          offset={1}
          speed={2}
          factor={0.5}
        >
          <div className={`relative lg:text-left text-center p-10 ${styles.leftCenter}`}>
            <p className='font-bold text-[72px]'>Welcome!</p>
          </div>
          <div className={`relative flex flex-row lg:w-[30%] w-fit bg-[#3B3B3B] m-5 ${styles.leftCenter} ${styles.border}`}>
            <img src={Images.Me} alt="Matthew McArdle" className='max-h-[200px]'/>
            <div className='flex flex-col justify-center text-center w-full'>
              <h2 className='font-bold text-[42px]'>
                Hey there! 
              </h2>
              <p className='mx-2 text-[10px]'>
                My name is Matt and this is my website!
              </p>
              <p className='mx-2 text-[10px]'>
                Scroll through to learn a bit about me.
              </p>
            </div>
          </div>

          <div className={`relative lg:text-right text-center p-10 ${styles.rightCenter}`}> 
            <p className='font-bold text-[72px]'>Education</p>
          </div>
          <div className={`relative ${styles.rightCenter}`}>
            <div className={`lg:w-[40%] w-[60%] bg-[#3B3B3B] lg:ml-auto lg:mr-5 mx-auto my-5 ${styles.border}`}>
              <div className='bg-white p-5'>
                <img src={Images.Guelph} alt="University of Guelph" className='max-h-[100px] mx-auto'/>
              </div>
              <p className="m-2">
              3rd year Software Engineering student at the University of Guelph
              </p>
              <ul className='pl-10 list-disc py-3'>
                <li>Pursuing a minor in Business</li>
                <li>Deans List student with GPA of 87.9%</li>
                <li>Recipient of Braithewaite Business Scholarship</li>
                <li>Graduating May 2024</li>
              </ul>
            </div>            
          </div>

          <div className={`relative lg:text-left text-center p-10 ${styles.leftCenter}`}>
            <p className='font-bold text-[72px]'>Skills</p>
          </div>
          <div className={`relative lg:max-w-[20%] max-w-[60%] bg-[#3B3B3B] text-white m-5 p-2 grid grid-cols-2 text-center ${styles.leftCenter} ${styles.border}`}>
            <img src={Images.C} alt="C" className='max-h-[100px] max-w-[100px] p-5'/>
            <Skillbar skill={"95%"}/>
            <img src={Images.Csharp} alt="C#" className='max-h-[100px] max-w-[100px]'/>
            <Skillbar skill={"90%"}/>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"} alt="React.js" className='max-h-[100px] max-w-[100px] p-4'/>
            <Skillbar skill={"90%"}/>
            <img src={Images.Python} alt="Python" className='max-h-[100px] max-w-[100px] p-4'/>
            <Skillbar skill={"80%"}/>
            <img src={Images.JavaScript} alt="JavaScript" className='max-h-[100px] max-w-[100px] p-4'/>
            <Skillbar skill={"80%"}/>
            <img src={Images.Java} alt="Java" className='max-h-[100px] max-w-[100px] p-4'/>
            <Skillbar skill={"70%"}/>            
            {/* HTML / CSS */}
            {/* Bash?? */}
            {/* Swift??? */}
            {/* Tailwind CSS */}
            {/* Bootstrap */}
            {/* AWS / Azure */}
          </div>
        </ParallaxLayer>

        {/* Work Experience */}
        <ParallaxLayer
          offset={2}
          speed={2}
        >
          <div className='relative text-center p-10'>
            <p className='font-bold text-[72px]'>Work Experience</p>
          </div>
          <div className={`w-[60%] bg-[#3B3B3B] relative ${styles.center} ${styles.border}`}>
            <div className='bg-white p-5'>
              <img src={Images.Magnet} alt="Magnet Forensics" className='max-h-[100px] mx-auto'/>
            </div>
            <div className='flex flex-row w-full justify-between'>
              <p className="m-2">
                Magnet Forensics Software Developer (Co-op)
              </p>
              <p className="m-2 text-right right-0 xl:block hidden">
                May 2021 - December 2021
              </p>
            </div>
            <ul className='pl-10 list-disc py-3'>
              <li>Nominated for the University of Guelph's Co-op Student of the Year</li>
              <li>Developed C# microservices</li>
              <li>Created an XML parser to interpret documents and ingest them via a CLI</li>
              <li>Built Jenkins pipelines to automate deployment and manage CI/CD workflows</li>
              <li>Frond-end development using React.js and a custom Bootstrap-based library</li>
              <li>Wrote Bash scripts to perform installations and upgrades of Kubernetes clusters</li>
              <li>Managed cloud resources hosted on Microsoft Azure and AWS</li>
            </ul>
          </div>
          <div className={`w-[60%] bg-[#3B3B3B] top-10 relative ${styles.center} ${styles.border}`}>
            <div className='bg-white p-5'>
              <img src={'Vidyard.svg'} alt="Vidyard" className='max-h-[100px] mx-auto'/>
            </div>
            <div className='flex flex-row w-full justify-between'>
              <p className="m-2">
                Vidyard Software Developer (Co-op)
              </p>
              <p className="m-2 text-right right-0 xl:block hidden">
                May 2022 - August 2022
              </p>
            </div>
            <ul className='pl-10 list-disc py-3'>
              <li>Upcoming...</li>
            </ul>
          </div>
        </ParallaxLayer>

        {/* Projects */}
        <ParallaxLayer
          offset={3}
          speed={2}
        >
          <div className='relative text-center p-10 mx-8'>
            <p className='font-bold text-[72px]'>Personal Projects</p>
          </div>
          <div className='flex flex-row flex-wrap justify-center p-10 ml-20 mr-20'>
            <div className={`${styles.projectCard} ${styles.border}`}>
              <div className='flex-grow bg-white p-5'>
                <img src={Images.Python} alt="Python" className='max-h-[100px] mx-auto'/>
              </div>
              <div>
                <p className="float-left m-2">
                  F1 Standings Visualizer
                </p>
                <p className="float-right text-right m-2 lg:block hidden">
                  2021
                </p>
              </div>
              <ul className='flex-grow pl-10 list-disc py-3'>
                <li>Using Dash and Plot.ly to display a visualizer of F1 standings in all F1 seasons</li>
                <li>Parsed XML responses from a public API into a Plot.ly supported format</li>
                <li>Cached response data using a MySQL database</li>
                <li>Hosted application using AWS to allow for remote access to the visualizer</li>
              </ul>
              <ProjectLink link={"https://github.com/m-mcardle/f1-visualizer"} />
            </div>
            <div className={`${styles.projectCard} ${styles.border}`}>
              <div className='flex-grow bg-white p-5'>
                <img src={Images.F1} alt="Python" className='max-h-[100px] mx-auto'/>
              </div>
              <div>
                <p className="float-left m-2">
                  Twitch Chat Chrome Extension
                </p>
                <p className="float-right text-right m-2 lg:block hidden">
                  2021
                </p>
              </div>
              <ul className='flex-grow pl-10 list-disc py-3'>
                <li>Embeds a Twitch chat element into official F1 and ESPN+ video players</li>
                <li>Developed using HTML and JavaScript</li>
                <li>Allows for F1 or UFC fans to communicate easily during the broadcasts</li>
              </ul>
              <ProjectLink link={"https://github.com/m-mcardle/twitch-chat-extension"} />
            </div>
            <div className={`${styles.projectCard} ${styles.border}`}>
              <div className='bg-white p-5'>
                <img src={Images.React} alt="ReactJs" className='max-h-[100px] mx-auto'/>
              </div>
              <div>
                <p className="float-left m-2">
                  Personal Website with React.js
                </p>
                <p className="float-right text-right m-2 lg:block hidden">
                  2021
                </p>
              </div>
              <ul className='flex-grow pl-10 list-disc py-3'>
                <li>Styled pages using Tailwind CSS</li>
                <li>Built responsive web application using the React framework</li>
                <li>Built interactive page to generate Tier Lists</li>
              </ul>
              <ProjectLink link={"https://github.com/m-mcardle/m-mcardle.github.io"} />
            </div>
            <div className={`${styles.projectCard} ${styles.border}`}>
              <div className='bg-white p-5'>
                <img src={Images.ReactNative} alt="React Native" className='max-h-[100px] mx-auto'/>
              </div>
              <div>
                <p className="float-left m-2">
                  React Native App with Firebase
                </p>
                <p className="float-right text-right m-2 lg:block hidden">
                  2022
                </p>
              </div>
              <ul className='flex-grow pl-10 list-disc py-3'>
                <li>App to facilitate community engagement in the City of Guelph</li>
                <li>Firebase Authentication to manage users</li>
                <li>Stored user data using Firestore</li>
                <li>Built app using React Native and Expo for iOS, Android, and the Web</li>
              </ul>
              <ProjectLink link={"https://github.com/m-mcardle/Agile9-App"} />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className='flex flex-col space-y-2 items-end bg-white text-black sm:p-5 w-fit'>
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
  );
}

function ProjectLink({link}) {
  return (
    <div className='flex flex-row justify-between p-2 border-t'>
      <a href={link}>
        <AiFillGithub className='fill-white' style={{height: "2em", width: "2em"}}/>
      </a>
    </div>
  );
}

const styles = {
  border: 'border border-white',
  leftCenter: 'lg:left-20 lg:translate-x-0 left-[50%] translate-x-[-50%]',
  rightCenter: 'lg:right-20 lg:translate-x-0 lg:left-[auto] right-[auto] left-[50%] translate-x-[-50%]',
  center: 'left-[50%] translate-x-[-50%]',
  projectCard: 'flex flex-col xl:w-[40%] w-[80%] bg-[#3B3B3B] m-5',
}


export default HomePage;
