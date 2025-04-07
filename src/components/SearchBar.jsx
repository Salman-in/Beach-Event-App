import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

const SearchBar = () => (
  <Form className="d-flex my-3">
    <FormControl type="search" placeholder="Search events or beaches..." className="me-2" />
    <Button variant="outline-primary">Search</Button>
  </Form>
)

export default SearchBar
