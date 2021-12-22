import NavBar from '../Components/Navbar';
import Header from '../Components/Header';

import IconImage from '../Components/MagnetPage/IconImage';
import TextSection from '../Components/MagnetPage/TextSecion';

import city from "../Images/city.webp";
import logo from "../Images/magnet-logo.png";
import office from "../Images/office.jpeg";
import axiom from "../Images/axiom.png";
import automate from "../Images/automate.png";
import review from "../Images/review.png";
import atlas from "../Images/atlas.png";

import nashville from "../Images/nashvile.jpeg";
import scotland from "../Images/scotland.png";

import bash from "../Images/bash.jpeg";
import jenkins from "../Images/jenkins.png";
import csharp from "../Images/csharp.png";
import react from "../Images/react.png";
import refactor from "../Images/refactor.png";
import kudos from '../Images/kudos.png';

function MagnetPage() {
  return (
    <div className="font-mono">
      <NavBar/>
      <div style={{ backgroundImage: `url(${city})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}>
        <Header altDescription='Magnet Forensics Logo' pageDescription='Magnet Forensics Co-op' color='bg-blue-magnet' image={logo}/>
        <div className='bg-white xl:mx-48 border-4 border-neutral-900 min-h-screen px-5'>
          <div>
            <p className="my-5 text-2xl font-bold">Welcome!</p>
            <p>Hey reader! Welcome to my GitHub pages!</p>
            <p>
              On this page I will specifically be going into great detail about my amazing experience during my eight month co-op term at Magnet Forensics.
              I hope by the end of this you get a good idea about all the awesome experiences I got during my time at Magnet.
            </p>
          </div>
          <hr/>
          <div>
            <div className="flex flex-row my-5 content-center">
              <div className="flex-col content-center my-auto mx-2">
                <img src={office} alt="Magnet Forensics Offices" className="m-auto max-h-[15rem] max-w-[15rem] align-middle"/>
              </div>
              <div className="flex-col content-center my-auto">
                <p className="my-3 text-xl font-bold">
                  About Magnet Forensics
                </p>
                <p>
                  Magnet Forensics is a Waterloo-based company that develops tools used primarily by law enforcement or private investigators to uncover digital evidence left on suspects' devices.
                </p>
                <p className='my-2'>
                  I joined Magnet in May of 2021, which just so happened to be at a very exciting time for the company. 
                  On April 28th they became the first Waterloo company to have an IPO in 15 years.
                </p>
              </div>
            </div>
            <hr/>
            <div className="flex flex-row my-5">
              <div className="flex-col content-center my-auto mx-2 mr-5">
                <img src={axiom} alt="AXIOM logo" className="max-w-[4rem]"/>
              </div>
              <div className="flex-col">
                <p className="my-3 text-xl font-bold">
                  AXIOM
                </p>
                <p>
                  Their flagship product is Magnet AXIOM, the desktop tool used to uncover and examine digital evidence from mobile, computer, or cloud sources. 
                  Many different teams work together to develop AXIOM. 
                  For example, there is a dedicated team to parse/extract artifacts (digital evidence that may come in many formats, ex: Skype Call Metadata), and another team to develop EXAMINE, the interface used to analyze and build cases from the data extracted.                  
                </p>
              </div>
            </div>
            <hr/>
            <div className="flex flex-row my-5">
              <div className="flex-col my-auto mx-2 mr-5">
                <IconImage image={automate} alt="AUTOMATE logo"/>
                <IconImage image={atlas} alt="ATLAS logo"/>
                <IconImage image={review} alt="REVIEW logo"/>
              </div>
              <div className="col">
                <p className="my-3 text-xl font-bold">
                  MDIS
                </p>
                <p>
                  While Magnet AXIOM certainly is the company's most successful product, there are some super exciting innovations earlier in their product lifecycle that are rapidly growing in popularity. 
                  The most mature of these innovations come as a trio of products that are marketed together as a part of the Magnet Digital Investigation Suite (MDIS). 
                  These three tools are Magnet AUTOMATE which automates workflows that forensic examiners might otherwise have to perform manually, 
                  Magnet ATLAS which provides collaborative and case management tools for investigators, 
                  and Magnet REVIEW which is a web application to enable non-technical examiners to review evidence and build cases remotely while interacting with a more user-friendly interface than more forensically intensive products such as AXIOM. 
                  Magnet REVIEW ended up being the team I joined for my co-op term and I will go into far more detail later on.                  
                </p>
              </div>
            </div>
            <hr/>
            <div className="flex flex-row my-5">
              <div className="flex-col my-auto mx-2 mr-5">
                <IconImage image={nashville} alt="Nashville PD logo"/>
                <IconImage image={scotland} alt="Scotland PD logo"/>
              </div>
              <div className="col">
                <p className="my-3 text-xl font-bold">
                  Guest Speakers
                </p>
                <p>
                  One thing that I really came to appreciate about Magnet is its policy to have a guest speaker from the field talk about their real-life experiences involving digital forensics. 
                  They would go over case after case of crimes that seemed straight out of a TV show, and hearing about the impact that Magnet was able to make on these cases was so powerful.
                  When the stakes involve justice for the innocent it cannot be stressed enough how motivating it is to come into work with the right attitude and work ethic.
                  I found it amazing how inspiring these detectives were. 
                  They were the real heros so to hear them talk about Magnet's products in such a good light made me so proud to be there (even as a lowly co-op).
                  During my time here we got the chance to hear from guest speakers from Nashville, Scotland, and even Germany. 
                  Each speaker came with their own amazing stories about how real crimes were solved using the tools that Magnet has provided.                  
                </p>
              </div>
            </div>
          </div>
          <hr/>
          <div className="flex flex-row my-5">
            <div className="flex flex-col">
              <div className='flex flex-row my-4'>
                <div className='flex flex-col my-auto mx-2 mr-5 w-[4rem]'/>
                <div className='flex flex-col m-auto'>
                  <p className='text-2xl font-bold'>My Tasks at Magnet</p>
                </div>
              </div>
              <div className="flex flex-row my-4">
                <div className="flex-col my-auto mx-2">
                  <IconImage image={review} alt="REVIEW logo"/>
                </div>
                <TextSection heading="My Team">
                  <p>
                    As mentioned before I joined the <b>Magnet REVIEW</b>. 
                    More specially I originally joined the Taco sub-team which specializes in deployment and infrastructure primarily.
                    This came as very exciting but terrifying news to know I would be surrounded by super cool tech which I unfortunately had little to no experience with.
                    I knew that this term would certainly give me more than enough opportunities to try out new technologies and immediately knew I was on a team that was more than happy to help me learn.
                  </p>
                </TextSection>
              </div>
              <div className="flex flex-row my-4">
                <div className="flex-col my-auto mx-2">
                  <IconImage image={bash} alt="Bash logo"/>
                </div>
                <TextSection heading="Bash Installer">
                  <p>
                    During the early days of my term I found myself working quite frequently on our products installer. 
                    It was written in <b>Bash</b> which I had some experience with during University, so I found it far more approachable than other parts of the product.
                    I started off with small little quality of life improvements such as changing the name of the installer's folder from <b><i>dist</i></b> to <b><i>review-VERSION</i></b>,
                    and slowly built up to adding configuration options into the installer such as allowing them to configure their company's logo that gets uploaded for use in the front-end.                  
                  </p>
                </TextSection>
              </div>
              <div className="flex flex-row my-4">
                <div className="flex-col my-auto mx-2">
                  <IconImage image={jenkins} alt="Jenkins logo"/>
                </div>
                <TextSection heading="Jenkins / Azure CLI">
                  <p>
                    The next phase of my co-op involved entering the world of Jenkins. For the unfamiliar, Jenkins is a pipeline based automation and continuous integration tool to build, test, and deploy our product.
                    I first worked on a ticket to address an issue that I saw arising involving what I would call <b>orphaned clusters</b>. 
                    There seemed to be an issue where one of our build jobs would be triggered to spin up an instance of our product to do some testing on, but after the testing was completed, the cluster was not being torn down.
                    This can be quite a problem when these clusters can cost over $2000 a month. I decided to familiarize myself with the Jenkins pipeline used to build these clusters and the Azure CLI to interact with the resources being created.
                    I ended up using Jenkins environment variables to determine who kicked off the job and then the Azure CLI to automatically tag the resources with the name of the person who started the build in order to maintain responsibility for the clusters.
                    Because of this, it is now far easier to clean up these clusters and save ourselves from spending $2000 a month on a cluster we weren't even using.
                  </p>
                </TextSection>
              </div>
              <div className="flex flex-row my-4">
                <div className="flex-col my-auto mx-2">
                  <IconImage image={csharp} alt="C sharp logo"/>
                </div>
                <TextSection heading="C# (CLI XML Parsing)">
                  <p>
                    My next (and probably my favourite) project of my co-op involved pair-programming with another developer on the team to develop new parsers for our <b>CLI</b>. 
                    For context, our CLI is used to ingest evidence into REVIEW by parsing either JSON or XML files and extracting the needed information from elements to populate models used in REVIEW.
                    Specifically we were tasked with supporting one of our competitor's data formats which came as an XML export. 
                    I should probably add that this was my first major involvement with one of our C# services, so this was an amazing learning experience for myself.
                    This also was about the time where I really felt myself being able to contribute meaningfully to design discussions as I became more comfortable and familiar with our CLI's infrastructure.
                    I remember this so fondly because it felt amazing to contribute to a customer requested Epic in such a meaningful way. It also was so enjoyable to work alongside such an amazing mentor who was so open to collaborate.
                    I think I owe a lot of my growth during my co-op to Christian for being such a great mentor during the work on the project, and it remains one of my most fond memories during my work term.                  
                  </p>
                </TextSection>
              </div>
              <div className="flex flex-row my-4">
                <div className="flex-col my-auto mx-2">
                  <IconImage image={react} alt="React.js logo"/>
                </div>
                <TextSection heading="Front-End Development">
                  <p>
                    During the back half of my co-op there arose a concern about a large release we were supposed to deliver. 
                    However, it just so happened to involve almost entirely front-end and minor application level changes.
                    This meant my Taco sub-team had very few priority items to deliver for this specific release.
                    For this reason we came to the decision that it might be beneficial for me to switch over to the other sub-team (aka the Gadgeteers) to lend a hand.                    
                  </p>
                  <p className='my-2'>
                    This gave me an amazing opportunity to get experience with front-end development. 
                    I learned how to develop using component driven design in React.js and found it super cool to work with one of these powerful frameworks.
                    I also got experience with developing packages as we have an internal npm library which I had to work on.
                    This gave me experience working with the Bootstrap library as our main packages are built on top of it.
                    (I'm even writing this website using Bootstrap 5 because I wanted to learn more about it)                    
                  </p>
                </TextSection>
              </div>
              <div className="flex flex-row my-4">
                <div className="flex-col my-auto mx-2">
                  <IconImage image={refactor} alt="Refactoring icon"/>
                </div>
                <TextSection heading="Refactoring">
                  <p>
                    When nearing the end of my co-op I discovered some inflexibility in one of our microservices when I was working on what should have been a small fix.
                    I brought this to the attention of one of the team's Senior Developers, Rob.
                    To my amazement, he suggested I should take on the tall task of refactoring the problematic areas of the microservice.
                    He explained that it had become a bit of a mess due to some bad practices sneaking their way into production.
                    For the next few weeks I took on this super exciting project, with Rob acting as somewhat of a project manager/mentor for concerns and questions I had while working on it.
                  </p>
                  <p className='my-2'>
                    Through this experience I learned many fascinating concepts involving code completeness and coding practices.
                    I also of course learned the methodology involved with refactoring production code. 
                    I developed whitebox tests, blackbox tests, learned about what makes code hard to maintain, learned concepts of how to keep code flexible, and learned so  about ensuring parity through code changes.
                  </p>
                </TextSection>
              </div>
            </div>
        </div>
        <hr/>
        <div className="flex flex-row my-5">
          <div className="flex-col">
            <div className='flex flex-row my-4'>
              <div className='flex flex-col my-auto mx-2 mr-5 w-[4rem]'/>
              <div className='flex flex-col m-auto'>
                <p className='text-2xl font-bold'>Kudos</p>
              </div>
            </div>
            <div className="flex flex-row my-4">
              <div className="flex flex-col my-auto mx-2">
                <IconImage image={kudos} alt="Kudos"/>
              </div>
              <TextSection>
                <p>
                  I want to close this page out by giving out some much deserved credit to those who helped me during my term.
                  I first would like the REVIEW team as a whole for how amazing of an environment it was to join.
                  Everyone on the team was always so willing to collaborate and help me learn, and this made REVIEW such a pleasure to be a part of.
                  However, there are three individuals I would like to specifically acknowledge for all the above and beyond support they gave me over the past eight months.
                </p>
                <p className='my-2'>
                  First and foremost, I need to extend a huge thank you to my co-op advisor at Magnet, Chris Chevreau. 
                  As my supervisor he was my go-to guy for any issues or support I needed during my time there.
                  He was always happy to help and kept me on the right track whenever I started to get lost.
                  Not only did he offer his own support, he also always made an effort to direct me to the person or resources that might answer some questions I've had.
                  As someone who was new to almost everything during my co-op, having someone point me in the right direction to even figure out where I can learn was so beneficial.
                  He also gave me the needed feedback 
                </p>
                <p className='my-2'>
                  Next I would like to extend another huge thank you Christian Cornelis for his awesome collaborative spirit and his teachings during work we completed together during our parsing epic.
                  I have him to thank for so much of my technical learnings as he ramped me up in C#, unit tests, microservices, and all of our parsing infrastructure.
                  He not only was a great mentor, he was also an absolute pleasure to work with as he always had a great attitude and always maintained a fun spirit.
                </p>
                <p className='my-2'>
                  I also need to extend a huge thank you to Robert Nelson, one of the Senior Developers on the Taco team.
                  I remember during my very first week he stayed on a call with me until 7pm just happily answering all my never-ending questions about all the new things I saw during my first few days.
                  As our resident expert on our Kubernetes infrastructure, he was a crucial resource for me as started my co-op without ever even hearing about Kubernetes.
                </p>
              </TextSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default MagnetPage;
