import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    ImageBackground,
    TouchableHighlight,
    Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
class Profile extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: [
    //             <View style={styles.profStyle}>
    //                 <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Overview</Text>
    //                 <Icon name="edit" size={25} color="black" style={{ marginTop: 2 }} />
    //             </View>,
    //             <Text style={styles.profInfo}>position: Software Engineer</Text>,
    //             <Text style={styles.profInfo}>Company: Cloud Coherence</Text>,
    //             <Text style={styles.profInfo}>Experienced Junior Software Engineer with a demonstrated history of working in the information technology and services.</Text>,

    //         ],
    //         educationalInfo: [
    //             <View style={styles.EduStyle}>
    //                 <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Work</Text>
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <Icon name="plus" size={25} color="black" style={{ marginTop: 2 }} />
    //                     <Icon name="edit" size={25} color="black" style={{ marginTop: 2 }} />
    //                 </View>
    //             </View>,
    //             <View style={styles.profInfo}>
    //                 <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Cloud Coherence</Text>
    //                 <Text >
    //                     Skilled in PHP, React Native, Databases, Bootstrap, and Cascading Style Sheets (CSS). Strong engineering professional with a Bachelor of Science.
    //                 </Text>
    //             </View>,
    //             <View style={styles.EduStyle}>
    //                 <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Education</Text>
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <Icon name="plus" size={25} color="black" style={{ marginTop: 2 }} />
    //                     <Icon name="edit" size={25} color="black" style={{ marginTop: 2 }} />
    //                 </View>
    //             </View>,
    //             <View style={styles.profInfo}>
    //                 <Text style={{ fontSize: 21, fontWeight: 'bold' }}>University Of Karachi</Text>
    //                 <Text >
    //                     From: 2010 to: 2014 - Karachi, Pakistan
    //             </Text>
    //             </View>,
    //             <View style={styles.EduStyle}>
    //                 <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Contact</Text>
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <Icon name="plus" size={25} color="black" style={{ marginTop: 2 }} />
    //                     <Icon name="edit" size={25} color="black" style={{ marginTop: 2 }} />
    //                 </View>
    //             </View>,
    //             <View style={styles.profInfo}>
    //                 <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Address</Text>
    //                 <Text >
    //                     A-974, North Karachi 11-L Karachi, Pakistan
    //             </Text>
    //             </View>,
    //             <View style={styles.profInfo}>
    //                 <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Email</Text>
    //                 <Text >
    //                     uzairahmed1494@gmail.com
    //             </Text>
    //             </View>,
    //             <View style={styles.profInfo}>
    //                 <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Mobile</Text>
    //                 <Text >
    //                     +9212345678
    //             </Text>
    //             </View>,

    //         ]
    //     }
    // }
    closed = () => {
        this.props.closeEvent(false)
    }
    // renderRow = ({ item }) => {
    //     return (
    //         <View style={styles.item}>
    //             {item}
    //         </View>)

    // }
    // renderEduRow = ({ item }) => {
    //     return (
    //         <View style={styles.eduitem}>
    //             {item}
    //         </View>)

    // }
    render() {
        return (
            <View  >
                <View style={styles.headerContent}>
          <View>
          <Icon style={{flex:1}} onPress={this.closed} style={{ position: 'relative', marginLeft: 15, marginTop: 20 }} name='caret-left' size={20} color="black" />
               </View>
          <View>
              <Text style={{ fontSize: 22, color: 'grey',paddingRight:10 }}>Discovery App</Text>
            </View>
          </View>
                {/* <View >
                    <Image source={require('./../assets/homeHeader.png')} style={{ width: '100%', height: 200 }} />
                </View> */}
                
               <ScrollView >
                   <View>
                    <View style={styles.profileStyle}>
                        <Text style={{ fontSize: 30, padding: 5, color: 'white' }}>Donie Yen</Text>
                        <Image style={styles.image} source={require('./../assets/donnieyen.jpg')} />
                       
                    </View>
                    <View style={styles.item}>

                        <View style={styles.profStyle}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Overview</Text>
                            <Icon name="pencil" size={25} color="black" style={{ marginTop: 2 }} />
                        </View>
                        <Text style={styles.profInfo}>position: Software Engineer</Text>
                        <Text style={styles.profInfo}>Company: Cloud Coherence</Text>
                        <Text style={styles.profInfo}>Experienced Junior Software Engineer with a demonstrated history of working in the information technology and services.</Text>
                    </View>

                    <View sty={styles.eduitem}>
                        <View style={styles.EduStyle}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Work</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="plus" size={25} color="black" style={{ marginTop: 2,marginRight:4 }} />
                                <Icon name="pencil" size={25} color="black" style={{ marginTop: 2 }} />
                            </View>
                        </View>
                        <View style={styles.profInfo}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Cloud Coherence</Text>
                            <Text >
                                Skilled in PHP, React Native, Databases, Bootstrap, and Cascading Style Sheets (CSS). Strong engineering professional with a Bachelor of Science.
                            </Text>
                        </View>
                        <View style={styles.EduStyle}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Education</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="plus" size={25} color="black" style={{ marginTop: 2,marginRight:4 }} />
                                <Icon name="pencil" size={25} color="black" style={{ marginTop: 2 }} />
                            </View>
                        </View>
                        <View style={styles.profInfo}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>University Of Karachi</Text>
                            <Text >
                                From: 2010 to: 2014 - Karachi, Pakistan
                            </Text>
                        </View>
                        <View style={styles.EduStyle}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Contact</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="plus" size={25} color="black" style={{ marginTop: 2,marginRight:4 }} />
                                <Icon name="pencil" size={25} color="black" style={{ marginTop: 2 }} />
                            </View>
                        </View>
                        <View style={styles.profInfo}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Address</Text>
                            <Text >
                                A-974, North Karachi 11-L Karachi, Pakistan
                            </Text>
                        </View>
                        <View style={styles.profInfo}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Email</Text>
                            <Text >
                                uzairahmed1494@gmail.com
                            </Text>
                        </View>
                        <View style={styles.profInfo}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Mobile</Text>
                            <Text >
                                +9212345678
                            </Text>
                        </View>

                    </View>
                   
                    </View>
                </ScrollView>


               

            </View>
        )
    }
}

const styles = StyleSheet.create({
    contt:{flex:1},
    scrollingss:{flex:1,marginBottom:100},
    profStyle: { borderBottomWidth: 1, borderColor: 'grey', justifyContent: 'space-between', padding: 20, opacity: 0.9, display: 'flex', flexDirection: 'row' },
    profInfo: { borderBottomWidth: 1, borderColor: 'grey', padding: 20, opacity: 0.9, fontSize: 18 },
    EduStyle: { borderBottomWidth: 1, borderColor: 'grey', justifyContent: 'space-between', padding: 20, opacity: 0.9, display: 'flex', flexDirection: 'row' },
    profileStyle: {
        backgroundColor: '#CCCACA',
        height: 'auto',
        padding: 5,
        margin: 0,
        opacity: 0.9
    },
    image: { width: '100%', height: 250 },
    eduitem: {},
    item: {  },
    header: {
        height: '100%',
        width: '100%'
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
})
export default Profile;