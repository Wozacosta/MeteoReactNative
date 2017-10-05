import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
// Text = correspond au <p>
// View = correspond au <div>
import About from './components/About';
import Search from './components/Search';
import { TabNavigator} from 'react-navigation';

const Tabs = TabNavigator({
  Search: { screen: Search },
  About: { screen: About }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      height: 2,
      backgroundColor: '#FFF'
    },
    // pressColor: "#FF0000",
    style: {
      backgroundColor: "#a2273c",
      borderTopWidth: 1,
      borderColor: "#3f101c"
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>

    );
  }
}

// Stylesheet offre grain de perf + verif des attributs
// On peut aussi simplement utiliser un object
// Chaque balise a ses propres styles
// CamelCased syntax
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
