import React from 'react';

import {Typography} from '../../../constants';
import {Label} from './style';

interface LabelProps {}

export default function ({variant, color, children}: any) {
  return (
    <Label {...Typography['h1']} color={color}>
      {children}
    </Label>
  );
}
