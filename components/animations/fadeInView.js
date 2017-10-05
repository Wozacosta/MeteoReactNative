import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class fadeInView extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      pan: new Animated.ValueXY({x: 200, y: 0})
    }
  }
  componentDidMount () {
    Animated.spring(
      this.state.pan,
      {
        // delay: this.props.delay, Animated.spring
        toValue: {x: 0, y: 0},
        // duration: 3000
      }
    ).start();
  }

  render(){
    return (
      <Animated.View
      style={{
        ...this.props.style,
        transform: this.state.pan.getTranslateTransform()
      }}>
        {this.props.children}
      </Animated.View>
    )
  }
}