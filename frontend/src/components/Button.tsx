import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
export const Button = (props: ButtonProps) => {
	return (
		<ChakraButton
			fontSize={'1.25rem'}
			fontWeight={'bold'}
			height="3.125rem"
			paddingY=".6875rem"
			color={'white'}
			bgColor={'black'}
			rounded={'full'}
			{...props}
		></ChakraButton>
	);
};
