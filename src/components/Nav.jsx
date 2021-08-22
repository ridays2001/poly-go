import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Nav = ({ active }) => (
	<header className='flex w-full sticky top-0 justify-between bg-grey-light z-10' id='head'>
		<div className='w-12'>
			<Link to='/'>
				<StaticImage
					alt='logo'
					src='../images/icon.png'
					formats={['auto', 'webp']}
					placeholder='dominantColor'
					aspectRatio={1 / 1}
					layout='fullWidth'
				/>
			</Link>
		</div>
		<nav className='flex w-3/5 justify-self-end justify-between items-center font-medium'>
			<Link
				to='/microplastics'
				className={`px-8 rounded-full py-1 ${
					active === 'mp' ? 'bg-primary text-white' : 'hover:bg-grey-dark hover:text-white'
				}`}
			>
				Microplastics
			</Link>
			<Link
				to='/health-effects'
				className={`px-8 rounded-full py-1 ${
					active === 'he' ? 'bg-primary text-white' : 'hover:bg-grey-dark hover:text-white'
				}`}
			>
				Health Effects
			</Link>
			<Link
				to='/reducing-waste'
				className={`px-8 rounded-full py-1 ${
					active === 'rw' ? 'bg-primary text-white' : 'hover:bg-grey-dark hover:text-white'
				}`}
			>
				Reducing Waste
			</Link>
			<Link
				to='/help'
				className={`px-8 rounded-full py-1 ${
					active === 'help' ? 'bg-primary text-white' : 'hover:bg-grey-dark hover:text-white'
				}`}
			>
				Help
			</Link>
		</nav>
	</header>
);

export default Nav;
