import React, { Component } from 'react'
import './Banner.css'
import img from '../../assets/media/textile.jpg';
import TypeWriter from 'react-typewriter';
import { Carousel } from 'react-bootstrap';

 class Banner extends Component {
  render() {
      const {contents} = this.props;
    return (
      <div className='banner'>
         <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="EMR TEKSTİL"
          />
          <Carousel.Caption className='caption'>
            <h2>{contents.projectName}</h2>
            <p>{contents.footerText}</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
      </div>
    )
  }
}
export default Banner;