import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">ERAD</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="__blank"><FaFacebookF /></a>
        <a href="https://instagram.com" target="__blank"><GrInstagram /></a>
        <a href="https://twitter.com" target="__blank"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; EDEN ALABA. All Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default footer