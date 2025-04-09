import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const beaches = [
  {
    id: 1,
    name: 'Panambur Beach',
    location: 'Mangalore',
    attractions: 'Jet Ski, Camel Rides, Sunset Views',
    image: '/images/panambur.jpg'
  },
  {
    id: 2,
    name: 'Tannirbhavi Beach',
    location: 'Mangalore',
    attractions: 'Peaceful shoreline, Tree-lined path',
    image: '/images/tannirbhavi.jpg'
  }
];

const Beaches = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4">Beaches of Mangalore</h2>
      <Row>
        {beaches.map(beach => (
          <Col md={6} key={beach.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={beach.image} />
              <Card.Body>
                <Card.Title>{beach.name}</Card.Title>
                <Card.Text><strong>Location:</strong> {beach.location}</Card.Text>
                <Card.Text>{beach.attractions}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Beaches;
