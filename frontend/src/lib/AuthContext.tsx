import { useContext, useEffect } from 'react';
import {
	LoginCredentials,
	RegisterCredentials,
	AuthUser,
} from '../features/auth';
import { createContext, PropsWithChildren, useState } from 'react';
import * as authFunctions from './auth';

interface AuthContextInterface {
	authenticated: boolean;
	isLoading: boolean;
	error: Error | undefined;
	getUser: () => Promise<AuthUser | undefined>;
	login: (data: LoginCredentials) => Promise<AuthUser | undefined>;
	register: (data: RegisterCredentials) => Promise<AuthUser | undefined>;
	logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface>({
	authenticated: false,
	isLoading: false,
	error: undefined,
	getUser: () => Promise.resolve(undefined),
	login: () => Promise.resolve(undefined),
	register: () => Promise.resolve(undefined),
	logout: () => Promise.resolve(),
});

function loadingAndErrorHelper<P, T, R>(
	fn1: (p: P) => Promise<T>,
	setLoading: (b: boolean) => void,
	setError: (e: Error) => void,
	then?: (t: T) => R,
	catchFn?: (e: Error) => R
) {
	return async (p: P) => {
		try {
			setLoading(true);
			const result = await fn1(p);
			setLoading(false);
			return then ? then(result) : result;
		} catch (e) {
			setError(new Error((e as Error).message));
			setLoading(false);
			if (catchFn) catchFn(e as Error);
		}
	};
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | undefined>(undefined);
	const login = loadingAndErrorHelper(
		authFunctions.login,
		setLoading,
		setError,
		(user) => {
			setAuthenticated(true);
			return user;
		}
	);
	const register = loadingAndErrorHelper(
		authFunctions.register,
		setLoading,
		setError,
		(user) => {
			setAuthenticated(true);
			return user;
		}
	);
	const logout = async () => {
		try {
			await authFunctions.logout();
		} catch (e) {
			console.log('error logging out, loggin out anyway...');
		}
		setAuthenticated(false);
	};
	const getUser = async () => {
		try {
			const user = await authFunctions.user();
			setAuthenticated(true);
			return user;
		} catch (e) {
			console.log(e);
			setAuthenticated(false);
			return undefined;
		}
	};
	useEffect(() => {
		getUser();
	}, []);
	console.log(authenticated);
	return (
		<AuthContext.Provider
			value={{
				authenticated,
				getUser,
				login,
				register,
				error,
				isLoading: loading,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext).authenticated;
};

export const useLogin = () => {
	const { login, isLoading, error } = useContext(AuthContext);
	return { login, isLoading, error };
};

export const useRegister = () => {
	const { register, isLoading, error } = useContext(AuthContext);
	return { register, isLoading, error };
};

export const useLogout = () => {
	return useContext(AuthContext).logout;
};

export const useUser = () => {
	return useContext(AuthContext).getUser;
};
