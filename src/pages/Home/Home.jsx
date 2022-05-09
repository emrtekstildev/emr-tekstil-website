import React, { Component } from 'react'
import Next from '../../components/next-gen/Next';
import Critera from '../../components/our-critera/Critera';
import Invest from '../../components/invest/Invest';

class Home extends Component {
  render() {
      const {lang} = this.props;
    return (
      <div className='home-main'>
        <Next contents={lang}/>
        <hr size="4.5"/>
        <Critera contents={lang}/>
        <hr size="4.5"/>
        <Invest contents={lang}/>
      </div>
    )
  }
}
export default Home;
