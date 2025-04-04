
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <h1>Élan Privé</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/about">About</Link>
        <Link to="/affiliate">Affiliate</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
    </header>
  )
}
