import React from 'react';
import { TextInput, Image, Button, View, Keyboard } from 'react-native';
import style from '../Style';
import { StackNavigator } from 'react-navigation';
import List from './List';

class Search extends React.Component {

  static navigationOptions = {
    title: 'Rechercher une ville',
    tabBarIcon: () => {
      return <Image source={require('../../memento/components/icons/home.png')} style={{width: 20, height: 20}}/>;
    }
  }

  constructor (props) {
    super(props);
    this.state = {
      city: 'Montpellier'
    }
  }

  setCity (city) {
    this.setState({
      city
    })
  }

  submit () {
    Keyboard.dismiss();
    this.props.navigation.navigate('Result', {city: this.state.city});
  }
  render() {
    return (
      <View style={style.container}>
      <TextInput
        underlineColorAndroid='transparent'
        style={style.input}
        value={this.state.city}
        onSubmitEditing={() => this.submit()}
        onChangeText={(text) => this.setCity(text)}
      />
      <Button color={style.color} onPress={() => this.submit()} title='Rechercher' />
      </View>
    );
  }
}
const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTile
}

export default StackNavigator ({

  Search: {
    screen: Search,
    navigationOptions
  },
  Result: {
    screen: List,
    navigationOptions
  },

});

