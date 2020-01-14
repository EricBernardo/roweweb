import React from 'react';

import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail obrigatório'),
  password: Yup.string().required('A senha é obrigatório')
})

export default function SignIn() {

  function handleSubmit(data) {
    console.tron.log(data)
  }

  return (
  <>
    <h3>Rocketz Web</h3>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Senha" />
      <button type="submit">Login</button>
    </Form>
  </>
  );
}
