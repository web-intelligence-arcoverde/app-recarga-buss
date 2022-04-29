import React from 'react';

import Label from '../../components/atoms/Label';
import {Container} from '../../components/atoms/Container';

function Home({navigation}) {
  return (
    <Container justify="center" align="center">
      <Label color="green-dark">Historico</Label>
    </Container>
  );
}

export default Home;
