import { useState } from "react";
import TextSection from "./TextSection";

function GoalSection({image, title, description, text, children, grade = SuccessLevels.Success}) {


  const [textOpen, setOpen] = useState(false);

  const sectionClicked = () => {
    setOpen(!textOpen);
  }

  return (
    <div className="flex flex-row my-4 w-full border shadow-lg">
      <div className="flex flex-col my-auto mx-2">
        {image}
      </div>
      <TextSection heading={title} subheading={description} className="group">
        <div className={textOpen ? "block" : "hidden"}>
          <hr className="my-2"/>
          {text}
          {children}
        </div>
        <div className="flex flex-row">
          {GradeSection(grade)}
          <button className="p-2 mx-2 my-3 bg-blue-magnet rounded-lg" onClick={sectionClicked}>{textOpen ? "Read Less" : "Read More"}</button>
        </div>
      </TextSection>
    </div>
  );
}

export function GradeSection(grade) {
  let gradients = "from-green-600 to-green-400";
  let text = "Success";
  if (grade === SuccessLevels.Outstanding) {
    gradients = "from-green-700 to-green-600";
    text = "Outstanding";
  } else if (grade === SuccessLevels.Success) {
    gradients = "from-green-600 to-green-400";
    text = "Success";
  } else if (grade === SuccessLevels.Satisfactory) {
    gradients = "from-yellow-400 to-yellow-200";
    text = "Satisfactory";
  } else if (grade === SuccessLevels.Difficulty) {
    gradients = "from-orange-400 to-orange-300";
    text = "Difficulty";
  } else if (grade === SuccessLevels.Failure) {
    gradients = "from-red-900 to-red-600";
    text = "Failure";
  }

  return (
    <div key={text} className={`font-bold w-fit p-2 rounded-lg my-3 bg-gradient-to-r ${gradients}`}>
      {text}
    </div>
  );
}

export const SuccessLevels = {
  Outstanding: 0,
  Success: 1,
  Satisfactory: 2,
  Difficulty: 3,
  Failure: 4,
}

export default GoalSection;