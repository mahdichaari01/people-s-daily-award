import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { NominationBody } from '../components/NominationBody';
import { NominationFooter } from '../components/NominationFooter';
import { NominationHeader } from '../components/NominationHeader';
import { NominationLayout } from '../components/NominationLayout';
import { useContext } from 'react';
import { dataContext } from '.';
import { submitVote } from '../api/submitVote';

export const NominationSection = () => {
	const { nominationID } = useParams();
	const data = useContext(dataContext);
	const navigate = useNavigate();
	if (!data) return <div>404</div>;
	const index = data.findIndex((v) => v.id.toString() === nominationID);
	if (index === -1) return <div>404</div>;
	const nomination = data[index];
	return (
		<Container className="w-full h-fit sticky top-8 self-start">
			<NominationLayout>
				<NominationHeader
					img={nomination.imageLink}
					name={nomination.nomineeName}
					nominator={nomination.user.name}
					next={
						index !== data.length - 1
							? () => navigate('data[index + 1].id.toString()')
							: undefined
					}
					prev={
						index !== 0
							? () => navigate(data[index - 1].id.toString())
							: undefined
					}
				/>
				<NominationBody
					description={nomination.reason}
					embed={nomination.embed}
				/>
				<NominationFooter
					rank={index + 1}
					votes={nomination.vote.length}
					vote={() =>
						submitVote(nomination.id).catch((err) => console.log(err))
					}
				/>
			</NominationLayout>
		</Container>
	);
};
