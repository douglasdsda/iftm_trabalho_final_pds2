import React from 'react';

import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import LogoUsuario from '../../assets/LogoUsuario.jpg'
import logoImg from '../../assets/logo.jpg';

import { Header as ContainerHeader,
 Profile,
  HeaderContent, } from './styles';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {

  const { user, signOut } = useAuth()

  return (
    <ContainerHeader>
    <HeaderContent>
      <img src={logoImg} alt="teste" />
      <Profile>
        <img src={LogoUsuario} alt="teste" />
        <div>
          <span>Bem-vindo, <strong style={{color: 'yellow'}}>{user.email}</strong></span>
        
        </div>
      </Profile>
      <div style={{marginLeft: 'auto'}}>
      <Link to="/categorias">
            <strong >Categorias</strong>
          </Link>

          <Link to="/usuarios">
            <strong className="espaco">Usuarios</strong>
          </Link>

          <Link to="/produtos">
            <strong className="espaco mr-4">Produtos</strong>
          </Link>
      </div>
    
      <button onClick={signOut}  type="button">
        <FiPower />
      </button>
 
    </HeaderContent>
  </ContainerHeader>
  )
}

export default Header;