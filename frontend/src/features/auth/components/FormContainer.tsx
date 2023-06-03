import { PropsWithChildren } from 'react';

export const FormContainer = (props: PropsWithChildren) => (
	<form className="w-[32rem] min-h-[30rem] bg-white rounded-2xl self-center flex flex-col p-8 justify-between gap-10 shadow-lg">
		{props.children}
	</form>
);
