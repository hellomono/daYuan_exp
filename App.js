/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,

  Button,
  StatusBar,
  Image,
  Alert,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MAP from './src/index'
import Router from './src/router'

// import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator, withNavigation } from 'react-navigation';
import {createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import MapView, { Marker } from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { width, height } = Dimensions.get('window');
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'DetailsScreen',
    /* No more header config here! */
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
            <Button
    title="Go to Details"
    onPress={() => this.props.navigation.push('MAP')}
  />
          <Icon name="battery-full" size={30} color="#6787A0" />

      </View>
    );
  }  
}
// const App = () => {
  

//   return (
//   //   <MapView
//   //   initialRegion={{
//   //     latitude: 37.78825,
//   //     longitude: -122.4324,
//   //     latitudeDelta: 0.0922,
//   //     longitudeDelta: 0.0421,
//   //   }}
//   // />
//     <Fragment>
//        <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('DetailsScreen')}
//         />
//       <MAP/>
//     </Fragment>
//   );
// };

const RootStack = createStackNavigator({
  Home: {
    screen: Router
  },
  MAP: {
    screen: MAP
  },
  Signup: {
    screen: DetailsScreen
  }
});



// const RootStack = createStackNavigator(
//   {
//     // Login: { screen: Login_index },

//     // Home: { screen: HomeScreen },
//     MAP :{screen:MAP},
//     // QRvue: { screen: QRvue },
//     // Setup: { screen: Setup },

//     Details: { screen: DetailsScreen },
//     // Phone: {
//     //   screen: TokenScreen,
//     //   path: 'token/:token_code',
//     // },
//     Phone: {
//       screen: DetailsScreen,
//       path: 'token/:token_code',
//     },
    
//   },
//   {
//     // initialRouteName: 'Login',
//      initialRouteName: 'MAP',

//   }
// );

const prefix = 'bike://';
const App = createAppContainer(RootStack);
export default App ;

// export default App = () => <RootStack/>;

// export default App = () => <RootStack uriPrefix={prefix} />;
// export default App;
// export default DetailsScreen;



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

