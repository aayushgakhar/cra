import React from 'react'

const Card = ({ project }) => {
  const domRef = React.useRef()
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let domRefCurrent = domRef.current;
    const observer = new IntersectionObserver((entries,observer) => {
      // In your case there's only one element to observe:
      // console.log(entries[0].isIntersecting)
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(entries[0].isIntersecting);
        // console.log('visible');
        // No need to keep observing:
        observer.unobserve(domRefCurrent);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRefCurrent);
  }, []);
  
  

  return (
    <div ref={ domRef } style={{ backgroundImage: `url(${project.img})` }}
      className={`${isVisible? 'transition-opacity before:opacity-100':'opacity-0 scale-90'} shadow-lg container rounded-md mx-auto bg-no-repeat bg-center bg-cover hover:scale-[1.02] h-[250px] duration-700`}>
              
      <div className='rounded-md h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center bg-gradient-to-br from-sky-500/90 to-indigo-500/90'>
        <span className='text-2xl font-bold text-white tracking-wider'>
        {project.name}
        </span>
        <div className='pt-8 text-center'>
          <a href={project.link}>
            <button className='text-center rounded-lg px-4 py-3 m-2 mx-auto bg-white text-gray-700 font-bold text-lg hover:bg-gray-200'>
            github
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card