import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css"
import Photo  from '../images/archcreek1.jpg';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Header = () => {

    const {user, logOut} = useAuth();
    return (
<Navbar header={Header} bg="dark" variant="" sticky="top" collapseOnSelect expand="lg">
    <Container>
      <img className="img-part" src={Photo} alt="" />
    <Navbar.Brand href="#home">Arch Creek Animal Clinic</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
    <Nav.Link className="text-light" as={Link} to="/about">About</Nav.Link>
    <Nav.Link className="text-light" as={Link} to="/services">Services</Nav.Link>
    <Nav.Link className="text-light" as={Link} to="/vets">Vets</Nav.Link>
    <Nav.Link className="text-light" as={Link} to="/contact">Contact</Nav.Link>
    <div className="logIn-logOut">
                    {
                        user?.email ?
                            <Button onClick={logOut} className="logout" variant="outline-primary">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">
                                <Button className="login" variant="outline-primary">Login</Button>
                            </Nav.Link>
                    }

                    <Nav.Link as={Link} to="/register">
                        <Button className="register" variant="outline-primary">Register</Button>

                    </Nav.Link>

                </div>
                <div> <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </div>
     
        </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;