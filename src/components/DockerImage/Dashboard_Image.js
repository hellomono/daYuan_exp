import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',paddingHorizontal:10, backgroundColor:"#6E7493",    borderRadius: 10,
}}>
        <Text style={{ fontSize: 22,color:"#FFF"}}>{"Image儀表板"}</Text>

        </View>


<View style={{ flex: 3, flexDirection: 'column', justifyContent: 'center',paddingHorizontal:10, }}>
              {/* <Text style={{ fontSize: 22, }}>{this.props.infoTitle}</Text> */}
              <Text style={{ fontSize: 22,}}>{"Python3_23"}</Text>
              <Text style={{ fontSize: 12,}}>{"Python3_23"}</Text>
              {/* <Text style={{ fontSize: 14, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>
              {this.props.infoBody}</Text> */}
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
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    height:height*0.2,
    width: width * 0.9,
    // padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: width * 0.05,
  },
  background: {
    // height: 90,
    // width: 350,
    // position: 'absolute',
    // resizeMode: 'cover',
  },
  backgroundimg: {
    height: 90,
    width: 350,
    position: 'absolute',
    // paddingVertical: 15,
//paddingRight:100,
// marginRight:20,
    // resizeMode: 'cover',
  },
});