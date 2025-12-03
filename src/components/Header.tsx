import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Boikanyo" className="h-10 w-auto" />
          <span className="hidden sm:inline-block font-semibold text-lg text-slate-700">Boikanyo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <Link to="/" className="hover:text-brandGold">Home</Link>
          <Link to="/services" className="hover:text-brandGold">Services</Link>
          <Link to="/offers" className="hover:text-brandGold">Offers</Link>
          <Link to="/about" className="hover:text-brandGold">About</Link>
          <Link to="/contact" className="hover:text-brandGold">Contact</Link>
          <Link to="/login" className="ml-4 inline-block px-4 py-2 rounded bg-brandBlue text-white">Member login</Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded border">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white/95">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="py-2">Services</Link>
            <Link to="/offers" onClick={() => setOpen(false)} className="py-2">Offers</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
            <Link to="/login" onClick={() => setOpen(false)} className="py-2 rounded bg-brandBlue text-white text-center">Member login</Link>
          </div>
        </div>
      )}
    </header>
  );
}