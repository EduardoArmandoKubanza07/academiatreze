import React, { ReactNode } from 'react';

interface WrapperContentProps {
	children: ReactNode;
	className?: string;
}

export const WrapperContent = ({
	children,
	className = '',
}: WrapperContentProps) => {
	return (
		<div
			className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
		>
			{children}
		</div>
	);
};
