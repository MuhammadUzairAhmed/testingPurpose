import React,{Component} from 'react'
import { View,Text,StyleSheet } from 'react-native'


class LatestEvent extends Component{
    constructor(props){
        super(props);
        this.state={
            defaultColor:'white',
            selectedColor:'#79D1CF',
            defaultbackColor:'#79D1CF',
            selectedBackColor:'white',
            defaultFont:'normal',
            selectedFont:'bold'
        }
    }
    render(){
        const {defaultColor,selectedColor,defaultbackColor,selectedBackColor,defaultFont,selectedFont} = this.state
        return(
            <View style={styles.container}>
               <View style={styles.header}>
                   <View style={styles.headerChild1}>
                        <View style={styles.headerSubChild1}>
                            <Text style={{...styles.subHeaderchilds,fontWeight:'bold'}}>My Feed</Text>
                            <Text style={{...styles.subHeaderchilds,paddingLeft:'32%'}}>Select</Text>
                        </View>
                   </View>
                   <View style={styles.headerChild2}>
                        <View>
                            <Text style={{...styles.subHeaderchildsCommon,...styles.subHeaderchilds21,color:`${defaultColor}`,backgroundColor:`${defaultbackColor}`,fontWeight:`${defaultFont}`}}>Feed</Text>
                        </View>
                        <View >
                            <Text style={{...styles.subHeaderchildsCommon,...styles.subHeaderchilds22,color:`${defaultColor}`,backgroundColor:`${defaultbackColor}`,fontWeight:`${defaultFont}`}}>My Stuff</Text>
                        </View>
                        <View>
                            <Text style={{...styles.subHeaderchildsCommon,...styles.subHeaderchilds23,color:`${selectedColor}`,backgroundColor:`${selectedBackColor}`,fontWeight:`${selectedFont}`}}>My Outings</Text>
                        </View>
                   </View>
               </View>
               <View style={styles.bodyList}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F2F2'
    },
    header:{
        flex:1,
        backgroundColor:'#79D1CF'
    },
    headerChild1:{
      flex:2,
    },
    headerSubChild1:{
        display:'flex',
        justifyContent:'flex-end',
        flexDirection:'row',
        padding:10,
        marginTop:10
    },
    subHeaderchilds:{
        color:'white',
        fontSize:18
    },
    headerChild2:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:8
    },
    subHeaderchilds21:{
        borderTopLeftRadius:6,
        borderBottomLeftRadius:6
    },
    subHeaderchilds22:{ },
    subHeaderchilds23:{
        borderTopRightRadius:6,
        borderBottomRightRadius:6,
    },
    subHeaderchildsCommon:{
        borderWidth:1,
        borderColor:'white',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:6,
        paddingBottom:6
    },
    bodyList:{
        flex:6
    }
})

export default LatestEvent;