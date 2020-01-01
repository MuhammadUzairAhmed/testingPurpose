import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import NotificationPost from './notificationPost'

export default class Notifications extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: () => (<Icon name='bells' size={18} color="black" />)
    };
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            itemName:'',
            itemImage:'',
            otherParam:'',
            data: [
                { id: 1, name: 'alex', title: "Lorem ipsum dolor", time: "1 days a go", image: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: 'alexander', title: "Sit amet, consectetuer", time: "2 minutes a go", image: "https://lorempixel.com/400/200/nature/5/" },
                { id: 3, name: 'john', title: "Dipiscing elit. Aenean ", time: "3 hour a go", image: "https://lorempixel.com/400/200/nature/4/" },
                { id: 4, name: 'whick', title: "Commodo ligula eget dolor.", time: "4 months a go", image: "https://lorempixel.com/400/200/nature/6/" },
                { id: 5, name: 'rambo', title: "Aenean massa. Cum sociis", time: "5 weeks a go", image: "https://lorempixel.com/400/200/sports/1/" },
                { id: 6, name: 'johnethen', title: "Natoque penatibus et magnis", time: "6 year a go", image: "https://lorempixel.com/400/200/nature/8/" },
                { id: 7, name: 'Doe', title: "Dis parturient montes, nascetur", time: "7 minutes a go", image: "https://lorempixel.com/400/200/nature/1/" },
                { id: 8, name: 'walter white', title: "Ridiculus mus. Donec quam", time: "8 days a go", image: "https://lorempixel.com/400/200/nature/3/" },
                { id: 9, name: 'flash', title: "Felis, ultricies nec, pellentesque", time: "9 minutes a go", image: "https://lorempixel.com/400/200/nature/4/" },
            ]
        };
    }
    setProperties=(item)=>{
        this.setState({
            itemName: item.name,
            itemImage: item.image,
            otherParam: item.title
        },()=>this.setState({display:false}))
    }
    closed=(value)=>{
        this.setState({display:value})
    }
    render() {
        return (
            this.state.display ? <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerChild1}>
                        <View style={styles.headerSubChild1}>
                            <Icon onPress={this.closed} name='arrowleft' size={20} color="white" onPress={() => this.props.navigation.navigate('Home')} />
                            <Text style={{ ...styles.subHeaderchilds, fontWeight: 'bold' }}>Notifications</Text>
                            <Text style={{ ...styles.subHeaderchilds }}></Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 9 }}>
                    <FlatList style={styles.list}
                        data={this.state.data}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.separator} />
                            )
                        }}
                        renderItem={(post) => {
                            const item = post.item;
                            return (
                                <TouchableOpacity onPress={() => {this.setProperties(item)}}>
                                    <View style={styles.card}>

                                        <Image style={styles.cardImage} source={{ uri: item.image }} />
                                        <View style={styles.cardContent}>
                                            <View>
                                                <Text style={styles.title}>{item.title}</Text>
                                                <Text style={styles.time}>{item.time}</Text>
                                            </View>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
            </View> :
                <NotificationPost closedComponent={this.closed} itemName={this.state.itemName} itemImage={this.state.itemImage} otherParam={this.state.otherParam} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
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

    list: {

        backgroundColor: "#E6E6E6",
    },
    separator: {
        marginTop: 1,
    },
    /******** card **************/
    card: {
        margin: 0,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#DCDCDC",
        backgroundColor: "#DCDCDC",
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
        //overlay efect
        flex: 1,
        height: 200,
        width: null,
        position: 'absolute',
        zIndex: 100,
        left: 0,
        right: 0,
        backgroundColor: 'transparent'
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 0,
        paddingVertical: 7.5,
        paddingHorizontal: 0
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },
    /******** card components **************/
    title: {
        fontSize: 22,
        color: "#ffffff",
        marginTop: 10,
        fontWeight: 'bold'
    },
    time: {
        fontSize: 13,
        color: "#ffffff",
        marginTop: 5
    },
    icon: {
        width: 25,
        height: 25,
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        color: "#ffffff",
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});  