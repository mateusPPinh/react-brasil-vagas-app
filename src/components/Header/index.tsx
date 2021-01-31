import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={logo} alt="Logo" />

        <Link to="/">
          <MdArrowBack size={23} color="#333" />
          Voltar
        </Link>
      </header>
    </Container>
  );
};

export default Header;
