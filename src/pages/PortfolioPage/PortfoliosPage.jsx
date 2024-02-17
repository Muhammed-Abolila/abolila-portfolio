import React from 'react'
import TopNavbar from '../../components/utilities/TopNavbar/TopNavbar';
import BottomNavbar from '../../components/utilities/BottomNavbar/BottomNavbar';
import { Container, Row } from 'react-bootstrap';

const PortfoliosPage = () => {
  return (
    <>
    <TopNavbar text="PORTFOLIO"/>
    <Container>
      <section className="portfolio">
        <div className="portfolio-content">
          <Row>
            Portfolio
          </Row>
        </div>
      </section>
    </Container>
    <BottomNavbar />
    </>
  )
}

export default PortfoliosPage
