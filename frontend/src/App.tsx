import { AppProviders } from './providers';
import { useMediaQuery } from 'usehooks-ts';
function App() {
	const md = useMediaQuery('(min-width: 768px)');
	if (!md)
		return (
			<div>
				Please Use a bigger device. Mobile version is still in development
			</div>
		);
	return <AppProviders>Main App</AppProviders>;
}

export default App;
