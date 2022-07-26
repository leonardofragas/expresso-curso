import React, { useState, useEffect } from 'react'
import ReactPixel from 'react-facebook-pixel'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Pricing from './Pricing';

import About from './Components/About/About'

import ProgressBar from 'react-bootstrap/ProgressBar'

const courseModules = [
  {
    "img": "module-01.png",
    "title": "o que faz um gestor de projetos?",
    "duration": '30',
    "items": [
      'Guardião das demandas, processos e prazos',
      'Como pensa um gestor de projetos',
      'A entrega como objetivo máximo',
      'No que eu acredito enquanto gestor?',
      'Resumo do módulo'
    ]
  },

  {
    "img": "module-02.png",
    "title": "como é a hierarquia de um projeto?",
    "duration": '50',
    "items": [
      'Workspaces',
      'Spaces',
      'Folders',
      'Lists',
      'Tasks',
      'Resumo do módulo'
    ]
  },

  {
    "img": "module-03.png",
    "title": "em quais áreas se divide um projeto?",
    "duration": '50',
    "items": [
      'Infraestrutura, Data & Automações',
      'Design & Audiovisual',
      'Copy & Briefing',
      'Heads & Revisores',
      'Estratégia & Direção de Arte',
      'Resumo do módulo'
    ]
  },

  {
    "img": "module-04.png",
    "title": "entendendo o sistema BPE",
    "duration": '60',
    "items": [
      'Anatomia de um briefing',
      'Anatomia de um pedido',
      'Anatomia de uma entrega',
      'Como trabalhar com sprints semanais',
      'Como preparar o sprint da próxima semana',
      'Organizando o seu backlog',
      'Hierarquia de revisões e aprovações',
      'Resumo do módulo'
    ]
  },

  {
    "img": "module-05.png",
    "title": "processo para copy",
    "duration": '40',
    "items": [
      'Argumento da peça',
      'Roteiro técnico',
      'Storyboard de referência',
      'Resumo do módulo'
    ]
  },

  {
    "img": "module-06.png",
    "title": "processo para design em geral",
    "duration": '40',
    "items": [
      'Argumento da peça',
      'Roteiro técnico',
      'Storyboard de referência',
      'Resumo do módulo'
    ]
  },

  {
    "img": "module-07.png",
    "title": "processo para audiovisual",
    "duration": '50',
    "items": [
      'Argumento de roteiro',
      'Roteiro técnico',
      'Storyboard de enquadramento',
      'Storyboard de fotografia',
      'Storyboard de lettering',
      'Resumo do módulo'
    ]
  },

  {
    "img": "module-08.png",
    "title": "gerindo um lançamento",
    "duration": '40',
    "items": [
      'Entendendo o estrategista',
      'Entendendo o tamanho da equipe',
      'Quantificando as peças',
      'Criando briefings de tudo',
      'Consultando os heads de cada área'
    ]
  }
]

function App() {
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState([])

  const handleShow = (e) => {
    e.preventDefault()

    var searchedModule = courseModules.filter((obj) => {return obj.title.match(e.target.getAttribute('data-title'));})

    const preparedModalContent = {
      'title': searchedModule[0].title,
      'items': searchedModule[0].items,
      'duration': searchedModule[0].duration
    }

    setModalContent(preparedModalContent)

    setShow(true)
  }

  const handleClose = (e) => {
    console.log('im closing')
    setShow(false)
  }

  const [vagasCount, setVagasCount] = useState(0)

  const FacebookPixelCode = '244186400357051'

  const FacebookPixelOptions = {
    autoConfig: true,
    debug: true,
  }

  let pixelCalled = false

  useEffect(() => {
    if (pixelCalled === false) {
      ReactPixel.init(FacebookPixelCode, FacebookPixelOptions)
      ReactPixel.pageView();
      pixelCalled = true
    }
  }, []);

  const vagasTotais = 75

  const baseUrl = 'https://leonardosouzafragas13560.api-us1.com/admin/api.php'
  const formAction = 'list_list'
  const apiOutput = 'json'
  const ApiToken = 'd57382b6b6d2d6a83f447c5c4e54fd355eeee8cf5f7fcd89b6965a1b7f99263d7cb3182f'
  const listIds = 10

  const contactsRequest = `${baseUrl}?api_action=${formAction}&full=1&ids=${listIds}&api_key=${ApiToken}&api_output=${apiOutput}`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  }

  let vagasPreenchidas = async () => {
    const res = await fetch(contactsRequest, options)
    const result = await res.json()
    let bruteVagasResult = result[0].subscribers_active / vagasTotais 
    let roundedVagasResult = bruteVagasResult.toFixed(2)
    setVagasCount(roundedVagasResult * 100)
    console.log(vagasCount)
  }

  vagasPreenchidas()
  const now = vagasCount;

  return (
    <div className="App">
      <div className="hero">
        <div className="content">
          <Container maxWidth="sm">
            <h1>gestão eficiente & criativa para o mercado digital.</h1>
            <h2>esteja preparado para a próxima revolução do marketing digital. aprenda a gerenciar campanhas, produtos e processos sendo um gestor de projeto criativo.</h2>
            <a href="#conteudo">entrar agora</a>
            <ProgressBar animated className="progressVagas" now={now} label={`${now}%`} />
            <p>das vagas preenchidas</p>
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
                  <a href="#" onClick={handleShow}>
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      data-title={item.title}
                      data-items={item.items}
                    />
                  </a>
                </Col>
              ))}
            </Row>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>{modalContent.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                este módulo possui aproximadamente {modalContent.duration} minutos.
                </p>
                
                <ul>
                { modalContent.items ? modalContent.items.map((item, i) => (<li>{item}</li>)) : '' }
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  fechar
                </Button>
              </Modal.Footer>
            </Modal>
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

      <div className="bio">
        <About />
      </div>

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
