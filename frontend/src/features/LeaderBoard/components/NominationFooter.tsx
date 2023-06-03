import { Button } from '../../../components';

export const NominationFooter = (props: {
	votes: number;
	rank: number;
	vote: () => void;
}) => (
	<div className="w-full flex flex-row justify-between items-center">
		<div className="flex flex-row justify-start items-center gap-3">
			<div className="font-black font-[montserrat] text-[2.5rem]">
				#{props.rank}
			</div>
			<div className="text-[.9375rem]">{props.votes} votes</div>
		</div>
		<Button paddingX={'1.8125rem'} onClick={props.vote}>
			Vote for Sarrah
		</Button>
	</div>
);
