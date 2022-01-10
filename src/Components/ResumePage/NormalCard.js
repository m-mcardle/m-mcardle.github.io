function NormalCard({title, elements}) {
    return (
      <div className="m-2 p-1 border-2 border-gray-500 min-h-[10px]">
        <p className="text-lg font-bold">{title}</p>
        {title ? <hr/> : undefined}
        {elements.map(({name, value}) =>
          <p key={name} className="hover:font-bold"><b>{name}:</b> {value}</p>
        )}
      </div>
    );
}

export default NormalCard;

