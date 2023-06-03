import { Button } from '../../../components';
import {
	FormControl,
	FormLabel,
	Image,
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
import avatar from '../../../assets/avatar.png';
import { useState } from 'react';
export const NominateHeader = (props: {
	onClose?: () => void;
	name: string;
	onNameChange: (name: string) => void;
	img: string;
	onImgChange: (img: string) => void;
	nominator: string;
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [temImgLink, setTempImgLink] = useState<string>(props.img);
	return (
		<div className="flex flex-row  justify-between w-full items-start  ">
			<div className="flex flex-row justify-start items-center gap-4">
				<div className="w-fit h-fit relative rounded-2xl overflow-hidden active:scale-95">
					<Image
						src={props.img ? props.img : avatar}
						boxSize={'5.4375rem'}
						objectFit={'cover'}
					/>
					<div
						onClick={onOpen}
						className="w-[5.4375rem] h-[5.4375rem] bg-black bg-opacity-30 opacity-0 hover:opacity-100 absolute top-0 left-0 text-white text-xs flex justify-center items-center cursor-pointer select-none p-3 text-center font-bold"
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
										props.onImgChange(temImgLink);
										onClose();
									}}
								>
									Save
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</div>
				<div className="flex flex-col justify-center items-start">
					<input
						type="text"
						className="text-[1.6rem] font-bold bg-transparent rounded-lg w-fit placeholder:text-black placeholder:opacity-50"
						placeholder="Full Name"
						value={props.name}
						onChange={(e) => props.onNameChange(e.target.value)}
					/>
					<div className="text-lg font-normal]">
						nominated by {props.nominator}
					</div>
				</div>
			</div>

			<Button
				onClick={props.onClose}
				rounded={'full'}
				height={'3.125rem'}
				w={'3.125rem'}
				bg={'#FF4848'}
			>
				<XIcon />
			</Button>
		</div>
	);
};

const XIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className="w-9 h-9"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);
