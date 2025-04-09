import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', event: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.event) return;
    console.log('User registered:', form);
    setSuccess(true);
    setForm({ name: '', email: '', event: '' });
  };

  return (
    <Container className="py-4" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Event Registration</h2>
      {success && <Alert variant="success">Registration successful!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Event</Form.Label>
          <Form.Select value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })}>
            <option value="">-- Select Event --</option>
            <option value="Beach Music Fest">Beach Music Fest</option>
            <option value="Food Carnival">Food Carnival</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="w-100">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
