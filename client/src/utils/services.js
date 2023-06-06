import axios from 'axios';
import { BASE_URL } from './constants';

//auth
export const loginRequest = async (data) => {
	const result = await axios.post(BASE_URL + '/auth/login', data);
	return result;
};

export const registerRequest = async (data) => {
	const result = await axios.post(BASE_URL + '/auth/register', data);
	return result;
};

export const forgotPassRequest = async (data) => {
	const result = await axios.post(BASE_URL + '/auth/forgot_password', data);
	return result;
};

//user
export const getUserInfoRequest = async (token) => {
	const headers = { Authorization: `Bearer ${token}` };
	const result = await axios.get(BASE_URL + '/users/me', { headers });
	return result;
};

//trucks
export const getTrucksRequest = async (token) => {
	const headers = { Authorization: `Bearer ${token}` };
	const result = await axios.get(BASE_URL + '/trucks', { headers });
	return result;
};

export const addTruckRequest = async ({ token, type }) => {
	const headers = { Authorization: `Bearer ${token}` };
	const result = await axios.post(BASE_URL + '/trucks', { type }, { headers });
	return result;
};

export const editTruckRequest = async ({ token, type, id }) => {
	const headers = { Authorization: `Bearer ${token}` };
	const result = await axios.put(
		BASE_URL + `/trucks/${id}`,
		{ type },
		{ headers }
	);
	return result;
};

export const deleteTruckRequest = async ({ token, id }) => {
	const data = { id: id };
	const headers = { Authorization: `Bearer ${token}` };
	const result = await axios.delete(BASE_URL + `/trucks/${id}`, {
		headers,
		data,
	});
	return result;
};

export const assignTruckRequest = async ({ token, id }) => {
	const headers = { Authorization: `Bearer ${token}` };
	const result = await axios.post(
		BASE_URL + `/trucks/${id}/assign`,
		{ id },
		{ headers }
	);
	return result;
};

//loads
export const getActiveLoadsRequest = async (token) => {
	const headers = { Authorization: `Bearer ${token}` };
	const result = await axios.get(BASE_URL + '/loads/active', { headers });
	return result;
};
