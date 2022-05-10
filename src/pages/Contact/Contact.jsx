import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import logo from '../../assets/media/emr-logo.png';
import './Contact.css';




function Contact(props){
  const lang = props.lang;
 
    return (
          <div className='contact-main'>
            <Container>
              <Row>

                <Col md={6}>
                  <div className='contact-img text-center' id='contact'>
                    <a href="#home">
                      <img src={logo} alt='contact'/>
                    </a>
                  </div>
                </Col>
                <Col md={6}>
                  <h1 className='contactUs'>{lang.application}</h1>
                  <div className="contact-content">
                  <h5>{lang.email} :</h5>
                    <p>
                      <a href="mailto:">
                        emrteks@outlook.com
                      </a>
                    </p>
                    <h5>{lang.phoneNumber} :</h5>
                    <p>
                      <a href="tel:+">
                        +90 545 346 26 96
                      </a>
                    </p>
                    <h5>{lang.address} :</h5>
                    <p> 
                      <a href="https://goo.gl/maps/8733S653CFbgsbgs6" target="_blank" rel='noreferrer'>
                        Fulya Mah. Büyükdere Cad. Torun Center D Blok <br></br> No: 74/10 Şişli / İstanbul, Turkey
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>   
    )
}
export default Contact;
