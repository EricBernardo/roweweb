import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { updateProfileRequest } from '~/store/modules/user/actions'

import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail obrigatório'),
  name: Yup.string().required('O nome é obrigatório')
})

export default function Profile() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.user.loading)
  const profile = useSelector(state => state.user.profile)

  function handlerSubmit(data) {
    dispatch(updateProfileRequest(data))
  }

  function handlerSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handlerSubmit}>
        <Input type="text" name="name" placeholder="Nome" />
        <Input type="email" name="email" placeholder="E-mail" />
        <hr />
        <Input type="password" name="password" placeholder="Senha" />
        <Input type="password" name="password_confirmation" placeholder="Confirmar senha" />
        <button type="submit" disabled={loading}>{loading ? 'Carregando...' : 'Atualizar perfil'}</button>
      </Form>
      <button type="button" onClick={handlerSignOut}>Sair da Rocketz Web</button>
    </Container>
  );
}
