/*
這個頁面是作為子頁面的路由器
使用TabBar (createBottomTabNavigator)
作為主畫面的進入點使用
*/ 

import React from 'react';
import { createBottomTabNavigator, createStackNavigator,createAppContainer } from 'react-navigation';
import {
  Component, 
  StyleSheet, 
  Platform, 
  Image, 
  TextInput,  
  StatusBar,Alert,AsyncStorage,
  RefreshControl,
   Button, Text, View, ScrollView, TouchableOpacity, Dimensions,SafeAreaView

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MiniMAP from './components/Minimap';
import CardNotice from './components/CardNotice';

//引用插件
// import MAP from './map';
// import EXP from './exp';

const { width, height } = Dimensions.get('window');




export default class index_Screen extends React.Component {
        static navigationOptions = {
          // headerTitle instead of title
          // headerTitle: <Top />,
          title: '旅程日誌',
      
        };
        constructor() {
                super();
                this.state = {
                  refreshing: false,
                  isLoading: true,
                  userToken:"",
                  announcement: [
                    {
                        "detail": "空空der",
                        "issueTime": {
                            "_seconds": 1552493757,
                            "_nanoseconds": 688000000
                        },
                        "title": "空空der",
                        "issuer": "空空der"
                    }],
                };
              }
      //页面的组件渲染完毕（render）之后执行
componentDidMount() {
        this.JSON_Post();
      }
      
      
      _onRefresh = () => {
        this.setState({refreshing: true});
        this.JSON_Post()
          // this.setState({refreshing: false});
      }
      
        JSON_Post = () => {
          // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
          let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getAnnouncement';
          fetch(url, {
            method: 'POST',
            // headers 加入 json 格式
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "uid":this.state.userToken
            })
          }).then((response) => {
            return response.json();
          }).then((jsonData) => {
            // console.warn(jsonData);
            // console.warn(jsonData.excutionResult);
          //  info_data = jsonData;
            // this.JSON_body();
            if (jsonData.excutionResult=="success"){
              console.warn(jsonData.announcement);
              console.warn(this.state.announcement);
              Alert.alert ("更新成功");
              this.setState({refreshing: false,isLoading: false,announcement: jsonData.announcement,});
              console.warn(JSON.stringify(this.state.announcement));
              }
              else{
                Alert.alert ("更新失敗","請檢查網路");
                this.setState({refreshing: false});
                // this.forceUpdate();
              }
          }).catch((err) => {
            console.warn('錯誤:', err);
            Alert.alert ("指派失敗","請檢查網路");
            this.setState({refreshing: false});
            // this.forceUpdate();
          })
        }
        JSON_body = (A) => {
          // console.warn(jsonData);
          // console.warn(this.jsonData);
          console.warn("A " + A + JSON.stringify(info_data));
          console.warn(JSON.stringify(info_data.announcement[0].title));
          // let user_info_data = JSON.stringify(info_data);
          this.setState({
              // user_info_data:info_data,
              announcement: info_data.announcement,
          }).then(()=>{
            console.warn(this.state.announcement);
          })
      }
      
      
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
      
        // 滑动tab
        renderScrollableTab() {
      
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
              {/* <Text  color='#6787A0' >Home!</Text>
              <Icon name="code" size={30} color="#900" /> */}
  
      
              
              {/* <Icon name="american-sign-language-interpreting" size={30} color="#777" /> */}
      
            </View>
      
          )
        }

      
        render() {
                if(this.state.isLoading){
                        return(
                          <View><Text>isLoading</Text></View>
                        )
                      }
                      else{
                        return (
                          <SafeAreaView style={styles.container}> 
                        
                          <ScrollView style={styles.Scrollcontainer}
                          refreshControl={
                            <RefreshControl
                              refreshing={this.state.refreshing}
                              onRefresh={this._onRefresh}/>}>
                                {/* <CardNotice infoTitle={this.state.announcement[0].title} infoBody={this.state.announcement[2].detail}/>  */}
                
                                {this.state.announcement.map((note) => {
                           return (
                             
                            <CardNotice
                            infoTitle={note.title}
                            infoBody={note.detail}
                            mapBody={<MiniMAP/>}
                             />
                           );
                        })}
                
                {/* 
                                <CardNotice infoTitle={msg.announcement[3].title} infoBody={msg.announcement[0].detail}/> 
                                <CardNotice infoTitle={msg.announcement[0].title} infoBody={msg.announcement[1].detail}/> 
                                <CardNotice infoTitle={msg.announcement[1].title} infoBody={msg.announcement[2].detail}/>  */}
                          {/* <Button style={styles.ButtonCard}/> */}
                          {/* <TouchableOpacity title='GET' style={styles.ButtonCard} onPress={this.JSON_Post}/> */}
                
                
                       
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
                    
                           
                        );}
        //   return (
        //     <SafeAreaView style={styles.container}>
      
        //       <View style={styles.container}>
               
        //         <View style={{ flex: 1 }}>
                        
        //           {this.renderScrollableTab()}
        //         </View>
        //       </View>
        //     </SafeAreaView>
        //   );
        }
      }
      
      
      
      




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    ///下方tab bar 顏色 iphone X 下瀏海 顏色
  },  background: {
    height: 800,
    width: 600,
    position: 'absolute',
    
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
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
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  navLeft: {
    alignItems: 'center',
    marginLeft: 10,
  },
  navRight: {
    alignItems: 'center',
    marginRight: 10,
  },
  navIcon: {
    height: 20,
    width: 20,
  },
  navText: {
    fontSize: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 30,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#666',
    fontSize: 14,
  },
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
    width: width / 8,
    marginLeft: 6
  }

});




