import React,{useState} from 'react'
import {Button,Form,Modal }from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { edditUserById } from '../Actions/userActions';


const ModalEdit = ({el,handleCloseEdit,handleShowEdit,showEdit}) => {
    
  const [newupdate,setNewupdate]=useState({
    fname:"",
    lname:"",
    address:"",
    phonenumber:"",
  })
  const handlechangeEdit=(e)=>{
    setNewupdate({...newupdate,[e.target.name]:e.target.value})
    e.preventDefault()
  }
  const dispatch = useDispatch()

  return (
    <div>
 <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>FirstName: </Form.Label>
              <Form.Control
                type="text"
                placeholder={el.fname}
                name="fname"
                onChange={handlechangeEdit}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>LastName:</Form.Label>
              <Form.Control
                type="text"
                placeholder={el.lname}
                name="lname"
                onChange={handlechangeEdit}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                placeholder={el.address}
                autoFocus
                name="address"
                onChange={handlechangeEdit}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control
                type="text"
                placeholder={el.phoneNumber}
                autoFocus
                name="phoneNumber"
                onChange={handlechangeEdit}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary"  onClick={()=>dispatch(edditUserById(el._id,newupdate),handleCloseEdit())}>
          Edit
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default ModalEdit