import React from 'react'
import './about.scss'
import ME from '../../assets/picm.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_container__me">
          <img src={ME} alt="About Image" />
        </div>

        <div className="about_container__content">          
          <p>
            My name is Ugwuoke Victor. I'm a Full Stack Developer passionate about creating eye-catching, user-friendly websites and applications. I got inspired to code by Apple products. I love the way Apple products work smoothly and how they create a great user experience.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About