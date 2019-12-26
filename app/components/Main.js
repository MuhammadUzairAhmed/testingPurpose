

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
} from 'react-native';
import { Card, Button, Divider ,SearchBar, ButtonGroup} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Event from './event'
import Profile from './profile';
import Contacts from './contacts'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            modalName: '',
            modalImage: '',
            eventVisible: false,
            profileVisible: false,
            contactVisible: false,
            data: [
                { id: 1, title: "profile", name: 'user', color: "#FF4500", image: "https://img.icons8.com/color/70/000000/name.png" },
                { id: 2, title: "Home", name: 'home', color: "#87CEEB", image: "https://img.icons8.com/office/70/000000/home-page.png" },
                { id: 3, title: "event", name: 'table', color: "#4682B4", image: "https://img.icons8.com/color/70/000000/two-hearts.png" },
                { id: 4, title: "Family", name: 'carryout', color: "#6A5ACD", image: "https://img.icons8.com/color/70/000000/family.png" },
                { id: 5, title: "Friends", name: 'team', color: "#FF69B4", image: "https://img.icons8.com/color/70/000000/groups.png" },
                { id: 6, title: "message", name: 'mail', color: "#00BFFF", image: "https://img.icons8.com/color/70/000000/classroom.png" },
                { id: 7, title: "contacts", name: 'contacts', color: "#00FFFF", image: "https://img.icons8.com/dusk/70/000000/checklist.png" },
                { id: 8, title: "idcard", name: 'idcard', color: "#20B2AA", image: "https://img.icons8.com/dusk/70/000000/globe-earth.png" },
                { id: 9, title: "slack", name: 'slack', color: "#008080", image: "https://img.icons8.com/color/70/000000/basketball.png" },
            ]
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
        this.setState({ modalVisible: visible }, () => {
            if (this.state.modalName == 'profile') {
                this.setState({ eventVisible: false, profileVisible: true, contactVisible: false })
            }
        });
    }
    closedAll = (closed) => {
        this.setState({ profileVisible: closed, eventVisible: closed, modalVisible: closed, contactVisible: closed })
    }
    render() {
        const { search } = this.state;
        const buttons = ['Invite', 'Chat','Followers']
  const { selectedIndex } = this.state
        const { data, modalName, modalImage } = this.state
        return (
            <View style={styles.container}>

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
                                    <Image style={styles.image} source={require('./../assets/donnieyen.jpg')} />
                                </View>
                                <View style={{ marginTop: '20%' }}>
                                    <Button
                                        // onPress={() => { this.setModalVisible(false) }}
                                        buttonStyle={{ backgroundColor: 'grey', borderRadius: 20, margin: 5 }}
                                        title='Choose a photo' />
                                    <Button
                                        // onPress={() => { this.setModalVisible(false) }}
                                        buttonStyle={{ backgroundColor: 'grey', borderRadius: 20, margin: 5 }}
                                        title='Take a photo' />
                                    <Button
                                        onPress={() => { this.setModalVisible(false) }}
                                        buttonStyle={{ backgroundColor: 'grey', borderRadius: 20, margin: 5 }}
                                        title='Goto Description' />
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>

                {this.state.eventVisible == false && this.state.profileVisible == false && this.state.contactVisible == false ? <ScrollView contentContainerStyle={styles.header1}><ImageBackground  style={styles.header}>

                    <View>
                        <View style={{ width: '100%', height: '100%' }}>

                            <View style={styles.bodyOverlay}>
                                <View style={{backgroundColor:'white'}}>

                                    <View style={styles.headerContent}>
                                        <View>
                                        <Icon name='bars' size={18} color="blue" />
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 22, color: 'grey' }}>Discovery App</Text>
                                        </View>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={styles.name}>
                                                Welcome, John
                                            </Text>
                                            <Icon name='poweroff' size={15} color="red" />
                                        </View>
                                     
                                    </View>
                                    
                                    <ButtonGroup
                                    onPress={this.updateIndex}
                                    selectedIndex={selectedIndex}
                                    buttons={buttons}
                                    containerBorderRadius={0}
                                    textStyle={{color:'white'}}
                                    containerStyle={{padding:0,margin:0,height: 30,width:'95%',backgroundColor:'grey'}}
                                    />
                                </View>
                                {/* <SearchBar
                                    placeholder="Type Here..."
                                    onChangeText={this.updateSearch}
                                    value={search}
                                /> */}
                                
                                <View style={styles.menuItems}>
                                    <View style={styles.menuList}>
                                        {data.map((item) => {
                                            return <TouchableOpacity key={item.id} style={[styles.card, { backgroundColor: `${item.color}`, margin: 10 }]} onPress={() => this.getData(item)}>
                                                <Icon style={styles.cardImage} name={item.name} size={45} color="white" />
                                            </TouchableOpacity>
                                        })}
                                    </View>
                                </View>
                            </View>
                        </View>
                    
                    </View>
                </ImageBackground>
                <View style={{position: 'absolute', left: '80%', right: 0, bottom: 0,top:'90%'}}>
                <Icons style={styles.cardImage} name='comment' size={50} color="grey" />
               </View>
                </ScrollView>
                

                    : null}
                {this.state.eventVisible &&
                    <Event closeEvent={this.closedAll} />}
                {this.state.profileVisible && <Profile closeEvent={this.closedAll} />}
                {this.state.contactVisible && <Contacts closeEvent={this.closedAll} />}

            </View>
        );
    }
};

const styles = StyleSheet.create({
    backPopup: {
        flexDirection: 'row',
        backgroundColor: 'grey',
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
        marginBottom: 20,
        marginLeft: 10,

    },
    menuList: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 10
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
        marginTop: 5,
        width: '100%',
        opacity: 0.7,
        borderBottomWidth:4,
        borderBottomColor:'grey'
    },
    name: {
        fontSize: 13,
        color: "black",
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
    }
});
export default Main;
