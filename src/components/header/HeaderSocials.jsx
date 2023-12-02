import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/ugwuoke-victor-8a2758184" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/LeoSage01" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials;