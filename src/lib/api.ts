import axios from 'axios'

export const api = axios.create({
  baseURL: '192.168.15.7:3333',
})
