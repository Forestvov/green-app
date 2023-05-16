import axios from 'core/axios.js'
import { getToken } from 'core/getToken.js'

export const newChat = async body => {
  const token = getToken()

  return (
    await axios.post(`/waInstance${token[0]}/SendMessage/${token[1]}`, body)
  ).data
}
