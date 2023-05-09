import { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export const AppProviders = (props: PropsWithChildren) => {
	return <ChakraProvider>{props.children}</ChakraProvider>;
};
