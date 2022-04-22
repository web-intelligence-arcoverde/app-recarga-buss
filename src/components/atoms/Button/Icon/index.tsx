import React from 'react';
import {Button} from './style';

import Icon from '../../Icon';

const Index = ({icon, onPress, background, disabled}: any) => {
  return (
    <Button
      onPress={() => onPress()}
      background={background}
      disabled={disabled}>
      <Icon icon={icon} />
    </Button>
  );
};

export default Index;
