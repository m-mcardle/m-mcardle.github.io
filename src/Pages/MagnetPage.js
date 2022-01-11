import NavBar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import IconImage from '../Components/MagnetPage/IconImage';
import TextSection from '../Components/MagnetPage/TextSection';

import { Images } from '../Data/Images';
import GoalSection, { GradeSection, SuccessLevels } from '../Components/MagnetPage/GoalSection';
import NavigateButton from '../Components/MagnetPage/NavigateButton';

import { MdWavingHand, MdSummarize } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { BiTask } from 'react-icons/bi';
import { ImCheckboxChecked, ImHappy2 } from 'react-icons/im';

import { useRef } from 'react';

function MagnetPage() {

  const intro = useRef(null);
  const about = useRef(null);
  const myTasks = useRef(null);
  const myGoals = useRef(null);
  const kudos = useRef(null);
  const conclusion = useRef(null);

  return (
    <div className="font-mono">
      <NavBar/>
      <div style={{ backgroundImage: `url(${Images.City})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}>
        <div className='fixed md:block hidden items-end left-0 top-0 h-full pt-10 px-2 bg-blue-magnet z-[19] w-32 align-text-bottom '>
          <p className='font-bold text-lg my-3'>Navigate</p>
          <div className="relative space-y-2">
            <NavigateButton clicked={() => intro.current.scrollIntoView()} text="Introduction" icon={<MdWavingHand />}/>
            <NavigateButton clicked={() => about.current.scrollIntoView()} text="About Magnet" icon={<BsFillInfoCircleFill/>}/>
            <NavigateButton clicked={() => myTasks.current.scrollIntoView()} text="My Tasks" icon={<BiTask/>}/>
            <NavigateButton clicked={() => myGoals.current.scrollIntoView()} text="My Goals" icon={<ImCheckboxChecked/>}/>
            <NavigateButton clicked={() => kudos.current.scrollIntoView()} text="Kudos" icon={<ImHappy2/>}/>
            <NavigateButton clicked={() => conclusion.current.scrollIntoView()} text="Conclusion" icon={<MdSummarize/>}/>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='bg-white xl:mx-48 md:ml-32 border-4 border-neutral-900 min-h-screen'>
            <Header altDescription='Magnet Forensics Logo' pageDescription='Magnet Forensics Co-op' color='bg-blue-magnet' image={Images.Logo}/>
            <div className='px-5'>
              <div ref={intro} className='space-y-2'>
                <p className="my-5 text-2xl font-bold">Welcome!</p>
                <p>
                  My name is <b>Matthew McArdle</b> and I am a third year Software Engineering Student at the University of Guelph. 
                  I have just completed my very first co-op placement at the amazing Waterloo company <b>Magnet Forensics</b>.
                  On this page I will specifically be going into great detail about my experiences during my time there.
                </p>
                <p>
                  I hope by the end of this you get a good idea about all the awesome experiences I had during my time at Magnet, and are as blown away as I am about how many different things I had the opportunity to learn.
                </p>
              </div>
              <hr/>
              <div ref={about} className='flex flex-col'>
                <p className="my-5 mx-auto text-2xl font-bold">
                  About Magnet Forensics
                </p>
                <div className="flex md:flex-row flex-col my-5 content-center">
                  <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-2">
                    <img src={Images.Office} alt="Magnet Forensics Offices" className="m-auto max-h-[15rem] max-w-[15rem] align-middle flex"/>
                  </div>
                  <div className="flex-col content-center my-auto">
                    <p>
                      Magnet Forensics is a Waterloo-based company that develops tools used primarily by law enforcement or private investigators to uncover digital evidence left on suspects' or victims' devices.
                    </p>
                    <p className='my-2'>
                      I joined Magnet in May of 2021, which just so happened to be at a very exciting time for the company. 
                      On April 28th they became the first Waterloo company to have an IPO in 15 years.
                    </p>
                  </div>
                </div>
                <hr/>
                <div className="flex md:flex-row flex-col my-5">
                  <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                    <IconImage image={Images.Axiom} alt="AXIOM logo"/>
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
                <div className="flex md:flex-row flex-col my-5">
                  <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                    <IconImage image={Images.Automate} alt="AUTOMATE logo"/>
                    <IconImage image={Images.Atlas} alt="ATLAS logo"/>
                    <IconImage image={Images.Review} alt="REVIEW logo"/>
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
                <div className="flex md:flex-row flex-col my-5">
                  <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                    <IconImage image={Images.Nashville} alt="Nashville PD logo"/>
                    <IconImage image={Images.Scotland} alt="Scotland PD logo"/>
                  </div>
                  <div className="col">
                    <p className="my-3 text-xl font-bold">
                      Guest Speakers
                    </p>
                    <p>
                      One thing that I really came to appreciate about Magnet is its policy at each all-hands meetings to have a guest speaker from the field talk about their real-life experiences involving digital forensics. 
                      They would go over case after case of crimes that seemed straight out of a TV show, and hearing about the impact that Magnet was able to make on these cases was so powerful.
                      When the stakes involve justice for the innocent it cannot be stressed enough how motivating it is to come into work with the right attitude and work ethic.
                      I found it amazing how inspiring these detectives were. 
                      They were the real heros so to hear them talk about Magnet's products in such a good light made me so proud to be there (even as a lowly co-op).
                      During my time here we got the chance to hear from guest speakers from Nashville, Scotland, and even Germany. 
                      Each speaker came with their own amazing stories about how real crimes were solved using the tools that Magnet has provided.                  
                    </p>
                  </div>
                </div>
                <hr/>
                <div ref={myTasks} className="flex flex-row my-5">
                  <div className="flex flex-col">
                    <div className='flex flex-row my-4'>
                      <div className='flex flex-col my-auto mx-2 mr-5 w-[4rem]'/>
                      <div className='flex flex-col m-auto'>
                        <p className='text-2xl font-bold'>My Tasks at Magnet</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col my-4">
                      <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                        <IconImage image={Images.Review} alt="REVIEW logo"/>
                      </div>
                      <TextSection heading="My Team" subheading="/ Introduction">
                        <p>
                          As mentioned before I joined the <b>Magnet REVIEW</b> team. 
                          More specially I originally joined the Taco sub-team which specializes in deployment and infrastructure primarily.
                          This came as very exciting but terrifying news to know I would be surrounded by super cool tech which I unfortunately had little to no experience with.
                          I knew that this term would certainly give me more than enough opportunities to try out new technologies and immediately knew I was on a team that was more than happy to help me learn.
                        </p>
                        <p>
                          I want to take some time now to go over some important themes/tasks I performed during my time at Magnet to demonstrate some of the awesome opportunities I had to learn.
                        </p>
                      </TextSection>
                    </div>
                    <div className="flex md:flex-row flex-col my-4">
                      <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                        <IconImage image={Images.Bash} alt="Bash logo"/>
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
                    <div className="flex md:flex-row flex-col my-4">
                      <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                        <IconImage image={Images.Jenkins} alt="Jenkins logo"/>
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
                    <div className="flex md:flex-row flex-col my-4">
                      <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                        <IconImage image={Images.Csharp} alt="C sharp logo"/>
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
                    <div className="flex md:flex-row flex-col my-4">
                      <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                        <IconImage image={Images.React} alt="React.js logo"/>
                      </div>
                      <TextSection heading="Front-End Development">
                        <p>
                          During the back half of my co-op there arose a concern about a large release we were supposed to deliver. 
                          However, it just so happened to involve almost entirely front-end and minor application level changes.
                          This meant my Taco sub-team had very few priority items to deliver for this specific release.
                          For this reason we came to the decision that it might be beneficial for me to switch over to the other sub-team (aka the Gadgeteers) to lend a hand.                    
                        </p>
                        <p>
                          This gave me an amazing opportunity to get experience with front-end development. 
                          I learned how to develop using component driven design in React.js and found it super cool to work with one of these powerful frameworks.
                          I also got experience with developing packages as we have an internal npm library which I had to work on.
                          This gave me experience working with the Bootstrap library as our main packages are built on top of it.
                        </p>
                      </TextSection>
                    </div>
                    <div className="flex md:flex-row flex-col my-4">
                      <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                        <IconImage image={Images.Refactor} alt="Refactoring icon"/>
                      </div>
                      <TextSection heading="Refactoring">
                        <p>
                          When nearing the end of my co-op I discovered some inflexibility in one of our microservices when I was working on what should have been a small fix.
                          I brought this to the attention of one of the team's Senior Developers, Rob.
                          To my amazement, he suggested I should take on the tall task of refactoring the problematic areas of the microservice.
                          He explained that it had become a bit of a mess due to some bad practices sneaking their way into production.
                          For the next few weeks I took on this super exciting project, with Rob acting as somewhat of a project manager/mentor for concerns and questions I had while working on it.
                        </p>
                        <p>
                          Through this experience I learned many fascinating concepts involving code completeness and coding practices.
                          I also of course learned the methodology involved with refactoring production code. 
                          I developed whitebox tests, blackbox tests, learned about what makes code hard to maintain, learned concepts of how to keep code flexible, and learned so much about how to not just write functional code, but maintainable and extendable code.
                        </p>
                      </TextSection>
                    </div>
                  </div>
                </div>
                <hr/>
                <div ref={myGoals} className="flex flex-row my-5">
                  <div className="flex flex-col w-full">
                    <div className='flex flex-col mx-auto my-4 space-y-2'>
                      <p className='text-2xl mx-auto text-center font-bold w-full'>My Goals / Outcomes</p>
                      <p>In this section I will list all my goals I set during my co-op term, assign them a grade, and write a reflection for how the goal turned out. The possible grades I could assign are listed below. Click on the <b>Read More</b> of a card to find each reflection.</p>
                    </div>
                    <div className='flex flex-row space-x-2 overflow-auto'>
                      <p className='lg:text-lg text-sm my-auto'>Grades:</p>
                      {Object.values(SuccessLevels).map(level => GradeSection(level))}
                    </div>
                    <hr/>
                    <div className='flex flex-row my-4 w-full'>
                      <div className='flex flex-col w-full'>
                        <GoalSection 
                          title="C#" 
                          description="Become proficient in C#"
                          image={<IconImage image={Images.Csharp} alt="C#"/>}
                          grade={SuccessLevels.Outstanding}
                        >
                          One goal was to become proficient using C#. 
                          I came into the work term with no prior experience with the language and considering almost all of our microservices are written in C# I knew I would need to ramp myself up on C#.
                          I accomplished this goal by signing up on Pluralsight for a C# learning course to cover the language basics, and made a personal effort to give all code reviews written in C# a look so I can learn by example and by asking the other developer's questions about their code.
                          Even with that personal effort I still have to say that I would not have learned so much so fast about the language if it wasn't for my pair programming experience I previously mentioned with Christian.
                          By learning through my Pluralsight course, observing the other dev's new C# code, and an amazing hands-on learning experience working on our CLI, I can confidently say I am now comfortable developing in C#.
                          I would certainly say I have accomplished this goal.
                        </GoalSection>
                        <GoalSection 
                          title="AWS" 
                          description="Become an AWS Certified Cloud Practitioner" 
                          image={<IconImage image={Images.AWS} alt="AWS"/>}
                          grade={SuccessLevels.Satisfactory}
                        >
                          Looking back this is my most regretted goal. 
                          My Magnet mentor Chris warned me that as I became more involved with the team I would find this goal not as appealing and unfortunately that was exactly the case.
                          I believed getting a certification would be a great tangible evidence of my learnings during my co-op, but as I became completely integrated into the team, I found little time to dedicate to this goal.
                          On top of that, the certification itself became less and less appealing as I did more and more AWS courses. It turns out that the certification is targeted at product management or other roles with less of a focus on technical ability.
                          This essentially made the course focused on using the AWS dashboard and learning the high-level definitions of each AWS product. 
                          It also put more of a focus on cost-management and other tasks that a employee in a leadership role would care about, and as a co-op hoping to learn about implementations, that didn't align with my current career status.
                          I ended up accepting that this goal would not be accomplished in lieu of the issues I just mentioned. 
                          However, I would honestly measure it a slight success because through my co-op term I learned so much about AWS just through hands on experience (even if I don't have a certification to show for it).
                        </GoalSection>
                        <GoalSection
                          title="Soft Skills"
                          description="Improve my ability to engage in technical and design conversations" 
                          image={<IconImage image={Images.Conversation} alt="Conversation Icon"/>}
                          grade={SuccessLevels.Outstanding}
                        >
                          Early on in my co-op I felt myself lurking in group conversations about implementations and design orientated conversations, especially when it involved a technology I hadn't worked with yet.
                          I wanted to be able to contribute to these conversations so I made it a goal of mine to learn from my coworkers about how they approach those types of conversations, and also research any technologies or concepts that I was unfamiliar with when they were brought up in these conversations.
                          This turned out to be one of my favourite goals looking back as it pushed me out of my comfort zone to learn about so many new technologies during my term. 
                          I also think this goal helped develop a very important skill, engaging in discussions without an expert-level of knowledge about the subject. 
                          By the end of the term I feel I learned how to ask the important questions during this discussions to understand the problems and possible solutions, without needing to be very experienced with the technologies involved in the problem.
                          This allowed me to contribute my opinion far more during design discussions and when creating acceptance-criteria for a ticket, and I think this growth in my abilities really unlocked a huge aspect of the job for me once I was able to engage in these conversations.
                          I am very proud of how this goal turned out and I would certainly say I achieved it.
                        </GoalSection>
                        <GoalSection
                          title="Business"
                          description="Learn from Product Managers about the business aspects of software development" 
                          image={<IconImage image={Images.Business} alt="Business Icon"/>}
                          grade={SuccessLevels.Success}
                        >
                          Because of my ongoing pursuit of a Minor in Business arts, I figured during my work-term I should avoid only focusing only on the software development aspects of the team and also try and get some learnings about the business of the company.
                          To achieve this I made it a goal of mine to make an extra effort to interact and pay close attention to my team's Product Managers.
                          By paying attention to how they make decisions and set priorities for the team, I hoped to learn how software can be valued from a business perspective.
                          Luckily for me, I had plenty of opportunities to be involved in timeline and priority discussions with our Product Managers, and even had some 1-on-1 opportunities to discuss specific feature requests with them.
                          This allowed me to ask questions about risk management and customer relations, and give me real life experience in a highly active business environment.
                          I never got quite comfortable enough to ask for personal discussions as I had hoped to, but because of all of the amazing interactions that I was involved in naturally with our Product Managers, I would mark this goal as a success.
                        </GoalSection>
                        <GoalSection
                          title="Kubernetes"
                          description="Familiarize myself with our Kubernetes infrastructure" 
                          image={<IconImage image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png"} alt="Kubernetes"/> /* TODO Kubernetes logo in S3 */}
                          grade={SuccessLevels.Success}
                        >
                          During my first four months of my co-op I learned the base level knowledge needed to understand our Kubernetes infrastructure, but knew there is just so much more for me to learn about it.
                          Because of this, I made it a goal of mine in my last four months to become much more familiar with Kubernetes.
                          To accomplish this I planned on completing more Kubernetes related tickets during my last months at Magnet, but ran into difficulty when priorities were set on front-end related tickets.
                          However, I stayed determined to surround myself with Kubernetes and volunteered as a Support Tribute to help troubleshoot issues in active REVIEW environments.
                          Luckily for me most of the issues require navigation through Kubernetes to at the very least diagnose the issue, and sometimes the issue is even Kubernetes related.
                          This allowed me to slowly expand my familiarity with Kubernetes environments, and during my last month I even ran a seminar with two of our new hires to give a surface level tutorial with our installations and Kubernetes deployments.
                          Because I was able to run a seminar for a new hires, I would certainly say I achieved my goal of becoming familiar with Kubernetes.
                        </GoalSection>
                        <GoalSection
                          title="Co-op Relations"
                          description="Become more involved with co-op social events to build relationships" 
                          image={<IconImage image={Images.Friends} alt="Friends Icon"/>}
                          grade={SuccessLevels.Outstanding}
                        >
                          After four months at Magnet I realized I had been focusing too much on maximizing my productivity during work hours, and was missing out on some great social opportunities that Magnet was providing.
                          Magnet has a weekly meeting for co-op students to attend to relax and play games and socialize, and during my first term I was taking myself too seriously and rarely attended.
                          This meant I missed out of meeting some awesome people and possible future connections to use in my career. 
                          For this reason, I made it a goal of mine to attend all social events presented to me (work-permitting).
                          After attending almost all of the term's co-op meetings, I have made friends with plenty of the other co-op students and have remained in touch even after the term.
                          Therefore I would mark this goal as an outstanding success.
                        </GoalSection>
                        <GoalSection
                          title="Python"
                          description="Become familiar with the Python programming language" 
                          image={<IconImage image={Images.Python} alt="Python Logo"/> }
                          grade={SuccessLevels.Outstanding}
                        >
                          During my first four months of my co-op, I worked with Python for my first time to develop load-testing tests using the Locust framework.
                          I found the language to be pretty fun to learn, and knew with its reputation I should certainly be more comfortable with the language.
                          Therefore, I made it a goal for my second term to learn Python through any means I could.
                          When I originally made this goal I did it with the information that we were planning to create new deployment scripts in Python, but unfortunately that task was delegating to another team, and I didn't get the opportunity to develop it.
                          This didn't stop my goal however, as when the code moved into code review, I gave it plenty of my attention and learned from the other developers code.
                          On top of this, I completed two side projects using the language to give myself ample opportunity to learn it.
                          These projects were my F1 Standings Visualizer and the yearly Advent of Code challenge (which I did in Python).
                          After these two projects, and my learnings during my work term, I would certainly say I am familiar with the language and this goal has been achieved.
                        </GoalSection>
                        <GoalSection
                          title="Run BVT"
                          description="Take on the responsibility of being a BVT (Build Verification Testing) champion or co-champion" 
                          image={<IconImage image={"https://static.thenounproject.com/png/83825-200.png"} alt="Testing Icon"/> /* TODO testing icon in S3 */}
                          grade={SuccessLevels.Outstanding}
                        >
                          I became very interested in the responsibilities required to run a smooth BVT before a release. 
                          However, I knew that the only release left before my term was over was going to be a very important one.
                          For this reason, I decided to take on the responsibility as a co-champion with another developer to ensure all went smoothly.
                          This gave me an opportunity to lead the whole team to ensure all necessary behaviour is tested and all procedure is followed before a release.
                          It was quite a stressful goal to take on, but I am so glad I gave myself the opportunity to take on such an important role during my time at Magnet.
                        </GoalSection>
                        <GoalSection
                          title="Personal Projects"
                          description="Apply myself outside of work to enhance my portfolio" 
                          image={<IconImage image={"https://cdn-icons-png.flaticon.com/512/1087/1087815.png"} alt="Idea Icon"/> /* TODO idea icon in S3 */}
                          grade={SuccessLevels.Outstanding}
                        >
                          As my co-op term came closer to its end, I realized I had learned so much but didn't apply my learnings to any projects for my portfolio.
                          Because of this, I made it a goal to apply learnings from work hours into personal projects during my leisure time.
                          This gave me opportunity to develop projects in Python, React.js, Bash, and C that I can add to my portfolio to show future employers.
                          I ended up developing a F1 Standings Visualizer in Python, this whole website in React.js and Tailwind, some helper scripts for both projects in Bash, a Roulette simulator for a roommate of mine in C, and a hangman game in C as well.
                          Of course I always will wish I had completed even more projects, but I am very happy with what resulted from this goal and would mark it as a great success.
                        </GoalSection>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div ref={kudos} className="flex flex-row my-5 overflow-auto">
                  <div className="flex-col">
                    <div className='flex flex-row my-4'>
                      <div className='flex flex-col m-auto'>
                        <p className='text-2xl font-bold'>Kudos</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col my-4">
                      <div className="md:block md:mx-2 md:mr-5 flex flex-row mx-auto my-auto">
                        <IconImage image={Images.Kudos} alt="Kudos"/>
                      </div>
                      <TextSection>
                        <p>
                          I want to close this page out by giving out some much deserved credit to those who helped me during my term.
                          I first would like the REVIEW team as a whole for how amazing of an environment it was to join.
                          Everyone on the team was always so willing to collaborate and help me learn, and this made REVIEW such a pleasure to be a part of.
                          However, there are three individuals I would like to specifically acknowledge for all the above and beyond support they gave me over the past eight months.
                        </p>
                        <p>
                          First and foremost, I need to extend a huge thank you to my co-op advisor at Magnet, <b>Chris Chevreau</b>. 
                          As my supervisor he was my go-to guy for any issues or support I needed during my time there.
                          He was always happy to help and kept me on the right track whenever I started to get lost.
                          Not only did he offer his own support, he also always made an effort to direct me to the person or resources that might answer some questions I've had.
                          As someone who was new to almost everything during my co-op, having someone point me in the right direction to even figure out where I can learn was so beneficial.
                          He also gave me the feedback I needed to achieve my goals and grow to my full potential during my time there.
                          I owe so much to Chris for how well I was able to integrate into the Magnet REVIEW team.
                        </p>
                        <p>
                          Next I would like to extend another huge thank you to <b>Christian Cornelis</b> for his awesome collaborative spirit and his teachings during work we completed together during our parsing epic.
                          I have him to thank for so much of my technical learnings as he ramped me up in C#, unit tests, microservices, and all of our parsing infrastructure.
                          He not only was a great mentor, he was also an absolute pleasure to work with as he always had a great attitude and always maintained a upbeat spirit.
                        </p>
                        <p>
                          I also need to extend a huge thank you to <b>Robert Nelson</b>, one of the Senior Developers on the Taco team.
                          I remember during my very first week he stayed on a call with me until 7pm just happily answering all my never-ending questions about all the new things I saw during my first few days.
                          As our resident expert on our Kubernetes infrastructure, he was a crucial resource for me as started my co-op without ever even hearing about Kubernetes.
                          Even after eight months working with Rob, I'm still convinced hes some sort of software developing wizard as he had just a mind boggling amount of knowledge available. 
                          Rob was an amazing resource but an even more amazing mentor, and I am so grateful that I got the privilege to work alongside him.
                        </p>
                        <p>
                          I seriously cannot stress enough how amazing the people were during my time at Magnet. 
                          I was blown away each and every day with their willingness to collaborate and educate, and maintain a super fun environment to work in as well.
                          For a first co-op experience, I cannot imagine anything better and I am so grateful I got the opportunity to work with such amazing people.
                        </p>
                      </TextSection>
                    </div>
                  </div>
                </div>
                <hr/>
                <div ref={conclusion} className="flex flex-row my-5">
                  <div className="flex-col max-w-full">
                    <div className='flex flex-row my-4'>
                      <div className='flex flex-col m-auto'>
                        <p className='text-2xl font-bold'>Conclusion / Summary </p>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col my-4">
                      <TextSection>
                        <p>
                          Overall my co-op term was an absolutely amazing experience and I am so grateful for all the opportunities to learn from such intelligent and passionate people.
                          I am also super grateful that I got experience with so many fascinating and powerful technologies during my time there such as
                          Jenkins, AWS, Grafana, Gerrit, Locust, ElasticSearch, Python, Kubernetes, Azure, Docker, C#, Bootstrap, React.js, and Bash.
                          For my first co-op opportunity, I could never have imagined it being so successful and enjoyable, and it has made me even more excited about my future career.
                        </p>
                      </TextSection>
                    </div>
                    <div className="flex md:flex-row flex-col my-4 overflow-auto justify-center">
                      <TextSection>
                        <div className='flex max-w-full space-x-2'>
                          <IconImage image={Images.Jenkins} alt="Jenkins"/>
                          <IconImage image={Images.AWS} alt="AWS"/>
                          <IconImage image={"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png"} alt="Grafana" />
                          <IconImage image={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gerrit_icon.svg/1024px-Gerrit_icon.svg.png"} alt="Gerrit"/>
                          <IconImage image={"https://img.stackshare.io/service/3301/locust-logo-orignal.png"} alt="Locust"/>
                          <IconImage image={"https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt52c29462320a5d1e/5ea8c7efea2a04243200ce24/brand-elastic-horizontal-220x130.svg"} alt="ElasticSearch"/>
                          <IconImage image={Images.Python} alt="Python"/>
                          <IconImage image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png"} alt="Kubernetes"/>
                          <IconImage image={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"} alt="Azure"/>
                          <IconImage image={"https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"} alt="Docker"/>
                          <IconImage image={Images.Csharp} alt="C#"/>
                          <IconImage image={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"} alt="Bootstrap"/>
                          <IconImage image={Images.React} alt="React"/>
                          <IconImage image={Images.Bash} alt="Bash"/>
                        </div>
                      </TextSection>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer className="z-20"/>
  </div>
  );
}

export default MagnetPage;
