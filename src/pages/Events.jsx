import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';

const allEvents = [
  { id: 1, name: 'Beach Music Fest', date: '2025-04-10', category: 'Music', location: 'Panambur Beach', description: 'A night of music by the sea', image: '/images/music.jpg' },
  { id: 2, name: 'Food Carnival', date: '2025-04-15', category: 'Food', location: 'Tannirbhavi Beach', description: 'Taste the best coastal cuisine', image: '/images/food.jpg' },
];

const Events = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Music', 'Food', 'Sports'];

  const events = filter === 'All' ? allEvents : allEvents.filter(e => e.category === filter);

  return (
    <Container className="py-4">
      <h2 className="mb-4">Upcoming Events</h2>
      <Form.Select className="mb-3" value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </Form.Select>
      <Row>
        {events.map(event => (
          <Col md={6} lg={4} key={event.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text><strong>{event.date}</strong> | {event.location}</Card.Text>
                <Button variant="primary">Register</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
