import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import { LeaderboardPage } from '../Pages';
import { NominationSection } from '../Pages/NominationSection';
import { NominateSection } from '../Pages/NominateSection';

export const LeaderboardRoute: RouteObject = {
	element: (
		<>
			<Outlet />
		</>
	),
	children: [
		{
			path: ':date',
			element: <LeaderboardPage />,
			children: [
				{
					index: true,
					element: <div>index</div>,
				},
				{
					path: 'nominate',
					element: <NominateSection />,
				},
				{
					path: ':nominationID',
					element: <NominationSection />,
				},
			],
		},
		{ index: true, element: <Navigate to="today" /> },
	],
	path: '/leaderboard',
};
