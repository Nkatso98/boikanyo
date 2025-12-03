import React, { useState } from 'react'

export default function ContactForm(){
  const [state, setState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle')

  async function submit(e: React.FormEvent){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(state) })
      if(!res.ok) throw new Error('Network')
      setStatus('ok')
      setState({ name:'', email:'', message:'' })
    }catch(e){ setStatus('error') }
  }

  return (
    <form onSubmit={submit} className='max-w-xl mx-auto'>
      <label className='block mb-2'>
        <span className='text-sm'>Name</span>
        <input required value={state.name} onChange={e=>setState({...state, name:e.target.value})} className='mt-1 block w-full rounded border px-3 py-2' />
      </label>
      <label className='block mb-2'>
        <span className='text-sm'>Email</span>
        <input type='email' required value={state.email} onChange={e=>setState({...state, email:e.target.value})} className='mt-1 block w-full rounded border px-3 py-2' />
      </label>
      <label className='block mb-4'>
        <span className='text-sm'>Message</span>
        <textarea required value={state.message} onChange={e=>setState({...state, message:e.target.value})} className='mt-1 block w-full rounded border px-3 py-2' rows={4} />
      </label>
      <button type='submit' className='bg-brandBlue text-white py-2 px-4 rounded' disabled={status==='sending'}>{status==='sending' ? 'Sending…' : 'Send message'}</button>
      {status==='ok' && <div className='mt-3 text-green-600'>Message sent — we’ll be in touch.</div>}
      {status==='error' && <div className='mt-3 text-red-600'>Failed to send message.</div>}
    </form>
  )
}