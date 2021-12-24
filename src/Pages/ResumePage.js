import NavBar from '../Components/Navbar';
import Header from '../Components/Header';

import BaseCard from '../Components/ResumePage/BaseCard';
import NormalCard from '../Components/ResumePage/NormalCard';
import ListCard from '../Components/ResumePage/ListCard';

import { Images } from '../Data/Images';

function ResumePage() {
  return (
    <div className="font-mono">
      <NavBar/>
      <MatrixAnimation/>
      <div className="lg:px-5 min-h-20 bg-theme-primary">
        <Header pageDescription='Matthew J. McArdle' color='bg-theme-secondary' textColor="text-theme-primary" content={ContactInfo()}/>
        <div className='bg-theme-tertiary relative z-20 text-theme-secondary xl:mx-48 border-4 border-gray-600 min-h-screen xl:min-w-min min-w-full px-5'>
          <BaseCard
            title="Technical Skills"
          >
            <NormalCard
            elements={[
              {name: "Languages", value: "C#, C, Python, Bash, Swift, JavaScript, React.js, Perl"},
              {name: "Technologies", value: "AWS, Microsoft Azure, MacOS X, Linux, iOS"},
              {name: "Development Tools", value: "Slack, Jira, GitHub, Gerrit, Azure DevOps, Jenkins"},
              {name: "Other Experience", value: "Kanban, Agile Development, Waterfall Development, pair programming"}
            ]}
            />
          </BaseCard>
          <BaseCard
            title="Personal Projects"
          >
            <ListCard
              title="F1 Visualizer Using Python (2021)"
              link="https://github.com/m-mcardle/f1-visualizer"
              elements={[
                "Using Dash and Plot.ly to display a visualizer of F1 standings in all F1 seasons",
                "Parsed XML responses from a public API into a Plot.ly supported format",
                "Cached response data using a MySQL database",
                "Hosted program using AWS to allow for remote access to the visualizer"
              ]}
              images={[Images.Python]}
              extraSection={
                <div>
                  <img src={Images.Visualizer} alt="F1 Visualizer"></img>
                </div>
              }
            />
            <ListCard
              title="Embedded Twitch Chat Chrome Extension (2021)"
              link="https://github.com/m-mcardle/twitch-chat-extension"
              elements={[
                "Embeds a Twitch chat element into official F1 and ESPN+ video players",
                "Developed using HTML and JavaScript",
                "Allows for F1 or UFC fans to communicate easily during the broadcasts"
              ]}
              images={[Images.Chrome]}
              extraSection={
                <div>
                  <img src={Images.Extension} alt="Twitch Extension"></img>
                </div>
              }
            />
            <ListCard
              title="Personal Website Built With React.js and Tailwind CSS (2021)"
              link="https://m-mcardle.github.io"
              elements={[
                "Built responsive web application using the React framework",
                "Styled pages using Tailwind CSS",
                "Built interactive page to generate Tier Lists"
              ]}
              images={[Images.React]}
            />
            <ListCard
              title="Song Reviewing Software Using Perl and Python (2020)"
              elements={[
                "Developed software to parse through results from many different music critics to show an overall consensus on most liked music and artists",
                "Sends requests through Google Sheets to download raw data and upload the results",
                "Worked individually to create a program requested and designed by the critics to accomplish their goals"
              ]}
              images={[Images.Perl]}
            />
          </BaseCard>
          <BaseCard
            title="Education"
          >
            <ListCard
              title="Bachelor of Computing, Software Engineering (Co-op) [2019-Present]"
              elements={[
                "University of Guelph Dean's List Student",
                "Recipient of Braithwaite Business Scholarship for excellence in my Major and in business courses",
                "Planning to achieve a Minor in Business",
                "87.9% GPA"
              ]}
              images={[Images.Gryphon]}
            />
            <ListCard
              title="Key Academic Projects"
              elements={[
                "GPS XML data parser in C, with a frontend build with JavaScript and implementing a MySQL database (2021)",
                "Rogue-like game in Java, responsive user interface, procedurally generated maps, serialization for saving progress (2020)"
              ]}
            />
          </BaseCard>
          <BaseCard
            title="Accolades and Achievements"
          >
            <ListCard
              elements={[
                "Deans List student in all academic semesters [2019-Present]",
                "Braithwaite Business Scholarship Recipient [2020]",
                "Nominee for the Ian Pavlinic Memorial Award (University of Guelph Co-op Student of the Year) [2021]"
              ]}
              images={[Images.Award]}
            />
          </BaseCard>
          <BaseCard
            title="Work Experience"
          >
            <ListCard
              title="Magnet Forensics Software Developer Co-op (May 2021-December 2021)"
              elements={[
                "Built out XML parsing infrastructure in C#",
                "Worked with installer scripts written in Bash to deploy a Kubernetes application",
                "Front end development on a web application using React.js",
                "Worked with Jenkins to build automation pipelines to deploy test instances of our product",
                "Used development tools such as Gerrit, Azure DevOps, Jira, and Slack",
                "Worked with cloud technologies hosted on AWS and Microsoft Azure"
              ]}
              images={[Images.Magnet]}
            />
          </BaseCard>
        </div>
      </div> 
    </div>
  );
}

function ContactInfo() {
  return (
    <div className='grid grid-rows-3'>
      <p className="text-xl text-center justify-center">
        (519)-500-3440
      </p>
      <p className="text-lg text-center justify-center">
        matthew.j.mcardle@gmail.com
      </p>
      <p className='text-sm justify-center text-center'>
        212 Golf Course Road, Conestogo, Ontario
      </p>
    </div>
  );
}

function MatrixAnimation() {
  // Returns a random integer either  0 to 1:
  let string = "";
  for (var i = 1; i < 15000; i++) {
    string += Math.floor(Math.random() * 2);;
    if (i % 256 === 0) {
      string += "\n";
    }
  }
  return (
    <div className="bg-theme-primary text-theme-secondary min-w-full z-10 matrix-animation">
      {string}
    </div>
  );
}

export default ResumePage;
