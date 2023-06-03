import {
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { PageLayout, PageText } from '../components';
import { FormContainer } from '../components/FormContainer';
import { Button } from '../../../components';
import { useEffect, useState } from 'react';
import avatar from '../../../assets/avatar.png';
import { useAuth, useRegister } from '../../../lib/AuthContext';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const Register = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const auth = useAuth();
	const [imgLink, setImgLink] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setFullName] = useState('');
	const { register, isLoading, error } = useRegister();
	useEffect(() => {
		if (auth) navigate(searchParams.get('redirect') ?? '/user');
	}, [auth, navigate, searchParams]);
	return (
		<PageLayout bg="red">
			<PageText type="signup" />
			<FormContainer>
				<div className="font-extrabold text-center text-3xl">
					Create an Account
				</div>
				<ImgInput imgLink={imgLink} setImgLink={setImgLink} />
				<div className="flex flex-col gap-4 items-center">
					<FormControl id="FullName" isRequired>
						<FormLabel>Full Name</FormLabel>
						<Input
							value={name}
							onChange={(e) => setFullName(e.target.value)}
							color="green"
							type="text"
							placeholder="Your Name"
							size={'lg'}
						/>
					</FormControl>
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
				</div>
				<Button
					w={'fit-content'}
					px={'1.8125rem'}
					className="self-center"
					disabled={isLoading}
					onClick={() =>
						register({
							email,
							password,
							name,
							imgLink,
						})
					}
				>
					{isLoading ? 'Signing you up' : 'Signup'}
				</Button>
				{error && (
					<div className="text-red-500 text-center">{error.message}</div>
				)}
			</FormContainer>
		</PageLayout>
	);
};

const ImgInput = (props: {
	imgLink: string;
	setImgLink: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [temImgLink, setTempImgLink] = useState('');

	return (
		<>
			<div className="w-[10rem] h-[10rem] bg-black bg-opacity-30 opacity-0 hover:opacity-100 absolute top-0 left-0 text-white text-xs flex justify-center items-center cursor-pointer select-none p-3 text-center font-bold">
				change link
			</div>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Image Upload</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Image URL</FormLabel>
							<Input
								placeholder="Image Link"
								value={temImgLink}
								onChange={(e) => setTempImgLink(e.target.value)}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={() => {
								props.setImgLink(temImgLink);
								onClose();
							}}
						>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
