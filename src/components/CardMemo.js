import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import Card from './Card';


export default class CardMemo extends Component {
  render() {
    return (
      <View >
        <Card body={
          <View style={{ flex: 1, paddingVertical: 15, alignItems: "center" }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ fontSize: 22, color: '#4A667C' }}>{"特別備註"}</Text>
              {/* <Icon>{items_Text[0].children[0].name }</Icon> */}
            </View>
            <View style={{ flex: 2, justifyContent: 'center' }}>
              {/* <Text style={{ fontSize: 16, color: '#4A667C' }}>{"是否全職：" + this.props.verified}</Text> */}
              <Text style={{ fontSize: 24, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>{"正常出勤、暑假我來了"}</Text>
            </View>
          </View>
        } />
      </View>
    );
  }
}


{/*Ex
  <CardNotice infoTitle={} infoBody={}/> 
  <CardNotice infoTitle={msg.announcement[1].title} infoBody={msg.announcement[2].detail}/> 

*/}
//style={[styles.card]}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    padding: 15,
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
    marginHorizontal: 10,
  }
});