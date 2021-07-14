import React, { useCallback, useEffect, useMemo, useState } from 'react';
 

import {
  Container,
 
  Profile,
  HeaderContent,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import { Link } from 'react-router-dom';
import { FiClock, FiPower } from 'react-icons/fi';
import LogoUsuario from '../../assets/LogoUsuario.jpg'
import logoImg from '../../assets/logo.jpg';
import { useAuth } from '../../hooks/auth';
import {api} from '../../services/api';
import Header from '../../components/Header';

 

const Dashbord: React.FC = () => {
  


  return (
    <Container>
      <Header />

      <Content>
         
         
      </Content>
    </Container>
  );
};

export default Dashbord;
