import { RouteObject } from 'react-router-dom';
import { Register, Login } from '../Pages';

export const AuthRoutes: RouteObject[] = [
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
];
