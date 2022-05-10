import React, { Component } from 'react'
import './Banner.css'
import img from '../../assets/media/textile3.jpg';
import { Carousel } from 'react-bootstrap';
import logo from '../../assets/media/emr-logo.png';

 class Banner extends Component {
  render() {
      const {contents} = this.props;
    return (
      <div className='banner'>
         <Carousel>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src={img}
            alt="EMR TEKSTİL"
          />
          <Carousel.Caption className='caption'>
            <img
              alt="emr tekstil"
              src={logo}
              className="d-inline-block align-top"
              />
            <p>{contents.footerText}</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
      </div>
    )
  }
}
export default Banner;