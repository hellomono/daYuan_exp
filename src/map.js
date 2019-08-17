
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
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
  Button
  //  Geolocation
} from 'react-native';
// import MapView, { Overlay, OverlayComponent, Marker, Circle, Polyline, Polygon } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
// var Geolocation = require('Geolocation');
// geolocation.setRNConfiguration(config);

//code-push release-react book-ios ios -m -d Production
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class BookRead extends Component<Props> {
  static navigationOptions = {
    title: 'DetailsScreen',
    /* No more header config here! */
  };
  constructor(props) {
    super(props);
    this.indexHistory = [0];
    this.state = {
      all_font_num: 0,
      index: 0,
      reading: 0,
      data: "這裡還沒有文章喔",
      lang: true,
      num: 1,
      font: true,
      fontFamily: "",
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      currentLocation: 'unknown',
      loading: false,
      updatesEnabled: false,
      location: {
        coords: {
          // latitude: 24.147782,
          // longitude: 120.673492
          latitude: 37.4133028,
          longitude: -122.151307
        }
      }

    };
  }


  //获取位置
  //  getLocation() {
  //   Geolocation.getCurrentPosition(
  //       location => {
  //           var result = "速度：" + location.coords.speed +
  //                       "\n经度：" + location.coords.longitude +
  //                       "\n纬度：" + location.coords.latitude +
  //                       "\n准确度：" + location.coords.accuracy +
  //                       "\n行进方向：" + location.coords.heading +
  //                       "\n海拔：" + location.coords.altitude +
  //                       "\n海拔准确度：" + location.coords.altitudeAccuracy +
  //                       "\n时间戳：" + location.timestamp;
  //           alert(result);
  //       },
  //       error => {
  //         alert("获取位置失败："+ error)
  //       }
  //   );
  // }

  componentWillMount() {


    // this.getLocation();
    // data=TS(text);
    //   this.setState({ data: Traditionalized(BookBody) });

  }
  // componentDidMount() {
  //   Geolocation.getCurrentPosition((location) => {
  //     let coordinate = [location.coords.longitude,location.coords.latitude]
  //     this.setState({
  //         currentLocation:coordinate
  //     })
  // });
  // }
  componentDidMount() {
    // Instead of navigator.geolocation, just use Geolocation.
    // if (hasLocationPermission) {
    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             console.log(position);
    //         },
    //         (error) => {
    //             // See error code charts below.
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //     );
    // }
  }


  render() {
    const { loading, location, updatesEnabled } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>

        {/* <ScrollView style={{flex: 1}}> */}
        <View style={{ flex: 1, flexDirection: 'column' }}>

      
          <View style={{ width:width,height:height*0.15, position: "absolute", backgroundColor: "#FF0f0f" }}>

            <Button title='Get Location' onPress={this.getLocation} disabled={loading || updatesEnabled} />
            <View style={styles.buttons}>
              {/* <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} />
              <Button title='Stop Observing' onPress={this.removeLocationUpdates} disabled={!updatesEnabled} /> */}
            </View>

            <View style={styles.result}>
              <Text>{location.coords.latitude}</Text>
              <Text>{location.coords.longitude}</Text>

              {/* <Text>{JSON.stringify(location, null, 4)}</Text> */}
            </View>
          </View>
          {/* <View style={{ position: "absolute", backgroundColor: "#FF0f0f", bottom: 50 }}>
            <Text>TXT</Text>
          </View> */}

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
