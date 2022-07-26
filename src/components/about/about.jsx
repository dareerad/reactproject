import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {ImFolderOpen} from 'react-icons/im'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5> 
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward  className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers  className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worlwide</small>
            </article>

            <article className="about_card">
              <ImFolderOpen  className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projets</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, doloremque beatae sapiente fuga sint dolorem ad numquam, 
            necessitatibus, pariatur praesentium obcaecati? Beatae sunt rerum quo veniam dolore neque accusamus 
            dolorem dignissimos dolorum optio, temporibus est iusto praesentium aut vel iure placeat! Aspernatur
             sequi vitae distinctio, deserunt, error quia cum velit fugiat illo maiores soluta accusamus ipsa nihil similique eum ab.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About