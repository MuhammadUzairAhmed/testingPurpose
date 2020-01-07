

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
    Modal,
    Picker
} from 'react-native';
import Video from 'react-native-video';
import { Card, Button, Divider, SearchBar, ButtonGroup  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Draggable from 'react-native-draggable';

class Main extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (<Icon name='home' size={18} color="black" />)
    };
    constructor(props) {
        super(props);
        this.state = {
            modalVisible1: false,
            data1: [
                { id: 1, title: "profile", name: 'user', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/name.png" },
                // { id: 2, title: "Home", name: 'home', color: "#53ADAB", image: "https://img.icons8.com/office/70/000000/home-page.png" },
                // { id: 3, title: "Events", name: 'table', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/two-hearts.png" },
                // { id: 4, title: "Notification", name: 'bells', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/family.png" },
                // { id: 5, title: "Contact", name: 'contacts', color: "#53ADAB", image: "https://img.icons8.com/dusk/70/000000/checklist.png" },
            ],
            pickerValue:'',
            valuess: {},
            chekGrouped: false,
            modalVisible: false,
            modalName: '',
            modalImage: '',
            eventVisible: false,
            profileVisible: false,
            contactVisible: false,
            defaultColor: 'white',
            selectedColor: '#53ADAB',
            defaultbackColor: '#53ADAB',
            selectedBackColor: 'white',
            defaultFont: 'normal',
            selectedFont: 'bold',
            repeat: true,
            rate: 1,
            volume: 0,
            muted: false,
            resizeMode: 'cover',
            duration: 0.0,
            curretnTime: 0.0,
            paused: true,
            rateText: '1.0',
            pausedText: 'Play',
            hideControls: false,
            data: [
                // { id: 1, title: "play", name: 'play', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/name.png" },
                { id: 5, title: "folder1", name: 'folder1', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/groups.png" },
                { id: 2, title: "Home", name: 'home', color: "#53ADAB", image: "https://img.icons8.com/office/70/000000/home-page.png" },
                { id: 3, title: "Events", name: 'table', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/two-hearts.png" },
                { id: 4, title: "Notification", name: 'bells', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/family.png" },
                { id: 6, title: "message", name: 'mail', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/classroom.png" },
                { id: 7, title: "Contact", name: 'contacts', color: "#53ADAB", image: "https://img.icons8.com/dusk/70/000000/checklist.png" },
                { id: 8, title: "idcard", name: 'idcard', color: "#53ADAB", image: "https://img.icons8.com/dusk/70/000000/globe-earth.png" },
                { id: 9, title: "slack", name: 'slack', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/basketball.png" },
            ],

        };
    }
    getData = (item) => {
        if (item.name == 'table') {

            this.setState({ eventVisible: true, contactVisible: false })
        } else if (item.name == 'contacts') {
            this.setState({ contactVisible: true, eventVisible: false })
        }
        else {
            this.setState({ modalName: item.title, modalImage: item.image, modalVisible: true })
        }
    }
    setModalVisible(visible) {
        const { navigation } = this.props;
        const email = navigation.getParam('email', 'No-Email');
        var name; var img;
        if (email == 'uzair@gmail.com') {
            name = 'M Uzair'
            img = require('./../assets/donnieyen.jpg')
        } else {
            name = 'Joanna'
            img = require('./../assets/nightFl.jpg')
        }
        this.props.navigation.navigate('Profile', { name, img })
        this.closedAll(false)

    }
    closedAll = (closed) => {
        this.setState({ modalVisible1: false, chekGrouped: closed, profileVisible: closed, eventVisible: closed, modalVisible: closed, contactVisible: closed })
    }
    greatJob = () => {
        this.props.navigation.navigate('Login')
    }
    addonGrouped = (item) => {
        this.setState({ chekGrouped: true, valuess: item })

    }
    pressedOut = (item, index) => {
        setTimeout(() => {
            this.state.data.splice(index, 1)
            this.setState({ data: this.state.data }, () => {
                this.setState({ data1: [...this.state.data1, item] })
            },()=>console.log(this.state.data1,'chek'))
        }, 300)
    }
    deletedItem = (item, index) => {
        setTimeout(() => {
            this.state.data1.splice(index, 1)
            this.setState({ data1: this.state.data1 }, () => {
                this.setState({ data: [...this.state.data, item] })
            })
        }, 300)
    }
    displayModalContainer = (value) => {
        this.setState({ modalVisible1: value })
    }
    changeMenu=(item,index)=>{
        this.setState({pickerValue:item})
        let getData = this.state.data.find((items)=>{
         return items.id == item
        })
        setTimeout(() => {
        this.pressedOut(index,getData)
        },500)
        console.log(index,getData,'check')
    }
    render() {
        const { navigation } = this.props;
        const email = navigation.getParam('email', 'No-Email');
        const password = navigation.getParam('password', 'some default value');

        const { defaultColor, selectedColor, defaultbackColor, selectedBackColor, defaultFont, selectedFont } = this.state
      
        const { data, modalName, modalImage } = this.state
        return (
            <View style={styles.container} >

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible1}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.popupOverlay1}>
                        
                        <View style={styles.popup1}>
                            <View style={styles.popupContent1}>
                              <TouchableOpacity style={{marginHorizontal:'95%',width:'100%'}} onPress={() => this.closedAll(false)}>
                                <Icon name="close" size={20} color="red" />
                              </TouchableOpacity>
                                <View style={styles.container1}>
                                {/* <View style={{height:'auto',borderWidth:2,borderColor:'grey',width:'80%'}}>
                                    <Picker
                                    selectedValue={this.state.pickerValue}
                                    onValueChange={ (item,index)=>this.changeMenu(item,index)}
                                    >
                                        {this.state.data.map((item)=><Picker.Item key={item.id} label={item.title} value={item.id} />)}
                                    </Picker>
                                </View> */}
                                    {this.state.data1.map((item,index) => {
                                        return <View> 
                                        
                                        <TouchableOpacity key={item.id} style={styles.menuBox1}
                                            onPress={() => item.title == 'profile' ? this.getData(item) : item.title == 'Friends' ? this.displayModalContainer(true) : this.props.navigation.navigate(`${item.title}`, {
                                                email, password
                                            })}>
                                            <Icon style={{ ...styles.cardImage1, ...styles.icon1 }} name={item.name} size={55} color="white" />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>this.deletedItem(item,index)} style={{backgroundColor:'red',borderRadius:20,padding:3,
                                            alignContent:'center',alignItems:'center'}}> 
                                            <Icon name="delete" size={20} color="white" />
                                           </TouchableOpacity>
                                        </View>
                                    })
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.popupOverlay}>
                        <View style={styles.popup}>
                            <View style={styles.popupContent}>
                                <View style={styles.backPopup}>
                                    <View><Icon onPress={() => { this.closedAll(false) }} name="left" size={22} color="white" /></View>
                                    <View style={{ marginLeft: '35%' }}><Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Profile</Text></View>
                                </View>

                                <View style={{ alignItems: 'center', marginTop: '12%' }}>
                                    <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: '8%', color: 'grey' }}>Add a profile {"\n"} Picture</Text>
                                    {email == 'uzair@gmail.com' ?
                                        <Image style={styles.image} source={require('./../assets/donnieyen.jpg')} /> :
                                        <Image style={styles.image} source={require('./../assets/nightFl.jpg')} />
                                    }

                                </View>
                                <View style={{ marginTop: '20%' }}>
                                    <Button
                                        // onPress={() => { this.setModalVisible(false) }}
                                        buttonStyle={{ backgroundColor: '#53ADAB', borderRadius: 20, margin: 5 }}
                                        title='Choose a photo' />
                                    <Button
                                        // onPress={() => { this.setModalVisible(false) }}
                                        buttonStyle={{ backgroundColor: '#53ADAB', borderRadius: 20, margin: 5 }}
                                        title='Take a photo' />
                                    <Button
                                        onPress={() => { this.setModalVisible(false) }}
                                        buttonStyle={{ backgroundColor: '#53ADAB', borderRadius: 20, margin: 5 }}
                                        title='Goto Description' />
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>

                {this.state.eventVisible == false && this.state.profileVisible == false && this.state.contactVisible == false ? <ScrollView contentContainerStyle={styles.header1}><ImageBackground style={styles.header}>

                    <View>
                        <View style={{ width: '100%', height: '100%' }}>
                            <View style={styles.bodyOverlay}>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#53ADAB' }}>
                                        <View style={styles.headerContent}>
                                            <View>
                                                <Icon name='bars' size={18} color="white" onPress={() => this.props.navigation.toggleDrawer()} />
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 22, color: 'white' }} onPress={() => this.props.navigation.navigate('About', {
                                                    itemId: 86,
                                                    otherParam: 'anything you want here',
                                                })}>Discovery App</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.name}>
                                                    Welcome, John
                                            </Text>
                                                <Icon onPress={this.greatJob} name='poweroff' size={15} color="red" />
                                            </View>
                                        </View>
                                        <View style={styles.headerChild2}>
                                            <View>
                                                <Text style={{ ...styles.subHeaderchildsCommon, ...styles.subHeaderchilds21, color: `${defaultColor}`, backgroundColor: `${defaultbackColor}`, fontWeight: `${defaultFont}` }}>Invite</Text>
                                            </View>
                                            <View >
                                                <Text style={{ ...styles.subHeaderchildsCommon, ...styles.subHeaderchilds22, color: `${defaultColor}`, backgroundColor: `${defaultbackColor}`, fontWeight: `${defaultFont}` }}>Chat</Text>
                                            </View>
                                            <View>
                                                <Text style={{ ...styles.subHeaderchildsCommon, ...styles.subHeaderchilds23, color: `${selectedColor}`, backgroundColor: `${selectedBackColor}`, fontWeight: `${selectedFont}` }}>Followers</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.menuItems}>
                                    <View style={styles.menuList}>
                                        {data.map((item, index) => {
                                            return <TouchableOpacity key={item.id} style={[styles.card, { backgroundColor: `${item.color}`, margin: 10 }]} onPress={() => item.title == 'profile' ? this.getData(item) : item.title == 'folder1' ? this.displayModalContainer(true) : this.props.navigation.navigate(`${item.title}`, {
                                                email, password
                                            })}>
                                                {/* <Icon style={styles.cardImage} name={item.name} size={45} color="white" /> */}

                                                {item.title != 'folder1' ? <Draggable
                                                    renderSize={80}
                                                    children={
                                                        <TouchableOpacity
                                                            key={item.id} style={[{borderRadius:40 ,backgroundColor: `${item.color}`,marginLeft:12,marginTop:10 }]} onPress={() => item.title == 'profile' ? this.getData(item) : this.props.navigation.navigate(`${item.title}`, {
                                                                email, password
                                                            })}>
                                                            <Icon style={[styles.cardImage,{borderRadius:40,backgroundColor:`${item.color}`,height:80,width:80,padding:15}]} name={item.name} size={45} color="white" />
                                                            {/* <TouchableOpacity onPress={() => this.addonGrouped(item)}><Text>add</Text></TouchableOpacity> */}
                                                        </TouchableOpacity>}
                                                    onDragRelease={() => this.pressedOut(item, index)}
                                                    onLongPress={() => console.log('long press')}
                                                    onShortPressRelease={() => console.log('press drag')}
                                                    onPressIn={() => console.log('in press')}
                                                    onPressOut={() => this.pressedOut(item, index)}
                                                /> :
                                                    <View>
                                                        <Icon style={styles.cardImage} name={item.name} size={45} color="white" />
                                                        {/* <TouchableOpacity onPress={() => this.addonGrouped(item)}><Text style={{ marginLeft: 10 }}>add</Text></TouchableOpacity> */}
                                                    </View>
                                                }

                                            </TouchableOpacity>
                                        })}
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
                    <View>

                    </View>

                </ScrollView>


                    : null}
                <Video source={require('./../assets/sampleVideo.mp4')}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    resizeMode={this.state.resizeMode}
                    volume={this.state.volume}
                    muted={this.state.muted}
                    // paused={this.state.paused}
                    repeat={this.state.repeat}
                    rate={this.state.rate}
                    style={{ width: '100%', height: 150, marginTop: 10 }} />
                <Icons style={styles.chatIcon} name='comment' size={50} color="#53ADAB" />

                {/* {this.state.chekGrouped &&  <EventGrouped items={this.state.valuess} closeEvent={this.closedAll} />} */}

            </View>
        );
    }
};

