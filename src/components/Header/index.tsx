import React from 'react';

import { Link } from 'react-router-dom';
import { FiClock, FiPower } from 'react-icons/fi';
import LogoUsuario from '../../assets/LogoUsuario.jpg'
import logoImg from '../../assets/logo.jpg';
import { useAuth } from '../../hooks/auth';
import {api} from '../../services/api';

import { Container, Header as ContainerHeader,
 Profile,
  HeaderContent, } from './styles';

const Header: React.FC = () => {
  return (
    <ContainerHeader>
    <HeaderContent>
      <img src={logoImg} alt="teste" />
      <Profile>
        <img src={LogoUsuario} alt="teste" />
        <div>
          <span>Bem-vindo,</span>
        
        </div>
      </Profile>
      <div>
      <Link to="/categorias">
            <strong>Categorias</strong>
          </Link>

          <Link to="/usuarios">
            <strong>Usuarios</strong>
          </Link>

          <Link to="/produtos">
            <strong>Produtos</strong>
          </Link>
      </div>
      <button type="button">
        <FiPower />
      </button>
    </HeaderContent>
  </ContainerHeader>
  )
}

export default Header;