function IconImage({image, alt}) {
  return (
    <img src={image} alt={alt} className="max-w-[4rem] my-1 border"/>
  );
}

export default IconImage;