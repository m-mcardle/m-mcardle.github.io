import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

function DropDownSection({extraSection, primaryColour = "gray-600", secondaryColour = "gray-900", tertiaryColour = "white"}) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      {extraSection ? 
      <div className="group">
        <button type="button" className={`inline-flex justify-center rounded-md border hover:bg-${secondaryColour} border-${secondaryColour} shadow-sm m-2 px-2 py-1 bg-${primaryColour} focus:outline-none focus:ring-2 focus:ring-offset-2`} aria-expanded="false" aria-haspopup="true" onClick={() => setEnabled(!enabled)}>
          {!enabled 
            ? <GoChevronDown className={`-mr-1 ml-2 h-5 w-5 text-${tertiaryColour}`}/>
            : <GoChevronUp className={`-mr-1 ml-2 h-5 w-5 text-${tertiaryColour}`}/>
          }
        </button>
        {enabled ? extraSection : null}
      </div> 
      : null}
    </div>
  );
}

export default DropDownSection;
