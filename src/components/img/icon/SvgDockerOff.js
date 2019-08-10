import React from 'react'
import Svg, { Defs, ClipPath, Path, G, Rect, Circle } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={336.734} height={90} {...props}>
    <Defs>
      <ClipPath id="prefix__a">
        <Path d="M0 0h336.734v90H0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#prefix__a)">
      <G data-name="Group 1090" transform="translate(-8164 -192.27)">
        <Path
          data-name="Path 601"
          d="M8481.972 236.445c14.139 10.32 17.812 34.043 17.812 34.043s-19.251 6.989-33.392-3.332-17.813-34.045-17.813-34.045 19.252-6.989 33.393 3.334z"
          fill="#a4a9ad"
          opacity={0.5}
        />
        <Rect
          width={292.333}
          height={79.001}
          rx={12}
          fill="#4a5967"
          transform="translate(8165.728 193.976)"
        />
        <Circle
          data-name="Ellipse 410"
          cx={6.264}
          cy={6.264}
          r={6.264}
          transform="translate(8217.102 227.342)"
          fill="#000102"
        />
        <Path
          data-name="Path 605"
          d="M8481.972 231.588c14.139-10.32 17.812-34.044 17.812-34.044s-19.251-6.989-33.392 3.332-17.813 34.044-17.813 34.044 19.252 6.99 33.393-3.332z"
          fill="#4a5967"
        />
        <Path
          data-name="Path 637"
          d="M8165.7 223.32v38.086s.317 11.794 11.864 11.823 271.337 0 271.337 0 9.238.4 9.533-11.823-6.1-8.774-6.1-8.774h-208.769s-22.91.854-37.188-13.961-40.677-15.351-40.677-15.351z"
          fill="#a4a9ad"
        />
        <Path
          data-name="Path 604"
          d="M8351.292 271.435c12.675 11.011 30.35 11.42 32.917 8.465s-.304-20.4-12.977-31.414-26.68-15.646-32.919-8.466.305 20.4 12.98 31.415z"
          fill="#3c4650"
        />
      </G>
    </G>
  </Svg>
)

export default SvgComponent
