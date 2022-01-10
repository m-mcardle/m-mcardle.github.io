import { HiLink } from 'react-icons/hi';
import DropDownSection from '../DropDownSection';

function ListCard({title, elements, images, link, extraSection}) {
  return (
    <div className="m-2 p-1 border-2 border-gray-500 min-h-[10px]">
      <TitleSection title={title} link={link}/>
      <div className="hidden group-hover:block">Test</div>
      {title ? <hr className="my-2"/> : undefined}
      <div className="flex flex-cols-2 items-start">
        <ul className="mx-5 list-disc">
          {elements.map((el) =>
            <li key={el} className="text-sm hover:font-bold">{el}</li>
          )}
        </ul>
        {images ? <ImageSection images={images}/> : undefined }
      </div>
      {extraSection ? <div className="group">
        <DropDownSection extraSection={extraSection} primaryColour='theme-primary' secondaryColour='gray-400' tertiaryColour='theme-secondary'/>
      </div> : null}
    </div>
  );
}

function ImageSection({images}) {
  return (
    <div className="flex flex-auto justify-end mr-5 mt-2">
      <div className="snap-x snap-mandatory overflow-auto whitespace-nowrap max-w-36 justify-end">
        {images.map((img) =>
          <div key={img} className="snap-start scroll-mx-5 inline-block">
            <img className='object-contain h-10' src={img} alt="Unknown"></img>
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
        <HiLink className='stroke-theme-secondary group-hover:inline hidden flex-auto' />
      </a>
    );
  }
  return (<p className="text-lg font-bold inline">{title}</p>);
}

export default ListCard;
