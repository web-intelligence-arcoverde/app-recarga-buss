import React from 'react';

import Label from '../../components/atoms/Label';
import {Container} from '../../components/atoms/Container';

function Home({navigation}) {
  const myTimeout = setTimeout(myGreeting, 5000);

  function myGreeting() {
    navigation.navigate('SignIn');
  }

  return (
    <Container justify="center" align="center">
      <Label color="green-dark">Recardbus</Label>
    </Container>
  );
}

export default Home;
