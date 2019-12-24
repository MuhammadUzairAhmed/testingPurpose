import React,{Component} from 'react'
import{View,Text,Image} from 'react-native'

class Main extends Component{
    render(){
        return(
            <View>
                <Text>hello</Text>
                <Image source={require('./../assets/checkHeader.png')} />
            </View>
        )
    }
}

export default Main;