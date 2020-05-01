import React from 'react';

import Header from '../utils/Header';
import Routes from '../services/Routes';
import Footer from '../utils/Footer';

import { Container } from 'reactstrap';

export default function App (){
  return(
    <>
      <Header />
        <Container>
          <Routes />
        </Container>
      <Footer />
    </>
  )
}