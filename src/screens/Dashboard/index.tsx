import React, {useState} from 'react';

import {View} from 'react-native';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';

import History from '../History';

import SignOut from '../SignOut';

function Home({navigation}) {
  const [user, setUser] = useState('Lucas');
  const [currentBalance, setCurrentBalance] = useState(390);
  const [ticket, setTicket] = useState(30);

  return (
    <Container padding={30}>
      <Label color="green-dark">Olá {user}</Label>
      <View style={{padding: 10}} />
      <StyledContainer direction="row" justify="space-between">
        <Card text="Saldo atual" type="money" value={currentBalance} />
        <Card text="Quantidade de passes" value={ticket} />
      </StyledContainer>
      <View style={{padding: 16}} />

      <History />

      <SignOut navigation={navigation} />
    </Container>
  );
}

const Card = ({text, value, type}: any) => {
  return (
    <StyledContainer width={48} color="green-default" radius={6} padding={12}>
      <Label color="white-default" variant="body2">
        {text}
      </Label>
      <View style={{padding: 4}} />
      <Label color="white-default" variant="h2">
        {type === 'money' ? `R$${value}` : value}
      </Label>
    </StyledContainer>
  );
};

export default Home;
