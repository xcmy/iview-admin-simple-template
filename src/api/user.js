import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    account:userName,
    password:password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}