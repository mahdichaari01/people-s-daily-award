import { createBrowserRouter } from 'react-router-dom';
import { HomeRoute, CalendarRoute, LeaderboardRoute } from '../features';
import { AuthRoutes } from '../features/auth/routes';
import { UserManagement } from '../features/UserManagement/routes';
export const BrowserRouter = createBrowserRouter([
	HomeRoute,
	CalendarRoute,
	LeaderboardRoute,
	UserManagement,
	...AuthRoutes,
]);
