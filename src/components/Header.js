import PropTypes from 'prop-types'
import React from 'react'
import Perfil from '../images/perfil.jpg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div>
      <img src={Perfil} width="150px" height="150px" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>DANILO FELIPE DIAS DOS SANTOS</h1>
        <p>
          Desenvolvedor Fullstack Javascript ,React, React Native & C#, Possuo
          experiência em desenvolvimento web, com a plataforma Node.js,
          utilizando framework express. Experiência em front end com HTML5,
          CSS3, javascript, bootstrap, em banco de dados: MySQL, PostgreSQL,
          MongoDB (mongoose),em mobile: em React Native e algumas ferramentas de
          versionamento .
          <br />
          <a>https://www.linkedin.com/in/danilofelipe2607/</a>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Start
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
