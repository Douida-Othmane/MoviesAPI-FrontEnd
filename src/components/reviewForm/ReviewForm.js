
import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ReviewForm = (handleSubmit, revText, labelText) => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control reft={revText} as="textarea" rows={3}/>
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
    )
}

export default ReviewForm