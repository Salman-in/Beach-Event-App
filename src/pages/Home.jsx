import React from 'react'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import EventCard from '../components/EventCard'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <SearchBar />
        <h2 className="mt-4">Featured Events</h2>
        <Row>
          <Col md={4}><EventCard /></Col>
          <Col md={4}><EventCard /></Col>
          <Col md={4}><EventCard /></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
