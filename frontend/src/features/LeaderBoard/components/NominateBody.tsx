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
import { Button } from '../../../components';
export const NominateBody = (props: {
	description: string;
	embed: string;
	onDescriptionChange: (desc: string) => void;
	onEmbedChange: (embed: string) => void;
}) => {
	const { onClose, onOpen, isOpen } = useDisclosure();
	return (
		<div className="w-full h-fit flex flex-col gap-6">
			<div className="flex flex-col items-start gap-2">
				<div className="font-bold text-2xl">Why did they get nominated?</div>
				<textarea
					className="w-full bg-transparent border-2 border-black rounded-lg min-h-[9rem] placeholder:text-black placeholder:opacity-50 p-4"
					value={props.description}
					placeholder="Tell us why you think this person should be nominated!"
					onChange={(e) => props.onDescriptionChange(e.target.value)}
				/>
			</div>
			<div className="flex flex-col items-start gap-2">
				<div className="font-bold text-2xl">
					Embed Link{' '}
					<span
						className="font-normal text-xs select-none cursor-pointer underline"
						onClick={onOpen}
					>
						what is this{' '}
						<Modal isOpen={isOpen} onClose={onClose} isCentered>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>About Embeds</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<p>
										Embeds are a way to display content from other websites on
										your own website.
									</p>
									<p>
										For example, if you want to embed a YouTube video, you can
										copy the embed link from the video and paste it here.
									</p>
									<p>
										Here's a link to a tutorial on how to embed a youtube video
									</p>
									<iframe
										width="100%"
										height="220"
										src="https://www.youtube.com/embed/lJIrF4YjHfQ"
										title="YouTube video player"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									/>
								</ModalBody>

								<ModalFooter>
									<Button mr={3} onClick={onClose}>
										Close
									</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
						<InfoIcon />
					</span>
				</div>
				<input
					className="border-2 bg-transparent rounded-lg p-2 w-full border-black"
					type="text"
					value={props.embed}
					onChange={(e) => {
						props.onEmbedChange(e.target.value);
					}}
				/>
				<div
					dangerouslySetInnerHTML={{ __html: props.embed }}
					className="flex justify-center items-center max-h-96 overflow-hidden self-center"
				></div>
			</div>
		</div>
	);
};

const InfoIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-3 h-3 inline"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
		/>
	</svg>
);
