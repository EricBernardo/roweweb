import React, { useState } from 'react';
import { MdNotifications} from 'react-icons/md'
import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false)

  function handleToggloVisible() {
    setVisible(!visible)
  }

  return (
    <Container>
      <Badge onClick={handleToggloVisible} hasUnread={true}>
        <MdNotifications size={20} color="#333" />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
              <p>Você possui um novo agendamento para amanhã</p>
              <time>há dois dias atras</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento para amanhã</p>
              <time>há dois dias atras</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento para amanhã</p>
              <time>há dois dias atras</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento para amanhã</p>
              <time>há dois dias atras</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento para amanhã</p>
              <time>há dois dias atras</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento para amanhã</p>
              <time>há dois dias atras</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento para amanhã</p>
              <time>há dois dias atras</time>
              <button type="button">Marcar como lida</button>
            </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
