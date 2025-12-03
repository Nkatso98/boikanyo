import React, { useEffect, useState } from 'react'

type Offer = { id: string; title: string; description: string; active?: boolean }

export default function OffersList(){
  const [offers, setOffers] = useState<Offer[]>([])

  useEffect(()=>{
    fetch('/api/offers')
      .then(r=>r.json())
      .then(data=> setOffers((data||[]).filter((o: Offer)=> o.active !== false)))
      .catch(()=>setOffers([]))
  },[])

  if(!offers.length) return <div>No current offers</div>

  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {offers.map(o=> (
        <article key={o.id} className='p-4 border rounded-lg bg-white'>
          <h3 className='font-semibold text-lg mb-1'>{o.title}</h3>
          <p className='text-sm text-slate-700'>{o.description}</p>
        </article>
      ))}
    </div>
  )
}