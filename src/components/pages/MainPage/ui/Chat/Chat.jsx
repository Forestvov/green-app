import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { AsideChatItem } from 'components/pages/MainPage/ui/Aside/AsideChatList/AsideChatItem.jsx'
import { Button } from 'components/shared/Button/Button.jsx'
import { TextArea } from 'components/shared/Input/TextArea.jsx'

import { createMessage } from 'utils/validation/createMessage.js'

import s from './Chat.module.scss'

export const Chat = () => {
  const selectedChat = useSelector(state => state.chats.selectedChat)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createMessage) })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className={s.chat}>
      <div className={s.header}>
        <AsideChatItem chat={selectedChat} />
      </div>
      <div className={s.chats}></div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          register={register}
          name='message'
          error={undefined}
          placeholder='Ваше сообщение'
        />
        <Button text='отправить' />
      </form>
    </div>
  )
}
