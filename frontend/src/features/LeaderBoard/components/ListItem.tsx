import { Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const ListItem = (props: {
	id: string | number;
	img: string;
	name: string;
	voteCount: number;
	rank: number;
	to: string;
	active?: boolean;
}) => (
	<NavLink
		className={({ isActive }) => {
			return `flex flex-row items-center justify-between w-full h-16 rounded-full p-[.3125rem] pr-4 cursor-pointer active:scale-[102%] hover:brightness-95 transition-all ${
				isActive ? 'bg-black text-white' : 'bg-white '
			}`;
		}}
		to={props.to}
	>
		<div className="h-full w-full flex flex-row justify-start items-center  gap-4">
			<Image
				src={props.img}
				boxSize={'3.3125rem'}
				objectFit={'cover'}
				rounded={'full'}
			/>
			<div>
				<div className="font-bold line-clamp-1">{props.name}</div>
				<div className="font-[montserrat] text-[#34BC8C] font-black">
					{props.voteCount} votes
				</div>
			</div>
		</div>
		<div className="text-[2rem] font-bold text-right w-[6.25rem]">
			#{props.rank}
		</div>
	</NavLink>
);
