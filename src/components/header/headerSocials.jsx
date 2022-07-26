import React from 'react'
import {BsLinkedin} from  'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {FaDribbbleSquare} from 'react-icons/fa';

const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_"><BsLinkedin/></a>
        <a href="https://github.com" target="__"><FaGithubSquare/></a>
        <a href="https://dribble.com" target="__"><FaDribbbleSquare/></a>
    </div>
  )
}

export default headerSocials