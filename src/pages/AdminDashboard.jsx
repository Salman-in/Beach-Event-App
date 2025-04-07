import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';

const AdminDashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Panambur Beach Festival',
      date: '2025-04-10',
      location: 'Panambur Beach',
    },
    {
      id: 2,
      name: 'Surf Music Carnival',
      date: '2025-05-01',
      location: 'Tannirbhavi Beach',
    },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'Ravi', event: 'Panambur Beach Festival', ticket: 'VIP' },
    { id: 2, name: 'Anjali', event: 'Surf Music Carnival', ticket: 'Regular' },
  ]);

  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
  });

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setShowAddModal(false);
    setNewEvent({ name: '', date: '', location: '' });
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      <Row className="mb-5">
        <Col>
          <h4>Manage Events</h4>
          <Button variant="success" className="mb-3" onClick={() => setShowAddModal(true)}>+ Add Event</Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(event.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Registered Users</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Event</th>
                <th>Ticket Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.event}</td>
                  <td>{u.ticket}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Add Event Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                value={newEvent.name}
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAddEvent}>Add</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
