import axios from 'core/axios.js'
import { getToken } from 'core/getToken.js'

export const getChats = async () => {
  const token = getToken()

  return (await axios.get(`/waInstance${token[0]}/getChats/${token[1]}`)).data
}
