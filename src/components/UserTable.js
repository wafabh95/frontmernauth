import React from 'react'
import {Table,Button} from 'react-bootstrap';
import './userTable.css'
import ModalADD from "./ModalADD"
import { useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getuser,deleteuser, edditUserById } from '../Actions/userActions';
import ModalEdit from './ModalEdit';
const UserTable = () => {
  //Modal add
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

 //Modal edit
 const [showEdit, setShowEdit] = useState(false);
 const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

  




 

   const users = useSelector(state=>state.userReducer.users)
const dispatch = useDispatch()
useEffect(() => {
    dispatch(getuser())
}, [])
  return (
    <div>
        <div className='btnadd'>
        <Button variant="success" className="addbtn" onClick={handleShow}>ADD</Button>
        </div>
        
        <ModalADD handleClose={handleClose} handleShow={handleShow} show={show}/>

<Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>PhoneNumber</th>
          
          <th>Date De Création</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((el)=>
        <>
        <tr>
          <td key={el._id}>{el._id}</td>
          <td>{el.fname}</td>
          <td>{el.lname}</td>
          <td>{el.address}</td>
          <td>{el.phoneNumber}</td>
          <td>{el.date}</td>
          <td>
          <Button variant="primary" onClick={handleShowEdit}>EDIT</Button>
          <Button variant="danger" onClick={()=>dispatch(deleteuser(el._id))}>Delete</Button>
          </td>
        </tr>

<ModalEdit el={el}  handleCloseEdit={handleCloseEdit} handleShowEdit={handleShowEdit} showEdit={showEdit} />

      
     
      </>
        )}
      
        </tbody>
    </Table>
    </div>
  )
}

export default UserTable