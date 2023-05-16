import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getToken } from 'core/getToken.js'

import { Aside } from 'components/pages/MainPage/ui/Aside/Aside.jsx'
import { Chat } from 'components/pages/MainPage/ui/Chat/Chat.jsx'

import s from './MainPage.module.scss'

export const MainPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const _token = getToken()

    if (!_token) {
      navigate('/')
    }
  }, [])

  return (
    <div className={s.wrapper}>
      <Aside />
      <Chat />
    </div>
  )
}
