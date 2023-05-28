import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.73.140:3333',
})

// IF AUTH NOT WORKING, CHANGE THE AUTHORIZATION CALLBACK URL
// INSIDE THE GITHUB
