import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-red-200/30  text-base">
  <aside>
    <img src="https://images.squarespace-cdn.com/content/v1/5a1d89e0bff2007c8d1007f5/1605889179622-D5730K19M4Y19HFCZ2U0/ff+new+logo+website.png" className='h-20' alt=""/>
    
  </aside> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer
