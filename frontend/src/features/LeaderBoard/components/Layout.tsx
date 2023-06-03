import { PropsWithChildren } from 'react';
import { Navbar } from '../../../components/Navbar';

export const Layout = (props: PropsWithChildren) => (
	<div className="w-full bg-[#FEBB58] flex flex-col justify-between">
		<Navbar />
		<div className="w-full h-fit flex justify-center items-center">
			<div className="font-[montserrat] font-black leading-none text-center text-4xl -rotate-3 py-6">
				Vote For the
				<br />
				best person!
			</div>
		</div>
		{props.children}
	</div>
);
