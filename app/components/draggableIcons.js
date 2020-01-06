import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableHighlight,
  } from 'react-native';
  import Draggable from 'react-native-draggable';

export default class DraggableComponent extends Component{
    render(){
        return(<View>
              <Draggable 
            imageSource={require('./../assets/nightFl.jpg')} 
            renderSize={80} 
            x={200}
            y={300}
            onDragRelease={this._changeFace}
            onLongPress={()=>console.log('long press')}
            onShortPressRelease={()=>console.log('press drag')}
            onPressIn={()=>console.log('in press')}
            onPressOut={()=>console.log('out press')}
        /> 
           <Draggable 
            imageSource={require('./../assets/nightFl.jpg')} 
            renderSize={80} 
            x={200}
            y={300}
            onDragRelease={this._changeFace}
            onLongPress={()=>console.log('long press')}
            onShortPressRelease={()=>console.log('press drag')}
            onPressIn={()=>console.log('in press')}
            onPressOut={()=>console.log('out press')}
        /> 
            </View>
        )
    }
}