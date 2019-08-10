/*
這個頁面是作為子頁面的路由器
使用TabBar (createBottomTabNavigator)
作為主畫面的進入點使用
*/ 

import React from 'react';
import { createBottomTabNavigator, createStackNavigator,createAppContainer } from 'react-navigation';
import {
  Component, StyleSheet, Platform, Image, TextInput,  StatusBar,Alert,AsyncStorage,

   Button, Text, View, ScrollView, TouchableOpacity, Dimensions,SafeAreaView

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//引用插件
import MiniMAP from './components/Minimap';
// import EXP from './exp';

const { width, height } = Dimensions.get('window');




export default class index_Screen extends React.Component {
        static navigationOptions = {
          // headerTitle instead of title
          // headerTitle: <Top />,
          title: '獎章',
      
        };
      
        // 滑动tab
        renderScrollableTab() {
      
          return (
            <View style={{ flex: 1,backgroundColor:'black', justifyContent: 'center', alignItems: 'center' }}>
      
              <Text  color='#6787A0' >Home!</Text>
              <Icon name="code" size={30} color="#900" />
              <MiniMAP/>
              <Icon name="battery-full" size={30} color="#6787A0" />
              <MiniMAP/>
              <Icon name="battery-three-quarters" size={30} color="#900" />
              <MiniMAP/>
              <Icon name="battery-half" size={30} color="#900" />
              <Icon name="battery-quarter" size={30} color="#900" />
              <Icon name="battery-empty" size={30} color="#900" />
              <Icon name="bed" size={30} color="#900" />
      
              
              <Icon name="american-sign-language-interpreting" size={30} color="#777" />
      
            </View>
      
          )
        }
      
        render() {
          return (
            <SafeAreaView style={styles.container}>
      
              <View style={styles.container}>
               
                <View style={{ flex: 1 }}>
                  {/* {this.renderScrollableTab()} */}
                  <Text  color='#6787A0' >Home!</Text>
              <Icon name="code" size={30} color="#900" />
              <MiniMAP/>
              <Icon name="battery-full" size={30} color="#6787A0" />
              <MiniMAP/>
              <Icon name="battery-three-quarters" size={30} color="#900" />
              <MiniMAP/>
              <Icon name="battery-half" size={30} color="#900" />
              <Icon name="battery-quarter" size={30} color="#900" />
              <Icon name="battery-empty" size={30} color="#900" />
              <Icon name="bed" size={30} color="#900" />
      
              
              <Icon name="american-sign-language-interpreting" size={30} color="#777" />
      
                </View>
              </View>
            </SafeAreaView>
          );
        }
      }
      
      
      
      




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
//     alignItems: 'center',
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




