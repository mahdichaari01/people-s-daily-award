export const NominationBody = (props: {
	description: string;
	embed: string;
}) => (
	<div className="w-full h-fit flex flex-col gap-6">
		<div className="flex flex-col items-start gap-2">
			<div className="font-bold text-2xl">Why did they get nominated?</div>
			<div>{props.description}</div>
		</div>
		<div
			dangerouslySetInnerHTML={{ __html: props.embed }}
			className="flex justify-center items-center max-h-96 overflow-hidden"
		></div>
	</div>
);
