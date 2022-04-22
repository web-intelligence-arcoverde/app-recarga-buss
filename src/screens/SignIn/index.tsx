import React from 'react';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import Button from '../../components/atoms/Button/Contained';
import TextInput from '../../components/atoms/Input';
import {View} from 'react-native';

function SignIn() {
  return (
    <Container justify="center" align="center">
      <Label color="green-dark">Recardbus</Label>

      <View style={{padding: 26}} />

      <StyledContainer width={84}>
        <TextInput label="CPF (Somente números)" />

        <View style={{padding: 12}} />

        <TextInput secureTextEntry={true} label="Senha" />

        <View style={{padding: 20}} />

        <Button name="Exemple" onPress={() => console.log('example')}>
          Entrar
        </Button>
      </StyledContainer>
    </Container>
  );
}

export default SignIn;
