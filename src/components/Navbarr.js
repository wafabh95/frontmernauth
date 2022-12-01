import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../Actions/authuserActions"

const Navbarr = () => {
  const isAuth = useSelector(state=>state.authReducer.isAuth)
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          {!isAuth ?(
          <>
          <Nav.Link>
              {" "}
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/Register">Register</Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link to="/Login">Login</Link>
            </Nav.Link>
          
          
          
            </>
          ):(
            <>
          <Navbar.Brand href="#home">User Mangment</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link>
              {" "}
              <Link to="/Post">Post</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/userTable">User Mangment</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/profile">Profile</Link>
            </Nav.Link>

            <Nav.Link onClick={()=>dispatch(logout())}>
              {" "}
              <Link to="/logout">logout</Link>
            </Nav.Link>

            {/* <Nav.Link href="">Home</Nav.Link> */}
            {/* <Nav.Link href="#features">Profile</Nav.Link> */}
          </Nav>
          </>
          )
          }
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
