import React, { Component } from 'react'
import './Next.css';
import img from '../../assets/media/modern.jpg';
import {Container,Row,Col} from 'react-bootstrap';

class Next extends Component {
  render() {
      const {contents} = this.props;
    return (
      <div className='next-main'>
        <Container>
          <Row>
            <Col md={6}>
                <img src={img}  alt="" srcset="" />
            </Col>
            <Col md={6} className='text'>
              <h1>{contents.nextSecHead}</h1>
              <p>
               {contents.modernText}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Next;