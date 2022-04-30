import React from 'react';

import Label from '../../components/atoms/Label';
import {LinearGradientContainer} from '../../components/atoms/Container';

function Home({navigation}) {
  //const myTimeout = setTimeout(myGreeting, 5000);

  function myGreeting() {
    navigation.navigate('SignIn');
  }

  return (
    <LinearGradientContainer justify="center" align="center">
      <Label color="white-default">Recardbus</Label>
    </LinearGradientContainer>
  );
}

export default Home;
