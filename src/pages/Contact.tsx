import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div>
      <section className='container mx-auto px-4 py-12'>
        <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
        <ContactForm />
      </section>
      <Footer />
    </div>
  )
}