import React from 'react'
import {Button,Form,Modal }from 'react-bootstrap';
import { useState } from 'react';
import {adduser} from '../Actions/userActions'
import { useDispatch } from 'react-redux';


const ModalADD = ({handleClose,handleShow,show}) => {
  const dispatch= useDispatch()
  const [newinput,setNewInput]=useState({
    fname:"",
    lname:"",
    address:"",
    phoneNumber:"",
   
  })
   const handlechange=(e)=>{
    setNewInput({...newinput,[e.target.name]:e.target.value})
   }
  return (
    <div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>FirstName: </Form.Label>
              <Form.Control
                type="text"
                placeholder="FirstName:"
                name="fname"
                onChange={handlechange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>LastName:</Form.Label>
              <Form.Control
                type="text"
                placeholder="LastName"
                name="lname"
                onChange={handlechange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                autoFocus
                name="address"
                onChange={handlechange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control
                type="text"
                placeholder="PhoneNumber"
                autoFocus
                name="phoneNumber"
                onChange={handlechange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={()=>dispatch(adduser(newinput),handleClose())}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalADD