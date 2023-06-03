export const PageText = (props: {
	type: 'login' | 'signup';
	onClick?: () => void;
}) => {
	return (
		<div className="h-full pt-40 text-white flex flex-col items-start gap-4 w-2/5">
			<div className="font-black text-5xl">
				{props.type === 'login' ? (
					<>
						Welcome back!
						<br />
						Ready to do some good?
					</>
				) : (
					'Join one a community of people that rewards good deeds in society'
				)}
			</div>
			<div
				className={`font-black text-[4.8125rem] leading-none font-[montserrat] select-none ${
					props.type === 'login' ? 'text-[#34BC8C]' : 'text-[#BB5151]'
				}`}
			>
				The people's
				<br />
				daily award
			</div>
			<div className="font-[montserrat] text-[1.4375rem]">
				{props.type === 'login' ? (
					<>
						Not a member yet?{' '}
						<span className="cursor-pointer hover:underline font-medium">
							Signup
						</span>
					</>
				) : (
					<>
						Already a member?
						<span className="cursor-pointer hover:underline font-medium">
							Login
						</span>
					</>
				)}
			</div>
		</div>
	);
};
