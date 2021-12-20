import { useState } from 'react';

function DropDownSection({extraSection}) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      {extraSection ? 
      <div className="group">
        <button type="button" className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm m-2 px-2 py-1 bg-gray-600 text-sm font-medium text-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2" aria-expanded="false" aria-haspopup="true" onClick={() => setEnabled(!enabled)}>
          {!enabled 
            ?
            <svg className="h-6 w-6 stroke-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            :
            <svg  className="h-6 w-6 stroke-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          }
        </button>
        {enabled ? extraSection : null}
      </div> 
      : null}
    </div>
  );
}

export default DropDownSection;
