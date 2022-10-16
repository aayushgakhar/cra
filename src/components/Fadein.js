import React from "react";

const Fadein = ({ children }) => {
  const domRef = React.useRef();
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let domRefCurrent = domRef.current;
    const observer = new IntersectionObserver((entries, observer) => {
      // In your case there's only one element to observe:
      // console.log(entries[0].isIntersecting)
      // if (entries[0].isIntersecting) {
      // Not possible to set it back to false like this:
      setVisible(entries[0].isIntersecting);
      // console.log('visible');
      // No need to keep observing:
      // observer.unobserve(domRefCurrent);
      // }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRefCurrent);
  }, []);

  return (
    <div
      ref={domRef}
      className={isVisible ? "opacity-100" : "opacity-0 scale-90"}
    >
      {children}
    </div>
  );
};

export default Fadein;
