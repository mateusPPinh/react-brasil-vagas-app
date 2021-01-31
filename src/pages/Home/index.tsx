import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

// apply the implicit return

const Home: React.FC = () => (
  <Container>
    <img src={logo} alt="React Brasil Vagas Logo" />
    <h1>repositório de vagas react-brasil</h1>

    <p>
      Esse app tem como função reunir todas as vagas contidas nos issues do
      repositório de vagas, para uma melhor visualização de quem está buscando
      um emprego.
    </p>

    <Link to="/jobs">Ir para a aplicação</Link>
  </Container>
);

export default Home;
