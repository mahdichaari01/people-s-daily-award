import React, { PropsWithChildren, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import Shadow from './shadow.png';
//create a scrollable div with padding
export function ScrollableBox(
	props: PropsWithChildren<{
		className?: string;
		onClick?: React.MouseEventHandler;
	}>
) {
	const root = useRef<HTMLDivElement | null>(null);
	const top = useRef<HTMLDivElement | null>(null);
	const bottom = useRef<HTMLDivElement | null>(null);
	const options = {
		root: root.current,
		rootMargin: '0px',
	};

	const TopEntry = useIntersectionObserver(top, options);
	const BottomEntry = useIntersectionObserver(bottom, options);
	return (
		<div
			onClick={props.onClick}
			ref={root}
			className={`relative overflow-hidden ${props.className}`}
		>
			<div
				className={`z-10 shadows topShadow ${
					TopEntry === undefined || TopEntry?.isIntersecting ? 'hide' : 'show '
				}`}
				aria-hidden
				style={{ backgroundImage: `url(${Shadow})` }}
			></div>
			<div className="overflow-y-scroll overflow-x-hidden px-1 cleanScrollbar h-full w-full">
				<div ref={top} className="h-[.0625rem]"></div>
				{props.children}
				<div ref={bottom} className="h-[.0625rem]"></div>
			</div>

			<div
				className={`z-10 shadows  bottomShadow
				${BottomEntry === undefined || BottomEntry.isIntersecting ? 'hide' : 'show '} `}
				style={{ backgroundImage: `url(${Shadow})` }}
				aria-hidden
			></div>
		</div>
	);
}
