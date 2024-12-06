import React from 'react'
import Navbar from '../components/Navbar'
import Contactus from '../components/Contactus'

function Contact() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Contactus/>
      </div>
    </>
  )
}

export default Contact
