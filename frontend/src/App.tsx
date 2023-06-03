import { Button } from './components/Button';
import { AppProviders } from './providers';
import { useMediaQuery } from 'usehooks-ts';
import { BrowserRouter } from './routes';
import { RouterProvider } from 'react-router-dom';
import { login, logout, register, user } from './lib/auth';
import { axios } from './lib/axios';
function App() {
	const md = useMediaQuery('(min-width: 768px)');
	if (!md)
		return (
			<div>
				Please Use a bigger device. Mobile version is still in development
			</div>
		);
	return (
		<AppProviders>
			<RouterProvider router={BrowserRouter} />
		</AppProviders>
	);
}

export default App;
