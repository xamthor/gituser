import Api from "../services/axios";

export const getUserEvents = async (name) => {
    try {
		const response = await Api.get(`users/${name}/events`);
		return response;
    } catch (error) {
		console.error(error);
    }
};

export const getUser = async (name) => {
    try {
		const response = await Api.get(`users/${name}`);
		return response;
    } catch (error) {
		console.error(error);
    }
};