const styles = StyleSheet.create({
    headerChild2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 8
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
    container: {
        flex: 1
    },
    backPopup: {
        flexDirection: 'row',
        backgroundColor: '#53ADAB',
        padding: 2,
        margin: 2
    },
    poupHeader: {
        display: 'flex',
        flexDirection: 'row'
    },
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        width: 100,
        height: 100,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardImage: {
        alignSelf: 'center'
    },
    chatIcon: {
        alignSelf: 'flex-end'
    },
    texting: {
        paddingLeft: 10
    },
    items: {
        elevation: 10,
        width: 100,
        height: 85,
        borderWidth: 1,
        borderRadius: 85,
        borderColor: 'white',
        backgroundColor: '#65B4CE',
        padding: 20,
        paddingLeft: 20,
        margin: 20
    },
    menuItems: {

        flexDirection: 'column',
        padding: 0,

        marginLeft: 5,

    },
    menuList: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // marginTop: 20,
        // marginBottom: 10
    },
    overlayContainer: {
        backgroundColor: 'rgba(47,163,218, .4)',
        height: 250
    },
    header1: {

        height: '100%',
        width: '100%'
    },
    header: {
        height: '100%',
        width: '100%'
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
        marginTop: 0,
        width: '100%',
        backgroundColor: '#53ADAB',
        // opacity: 0.7,
        // borderBottomWidth: 2,
        // borderBottomColor: 'grey'
    },
    name: {
        fontSize: 13,
        color: "white",
        fontWeight: '600',
        marginRight: 16
    },
    body: {
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    bodyOverlay: {
        // backgroundColor: 'rgba(0,0,0, .8)',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    image: {
        width: '50%',
        height: 100
    },
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        opacity: 0.9
    },
    popupContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 5,
        height: 'auto',
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose: {
        height: 20,
        backgroundColor: '#20b2aa',
        padding: 20
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    popup1: {
        backgroundColor: 'white',
        marginTop: 80,
        paddingLeft: 18,
        borderRadius: 7,
        paddingBottom: 40
    },
    popupOverlay1: {
        backgroundColor: "#00000057",
        flex: 1,
        opacity: 0.9
    },
    popupContent1: {

        height: 'auto',
    },
    container1: {
        paddingTop: 40,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    menuBox1: {
        backgroundColor: "#53ADAB",
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
        borderRadius: 50
    },
    icon1: {
        width: 60,
        height: 60,
    },
});
export default Main;
