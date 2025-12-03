import React from 'react'
import Hero from '../components/Hero'
import OffersList from '../components/OffersList'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className='container mx-auto px-4 py-12'>
        <h2 className='text-2xl font-bold mb-4'>Our Services</h2>
        <p>Highlights of membership benefits and services.</p>
      </section>
      <section className='container mx-auto px-4 py-12'>
        <h2 className='text-2xl font-bold mb-4'>Current Offers</h2>
        <OffersList />
      </section>
      <Footer />
    </div>
  )
}