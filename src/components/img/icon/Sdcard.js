import React from 'react'
import Svg, { Defs, ClipPath, Path, G, Rect } from 'react-native-svg'
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
const { width, height } = Dimensions.get('window');

const SvgComponent = props => (
  // <Svg width='20' height='40' {...props}>
  <View style={{ flex: 1,width:width*0.2,backgroundColor:"#00FF00" }}>

  <Svg style={{
}}
// viewBox='0 0 100 60'
preserveAspectRatio='slice'
{...props}>

    <Defs>
      <ClipPath id="prefix__a">
        <Path d="M0 0h166v217H0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#prefix__a)">
      <G data-name="Group 1234" transform="translate(12.89 14.753)">
        <Path
          data-name="Rectangle 1030"
          fill="#fc871d"
          d="M0 48.97h12.136v19.07H0z"
        />
        <Path
          data-name="Subtraction 33"
          d="M133.654 189.4H9.691c-4.691 0-8.508-4.1-8.508-9.146V85.376h6.936v-38.14H1.183V9.143C1.183 4.1 5 0 9.691 0h106.782l25.687 25.228v27.209h-6.936v10.4h6.936v117.417c.001 5.046-3.815 9.146-8.506 9.146z"
          fill="#535357"
        />
        <Rect
          data-name="Rectangle 1026"
          // width={116.156}
          // height={152.563}
          width={116.156}
          height={152.563}
          rx={9}
          transform="translate(13.869 21.232)"
          fill="#6f7fb1"
        />
        <Path
          data-name="Intersection 4"
          d="M13.87 50.703V30.231a9 9 0 0 1 9-9h98.155a9 9 0 0 1 9 9v20.472z"
          fill="#e55151"
        />
      </G>
    </G>
  </Svg>
  </View>
)

export default SvgComponent
