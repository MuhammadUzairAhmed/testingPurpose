import React,{Component} from 'react';
import { View,Text,ScrollView,StyleSheet,Dimensions,FlatList } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height 
const noOfColumns = 3;
export default class LatestHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
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
                },
                {
                    id: 7,
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
    render(){
        
        return(
            // <ScrollView horizontal={true}>
            //     <View style={{...styles.container, backgroundColor:'red'}}>
            //         <Text>screen 1</Text>
            //     </View>
            //     <View style={{...styles.container,backgroundColor:'blue'}}>
            //         <Text>screen 2</Text>
            //     </View>
            // </ScrollView>
            <View style={{flex:1,width:'100%',overflow:'hidden'}}>
                <FlatList
                        data={this.state.eventData}
                        numColumns={noOfColumns}
                        horizontal={false}
                        renderItem={({ item, index }) => {
                            return<View key={index} style={{padding:10,borderWidth:4}}>
                                <Text>{item.name}</Text>
                                </View>
                        }}
                />
            </View>
            )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        width:screenWidth
    }
})