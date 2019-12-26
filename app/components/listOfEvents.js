import React,{Component} from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
class Eventlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    render(){
        const {data} = this.state
        return(<View style={styles.container}>
            
            <Text style={{...styles.checkingFlex,backgroundColor:'blue'}}>hellow world</Text>
            
            <View style={{...styles.checkingFlex,backgroundColor:'pink',flex:4}}>
             <ScrollView >
             {data.map((item) => {
                        return <TouchableOpacity key={item.id} style={[styles.card, { backgroundColor: `${item.color}`, margin: 10 }]} onPress={() => this.getData(item)}>
                            <Icon style={styles.cardImage} name={item.name} size={45} color="white" />
                        </TouchableOpacity>
                    })}
                 </ScrollView>
                </View>
         </View>

        )
    }
} 


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    checkingFlex:{
        flex:1
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
    }
})

export default Eventlist;