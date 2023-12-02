import React from 'react'
import './skills.scss'
import {FaGitAlt, FaHtml5, FaReact, FaSass} from 'react-icons/fa'
import {DiCss3} from 'react-icons/di'
import {SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiNodedotjs} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'


const Skill = () => {
  return (
    <section id='skills'>
      <h5>Explore my</h5>
      <h2>Skills</h2>

      <div className="container skill_container">        
          <div className="skill_content">
            <article className="skill_content__details">
              <FaHtml5 className='skill_content__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <DiCss3 className='skill_content__details-icon'/>
              <div>
               <h4>CSS</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <FaSass className='skill_content__details-icon'/>
              <div>
                <h4>Sass (SCSS)</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <SiTailwindcss className='skill_content__details-icon'/>
              <div>
                <h4>Tailwind CSS</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <SiJavascript className='skill_content__details-icon'/>
              <div>
               <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <SiTypescript className='skill_content__details-icon'/>
              <div>
               <h4>TypeScript</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <FaReact className='skill_content__details-icon'/>
              <div>
               <h4>React</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <TbBrandNextjs className='skill_content__details-icon'/>
              <div>
               <h4>Next JS</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <FaReact className='skill_content__details-icon'/>
              <div>
               <h4>React Native</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <SiNodedotjs className='skill_content__details-icon'/>
              <div>
               <h4>Node JS</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <SiExpress className='skill_content__details-icon'/>
              <div>
               <h4>Express JS</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <SiMongodb className='skill_content__details-icon'/>
              <div>
               <h4>Mongo DB</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <SiMongodb className='skill_content__details-icon'/>
              <div>
               <h4>MySQL</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <FaGitAlt className='skill_content__details-icon'/>
              <div>
               <h4>Git</h4>
              </div>
            </article>
          </div>
        
      </div>
    </section>
  )
}

export default Skill