import { Button } from '../../../components';

export const NominateFooter = (props: {
	reset: () => void;
	submit: () => void;
}) => (
	<div className="w-full flex flex-row justify-between items-center">
		<div
			onClick={props.reset}
			className="text-xl px-4 cursor-pointer hover:underline"
		>
			Reset
		</div>
		<Button paddingX={'1.8125rem'} onClick={props.submit}>
			Submit
		</Button>
	</div>
);
