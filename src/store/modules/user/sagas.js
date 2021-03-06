import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'

import { updateProfileSuccess, updateProfileFailure } from './actions'

export function* updateProfile({ payload }) {

  try {
    const { name, email, ...rest } = payload.data

    const profile = Object.assign(
      { name, email },
      rest.password_confirmation ? rest : {}
    )

    const response = yield call(api.put, 'profile', profile)

    toast.success('Perfil atualizdo com sucesso!')

    yield put(updateProfileSuccess(response.data.data))
  } catch(err) {
    toast.error('Error ao atualizar perfil, confira seus dados!')
    yield put(updateProfileFailure())
  }
}
export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
])
