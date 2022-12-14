import axios from 'axios';

const url = "http://127.0.0.1:3003/tutorial"

export const getAllTutorials = async (id) => {
  id = id || '';
  return await axios.get(`${url}/${id}`)
}

export const createTutorial = async (tutorial) => {
  return await axios.post(url,tutorial)
}

export const editTutorial = async (id, tutorial) => {
  return await axios.put(`${url}/${id}`,tutorial)
}

export const deleteTutorial = async (id) => {
  return await axios.delete(`${url}/${id}`)
}