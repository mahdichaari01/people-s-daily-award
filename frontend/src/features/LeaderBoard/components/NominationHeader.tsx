import { Image } from '@chakra-ui/react';
import { Button } from '../../../components';

export const NominationHeader = (props: {
	name: string;
	nominator: string;
	img: string;
	next?: () => void;
	prev?: () => void;
}) => (
	<div className="flex flex-row  justify-between w-full items-center  ">
		<div className="flex flex-row justify-start items-center gap-4">
			<Image
				src={props.img}
				boxSize={'5.4375rem'}
				objectFit={'cover'}
				rounded={'1.3125rem'}
			/>
			<div className="flex flex-col justify-center items-start">
				<div className="text-[1.6rem] font-bold">{props.name}</div>
				<div className="text-lg font-normal]">
					nominated by {props.nominator}
				</div>
			</div>
		</div>
		<div className="flex flex-row gap-3">
			{props.prev && (
				<Button
					onClick={props.prev}
					rounded={'full'}
					height={'3.125rem'}
					w={'3.125rem'}
				>
					<PrevIcon />
				</Button>
			)}
			{props.next && (
				<Button
					onClick={props.prev}
					rounded={'full'}
					height={'3.125rem'}
					w={'3.125rem'}
				>
					<NextIcon />
				</Button>
			)}
		</div>
	</div>
);

const PrevIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.75 19.5L8.25 12l7.5-7.5"
		/>
	</svg>
);

const NextIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8.25 4.5l7.5 7.5-7.5 7.5"
		/>
	</svg>
);
