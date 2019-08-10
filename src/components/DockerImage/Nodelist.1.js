import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class NodeList extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'NodeList',
    headerStyle: {
      // backgroundColor: '#f4511e',
      backgroundColor: '#D0E889',


    },
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    headerRight: (  //定义导航栏右侧的按钮
      // <Text style={{width:1}}></Text>
      <Text />

    ),


  };

  state = {
    text: 'http://facebook.github.io/react-native/',
  };

  constructor(props) {
    super(props);
    this.state = {
      camera_io: false,
      tabShow: false,
      label: ['顯示QRcode', '掃描QRcode'],
    };
  }

  componentDidMount() {
    // setTimeout(() => {
      this.setState({
        tabShow: true
      });
    // }, 0)
  }



  render() {
    return (



      <SafeAreaView style={styles.container}>
        {/* <View style={{ flex: 1, backgroundColor: 'white' }}>
          {this.renderScrollableTab()}
        </View> */}
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

<Text  color='#6787A0' >Home!</Text>
<Image source={require('../img/logo_one.png')} />


</View>
      </SafeAreaView>


    );
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabBarUnderline: {
    backgroundColor: '#2562b4',
    height: 3,
    width: width / 3,
    // marginLeft: 6
  }
});