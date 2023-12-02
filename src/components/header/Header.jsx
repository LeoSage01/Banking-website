import React from 'react'
import './header.scss'
import Btns from './Btns'
import ME from '../../assets/shp.png'
import Mo from '../../assets/rkt.png'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ugwuoke Victor</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Btns />
        <div className="section">
          <HeaderSocials />
          <div className="header_container__image">
            <div className="header_container__image-1">
              <img src={ME} alt="me" />
            </div>
            <div className="header_container__image-2">
              <img height="160px" src={Mo} alt="me" />
            </div>
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header