import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	FormControl,
	FormLabel,
	Input,
	Image,
	ModalFooter,
	useDisclosure,
} from '@chakra-ui/react';
import avatar from '../../../assets/avatar.png';
import confirmedIcon from '../../../assets/Approval.png';
import { UserSectionLayout } from './UserSectionLayout';
import { Button } from '../../../components';
import { useEffect, useState } from 'react';
import { useUser, useLogout, useAuth } from '../../../lib/AuthContext';
import { AuthUser } from '../../auth';
import { Navigate } from 'react-router-dom';

export const UserWidget = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [temImgLink, setTempImgLink] = useState<string>('');
	const auth = useAuth();
	const logout = useLogout();
	const getUser = useUser();
	const [isUserLoading, setIsUserLoading] = useState(true);
	const [user, setUser] = useState<AuthUser | undefined>(undefined);
	useEffect(() => {
		if (isUserLoading) {
			setIsUserLoading(false);
			getUser()
				.then((res) => {
					setUser(res);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);
	if (!auth) return <Navigate to="/login" />;
	return (
		<UserSectionLayout>
			<div className="bg-white w-full h-[40%] shrink-0 rounded-b-3xl shadow-md flex flex-col items-center justify-end relative gap-2">
				<button
					onClick={logout}
					className="absolute top-0 right-0 mr-2 mt-2 p-2 rounded-full transition-all  hover:bg-neutral-200"
				>
					<LogoutIcon />
				</button>
				<div className="w-fit h-fit relative rounded-full overflow-hidden active:scale-95">
					<Image src={avatar} boxSize={'8rem'} objectFit={'cover'} />
					<div
						onClick={onOpen}
						className="w-[8rem] h-[8rem] bg-black bg-opacity-30 opacity-0 hover:opacity-100 absolute top-0 left-0 text-white text-xs flex justify-center items-center cursor-pointer select-none p-3 text-center font-bold"
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
										onClose();
									}}
								>
									Save
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</div>
				<div className="font-bold font-[montserrat] flex flex-col items-center">
					<div className="text-2xl ">Mahdi Chaari</div>
					<div className="flex flex-row items-center">
						<Image src={confirmedIcon} boxSize={'1.5rem'} /> nominator
					</div>
				</div>
				<div className="w-full flex justify-evenly flex-row font-extrabold text-[#A3A3A3] py-3">
					<button className="text-[#42A4FF]">INFO</button>
					<button>HISTORY</button>
				</div>
			</div>
			<div className="w-full h-full">
				<div
					className="w-full h-full p-9 flex flex-col items-center justify-center gap-7
                "
				>
					<FormControl id="FullName">
						<FormLabel>Full Name</FormLabel>
						<Input
							color="green"
							type="text"
							placeholder="Your Name"
							size={'lg'}
							bg={'white'}
						/>
					</FormControl>

					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input
							placeholder=""
							colorScheme="green"
							type="password"
							size={'lg'}
							bg={'white'}
						/>
					</FormControl>
					<FormControl id="re-password">
						<FormLabel>Retype Password</FormLabel>
						<Input
							placeholder=""
							colorScheme="green"
							type="password"
							size={'lg'}
							bg={'white'}
						/>
					</FormControl>
					<Button className="self-end">Save</Button>
				</div>
			</div>
		</UserSectionLayout>
	);
};

const LogoutIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className="w-10 h-10 text-neutral-400"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
		/>
	</svg>
);

// const ConfirmedIcon = () => (
// 	<svg
// 		xmlns="http://www.w3.org/2000/svg"
// 		fill="none"
// 		viewBox="0 0 24 24"
// 		stroke-width="1.5"
// 		stroke="currentColor"
// 		className="w-6 h-6"
// 	>
// 		<path
// 			stroke-linecap="round"
// 			stroke-linejoin="round"
// 			d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
// 		/>
// 	</svg>
// );
