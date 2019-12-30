
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, TouchableOpacity
} from 'react-native';
import Main from './app/components/Main'
import Eventlist from './app/components/listOfEvents';
import LatesEvents from './app/components/latestEvents'
import { createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
// class App extends Component{
//   render(){
//     return(
//       <Main />
//       // <Eventlist />
//     )
//   }
// }

// export default App;
class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: () => (<Icon name='bars' size={18} color="black" />),
    // headerStyle: {
    //   backgroundColor: '#f4511e',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Text>About Screen</Text>
        <Text>{itemId}</Text>
        <Text>{otherParam}</Text>
      </View>
    );
  }
}

const singleHomeNavigation = createStackNavigator({
  Home: Main

}, {
  defaultNavigationOptions: {
    title: 'homes'
  }
}
)
const singleAboutNavigation = createStackNavigator({
  About: AboutScreen
}
  , {
    defaultNavigationOptions: {
      title: 'Abouts'
    }
  }
)

const bottomNavigator = createBottomTabNavigator(
  {
    Home: singleHomeNavigation,
    About: singleAboutNavigation,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintcolor }) => {
          const { routeName } = navigation.state;
          let myicon;
          if (routeName == 'Home') {
            myicon = 'home'
          } else if (routeName == 'About') {
            myicon = 'bars'
          }
          return <Icon name={myicon} size={18} color={tintcolor} />
        },
        tabBarOptions: {
          activeTintColor: '#fff',
          activeBackgroundColor: 'grey',
        }
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: Main,
    // About: AboutScreen,
    Events: LatesEvents
  }
  ,
  {
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: 'rgba(47,163,218, .4)',
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#53ADAB',
    },
  }
);
const AppNavigator = createStackNavigator({
  defaulthome: DrawerNavigator
}
  , {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: <Icon name='bars' size={18} color="white" onPress={() => navigation.toggleDrawer()} />,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);