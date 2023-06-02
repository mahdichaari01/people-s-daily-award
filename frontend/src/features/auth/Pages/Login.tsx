import { Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { PageLayout, PageText } from '../components';
import { FormContainer } from '../components/FormContainer';
import { Button } from '../../../components';

export const Login = () => {
	return (
		<PageLayout bg="green">
			<PageText type="login" />
			<FormContainer>
				<div className="font-extrabold text-center text-3xl">
					Login to your Account
				</div>
				<div className="flex flex-col gap-4">
					<FormControl id="email" isRequired>
						<FormLabel>Email address</FormLabel>
						<Input
							color="green"
							type="email"
							placeholder="nice.person@kindness.hub"
							size={'lg'}
						/>
					</FormControl>
					<FormControl id="password" isRequired>
						<FormLabel>Password</FormLabel>
						<Input
							placeholder=""
							colorScheme="green"
							type="password"
							size={'lg'}
						/>
					</FormControl>
					<FormControl id="stay connected" isRequired>
						{/* <FormLabel>Stay Connected</FormLabel> */}
						<Checkbox colorScheme="green">Stay Connected</Checkbox>
					</FormControl>
				</div>
				<Button w={'fit-content'} px={'1.8125rem'} className="self-center">
					Login
				</Button>
			</FormContainer>
		</PageLayout>
	);
};
