import * as React from 'react';

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
import Video from 'react-native-video';
import { Card, Button, Divider, SearchBar, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-vector-icons/MaterialIcons

export default class MyComponent extends React.Component {
    state = {
        open: false,
        modalVisible1: true,
        data1: [
            { id: 1, title: "profile", name: 'user', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/name.png" },
            { id: 2, title: "Home", name: 'home', color: "#53ADAB", image: "https://img.icons8.com/office/70/000000/home-page.png" },
            { id: 3, title: "Events", name: 'table', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/two-hearts.png" },
            { id: 4, title: "Notification", name: 'bells', color: "#53ADAB", image: "https://img.icons8.com/color/70/000000/family.png" },
            { id: 7, title: "Contact", name: 'contacts', color: "#53ADAB", image: "https://img.icons8.com/dusk/70/000000/checklist.png" },
        ],
      
    };

    closing = () => {
        this.props.closeEvent(false)
    }
    componentDidUpdate(prevProps,prevState){
        console.log(this.props.items,'prevProps')
    }
    render() {
        console.log(this.props.items,'prevProps')
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible1}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.popupOverlay1}>
                        <TouchableOpacity onPress={this.closing}><Text>close</Text></TouchableOpacity>
                        <View style={styles.popup1}>
                            <View style={styles.popupContent1}>
                                <View style={styles.container1}>



                                    {this.state.data1.map(item => {
                                        return <View key={item.id} style={styles.menuBox1}>
                                            <Icon style={{ ...styles.cardImage1, ...styles.icon1 }} name={item.name} size={55} color="white" />
                                            <TouchableOpacity><Text onPress={this.removedData}>remove</Text></TouchableOpacity>
                                        </View>
                                    })

                                    }




                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}



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
    cardImage1: {
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
    info: {
        fontSize: 22,
        color: "#696969",
    }
});