import React from 'react'
import './footer.scss'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='footer'>

      <div className="footer__socials">
      <a href="https://linkedin.com/in/ugwuoke-victor-8a2758184" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/LeoSage01" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LEO SAGE, 2022</small>
      </div>
    </footer>
  )
}

export default Footer