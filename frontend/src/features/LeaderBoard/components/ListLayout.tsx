import { PropsWithChildren } from 'react';
import { Container } from './Container';
import { Button, ScrollableBox } from '../../../components';

export const ListLayout = (
	props: PropsWithChildren<{ nominate?: () => void; date: Date }>
) => (
	<Container className="w-[40rem] px-8 py-6 flex flex-col gap-5 h-full">
		<div className="flex flex-ro justify-between items-center">
			<div className="font-bold text-xl">
				{props.date.getUTCDay()}.{props.date.getUTCMonth()}.
				{props.date.getFullYear()}
			</div>
			<Button paddingX={'1.875rem'} onClick={props.nominate}>
				Nominate
			</Button>
		</div>
		<ScrollableBox className="h-full">
			<div className="flex flex-col gap-4">{props.children}</div>
		</ScrollableBox>
	</Container>
);
