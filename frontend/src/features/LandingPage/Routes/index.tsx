import { Route, RouteObject } from 'react-router-dom';
import { HomePagePreview } from '../pages';

export const HomeRoute: RouteObject = {
	index: true,
	element: <HomePagePreview />,
};
