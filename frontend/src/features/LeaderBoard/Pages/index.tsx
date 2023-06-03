import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';
import { ListItem } from '../components/ListItem';
import { ListLayout } from '../components/ListLayout';

export const LeaderboardPage = () => {
	return (
		<Layout>
			<div className="flex flex-row w-full h-full py-9 px-16 gap-11">
				<ListLayout date={new Date('September 17, 2023')}>
					<TestData />
				</ListLayout>

				<Outlet />
			</div>
		</Layout>
	);
};

const TestData = () => (
	<>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={221}
		/>
		<ListItem
			active
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={2}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={22}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={221}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={2}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={22}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={221}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={2}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={22}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={221}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={2}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={22}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={221}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={2}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={22}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={221}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={2}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={22}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={221}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={2}
		/>
		<ListItem
			id="1"
			img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
			name="Bill Gates"
			voteCount={2333}
			rank={22}
		/>
	</>
);
