import {
	FormControl,
	FormLabel,
	Image,
	Input,
	Checkbox,
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
import { useState } from 'react';
import avatar from '../../../assets/avatar.png';

export const Register = () => {
	const [imgLink, setImgLink] = useState('');
	const [temImgLink, setTempImgLink] = useState('');
	const { isOpen, onClose, onOpen } = useDisclosure();
	return (
		<PageLayout bg="red">
			<PageText type="signup" />
			<FormContainer>
				<div className="font-extrabold text-center text-3xl">
					Create an Account
				</div>
				<div className="w-fit h-fit relative rounded-full overflow-hidden active:scale-95 self-center">
					<Image
						src={imgLink ? imgLink : avatar}
						boxSize={'10rem'}
						objectFit={'cover'}
					/>
					<div
						onClick={onOpen}
						className="w-[10rem] h-[10rem] bg-black bg-opacity-30 opacity-0 hover:opacity-100 absolute top-0 left-0 text-white text-xs flex justify-center items-center cursor-pointer select-none p-3 text-center font-bold"
					>
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
										setImgLink(temImgLink);
										onClose();
									}}
								>
									Save
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<FormControl id="FullName" isRequired>
						<FormLabel>Full Name</FormLabel>
						<Input
							color="green"
							type="text"
							placeholder="Your Name"
							size={'lg'}
						/>
					</FormControl>
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
				</div>
				<Button w={'fit-content'} px={'1.8125rem'} className="self-center">
					Signup
				</Button>
			</FormContainer>
		</PageLayout>
	);
};
