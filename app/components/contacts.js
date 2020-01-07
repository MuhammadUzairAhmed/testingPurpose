import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-elements'
import Icons from 'react-native-vector-icons/MaterialIcons';

let img;
class Contacts extends Component {
  static navigationOptions = {
    drawerLabel: 'Contacts',
    drawerIcon: () => (<Icon name='contacts' size={18} color="black" />)
  };
  constructor(props) {
    super(props);
    this.state = {
      chekValue: '',
      setImage: '',
      numColumns: 2,
      refresh: false,
      data: [
        { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
      ],
      calls: [
        { id: 1, name: "Mark Doe", status: "active", image: require('./../assets/donnieyen.jpg'), email: 'uzair@gmail.com' },
        { id: 2, name: "Clark Man", status: "active", image: require('./../assets/nightFl.jpg'), email: 'joeee@gmail.com' },
      ]
    };
  }
  componentDidMount() {
    this.setState({
      refresh: !this.state.refresh
    })
  }
  componentDidUpdate(prevprops, prevstate) {
    let email = this.props.navigation.getParam('email', 'No-Email');
    if (prevprops != this.props) {
      this.setState({
        refresh: !this.state.refresh
      })
    }
  }

  renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    const email = navigation.getParam('email', 'No-Email');
    console.log('renderItem', email)
    const password = navigation.getParam('password', 'some default value');
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (item.email != email ?
      <View style={[styles.item, { height: 150 }]}>
        <View style={{ backgroundColor: 'rgba(47,163,218, .4)', borderRadius: 20 }}>
          <ImageBackground source={item.image} style={[styles.item, { height: 150 }]}>
            <Text style={styles.itemText}>{item.name}</Text>
          </ImageBackground>
        </View>
      </View> : null
    );
  }

  formatRow = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
  }

  render() {
    const { navigation } = this.props;
    const email = navigation.getParam('email', 'No-Email');
    const password = navigation.getParam('password', 'some default value');

    return (
      <View style={{ flex: 1 }}>
        {/* flex 1 */}
        <View style={styles.header}>
          <View style={styles.headerChild1}>
            <View style={styles.headerSubChild1}>
              <Icon onPress={this.closed} name='arrowleft' size={20} color="white" onPress={() => this.props.navigation.navigate('Home')} />
              <Text style={{ ...styles.subHeaderchilds, fontWeight: 'bold' }}>My Contacts</Text>
              <Text style={{ ...styles.subHeaderchilds }}></Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ width: '20%' }}><Icon name="contacts" size={70} color="black" /></View>
          <View style={{ width: '80%' }}><Text style={{ textAlign: 'center' }}>Experienced Junior Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in PHP, React Native, Databases, Bootstrap.</Text></View>
        </View>
        <View style={{ padding: 5 }}>
          <Divider style={{ backgroundColor: 'grey' }} />
        </View>
        <View style={{ flex: 9 }}>
          <FlatList
            extraData={this.state.refresh}
            data={this.formatRow(this.state.calls, this.state.numColumns)}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={this.state.numColumns} />
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 5,
  },
  // header style
  header: {
    flex: 1,
    backgroundColor: '#53ADAB'
  },
  headerChild1: {
    flex: 2,
  },
  headerChild2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 8
  },
  headerSubChild1: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10
  },
  subHeaderchilds: {
    color: 'white',
    fontSize: 18
  },
  subHeaderchildsCommon: {
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    paddingBottom: 6
  },
  subHeaderchilds21: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6
  },
  subHeaderchilds22: {},
  subHeaderchilds23: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },

  item: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 15,
    borderRadius: 20
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Contacts;