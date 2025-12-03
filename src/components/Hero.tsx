import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className='bg-gradient-to-r from-brandBlue to-blue-600 text-white py-20'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>Affordable Family Cover</h1>
        <p className='max-w-2xl mx-auto mb-6'>Join today for R150/month — reliable cover for the people who matter most.</p>
        <Link to='/register' className='inline-block bg-brandGold text-black font-semibold py-3 px-6 rounded-lg shadow'>
          Join Now — R150/month
        </Link>
      </div>
    </section>
  )
}