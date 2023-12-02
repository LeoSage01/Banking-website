import React from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/bank.jpg'
import IMG2 from '../../assets/ecom.jpg'
import IMG3 from '../../assets/crr.png'
import IMG4 from '../../assets/portpic.png'
import IMG5 from '../../assets/bkmark.png'
import IMG6 from '../../assets/login.png'
import IMG7 from '../../assets/idea.png'
import IMG8 from '../../assets/bond.png'
import IMG9 from '../../assets/food.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'NOX Bank',
    desc: 'A React Js Banking App styled using Tailwind CSS',
    github: 'https://github.com/LeoSage01/Banking-website',
    demo: 'https://banking-website-5rwq.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Login Authentication and Authorization',
    desc: 'A complete MERN Stack App that contains login, registration, profile update, reset password, OTP verification, JWT authentication, authorization and also sends mail from the node js backend. It was styled using Tailwind CSS and styled components.',
    github: 'https://github.com/LeoSage01/Login-Authentication_and_authorization',
    demo: 'https://login-authentication-and-authorization.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Car Rental',
    desc: 'Technologies uses are React Js, TypeScript and Tailwind CSS',
    github: 'https://github.com/LeoSage01/Car-rental',
    demo: 'https://car-rental.brimble.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'LS Clothings',
    desc: 'An E-commerce website built with HTML, CSS and JavaScript.',
    github: 'https://github.com/LeoSage01/LS-E-commerce.github.io',
    demo: 'https://leosage01.github.io/LS-E-commerce.github.io/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'E-Portfolio Website',
    desc: 'This App was build using React Js and SCSS',
    github: 'https://github.com/LeoSage01/my-Portfolio',
    demo: '/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Idea Chest',
    desc: 'A MERN Stack Idea Journal',
    github: 'https://github.com/LeoSage01/ida-chest-backend',
    demo: 'https://idea-chest.vercel.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Pariti - Pickup and Food Delivery Management System API',
    desc: 'This was built using Node JS/ Express and MySQL. It keeps track of the Orders and Expenses',
    github: 'https://github.com/LeoSage01/Pariti---Management-System/tree/main/backend', 
    demo: 'https://github.com/LeoSage01/Pariti---Management-System/tree/main/backend'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Bond',
    desc: 'A Fintech Startup Landing page built using Next js, Typescript and Tailwind CSS ',
    github: 'https://github.com/LeoSage01/bond-fe',
    demo: 'https://bond-fe.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Bookmark Landing Page',
    desc: 'Technologies uses are React Js, TypeScript and Tailwind CSS',
    github: 'https://github.com/LeoSage01/Bookmark-Landing-Page',
    demo: 'https://bookmark-landing-page-1goozl0km-leosage01.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Browse My Recent</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, desc, github, demo}) => {
            return (
              <article key={id} className='portfolio_container__item'>
          <div className="portfolio_container__item-image">
            <img src={image} alt="{title" />          
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className='portfolio_container__item-btns'>
            <a href={github} className='btn'>GitHub</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
            )
          })
        }        
      </div>
    </section>
  )
}

export default Portfolio  