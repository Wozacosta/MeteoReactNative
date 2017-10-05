import React from 'react';
import { ListView, ActivityIndicator, Text, Image, Button, View } from 'react-native';
import style from '../Style';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Row from './weather/Row';

export default class List extends React.Component {
  static navigationOptions = ({navigation}) => {
    // console.log(params);
    return {
      title: `Météo ${navigation.state.params.city}`,
      tabBarIcon: () => {
        return <Image source={require('../../memento/components/icons/home.png')} style={{width: 20, height: 20}}/>;
      }
    }
  }
  constructor (props){
    super(props);
    // console.log('state', this.props.navigation.state)
    this.state = {
      city: this.props.navigation.state.params.city,
      report: null,
    }
    setTimeout(() => {
      this.fetchWeather()
    }, 1000);

  }
  fetchWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=15&APPID=8effaed771e1c858d2731846246b3624`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          report: response.data
        })
      })
  }
  render() {
    if(this.state.report === null){
      return (
        <ActivityIndicator color={style.color} size="large"/>
      )
    }else{
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      // ds.cloneWithRows(this.state.report);
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.report.list)}
          renderRow={(row, j, index) => <Row day={row} index={parseInt(index, 10)} />}
          />
      );
    }

  }
};