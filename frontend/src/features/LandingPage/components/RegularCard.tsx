import { Image, Tooltip } from '@chakra-ui/react';

export const RegularCard = (props: {
	rank: number;
	name: string;
	img: string;
	className?: string;
	onClick?: () => void;
}) => (
	<div
		className={`bg-white shadow-xl flex flex-col justify-center items-center gap-3 rounded-xl w-52 h-52 p-3 relative hover:brightness-90 cursor-pointer active:scale-105 transition-all ${props.className}`}
		id={props.name.replaceAll(' ', '')}
		onClick={props.onClick}
	>
		<style>
			{`#${props.name.replaceAll(' ', '')}:before {
                content: "#${props.rank}";
                position: absolute;
                top: -2.3rem;
                right: -1rem;
                color: #FF4848;
                font-weight: 900;
                font-size : 3.7rem;
                transform: rotate(-5.47deg);
                text-shadow: 
                    2px 0 0 black, /*right */
                    0 2px 0 black, /*top */
                    -2px 0 0 black, /*left */
                    0 -2px 0 black; /*bottom */
                `}
		</style>
		<Image
			src={props.img}
			borderRadius={'full'}
			alt={props.name + 'picture'}
			height={'8.2rem'}
			width={'8.2rem'}
			objectFit={'cover'}
		/>
		<Tooltip label={props.name} aria-label={props.name} placement="bottom">
			<div className="font-extrabold text-xl line-clamp-1 text-center">
				{props.name}
			</div>
		</Tooltip>
	</div>
);
