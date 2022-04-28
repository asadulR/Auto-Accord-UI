import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Shared/Auth/Firebase.init';
import CustomLink from '../Shared/CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <section className='sticky-top shadow-sm'>
            <Navbar sticky='top' className='py-3' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/"><span className='brandName'>Auto Accord</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={CustomLink} to="/">HOME</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            {
                            user? 
                            <button className='btn text-start ps-0'>Logout</button>
                            : <Nav.Link as={CustomLink} to="/login">
                                LOGIN
                            </Nav.Link> }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;