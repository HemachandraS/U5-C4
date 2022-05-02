export const order = "order"

export const findorders = (data) => {
	return {
		type: order,
		payload: data,
	};
};
