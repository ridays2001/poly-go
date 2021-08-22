import React from 'react';

const Button = ({ children, onClick }) => {
	return (
		<button
			className='bg-primary duration-300 transition-colors hover:bg-highlight text-white py-3 px-6 rounded-full text-center block text-base'
			type='button'
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
