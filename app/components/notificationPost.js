import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class PostView extends Component {

  render() {
    const { itemName,itemImage,otherParam } = this.props;
   return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerChild1}>
            <View style={styles.headerSubChild1}>
              <Icon onPress={this.closed} name='arrowleft' size={20} color="white" onPress={()=>this.props.closedComponent(true)} />
                <Text style={{ ...styles.subHeaderchilds, fontWeight: 'bold' }}>{itemName}</Text>
              <Text style={{ ...styles.subHeaderchilds }}></Text>
            </View>
          </View>
        </View>

          <View style={styles.postContent}>
                <Image style={styles.image} source={{uri:`${itemImage}` }} />
              <Text style={styles.postTitle}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit {otherParam}.
              </Text>

              <Text style={styles.postDescription}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
              </Text>

              <Text style={styles.tags}>
                Lorem, ipsum, dolor, sit, amet, consectetuer, adipiscing, elit. 
              </Text>

              <Text style={styles.date}>
                2017-11-27 13:03:01
              </Text>

              {/* <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: `${itemImage}`}}/>

                <Text style={styles.name}>
                    Johan Doe
                </Text>
              </View> */}
              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareButtonText}>Like</Text>  
              </TouchableOpacity> 
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image: { width: '100%', height: 250 },
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

  headerTitle:{
    fontSize:30,
    color:"#FFFFFF",
    marginTop:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  postContent: {
    flex: 1,
    padding:30,
  },
  postTitle:{
    fontSize:26,
    fontWeight:'600',
  },
  postDescription:{
    fontSize:16,
    marginTop:10,
  },
  tags:{
    color: '#53ADAB',
    marginTop:10,
  },
  date:{
    color: '#696969',
    marginTop:10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "#53ADAB",
  },
  profile:{
    flexDirection: 'row',
    marginTop:20
  },
  name:{
    fontSize:22,
    color:"#53ADAB",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:10
  }, 
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#53ADAB",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  }
});