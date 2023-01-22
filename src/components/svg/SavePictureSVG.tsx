import * as React from 'react';
import Svg, { Circle, Ellipse, Path, SvgProps } from 'react-native-svg';

const SavePictureSVG = (props: SvgProps) => (
  <Svg width={76} height={71} fill="none" {...props}>
    <Ellipse cx={38} cy={50} rx={33} ry={19} fill="#D9D9D9" fillOpacity={0.3} />
    <Path
      d="M2 49c17.702 26.85 59.86 27.793 72 0"
      stroke="#3F5857"
      strokeWidth={2.5}
    />
    <Circle cx={39.5} cy={15.5} r={15.5} fill="#D9D9D9" fillOpacity={0.35} />
    <Path
      d="m61.002 10.001 3.463-4.156c.712-.854 1.068-1.282 1.536-1.282.469 0 .825.428 1.537 1.282L71 10.001"
      stroke="#3F5857"
      strokeWidth={1.3}
    />
    <Path d="m66.001 5.001.002 5 .001 6" stroke="#3F5857" strokeWidth={1.3} />
  </Svg>
);

export default SavePictureSVG;
