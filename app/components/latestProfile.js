import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,ScrollView, Button} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';

class LatestProfile extends Component{
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon:()=>(<Icon name='profile' size={18} color="black" />)
       };
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render(){
       return(
            //flex 1
            <View style={styles.container}>

                {/* flex 1 */}
                <View style={styles.header}>
                    <View style={styles.headerChild1}>
                        <View style={styles.headerSubChild1}>
                        <Icon onPress={this.closed}  name='arrowleft' size={20} color="white" onPress={()=>this.props.navigation.navigate('Home')} />
                            <Text style={{ ...styles.subHeaderchilds, fontWeight: 'bold' }}>My Profile</Text>
                            <Text style={{ ...styles.subHeaderchilds }}></Text>
                        </View>
                    </View>
                </View>

                {/* flex 10 */}
                <View style={styles.body}>
                   
                   <ScrollView >
                      <Image style={styles.image} resizeMode="cover" source={require('./../assets/donnieyen.jpg')} />
                        <View style={styles.postion}>
                            <View><Text style={{fontSize:24,fontWeight:'bold'}}>Muhammad Uzair</Text></View>
                            <View><Text style={{fontSize:19,color:'grey'}}>Software Developer</Text></View>
                            <View><Text style={{fontSize:19,color:'grey'}}>DOB: 14-11-1994</Text></View>
                        </View>
                        <View style={styles.impActivity}>
                            <View style={styles.impActivityChils}><Text>marital status:</Text><Text>Single</Text></View>
                            <View style={styles.impActivityChils}><Text>contact:</Text><Text>+92123443242</Text></View>
                        </View>
                        <View style={styles.interests}>
                            <View>
                                <View style={styles.interestChild}><Icons  name='photo' size={20} color="white"  /></View>
                                <Text>Photos</Text>
                            </View>
                            <View>
                                <View style={styles.interestChild}><Icons  name='event' size={20} color="white"  /></View>
                                <Text>Events</Text>
                            </View>
                            <View>
                                <View style={styles.interestChild}><Icons  name='local-activity' size={20} color="white"  /></View>
                                <Text>Activities</Text>
                            </View>
                        </View>
                        <View style={styles.about}>
                            <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center'}}>
                                About Me
                            </Text>
                            <Text style={{textAlign:'center'}}>
                            Experienced Junior Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in PHP, React Native, Databases, Bootstrap, and Cascading Style Sheets (CSS).
                            </Text>
                        </View>
                        <View style={styles.followMe}>
                        <Button
                            title="Follow me"
                            style={{backgroundColor:'#53ADAB',color:'white', borderRadius:10}}
                           />
                        </View>
                        </ScrollView>
                   
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    // block container style
    container:{
        flex:1
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
        justifyContent:'space-between',
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

    // body style
    body:{
        flex:10
    },
    image: { 
        width: '100%', 
        height: 250 ,
        flex:1
    },
    postion:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        marginTop:'1%'
    },
    impActivity:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'1%'
    },
    impActivityChils:{
        alignItems:'center'
    },  
    interests:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:'1%'
    },
    interestChild:{
        height:50,
        width:50,
        backgroundColor:'#53ADAB',
        borderRadius:50,
        elevation:5,
        padding:15,
        
    },
    about:{
        flex:1,
        padding:10,

    },
    followMe:{
        flex:1,
       padding:10,
    }
})

export default LatestProfile;