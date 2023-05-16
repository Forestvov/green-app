import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getToken } from 'core/getToken.js'

import { SignInForm } from 'components/pages/SignInPage/ui/SignInForm/SignInForm.jsx'

export const SignInPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const _token = getToken()

    if (_token) {
      navigate('/chats')
    }
  }, [])

  return (
    <>
      <SignInForm />
    </>
  )
}
