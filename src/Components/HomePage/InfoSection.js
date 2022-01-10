import "aos/dist/aos.css";

function InfoSection({children, span = "col-span-1", rowSpan = "row-span-1"}) {
  return(
    <div data-aos="zoom-in-up" className={`${span} ${rowSpan} grid col-span-1 max-h-max mx-auto p-3 border-2 bg-gray-300 shadow-sm hover:shadow-2xl`}>
      {children}
    </div>
  );
}

export default InfoSection;