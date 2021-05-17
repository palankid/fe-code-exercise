import { get, post, patch } from './api';

const ENDPOINT = 'http://localhost:4002/people';

export const getAllPeople = async () => {
  return await get(ENDPOINT);
};

export const getPerson = async id => {
  return await get(`${ENDPOINT}/${id}`);
};

export const addPerson = async person => {
  return await post(`${ENDPOINT}`, person);
}

export const updatePerson = async person => {
  return await patch(`${ENDPOINT}/${person.id}`, person);
}
