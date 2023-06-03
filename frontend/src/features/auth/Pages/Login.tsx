import { Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { PageLayout, PageText } from '../components';
import { FormContainer } from '../components/FormContainer';
import { Button } from '../../../components';
import { useAuth, useLogin, useUser } from '../../../lib/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserManagementRoute } from '../../UserManagement';

export const Login = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const auth = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, isLoading, error } = useLogin();
	useEffect(() => {
		if (auth) {
			const redirect = searchParams.get('redirect');
			console.log(redirect);
			navigate(redirect ? redirect : '/user');
		}
	}, [auth, navigate, searchParams]);
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							color="green"
							type="email"
							placeholder="nice.person@kindness.hub"
							size={'lg'}
						/>
					</FormControl>
					<FormControl id="password" isRequired>
						<FormLabel>Password</FormLabel>
						<Input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
				<Button
					w={'fit-content'}
					px={'1.8125rem'}
					className="self-center"
					disabled={isLoading}
					onClick={() =>
						login({
							email,
							password,
						}).then((res) => {
							navigate(searchParams.get('redirect') ?? '/user');
						})
					}
				>
					{isLoading ? 'Logging you in' : 'Login'}
				</Button>
				{error && <div className="text-red-500">{error.message}</div>}
			</FormContainer>
		</PageLayout>
	);
};
