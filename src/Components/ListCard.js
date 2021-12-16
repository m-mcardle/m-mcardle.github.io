import { useState } from 'react';

function ListCard({title, elements, images, link, extraSection}) {

  const [enabled, setEnabled] = useState(false);
  return (
    <div className="m-2 p-1 border-2 border-gray-500 min-h-[10px]">
      <TitleSection title={title} link={link}/>
      <div className="hidden group-hover:block">Test</div>
      {title ? <hr className="my-2"/> : undefined}
      <div className="flex flex-cols-2 items-end">
        <ul className="mx-5 list-disc">
          {elements.map((el) =>
            <li key={el} className="text-sm hover:font-bold">{el}</li>
          )}
        </ul>
        {images ? <ImageSection images={images}/> : undefined }
      </div>
      {extraSection ? <div className="group">
        <button type="button" className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm m-2 px-2 py-1 bg-theme-primary text-sm font-medium text-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2" aria-expanded="false" aria-haspopup="true" onClick={() => setEnabled(!enabled)}>
          <svg className="-mr-1 ml-2 h-5 w-5 fill-theme-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {enabled ? extraSection : null}
      </div> : null}
    </div>
  );
}

function ImageSection({images}) {
  return (
    <div className="flex flex-auto justify-end mr-5">
      <div className="snap-x snap-mandatory overflow-auto whitespace-nowrap max-w-36 justify-end">
        {images.map((img) =>
          <div key={img} className="snap-center scroll-mx-5 inline-block">
            <img className='object-contain h-10' src={img} alt="idk"></img>
          </div>
        )}
      </div>
    </div>
  );
}

function TitleSection({title, link}) {
  if (link) {
    return (
      <a href={link} className="group contents">
        <p className="text-lg font-bold inline">{title}</p>
        <LinkIcon/>
      </a>
    );
  }
  return (<p className="text-lg font-bold inline">{title}</p>);
}

function LinkIcon() {
  return (
    <svg className="stroke-theme-secondary group-hover:inline hidden flex-auto" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
  );
}
export default ListCard;
