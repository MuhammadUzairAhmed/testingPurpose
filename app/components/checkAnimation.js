import React,{Component} from 'react'
import {View,Text,Animated,StyleSheet} from 'react-native'
class CheckScreen extends Component{
    constructor(props){
        super(props)
        this.position = new Animated.ValueXY(0,0)
        Animated.spring(this.position,{
            toValue:{x:200,y:300},
            stiffness:500
        }).start()
    }

    render(){
        return(
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
ball:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'red'

}
})

export default CheckScreen;