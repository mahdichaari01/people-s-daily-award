import { PropsWithChildren } from 'react';

export const Container = (props: PropsWithChildren<{ className?: string }>) => (
	<div
		className={`w-full h-full rounded-xl overflow-hidden bg-white shadow-lg ${props.className}`}
	>
		{props.children}
	</div>
);
