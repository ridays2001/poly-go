import React from 'react';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import Button from '../components/Button';
import { StaticImage } from 'gatsby-plugin-image';

const ReducingWastePage = () => (
	<Layout page='rw'>
		<Helmet>
			<title>Reducing Waste | Poly-Go</title>
		</Helmet>
		{/* The hero section */}
		<main className='grid' style={{ height: '95vh' }}>
			{/* Full size hero image */}
			<StaticImage
				alt='Hero Image'
				src='../images/rw.jpg'
				placeholder='dominantColor'
				style={{
					gridArea: '1/1'
				}}
				layout='fullWidth'
				aspectRatio={2 / 1}
				formats={['auto', 'webp']}
				className='opacity-70'
			/>
			{/* Hero text container */}
			<div
				style={{
					gridArea: '1/1',
					position: 'relative',
					placeItems: 'center'
				}}
				className='mx-auto'
			>
				{/* Use flexbox for alignment. */}
				<div className='flex flex-col flex-wrap justify-evenly items-center w-full h-full'>
					<div>
						<h1 className='font-bold text-6xl'>Reducing Waste</h1>
					</div>
					<Button
						onClick={() => {
							if (typeof window !== undefined) {
								window.scrollBy({ top: window.innerHeight });
							}
						}}
					>
						Learn More
					</Button>
				</div>
			</div>
		</main>
	</Layout>
);

export default ReducingWastePage;
