import React from 'react'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className='min-h-screen'>
      <section className='container mx-auto px-4 py-12'>
        <h1 className='text-3xl font-bold mb-4'>About Us</h1>
        <p>Mission, vision and history content goes here.</p>
      </section>
      <Footer />
    </div>
  )
}