import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from '~/store/modules/auth/actions'

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail obrigatório'),
  password: Yup.string().required('A senha é obrigatório')
})

export default function SignIn() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
  <>
    <h3>Rocketz Web</h3>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Senha" />
      <button type="submit" disabled={loading}>{loading ? 'Carregando...' : 'Login'}</button>
    </Form>
  </>
  );
}
