import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
import style from '../Style';

export default class About extends Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require('../../memento/components/icons/user.png')} style={{width: 20, height: 20}}/>;
    }
  }

  search () {
    // console.log(this.props.navigation);
    this.props.navigation.navigate('Search');
  }

  render () {
    return (
      <View style={style.container}>
        <Text style={style.title}>A propos de l'application</Text>
        <Text>made by Wozacosta</Text>
        <Button color={style.color}  onPress={() => this.search()} title='Rechercher une ville' />
      </View>
    )
  }

}