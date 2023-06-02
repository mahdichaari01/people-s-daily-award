import { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../config/chakra-config';

export const AppProviders = (props: PropsWithChildren) => {
	return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};
