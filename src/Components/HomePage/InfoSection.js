import {useState, useRef, useEffect} from 'react';

function InfoSection({children, span = "col-span-1", rowSpan = "row-span-1", hover = true}) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => (entry.isIntersecting && setVisible(true)));
    });
    const copy = domRef.current;
    observer.observe(domRef.current);

    return () => (copy ? observer.unobserve(copy) : undefined);
  }, [domRef]);
  
  return(
    <div ref={domRef} className={`${isVisible ? "fadeIn-animation" : "invisible"} ${span} ${rowSpan} col-span-1 max-h-max mx-auto p-3 border-2 bg-gray-300 shadow-lg` + (hover ? " hover:bg-gray-400" : "")}>
      {children}
    </div>
  );
}

export default InfoSection;