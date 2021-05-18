import { addUrlParams } from 'utils/network.utils';
import { get, post, patch } from './api';

const ENDPOINT = 'http://localhost:4002/people';

export const getPeople = async (params = {}) => {
  return await get(addUrlParams(ENDPOINT, params));
};

export const addPerson = async (person) => {
  return await post(`${ENDPOINT}`, person);
};

export const updatePerson = async (person) => {
  return await patch(`${ENDPOINT}/${person.id}`, person);
};
