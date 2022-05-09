import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import img from '../../assets/media/about.jpg';
import './About.css';

class About extends Component {
  render() {
    const {lang} = this.props;
    return (
      <div className='about-main' id='about'>
        <Container>
          <div className='about-img text-center'>
            <img src={img} alt='about'/>
          </div>
          <h1 className='about-head'>{lang.about}</h1>
          <div className="about-content" >
            <p>
            {lang.aboutText}
            </p>
          </div>
        </Container>
      </div>
    )
  }
}
export default About;
