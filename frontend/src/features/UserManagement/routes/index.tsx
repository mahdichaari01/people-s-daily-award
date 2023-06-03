import { RouteObject } from 'react-router-dom';
import { UserPage } from '../pages';

export const UserManagementRoute: RouteObject = {
	element: <UserPage />,
	path: '/user',
};
