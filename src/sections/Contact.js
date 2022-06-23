import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='items-center p-4'>

      <form action='' method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-primary'>
          Contact
          </p>
          <p className='py-4'>
          Submit the form below.<br/>Or send me an email - aayushgakhar13@gmail.com
          </p>  
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='bg-[#ccd6f6] p-2 my-4' type='email' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2 pb-10' placeholder='Message' name='message'></textarea>
        <button className='bg-primary hover:opacity-80 p-2 my-4 text-white font-bold'>Submit</button>
      </form>

    </section>
  )
}

export default Contact