import React, {useState} from 'react';
import {Input, Container, TextError, Label, InputContainer} from './style';

import Icon from '../../atoms/Button/Icon';

const Index = ({
  label,
  text,
  secureTextEntry,
  error,
  color,
  ...inputProps
}: any) => {
  const [visiblePasswordText, setVisiblePasswordText] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <Input
          placeholderTextColor={color}
          placeholder={text}
          secureTextEntry={
            !visiblePasswordText ? visiblePasswordText : secureTextEntry
          }
          {...inputProps}
        />
        {secureTextEntry && (
          <Icon
            icon={visiblePasswordText ? 'eye-close' : 'eye-open'}
            onPress={() => setVisiblePasswordText(!visiblePasswordText)}
          />
        )}
      </InputContainer>
      {!!error && <TextError>{error.message}</TextError>}
    </Container>
  );
};

export default Index;
