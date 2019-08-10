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
  Button,
  RefreshControl,
  Alert,
  ListView
} from 'react-native';

import { SafeAreaView, } from 'react-navigation';
// import CardNotice from './CardNotice'
import CardNotice from './CardNotice_Image';
import Dashboard from './Dashboard_Image';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

// const userToken = "778TIlaNHBcW1lwvk3dZ1HuTuPv1";

const items_Text = [
  {
    "Containers": -1,
    "Created": 1559585757,
    "Id": "sha256:00aba00f126e8589e9d4480a3705ff040c196a458e7d891983d065739e37e6f4",
    "Labels": null,
    "ParentId": "sha256:9708a3d924e9b54f550cd7602b5667afbb205c7953257de2e845d2834da146be",
    "RepoDigests": null,
    "RepoTags": [
      "ubuntu_sshd:latest"
    ],
    "SharedSize": -1,
    "Size": 166244113,
    "VirtualSize": 166244113
  },
  {
    "Containers": -1,
    "Created": 1558938380,
    "Id": "sha256:aecfbc849176b1c848045aa772a73dce54e1406a79292fcc4f0fcec30fd2710a",
    "Labels": null,
    "ParentId": "sha256:47f3ad4e1d2fcf7258d0cd6cd1a0e342c393ec07b5c22cca730db772272a0cfd",
    "RepoDigests": null,
    "RepoTags": [
      "friendlyhello:latest"
    ],
    "SharedSize": -1,
    "Size": 105514563,
    "VirtualSize": 105514563
  },
]


let info_data;
export default class Containerlist extends Component {
  constructor() {
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      refreshing: false,
      isLoading: true,
      userToken: "",
      // dataSource:{"name":"as","price":10},
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),

      announcement: [
        {
          "Containers": -1,
          "Created": 1559585757,
          "Id": "sha256:00000000",
          "Labels": null,
          "ParentId": "sha256:00000000",
          "RepoDigests": null,
          "RepoTags": [
            "null:null"
          ],
          "SharedSize": -1,
          "Size": 19201080,
          "VirtualSize": 166244113
        },
      ],
    };
  }

  _getAll() {

  }
  //页面的组件渲染完毕（render）之后执行
  componentDidMount() {
    this.JSON_Post();
  }


  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.JSON_Post()
    // this.setState({refreshing: false});
  }
  JSON_Post = () => {
    // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
    // let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getAnnouncement';
    // let url = 'http://106.104.114.80:2375/images/json';
    let url = 'http://13.78.29.239:2375/images/json';
    fetch(url).then((response) => {
      return response.json();
    }).then((jsonData) => {
      // console.warn(jsonData);
      // console.warn(jsonData.excutionResult);
      //  info_data = jsonData;
      // this.JSON_body();
      console.warn('OK:');

      if (jsonData[0].Containers == "-1") {
        console.warn(jsonData[0].RepoTags);
        // console.warn(this.state.announcement);
        Alert.alert("更新成功");
        this.setState({ refreshing: false, isLoading: false, announcement: jsonData });
        console.warn(JSON.stringify(this.state.announcement));
      }
      else {
        Alert.alert("更新失敗", "請檢查網路");
        this.setState({ refreshing: false });
        // this.forceUpdate();
      }
    }).catch((err) => {
      console.warn('錯誤:', err);
      Alert.alert("指派失敗", "請檢查網路");
      this.setState({ refreshing: false });
      // this.forceUpdate();
    })
  }
  // JSON_body = (A) => {
  //   // console.warn(jsonData);
  //   // console.warn(this.jsonData);
  //   console.warn("A " + A + JSON.stringify(info_data));
  //   console.warn(JSON.stringify(info_data.announcement[0].title));
  //   // let user_info_data = JSON.stringify(info_data);
  //   this.setState({
  //     // user_info_data:info_data,
  //     announcement: info_data.announcement,
  //   }).then(() => {
  //     console.warn(this.state.announcement);
  //   })
  // }


  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        console.warn(value);
        this.setState({ userToken: value });
      }
    } catch (error) {
      console.log(error);
    }
  }


  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  // async componentDidMount() {
  //   // TODO: You: Do firebase things
  //   // const { user } = await firebase.auth().signInAnonymously();
  //   // console.warn('User -> ', user.toJSON());
  //   // await firebase.analytics().logEvent('foo', { bar: '123'});
  // }
  renderRow () {
    return <View style={styles.Listcard}>
             <Text>{rowData.name} {rowData.price}</Text>
           </View>}
  render() {
    if (this.state.isLoading) {
      return (
        <View></View>
      )
    }
    else {
      return (
        <SafeAreaView style={styles.container}>

          <Dashboard />
          {/* <ListView
  contentContainerStyle={styles.listView}
  dataSource={this.state.dataSource}
  // renderRow={this.renderRow.bind(this)}
  renderRow={(rowData) => <Text>{rowData}</Text>}

/> */}



          <ScrollView style={styles.Scrollcontainer}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh} />}>
            {/* <CardNotice infoTitle={this.state.announcement[0].title} infoBody={this.state.announcement[2].detail}/>  */}

            <View style={{ flex: 1, flexDirection: 'row',flexWrap:"wrap" }}>

            {this.state.announcement.map((note) => {
              return (
                <CardNotice
                  infoTitle={note.RepoTags}
                  infoBody={note.Id}
                  infoSize={note.Size}
                  infoLabels={note.Labels}
                  infoCreated={note.Created}
                  />
              );
            })}


</View>
            <Button
              title="新2"
              onPress={() => {
                // this._retrieveData();
                this.getStorage().done();

              }}
            />

            {/* <Card_A/> */}

          </ScrollView>

        </SafeAreaView>


      );
    }
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

    backgroundColor: '#2A2E43',

  },
  Scrollcontainer: {
    // backgroundColor: '#fff',

    flex: 1,
    // padding:10,
    // paddingVertical: 15,
    //paddingRight:100,
    // marginRight:20,



  }, centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.6,
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
    // padding:10,
    // paddingVertical: 15,
    //paddingRight:100,
    // marginRight:20,
  },
  ButtonCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.3,
    height: width * 0.6,
    backgroundColor: '#ededed',
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  Listcard: {
    backgroundColor: 'red',
    width: (width / 2) - 15,
    height: 300,
    marginLeft: 10,
    marginTop: 10
  } 
});