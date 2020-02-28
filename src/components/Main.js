import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import teste from '../assets/img/teste.jpg'
import pic03 from '../images/pic03.jpg'
import LinhaDoTempo from './step'
import { Event } from 'react-timeline-scribble'
import certificado from '../images/certificado.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" width="500px" height="150px" />
          </span>
          <div>
            <p>
              Danilo Felipe Dias Dos Santos, 26 Anos. <br />
              Graduado em Análise e Desenvolvimento de Sistemas - Goiânia,Goiás
              ,Brasil. <br />
              Linguagens: React,React Native, C#, Java,Harbour.
            </p>

            <p>
              Sempre fui conectado ao mundo da tecnologia, sempre em busca de
              novos desafios e outras visões para resolver problemas ou
              dificuldades, fiquei fora da área por um tempo , atuando em
              diversas áreas opostas , mas o gosto e a sede por tecnlogia sempre
              falou mais alto, Sempre estudando e procurando estar conectado com
              as melhores tecnologias do mercado. <a href="#work"> works</a>.
            </p>
          </div>
          <p>
            I have always been connected to the world of technology, always in
            search of new challenges and other visions to solve problems or
            difficulties, I stayed out of the area for a while, working in
            several opposite areas, but the taste and thirst for technology
            always spoke louder, Always studying and trying to be connected with
            the best technologies on the market. <a href="#work"> works</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">{/* <img src={pic02} alt="" /> */}</span>
          <div>
            <LinhaDoTempo>
              <Event
                interval={'Fev-2020 - Atual'}
                title={'DESENVOLVEDOR FULLSTACK NA TRON INFORMÁTICA'}
              >
                Responsável pelo sistema Laris, (Gestor de Condomínios),atuando
                na implementação de novos recursos e a parte de manuntenção ,
                tanto do Backend em C#, na parte de banco de dados utilizando o
                MongoDb, e no Front com React ,sempre procurando o melhor código
                para manuntenção e a melhor implementação.
              </Event>
              <Event interval={'Jun-2019 – Jan-2020'} title={'Estagiário'}>
                Implementando novos recursos e resolvendo problemas e
                manutenções em sistemas web da Tron Informática em react.
              </Event>
              <Event
                interval={'Jun-2019 – Jan-2020'}
                title={'Estagiário'}
                subtitle={'DataRey Informática'}
              >
                Estágio no Desenvolvimento de uma nova Software da empresa.
              </Event>
            </LinhaDoTempo>
          </div>
          <div>
            <h3>Other works:</h3>
            <table>
              <tr>
                <td>
                  <figure style={{ textAlign: 'center' }}>
                    <img src={teste} alt="dsdas" width="100px" height="100px" />

                    <figcaption>teste</figcaption>
                  </figure>
                </td>
                <td>
                  <figure style={{ textAlign: 'center' }}>
                    <img src={teste} alt="dsdas" width="100px" height="100px" />

                    <figcaption>teste</figcaption>
                  </figure>
                </td>
                <td>
                  <figure style={{ textAlign: 'center' }}>
                    <img src={teste} alt="dsdas" width="100px" height="100px" />

                    <figcaption>teste</figcaption>
                  </figure>
                </td>
                <td>
                  <figure style={{ textAlign: 'center' }}>
                    <img src={teste} alt="dsdas" width="100px" height="100px" />

                    <figcaption>teste</figcaption>
                  </figure>
                </td>
              </tr>
            </table>
          </div>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main"></span>
          <div style={{ textAlign: 'center' }}>
            <h3>Certificates</h3>
            <p style={{ textAlign: 'left' }}>
              Danilo Felipe Dias Dos Santos, 26 Anos. <br />
              Graduado em Análise e Desenvolvimento de Sistemas - Goiânia,Goiás
              ,Brasil. <br />
              Linguagens: React,React Native, C#, Java,Harbour.
            </p>
            <img
              src={certificado}
              width="250px"
              height="200px"
              textAlign="center"
            />
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
