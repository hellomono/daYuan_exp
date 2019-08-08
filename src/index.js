
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
   StyleSheet,
    Text,
     View,
     WebView,
     ScrollView,
     TextInput,
     TouchableOpacity,
     Alert,
     SafeAreaView,
     AsyncStorage,
     Dimensions,
    } from 'react-native';
    import MapView, { Marker } from 'react-native-maps';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window'); 


//code-push release-react book-ios ios -m -d Production
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class BookRead extends Component<Props> {

constructor(props){
  super(props);
  this.indexHistory = [0];
  this.state = {
    all_font_num: 0,
    index: 0,
    reading:0,
    data: "這裡還沒有文章喔",
    lang:true,
    num:1,
    font:true,
    fontFamily:"",

};
//     this.onMessage = this.onMessage.bind(this);
}


componentWillMount() {
  // data=TS(text);
//   this.setState({ data: Traditionalized(BookBody) });

}
componentDidMount() {
 
}


  render() {
    return (
      <SafeAreaView style={{flex: 1}}>

      {/* <ScrollView style={{flex: 1}}> */}
<View style={{flex: 1,flexDirection:'row'}}>
<MapView
       style={{ flex: 1 }}
       scrollEnabled={false}
       zoomEnabled={false}
       initialRegion={{
        //  latitude: Number(this.props.latitude),
        //  longitude: Number(this.props.longitude),
        latitude: 24.147782,
        longitude: 120.673492,
         latitudeDelta: 0.003,
         longitudeDelta: 0.003,
       }}
      //  onPress={this.props.onPress}>
>


      <Marker
        //  coordinate={{ latitude: Number(this.props.latitude), longitude: Number(this.props.longitude) }}
        coordinate={{latitude: 24.147782, longitude: 120.673492 }}

       />
        {/* <Marker draggable
    coordinate={this.state.x}
    onDragEnd={(e) => {
      this.setState({ x: e.nativeEvent.coordinate })
      console.warn(e.nativeEvent.coordinate )
    }
     
    }
  /> */}


     </MapView>
</View>

    {/* </ScrollView> */}
    </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
