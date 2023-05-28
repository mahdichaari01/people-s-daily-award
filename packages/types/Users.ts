export interface UserType {
	id: string;
	name: string;
	email: string;
	password: string;
}

export interface CreateUserRequest {
	name: string;
	email: string;
	password: string;
}

export interface AuthResponse {
	access_token: string;
}
