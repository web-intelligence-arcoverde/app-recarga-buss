import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Icons} from '../../../assets';

const Icon = ({icon}: any) => {
  return <SvgXml width="21" height="19" xml={Icons[icon]} fill="#000" />;
};

export default Icon;
