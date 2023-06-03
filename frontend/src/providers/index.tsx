import { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../config/chakra-config';
import { AuthProvider } from '../lib/AuthContext';

export const AppProviders = (props: PropsWithChildren) => {
	return (
		<AuthProvider>
			<ChakraProvider theme={theme}>{props.children}</ChakraProvider>
		</AuthProvider>
	);
};
