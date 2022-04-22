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
  const [visiblePasswordText, setVisiblePasswordText] = useState(true);

  const borderInput = {
    error: {borderColor: 'red-default', borderWidth: 2},
    success: {borderColor: 'green-default', borderWidth: 2},
    default: {borderColor: 'white-dark', borderWidth: 1},
  };

  const {borderColor, borderWidth} =
    borderInput[
      visiblePasswordText ? 'default' : !!error ? 'error' : 'success'
    ];

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer
        borderColor={secureTextEntry && borderColor}
        borderWidth={secureTextEntry && borderWidth}>
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
            icon={
              visiblePasswordText
                ? 'eye-close'
                : !!error
                ? 'eye-open-error'
                : 'eye-open'
            }
            onPress={() => setVisiblePasswordText(!visiblePasswordText)}
          />
        )}
      </InputContainer>
      {!!error && <TextError>{error.message}</TextError>}
    </Container>
  );
};

export default Index;
