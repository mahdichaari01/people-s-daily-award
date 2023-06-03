const storagePrefix = 'app';
const tokenKey = 'token';
const storage = {
	getToken: () => {
		return window.localStorage.getItem(`${storagePrefix}-${tokenKey}`);
	},
	setToken: (token: string) => {
		window.localStorage.setItem(`${storagePrefix}-${tokenKey}`, token);
	},
	clearToken: () => {
		window.localStorage.removeItem(`${storagePrefix}-${tokenKey}`);
	},
};

export default storage;
