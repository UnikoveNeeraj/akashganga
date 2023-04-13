import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import headerLogo from '../../assets/img/logos/header-logo.svg';
import notificationIcon from '../../assets/img/logos/notificationIcon.svg';
import windowsMenu from '../../assets/img/logos/WindowsMenu.svg';

export const Header1 = () => {
  return (
    <Navbar expand="lg"style={{backgroundColor:"#FFFFFF"}}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={headerLogo} alt="logo" width="245" height="67" className="d-inline-block align-text-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="mt-3">
                    <Nav
                        className="me-auto my-2 my-lg-0 mx-1"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <InputGroup style={{ width: "300px" }}>
                            <InputGroup.Text id="basic-addon1" className='bg-white'><BsSearch /></InputGroup.Text>
                            <Form.Control
                                placeholder="Search for journals and articles"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <div className='d-flex flex-row gap-4 px-5'>
                            <Nav.Link href="#action1" style={{color:"#167092", fontWeight:"bold"}}>Home</Nav.Link>
                            <Nav.Link href="#action2" style={{color:"#167092", fontWeight:"bold"}}>Journals</Nav.Link>
                            <Nav.Link href="#action3" style={{color:"#167092", fontWeight:"bold"}}>Articles</Nav.Link>
                            <Nav.Link href="#action4" style={{color:"#167092", width: "110px",fontWeight:"bold" }}>Sevan Haat</Nav.Link>
                            <button className='btnStyle px-2' style={{ width: "150px", background: '#167092' }}>Submit Article</button>
                        </div>
                        
                    </Nav>
                    <div className='d-flex gap-4 px-3' style={{ borderLeft: "2px solid #97979B"}}>
                        <img src={notificationIcon} alt="Notification"/>
                        <div className='droupdownPart'>
                            <img src={windowsMenu} alt="victor" className='mx-2'/>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                Aakashganga
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" className='border-bottom border-dark'>Akashganga</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Kaashi</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <p style={{ marginTop: "12px", marginLeft: "5px" }}>Aakashganga</p> */}

                        </div>
                    </div>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
    </Navbar>
  )
}
