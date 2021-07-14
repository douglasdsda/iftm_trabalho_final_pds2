import React, { useCallback, useEffect, useMemo, useState } from 'react';
 

import { FiClock, FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoUsuario from '../../assets/LogoUsuario.jpg'
import {
  Container,
  Header,
  Profile,
  HeaderContent,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import logoImg from '../../assets/logo.jpg';
import { useAuth } from '../../hooks/auth';
import {api} from '../../services/api';

 

const Dashbord: React.FC = () => {
  
  const { user, signOut} = useAuth()

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={LogoUsuario} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
         
         
      </Content>
    </Container>
  );
};

export default Dashbord;
