import { PropsWithChildren } from 'react';
import { Container } from './Container';

export const UserSectionLayout = (props: PropsWithChildren) => (
	<Container
		className="bg-[#F4F4F4] flex flex-col w-full h-full
"
	>
		{props.children}
	</Container>
);
