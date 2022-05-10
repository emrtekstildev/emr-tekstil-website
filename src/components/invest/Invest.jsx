import React, { Component } from 'react'
import '../next-gen/Next.css';
import img from '../../assets/media/image.jpg';
import {Container, Row, Col} from 'react-bootstrap';

class Invest extends Component {
  render() {
    const {contents} = this.props;
    return (
      <div className='next-main'>
        <Container>
          <Row>
            <Col md={6}>
                <img src={img}  alt="emr tekstil" />
            </Col>
            <Col md={6} className='text'>
              <h1>{contents.investmentProcces}</h1>
              <p>
              {contents.productText}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Invest;
