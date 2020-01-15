import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Notifications from '~/components/Notifications'

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile)
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/category">Categoria</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
