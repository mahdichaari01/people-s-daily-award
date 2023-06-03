import { PropsWithChildren } from 'react';

export const Container = (props: PropsWithChildren<{ className?: string }>) => {
	return (
		<div className={`bg-white bg-opacity-[12%] rounded-3xl ${props.className}`}>
			{props.children}
		</div>
	);
};
