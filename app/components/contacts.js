
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
class Contacts extends Component{
   
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {id:1,  name: "Mark Doe",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:2,  name: "Clark Man",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "Jaden Boor",  status:"not active", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "Srick Tree",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5,  name: "Erick Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6,  name: "Francis Doe", status:"not active", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8,  name: "Matilde Doe", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9,  name: "John Doe",    status:"not active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:10, name: "Fermod Doe",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
        {id:11, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
      ]
    };
  }
  closed = () => {
    this.props.closeEvent(false)
}
  renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.mblTxt}>Mobile</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={[styles.msgTxt,{color:item.status == 'active'?'#008B8B':'red'}]}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return(
      <View style={{flex:1}} >
        <View style={{flex:1}}>
        <View style={styles.headerContent}>
          <View>
            <Icon style={{flex:1}} onPress={this.closed} style={{ position: 'relative', marginLeft: 15, marginTop: 20 }} name='arrowleft' size={20} color="black" />
          </View>
          <View>
              <Text style={{ fontSize: 22, color: 'grey',paddingRight:10 }}>Discovery App</Text>
            </View>
          </View>
         </View>
        <View style={{flex:11}}>
        <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
          </View>
      </View>
    );
  }
}
export default Contacts

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width:170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 15,
  },
  
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
       alignItems: 'center',
       paddingBottom:5,
        width: '100%',
        opacity: 0.7,
        borderBottomWidth:4,
        borderBottomColor:'grey'
    }
}); 
