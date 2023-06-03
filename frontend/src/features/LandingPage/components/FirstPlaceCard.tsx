import { Image, Tooltip } from '@chakra-ui/react';

export const FirstPlaceCard = (props: {
	name: string;
	img: string;
	onClick?: () => void;
	className?: string;
}) => (
	<div
		className={`bg-white shadow-xl flex flex-row justify-start items-center px-6 py-[1.125rem] gap-3 rounded-xl relative h-48 max-w-[33.75rem] hover:brightness-90 cursor-pointer active:scale-105 transition-all ${props.className}`}
		id={props.name.replaceAll(' ', '')}
		onClick={props.onClick}
	>
		<style>
			{`#${props.name.replaceAll(' ', '')}:before {
                content: "#1";
                position: absolute;
                top: -2.7rem;
                right: -1.7rem;
                color: #41E4AA;
                font-weight: 900;
                font-size : 5rem;
                transform: rotate(-5deg);
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
			height={'full'}
			width={'auto'}
			aspectRatio={1 / 1}
			objectFit={'cover'}
		/>
		<div>
			<Tooltip label={props.name} aria-label={props.name} placement="bottom">
				<div className="font-extrabold text-3xl line-clamp-1 mb-1">
					{props.name}
				</div>
			</Tooltip>
			<div className="font-medium text-2xl ">Person of the day</div>
			{/* <div className='font-black text-7xl text-[#41E4AA]'>#1</div> */}
		</div>
	</div>
);
