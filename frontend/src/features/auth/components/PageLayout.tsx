import { PropsWithChildren } from 'react';

export const PageLayout = (
	props: PropsWithChildren<{ bg: 'red' | 'green' }>
) => (
	<div
		className={`w-full min-h-screen flex flex-row px-24 justify-evenly ${
			props.bg === 'green' ? 'bg-[#41E4AA]' : 'bg-[#F55D5D]'
		}`}
	>
		{props.children}
	</div>
);
