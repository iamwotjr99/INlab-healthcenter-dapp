import { Nav, Container, Navbar, Dropdown } from 'react-bootstrap';
function userHeader( {state} ) {
    return (
        <div className='user_header'>
                <Navbar variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Health Bridge</Navbar.Brand>
                        <Nav className="me-auto">
                        </Nav>
                    </Container>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop_btn'>
                            SignUp
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Hospital</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Practitioner</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Patient</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar>
            </div>
    )
}

export default userHeader;