import React from 'react';

import {View} from 'react-native';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';

import TextInput from '../../components/atoms/Input';
import Button from '../../components/atoms/Button/Contained';
import IconButton from '../../components/atoms/Button/Icon';
import ListContainerCardPaymentMethods from '../../components/organisms/ListContainerCardPaymentMethods';

import ContainerCardPayment from '../../components/organisms/ContainerCardPayment';

const PurchasePass = ({navigation}) => {
  return (
    <Container padding={30}>
      <StyledContainer direction="row" align="center">
        <Label color="green-dark" variant="h1">
          Deseja realizar uma recarga?
        </Label>
      </StyledContainer>

      <View style={{padding: 16}} />
      <TextInput
        label="Quantidade de passes"
        onChangeText={(text) => console.log(text)}
        text="EX: 40"
      />

      <ListContainerCardPaymentMethods />

      <View style={{padding: 10}} />

      <StyledContainer
        direction="column"
        justify="space-between"
        color={'white-light'}
        padding={14}>
        <ContainerPaymentInformation text="Quantidade de passes" value={40} />
        <View style={{padding: 2}} />
        <ContainerPaymentInformation text="Valor do passe" value={40} />
        <View
          style={{
            padding: 3,
            borderBottomWidth: 1,
            width: '100%',
            borderBottomColor: '#E9F0EB',
          }}
        />
        <ContainerPaymentInformation text="Valor total" value={52} />
      </StyledContainer>

      <View style={{padding: 10}} />

      <Button onPress={() => console.log('exemple')}>Recarregar</Button>

      <ContainerCardPayment />
    </Container>
  );
};

const ContainerPaymentInformation = ({text, value}) => {
  return (
    <StyledContainer
      direction="row"
      justify="space-between"
      color={'white-light'}>
      <Label variant="body2" color="gray-400">
        {text}
      </Label>
      <Label variant="body2" color="gray-800">
        {value}
      </Label>
    </StyledContainer>
  );
};

export default PurchasePass;
