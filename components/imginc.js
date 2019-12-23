import React from 'react';
import { Container, Image } from 'semantic-ui-react';

import myImage from 'hello.jpg';

const App = () => (
  <Container>
    <Image src={ myImage } />
  </Container>
);

export default App;
