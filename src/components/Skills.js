import React from 'react'


const icons = [
  {'name': 'python', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg'},
  {'name': 'java', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg'},
  // {'name': 'c', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'},
  {'name': 'sql', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'},
  {'name': 'html', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'},
  {'name': 'css', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'},
  {'name': 'javascript', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
  // {'name': 'react', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'},

]

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen min-h-fit bg-background text-gray-300">

      <div className='max-w-[700px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='ml-10'>
          <p className='text-4xl font-bold inline border-b-4 border-primary'>
            Skills
          </p>
          <p className='py-4'>
          These are the technologies I have worked with.</p>

        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8'>
          {icons.map((icon) => (
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto my-8 shadow-lg' src={icon.icon} alt={icon.name}/>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Skills