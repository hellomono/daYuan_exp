import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import SvgDockerOn from '../img/icon/Sdcard';


export default class Card extends Component {
  render() {
    return (
      <View style={[styles.card]}>
        <SvgDockerOn style={styles.backgroundimg} />

        {/* <Image style={styles.backgroundimg} source={require('../img/docker_on.png')} />  */}
        <View style={styles.background}>
{this.props.body}

</View>


      </View>

    );
  }
}


{/*Ex
  <Card body={
  <View style={{ flex: 1, }}>
    <Text style={{ fontSize: 22, }}>HI</Text>
  </View>
}/> */}


const styles = StyleSheet.create({
  card: {
    flex:1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: width * 0.5,
    // padding: 5,
    // backgroundColor: '#6E7493',
    // borderRadius: 50,
    // marginVertical: 90,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: 10,
  },
  background: {
    flex:1,
    // height: 90,
    width: width*0.45,
    // resizeMode: 'cover',
        paddingVertical: 35,
        paddingHorizontal: 20,

    // backgroundColor: '#6E93',

    position: 'absolute',

  },
  backgroundimg: {
    // height: 90,
    // width: 350,
    // paddingVertical: 15,
//paddingRight:100,
// marginRight:-20,
    // resizeMode: 'cover',
  },
});