export const Use = 'Use';

export const USER_NAME = "USER_NAME"

export const toggelAuth = (data) => {
	return {
        type:Use,
        payload:data
    }
};


export const username=(data)=>{
    return {
        type:USER_NAME,
        payload:data
    }
}