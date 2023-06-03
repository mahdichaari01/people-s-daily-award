import {
	Outlet,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';
import { ListItem } from '../components/ListItem';
import { ListLayout } from '../components/ListLayout';
import { getNominations } from '../api/getNominations';
import { useState, useEffect, createContext } from 'react';
import { NominationEntity } from 'types';
import { Spinner } from '@chakra-ui/react';
import { useAuth } from '../../../lib/AuthContext';

export const LeaderboardPage = () => {
	const { date } = useParams();
	const auth = useAuth();
	const [getSearchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState<NominationEntity[] | null>(null);
	const [firstRender, setFirstRender] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false);
			getNominations(new Date(!date || date === 'today' ? Date.now() : date))
				.then((res) => {
					setIsLoading(false);
					setData(res);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err);
				});
		}
	}, []);
	return (
		<Layout>
			<dataContext.Provider value={data}>
				<div className="flex flex-row w-full h-full py-9 px-16 gap-11">
					<ListLayout
						date={new Date('September 17, 2023')}
						nominate={() => {
							if (auth) navigate('/leaderboard/today/nominate');
							else {
								navigate('/login');
							}
						}}
					>
						{isLoading && <Spinner />}
						{data?.map((item, index) => (
							<ListItem
								id={item.id}
								img={item.imageLink}
								name={item.nomineeName}
								voteCount={item.vote.length}
								rank={index + 1}
								to={item.id.toString()}
							/>
						))}
					</ListLayout>

					<Outlet />
				</div>
			</dataContext.Provider>
		</Layout>
	);
};

export const dataContext = createContext<NominationEntity[] | null>(null);
