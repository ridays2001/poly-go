import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';

const MicroplasticsPage = () => (
	<Layout page='mp'>
		{/* The hero section */}
		<main className='grid' style={{ height: '95vh' }}>
			{/* Full size hero image */}
			<StaticImage
				alt='Hero Image'
				src='../images/mp.jpg'
				placeholder='dominantColor'
				style={{
					gridArea: '1/1'
				}}
				layout='fullWidth'
				aspectRatio={2 / 1}
				formats={['auto', 'webp']}
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
						<h1 className='font-bold text-6xl'>Microplastics</h1>
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

		<div className='bg-white' style={{ height: '100vh' }}>
			<div className='container mx-auto h-full'>
				<h1 className='mt-20 font-bold text-6xl text-primary'>Microplastics</h1>
				<p className='mt-16 w-3/4 font-medium text-2xl'>
					Microplastics, for starters, are tiny pieces of plastics less than five millimeters long which can
					be harmful to our ocean and aquatic life. They cause pollution by entering natural ecosystems from a
					variety of sources, including cosmetics, clothing, and industrial processes.
				</p>
				<div className='mt-16 w-1/2 mx-auto'>
					<StaticImage
						alt='Microplastic Image'
						src='../images/mp-img1.webp'
						placeholder='dominantColor'
						layout='fullWidth'
						formats={['auto', 'webp']}
						className='rounded-lg shadow-lg'
					/>
				</div>
			</div>
		</div>

		<div className='bg-primary pb-16'>
			<div className='container mx-auto'>
				<div className='pt-24 w-3/4 mx-auto'>
					<StaticImage
						alt='Microplastic Image'
						src='../images/mp-img2.jpg'
						placeholder='dominantColor'
						layout='fullWidth'
						aspectRatio={3 / 1}
						transformOptions={{ fit: 'cover', cropFocus: 'entropy' }}
						formats={['auto', 'webp']}
						className='rounded-lg shadow-lg'
					/>

					<h1 className='mt-12 text-white text-opacity-70 text-6xl font-bold'>The Big Problem!</h1>
					<h2 className='mt-10 text-grey font-medium text-2xl'>How did we end up with this situation?</h2>
					<p className='mt-4 text-grey'>
						Since mass production of plastic began 60 years ago, humankind has produced over eight billion
						metric tons of plastic. Just 9% has been recycled, another 12% incinerated. The rest, almost 80%
						of the plastic ever created, amasses in landfill sites or ends up in the natural environment,
						eventually finding its way into rivers, streams, and oceans. Plastic is accumulating in our
						oceans at an alarming rate – the largest concentration of ocean plastic waste, the Great Pacific
						Garbage Patch located between California and Hawaii, is estimated to measure three times the
						size of France, while heart-breaking images of animals entangled in plastic are shockingly
						common.
					</p>

					<h2 className='mt-10 text-grey font-medium text-2xl'>What are the effects of this?</h2>
					<p className='mt-4 text-grey'>
						Plastic pollution has become a visible issue – but one of the most intractable forms of ocean
						pollution is harder to see: microplastics. Plastic does not biodegrade but breaks down into ever
						smaller pieces, resulting in microplastics. Smaller than 5mm in dimension, much of the hundreds
						of millions of tons of plastic waste in our oceans is made up of microplastics. Experiments show
						that microplastics damage aquatic creatures, as well as turtles and birds: They block digestive
						tracts, diminish the urge to eat, and alter feeding behavior, all of which reduce growth and
						reproductive output. Their stomachs are stuffed with plastic, some species starve and die. In
						addition to mechanical effects, microplastics have chemical impacts, because free-floating
						pollutants that wash off the land and into our seas—such as polychlorinated biphenyls (PCBs),
						polycyclic aromatic hydrocarbons (PAHs), and heavy metals—tend to adhere to their surfaces.
					</p>
				</div>
			</div>
		</div>
	</Layout>
);

export default MicroplasticsPage;
