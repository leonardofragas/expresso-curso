import { useState } from 'react'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Pricing from './Pricing';

const courseModules = [
  {
    "img": "module-01.png",
    "title": "o que faz um gestor de projetos?"
  },

  {
    "img": "module-02.png",
    "title": "o que faz um gestor de projetos?"
  },

  {
    "img": "module-03.png",
    "title": "o que faz um gestor de projetos?"
  },

  {
    "img": "module-04.png",
    "title": "o que faz um gestor de projetos?"
  },

  {
    "img": "module-05.png",
    "title": "o que faz um gestor de projetos?"
  },

  {
    "img": "module-06.png",
    "title": "o que faz um gestor de projetos?"
  },

  {
    "img": "module-07.png",
    "title": "o que faz um gestor de projetos?"
  },

  {
    "img": "module-08.png",
    "title": "o que faz um gestor de projetos?"
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="hero">
        <div className="content">
          <Container maxWidth="sm">
            <h1>gestão eficiente & criativa para o mercado digital.</h1>
            <h2>esteja preparado para a próxima revolução do marketing digital. aprenda a gerenciar campanhas, produtos e processos sendo um gestor de projeto criativo.</h2>
            <a href="#conteudo">entrar agora</a>
          </Container>
        </div>
      </div>

      <div className="vsl">
        <div className="content">
          <Container>
            <Row>
              <h1>estamos diante da primeira evolução criativa do mercado digital.</h1>
              <h2>seja um dos primeiros a ditar as regras do mercado com campanhas criativas.</h2>
              <div className="responsive-video"><iframe src="https://youtube.com/embed/9oKmRY5QwYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            </Row>
          </Container>
        </div>
      </div>

      <div className="oportunidade">

      </div>

      <div className="para-quem-e">
      </div>

      <div id="conteudo" className="conteudo-do-curso">
        <Container>
          <div className="content">
            <Row>
              <h1>conheça tudo o que você vai receber no curso expresso de gestão</h1>
            </Row>

            <Row>
              {courseModules.map((item) => (
                <Col>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>

      <div className="Pricing">
        <Container>
          <Row style={{ marginBottom: '80px' }}>
            <h1>comece, hoje, a conquistar o destaque no mercado que você precisa.</h1>
            <div className="Stroke"></div>
          </Row>

          <Row>
            <Col xs={1} sm={4}></Col>
            <Col>
              <Pricing />
            </Col>
            <Col xs={1} sm={4}></Col>

          </Row>
        </Container>
      </div>

      <div className="bonus">

      </div>

      {/* <div className="rodape-1">
        <Container>
          <Row>
            <Col>
                
            </Col>
            <Col>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="mailto:fragas@escolaolhar.com">Suporte</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div> */}

      <div className="rodape-2">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <p>
                Fragas Inc. 2022 | Todos os direitos reservados.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <p>
                Itajaí – SC | 27.158.830/0001-06
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default App
