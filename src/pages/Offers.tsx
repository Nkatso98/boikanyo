import React from 'react'
import OffersList from '../components/OffersList'
import Footer from '../components/Footer'

export default function Offers(){
  return (
    <div>
      <section className='container mx-auto px-4 py-12'>
        <h1 className='text-3xl font-bold mb-4'>Offers & Promotions</h1>
        <OffersList />
      </section>
      <Footer />
    </div>
  )
}