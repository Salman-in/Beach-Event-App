import React from 'react'
import { Card, Button } from 'react-bootstrap'

const EventCard = () => (
  <Card className="mb-4">
    <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
    <Card.Body>
      <Card.Title>Sample Beach Festival</Card.Title>
      <Card.Text>
        Date: April 10, 2025<br />
        Location: Panambur Beach
      </Card.Text>
      <Button variant="primary">Register</Button>
    </Card.Body>
  </Card>
)

export default EventCard
