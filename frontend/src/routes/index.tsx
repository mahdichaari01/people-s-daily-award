import { createBrowserRouter } from 'react-router-dom';
import { HomeRoute, CalendarRoute, LeaderboardRoute } from '../features';
import { AuthRoutes } from '../features/auth/routes';
import { UserManagementRoute } from '../features/UserManagement/routes';
export const BrowserRouter = createBrowserRouter([
	HomeRoute,
	CalendarRoute,
	LeaderboardRoute,
	UserManagementRoute,
	...AuthRoutes,
]);
