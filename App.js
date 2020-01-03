
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
import { createDrawerNavigator, createStackNavigator, createSwitchNavigator ,createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import LatestProfile from './app/components/latestProfile';
import LatestHome from './app/components/latesHome' 
import ContactList from './app/components/contacts'
import Notifications from './app/components/notifications';
import NotificationsPosts from './app/components/notificationPost'
import LoginForm from './app/components/LoginForm'
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
    Login: LoginForm,
    Home: Main,
    // About: AboutScreen,
    Events: LatesEvents,
    Profile: LatestProfile,
    Contact:ContactList,
    Notification: Notifications,
    // Notipost: NotificationsPosts
  }
  ,
  {

    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: 'rgba(47,163,218, .4)',
    contentOptions: {
      activeTintColor: 'black',
      activeBackgroundColor: 'white',
    },
  }
);

const Switching = createSwitchNavigator({
  Login: LoginForm,
  Homes: DrawerNavigator
})
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