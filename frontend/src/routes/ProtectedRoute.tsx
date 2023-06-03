//this where we implement a wrapper that adds auth flow to protected route
import React, { PropsWithChildren } from 'react';
import { Navigate, RouteObject, useLocation } from 'react-router-dom';

export const ProtectedRoute = (props: PropsWithChildren) => {
	const location = useLocation();
	const isAuthenticated = true;
	const path = location.pathname;
	if (!isAuthenticated) return <Navigate to="/login" state={{}} />;
};
