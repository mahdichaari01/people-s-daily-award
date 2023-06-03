import { PropsWithChildren } from 'react';

export const Layout = (props: PropsWithChildren) => (
	<div className="w-full bg-[#42A4FF] grid grid-cols-[1fr,min-content]">
		{props.children}
	</div>
);

export const FixedColumn = (
	props: PropsWithChildren<{ className?: string }>
) => (
	<div className={`sticky top-0 self-start ${props.className}`}>
		{props.children}
	</div>
);

export const FluidColumn = (
	props: PropsWithChildren<{ className?: string }>
) => (
	<div className={`sticky top-0 self-start ${props.className}`}>
		{props.children}
	</div>
);
