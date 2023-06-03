import { Container } from '../Components/Container';
import { Layout } from '../Components/Layout';
import { UserWidget } from '../Components/UserWidget';

export const UserPage = () => {
	return (
		<Layout>
			<div className="w-full h-[50rem] grid grid-cols-[29rem,15.25rem] grid-rows-3 gap-8">
				<div className="row-span-3">
					<UserWidget />
				</div>
				<Container />
				<Container />
				<Container />
			</div>
		</Layout>
	);
};
