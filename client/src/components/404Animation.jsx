import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './404.json';

class ErrorAnimation extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={450}
              width={600}
        />
      </div>
    )
  }
}

export default ErrorAnimation;