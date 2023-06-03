import { PropsWithChildren } from 'react';
import { Button } from '../../../components';
import girlinlove from '../../../assets/girlinlove.png';
import { Image } from '@chakra-ui/react';
export const Layout = (props: PropsWithChildren) => (
	<div className="h-screen w-full bg-[#FEBB58] px-12 py-16 flex flex-row gap-5 justify-between items-center">
		<div className="w-[50%] h-fit">{props.children}</div>
		<div className="w-[40%] h-fit text-white flex flex-col justify-end gap-4 items-end">
			<div
				className={`font-black text-[4.3rem] leading-none font-[montserrat] select-none text-[#DA9733] text-right`}
			>
				The people's
				<br />
				daily award
			</div>
			<p className="text-lg font-medium text-right leading-tight font-[montserrat] ">
				You’ve helped reward some of the best people in the world. Those are
				some of the most helpful, selfless and kindest people. You, not only
				made their day, but also encourage others to have those qualities. So
				what do you think that makes you?
			</p>
			<div className="flex flex-row gap-4">
				<Button px={'1.875rem'} bg={'#DA9733'}>
					Vote
				</Button>
				<Button px={'1.875rem'} bg={'#CA8928'}>
					Nominate
				</Button>
			</div>
			<Image
				alignSelf={'center'}
				src={girlinlove}
				alt="girlinlove"
				objectFit={'contain'}
				h={'23rem'}
			/>
		</div>
	</div>
);
