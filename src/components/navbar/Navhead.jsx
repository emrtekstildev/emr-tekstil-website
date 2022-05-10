import React, { Component } from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap';
import './Navhead.css';
import logo from '../../assets/media/emr-logo.png';



class Navhead extends Component {
  render() {
    const {contents} = this.props;
    return (
      <div className='nav-main'>

          <Navbar  className='desktop navbar' >
            <Container>
                <Navbar.Brand href='/' className='brand'>
                    <img
                    alt=""
                    src={logo}
                    width="85"
                    height="45"
                    className="d-inline-block align-top"
                    />{'  '}
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className='justify-content-end'>
              <Nav className="me-auto">
                <Nav.Link href='/' className='cl-fff'>{contents.home}</Nav.Link>
                <Nav.Link href='#about' className='cl-fff'>{contents.about}</Nav.Link>
                <Nav.Link href='#contact' className='cl-fff'>{contents.contact}</Nav.Link>
              </Nav>
              </Navbar.Text>
            </Navbar.Collapse>
            </Container>
          </Navbar>


          <Navbar  expand="lg" className='mobile navbar'>
          <Container>
            <Navbar.Brand href="/" className='brand'>
            {/* <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{'  '} */}
              {contents.projectName}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href='/' className='cl-fff'>{contents.home}</Nav.Link>
                <Nav.Link href='#about' className='cl-fff'>{contents.about}</Nav.Link>
                <Nav.Link href='#contact' className='cl-fff'>{contents.contact}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
      </div>
    )
  }
}
export default Navhead;
