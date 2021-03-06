import { signOut } from 'firebase/auth';
import React from 'react';
import { FaCarCrash } from "react-icons/fa";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Shared/Auth/Firebase.init';
import CustomLink from '../Shared/CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);



    const logout = () => {
        signOut(auth);
    };
    return (
        <section className='sticky-top shadow-sm'>
            <Navbar sticky='top' className='py-3' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/"><span className='brandName'><FaCarCrash className='me-2 fs-3 text-success' />Auto Accord</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={CustomLink} to="/">HOME</Nav.Link>
                            {user && <>
                                <Nav.Link as={CustomLink} to="/manageinventories">MANAGE ITEMS</Nav.Link>
                                <Nav.Link as={CustomLink} to="/additem">ADD ITEM</Nav.Link>
                                <Nav.Link as={CustomLink} to="/myitems">MY ITEMS</Nav.Link>
                            </>}
                            <Nav.Link as={CustomLink} to="/contact">CONTACT</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={CustomLink} to="/blog">BLOG</Nav.Link>
                            {
                                user ?
                                    <button onClick={logout} className='btn text-start fw-bold gray ps-0'>Logout</button>
                                    : <Nav.Link as={CustomLink} to="/login">
                                        LOGIN
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;