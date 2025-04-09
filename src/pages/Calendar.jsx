import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

const events = [
  { id: 1, name: 'Beach Music Fest', date: '2025-04-10', category: 'Music' },
  { id: 2, name: 'Food Carnival', date: '2025-04-15', category: 'Food' },
  { id: 3, name: 'Surfing Championship', date: '2025-04-20', category: 'Sports' },
];

const categories = ['All', 'Music', 'Food', 'Sports'];

const FestivalCalendar = () => {
  const [filter, setFilter] = useState('All');
  const currentMonth = dayjs().month(3); // April (0-indexed)
  const days = Array.from({ length: 30 }, (_, i) => dayjs().date(i + 1).format('YYYY-MM-DD'));

  const filtered = events.filter(e => filter === 'All' || e.category === filter);

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Festival Calendar</h2>
      <Form.Select className="mb-4" value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </Form.Select>
      <Row xs={2} md={4} lg={7} className="g-3">
        {days.map(date => (
          <Col key={date}>
            <Card>
              <Card.Body>
                <Card.Title>{dayjs(date).format('D MMM')}</Card.Title>
                {filtered.filter(e => e.date === date).map(event => (
                  <div key={event.id}>
                    <strong>{event.name}</strong><br />
                    <small>{event.category}</small><hr />
                  </div>
                )) || <small className="text-muted">No Events</small>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FestivalCalendar;
