export interface AuthUser {
	userId: string;
	name: string;
	username: string;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterCredentials extends LoginCredentials {
	name: string;
	imgLink: string;
}

export interface AuthResponse {
	access_token: string;
}
