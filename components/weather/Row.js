import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import moment from 'moment';
import globalStyle from '../../Style';
import 'moment/locale/fr';
import FadeInView from '../animations/fadeInView';


moment.locale('fr');

export default class Row extends React.Component {
  static propTypes = {
    day: React.PropTypes.object,
    index: React.PropTypes.number
  }
  day() {
    let day = moment(this.props.day.dt * 1000).format('ddd');
    return (
      <Text style={[style.bold, style.white]}>{ day.toUpperCase() }</Text>
    )
  }

  date() {
    let date = moment(this.props.day.dt * 1000).format('DD/MM');
    return (
      <Text>{ date }</Text>
    )
  }
  icon(size = 50) {
    const type = this.props.day.weather[0].main.toLowerCase();
    let image;
    switch (type){
      case'clouds':
        image = require('./icons/overcast-day.png');
        break;
      case'rain':
        image = require('./icons/rainy-day.png');
        break;
      default:
        image = require('./icons/sunny-day.png');
    }
    return <Image source={image} style={{width: size, height: size}}/>;
  }
  render() {
    if (this.props.index === 0){
      return (
        <FadeInView delay={this.props.index * 50}>
        <View style={[style.flex, style.view, style.firstView]}>
          <View>
            <Text style={{color: '#FFF'}}>{this.day()} {this.date()}</Text>
            {this.icon(90)}
          </View>

          <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.temp.day)} ℃</Text>
        </View>
        </FadeInView>
      )
    }
    else {
      return (
        <FadeInView delay={this.props.index * 50}>
        <View style={[style.flex, style.view]}>
          <View style={style.flex}>
            {this.icon()}
            <Text style={{marginLeft: 10}}>{this.day()} {this.date()}</Text>
          </View>

          <Text style={style.temp}>{Math.round(this.props.day.temp.day)} ℃</Text>
        </View>
        </FadeInView>
      )
    }
  }
}

const style = StyleSheet.create({
  white: {
    color: '#FFF'
  },
  bold: {
    fontWeight: 'bold'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center'
  },
  firstView: {
    backgroundColor: '#e54b65'
  },
  view: {
    backgroundColor: '#394163',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#202340',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',

  },
  temp: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22
  }
});