import { PropsWithChildren } from 'react';

export const NominationLayout = (props: PropsWithChildren) => (
	<div className="w-full h-fit min-h-[90vh] p-6 flex flex-col justify-between gap-3">
		{props.children}
	</div>
);
