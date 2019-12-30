import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import { Divider } from 'react-native-elements'

class LatestEvent extends Component {
    static navigationOptions = {
        drawerLabel: 'Events',
        drawerIcon:()=>(<Icon name='creditcard' size={18} color="black" />)
       };
    constructor(props) {
        super(props);
        this.state = {
            defaultColor: 'white',
            selectedColor: '#53ADAB',
            defaultbackColor: '#53ADAB',
            selectedBackColor: 'white',
            defaultFont: 'normal',
            selectedFont: 'bold',
            eventData: [
                {
                    id: 1,
                    profile: require('./../assets/img4.jpg'),
                    name: 'M Uzair',
                    about: 'Hi, me and my fried maria looking for sociable and cheerful people.',
                    image: require('./../assets/containersImage.png'),
                    title: 'Fighting Event',
                    subtitle: ' @ Behria Auditorium',
                    timeStart: '04:00 pm',
                    tiemEnd: '02:17 pm',
                    day: 'wed',
                    month: 'jun',
                    date: '17',
                    nearestPlace: 'dallas tx',
                    like: false,
                    respond: true,
                    share: false,
                },
                {
                    id: 2,
                    profile: require('./../assets/img5.jpg'),
                    name: 'Daniyal kukda',
                    about: 'Hi, me and my fried maria looking for sociable and cheerful people.',
                    image: require('./../assets/img3.png'),
                    title: 'Fighting Event',
                    timeStart: '04:00 pm',
                    tiemEnd: '02:17 pm',
                    day: 'wed',
                    month: 'jun',
                    date: '17',
                    nearestPlace: 'dallas tx',
                    subtitle: '@ Behria Auditorium',
                    like: false,
                    respond: true,
                    share: false,
                },
                {
                    id: 3,
                    profile: require('./../assets/img2.jpg'),
                    name: 'Akhalaq Khan',
                    about: 'Hi, me and my fried maria looking for sociable and cheerful people.',
                    image: require('./../assets/img4.jpg'),
                    title: 'Fighting Event',
                    timeStart: '04:00 pm',
                    tiemEnd: '02:17 pm',
                    day: 'wed',
                    month: 'jun',
                    date: '17',
                    nearestPlace: 'dallas tx',
                    subtitle: ' @ Behria Auditorium',
                    like: false,
                    respond: true,
                    share: false,
                },
                {
                    id: 4,
                    profile: require('./../assets/containersImage.png'),
                    name: 'Ammar',
                    about: 'Hi, me and my fried maria looking for sociable and cheerful people.',
                    image: require('./../assets/img2.jpg'),
                    title: 'Fighting Event',
                    timeStart: '04:00 pm',
                    tiemEnd: '02:17 pm',
                    day: 'wed',
                    month: 'jun',
                    date: '17',
                    nearestPlace: 'dallas tx',
                    subtitle: ' @ Behria Auditorium',
                    like: false,
                    respond: true,
                    share: false,
                },
                {
                    id: 5,
                    profile: require('./../assets/img4.jpg'),
                    name: 'M Uzair',
                    about: 'Hi, me and my fried maria looking for sociable and cheerful people.',
                    image: require('./../assets/img5.jpg'),
                    title: 'Fighting Event',
                    timeStart: '04:00 pm',
                    tiemEnd: '02:17 pm',
                    day: 'wed',
                    month: 'jun',
                    date: '17',
                    nearestPlace: 'dallas tx',
                    subtitle: ' @ Behria Auditorium',
                    like: false,
                    respond: true,
                    share: false,
                },
                {
                    id: 6,
                    profile: require('./../assets/img3.png'),
                    name: 'Zahir Khan',
                    about: 'Hi, me and my fried maria looking for sociable and cheerful people.',
                    image: require('./../assets/img2.jpg'),
                    title: 'Fighting Event',
                    timeStart: '04:00 pm',
                    tiemEnd: '02:17 pm',
                    day: 'wed',
                    month: 'jun',
                    date: '17',
                    nearestPlace: 'dallas tx',
                    subtitle: ' @ Behria Auditorium',
                    like: false,
                    respond: true,
                    share: false,
                }
            ]
        }
    }
    render() {
        const { defaultColor, selectedColor, defaultbackColor, selectedBackColor, defaultFont, selectedFont } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerChild1}>
                        <View style={styles.headerSubChild1}>
                        <Icon onPress={this.closed}  name='arrowleft' size={20} color="white" onPress={()=>this.props.navigation.navigate('Home')} />
                            <Text style={{ ...styles.subHeaderchilds, fontWeight: 'bold' }}>My Feed</Text>
                            <Text style={{ ...styles.subHeaderchilds }}>Select</Text>
                        </View>
                    </View>
                    <View style={styles.headerChild2}>
                        <View>
                            <Text style={{ ...styles.subHeaderchildsCommon, ...styles.subHeaderchilds21, color: `${defaultColor}`, backgroundColor: `${defaultbackColor}`, fontWeight: `${defaultFont}` }}>Feed</Text>
                        </View>
                        <View >
                            <Text style={{ ...styles.subHeaderchildsCommon, ...styles.subHeaderchilds22, color: `${defaultColor}`, backgroundColor: `${defaultbackColor}`, fontWeight: `${defaultFont}` }}>My Stuff</Text>
                        </View>
                        <View>
                            <Text style={{ ...styles.subHeaderchildsCommon, ...styles.subHeaderchilds23, color: `${selectedColor}`, backgroundColor: `${selectedBackColor}`, fontWeight: `${selectedFont}` }}>My Outings</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bodyList}>
                    <FlatList
                        data={this.state.eventData}
                        renderItem={({ item, index }) => {
                            return <View style={styles.bodyListChild}
                                key={item.id}>
                                <View style={styles.subBodyList1}>
                                    <View style={styles.subBodyList1C}>
                                        <Image source={item.profile} resizeMode='cover' resizeMethod='scale' style={styles.profileImage} />
                                    </View>
                                    <View style={styles.subBodyList2C}>
                                        <View style={styles.subBodyList11C}>
                                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
                                        </View>
                                        <View style={styles.subBodyList12C}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>{item.about}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.subBodyList2}>
                                    <ImageBackground style={styles.subBodyListimage} source={item.image} resizeMode='cover' >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'rgba(0,0,0,.4)' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: 'white', marginLeft: 5 }}>{item.day}</Text>
                                                <Text>-</Text>
                                                <Text style={{ color: 'white', marginLeft: 5 }}>{item.month}</Text>
                                                <Text>-</Text>
                                                <Text style={{ color: 'white', marginLeft: 5 }}>{item.date}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                {/* <View><Icons name="reply" size={18} color="#53ADAB"  /></View> */}
                                                <Text style={{ color: 'white', marginLeft: 5 }}>{item.timeStart}</Text>
                                                <Text>-</Text>
                                                <Text style={{ color: 'white', marginLeft: 5 }}>{item.tiemEnd}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                {/* <View><Icon name="sharealt" size={18} color="white"  /></View> */}
                                                <Text style={{ color: 'white', marginLeft: 5 }}>{item.nearestPlace}</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.subBodyList3}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 21 }}>{item.title}</Text>
                                    <Text style={{ fontSize: 19, color: 'grey' }}>{item.subtitle}</Text>
                                </View>
                                <View style={{ padding: 5 }}>
                                    <Divider style={{ backgroundColor: 'grey' }} />
                                </View>
                                <View style={styles.subBodyList2}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View><Icon name="like2" size={18} color="grey" /></View>
                                            <Text style={{ color: 'grey', marginLeft: 5 }}>like</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View><Icons name="reply" size={18} color="#53ADAB" /></View>
                                            <Text style={{ color: '#53ADAB', marginLeft: 5 }}>Response</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View><Icon name="sharealt" size={18} color="grey" /></View>
                                            <Text style={{ color: 'grey', marginLeft: 5 }}>Share</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C6CBCB'
    },
    header: {
        flex: 1,
        backgroundColor: '#53ADAB'
    },
    headerChild1: {
        flex: 2,
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
    headerChild2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 8
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
    subHeaderchildsCommon: {
        borderWidth: 1,
        borderColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
        paddingBottom: 6
    },
    bodyList: {
        flex: 6,
        padding: 2
    },
    bodyListChild: {
        padding: 4,
        borderWidth: 2,
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 8,
        borderColor: 'white'
    },
    subBodyList1: {
        flexDirection: 'row'
    },
    subBodyList1C: {

    },
    subBodyList11C: {

    },
    subBodyList2C: {
        flexDirection: 'column',
        padding: '3%'
    },
    subBodyList12C: {
        width: '80%'
    },
    subBodyList2: {
        borderRadius: 15,
        overflow: 'hidden'
    },
    subBodyListimage: {
        width: 395,
        height: 120,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    subBodyList3: {
        flexDirection: 'row',
        marginTop: 4
    },
    profileImage: {
        marginTop: '10%',
        width: 100,
        height: 100,
        borderRadius: 50
    },
    imageContent: {
        // flexDirection:'row',
        // justifyContent:'flex-start'
    }
})

export default LatestEvent;