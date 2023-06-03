import { Button } from '../../../components';

export const NominationFooter = () => (
	<div className="w-full flex flex-row justify-between items-center">
		<div className="flex flex-row justify-start items-center gap-3">
			<div className="font-black font-[montserrat] text-[2.5rem]">#{23}</div>
			<div className="text-[.9375rem]">2543 votes</div>
		</div>
		<Button paddingX={'1.8125rem'}>Vote for Sarrah</Button>
	</div>
);
