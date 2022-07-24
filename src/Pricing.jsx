import { useState } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button';

import ListItem from './ListItem'

import Data from './pricing.json'

import './Pricing.styl'

export default function Pricing() {

  return (
    <div className="Table">
      <Container fluid>
        <div className="Header">
          <Row style={{ alignItems: 'center', width: '100%' }}>
            <Col>
              <h2>Turma 1</h2>
              <h3>Aceitamos pagamento em 2 cartões.</h3>
            </Col>

            <Col style={{ textAlign: 'right' }}>
              <h4>12 de R$ 150,60</h4>
            </Col>
          </Row>
        </div>

        <div className="Features">
          <Row>
            <ul>

              {Data.mainContent.map((object, i) => {
                return <ListItem category="conteúdo principal" text={object.title} key={object.title}/>
              })}

              {Data.oneYearOfSchool.map((object, i) => {
                return <ListItem category="(de R$ 397) por R$ 0" text={object.title} key={object.title}/>
              })}

              {Data.bonuses.map((object, i) => {
                return <ListItem category="bônus" text={object.title} key={object.title}/>
              })}

              {Data.masterclasses.map((object, i) => {
                return <ListItem category="masterclass" text={object.title} key={object.title}/>
              })}

              {Data.extras.map((object, i) => {
                return <ListItem category="extra" text={object.title} key={object.title}/>
              })}
            </ul>
          </Row>
        </div>

        <div className="Call">
          <Row>
              <Button href={Data.checkout.year.url}>entrar agora</Button>
          </Row>
        </div>
      </Container>
    </div>
  )
}