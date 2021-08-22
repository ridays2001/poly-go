import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Slider from 'react-slick';
import Helmet from 'react-helmet';

const IndexPage = () => {
	return (
		<Layout>
			{/* Import css for carousal. */}
			<Helmet>
				<title>Home | Poly-Go</title>
				<link
					rel='stylesheet'
					type='text/css'
					href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
				/>
				<link
					rel='stylesheet'
					type='text/css'
					href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
				/>
			</Helmet>

			{/* The hero section */}
			<main className='grid' style={{ height: '95vh' }}>
				{/* Full size hero image */}
				<StaticImage
					alt='Hero Image'
					src='../images/home.jpg'
					placeholder='dominantColor'
					style={{
						gridArea: '1/1'
					}}
					layout='fullWidth'
					aspectRatio={3 / 1}
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
							<h1 className='font-bold text-6xl'>Create Change. Reduce Plastic Waste.</h1>
							<p className='text-center'>Learn More.</p>
						</div>
						<Button>
							<Link className='block px-12 font-semibold text-xl' to='/help'>
								Help
							</Link>
						</Button>
					</div>
				</div>
			</main>

			<div className='bg-grey' style={{ height: '100vh' }}>
				<div className='container h-full mx-auto flex flex-col flex-wrap justify-around items-center'>
					{/* Container of logo and text */}
					<div className='w-full'>
						{/* Outer container for logo to break lines */}
						<div className='w-full'>
							{/* Inner container for logo to limit width */}
							<div className='w-1/6 mx-auto'>
								<StaticImage
									src='../images/Logo.svg'
									alt='Logo'
									placeholder='dominantColor'
									layout='fullWidth'
									aspectRatio={1 / 1}
									formats={['auto', 'webp']}
								/>
							</div>
						</div>
						{/* Text container */}
						<div className='w-full flex justify-center font-bold text-6xl'>
							<span>
								What is <span className='text-primary'> Poly-Go</span>?
							</span>
						</div>
					</div>

					<div className='w-1/2 text-center text-2xl'>
						Poly-Go is a Non-Profit Organization started by young minds to create consciousness amongst
						people regarding environmental concerns.
					</div>

					{/* Empty container for even spacing. */}
					<div className='w-full'></div>
				</div>
			</div>

			<div className='bg-grey' style={{ height: '100vh' }}>
				<div className='container h-full mx-auto flex flex-col flex-wrap justify-evenly items-center'>
					<div className='w-full text-6xl font-bold text-primary text-center'>
						Effects of Plastic Pollution
					</div>
					<div className='w-full'>
						<Slider
							speed={500}
							slidesToScroll={1}
							slidesToShow={1}
							autoplaySpeed={5000}
							easing='in-out'
							dots
							infinite
							autoplay
							lazyLoad
							style={{ cursor: 'grab' }}
						>
							<div>
								<div className='w-1/3 mx-auto -mb-4'>
									<StaticImage
										alt='Microplastics'
										src='../images/mp-slide.jpg'
										placeholder='dominantColor'
										layout='fullWidth'
										aspectRatio={1 / 1}
										formats={['auto', 'webp']}
										className='rounded-lg shadow-lg'
									/>
									<Link to='/microplastics'>
										<div
											className='bg-white py-4 px-4 bg-opacity-80 rounded-b-lg'
											style={{ transform: 'translateY(-100%)' }}
										>
											<span className='text-primary text-3xl font-medium block'>
												Microplastics
											</span>
											Small, toxic plastic pieces that are harmful to the environment and aquatic
											life... read more
										</div>
									</Link>
								</div>
							</div>
							<div>
								<div className='w-1/3 mx-auto -mb-4'>
									<StaticImage
										alt='Waste Reduction'
										src='../images/waste-slide.jpg'
										placeholder='dominantColor'
										layout='fullWidth'
										aspectRatio={1 / 1}
										formats={['auto', 'webp']}
										className='rounded-lg shadow-lg'
									/>
									<Link to='/reducing-waste'>
										<div
											className='bg-white py-4 px-4 bg-opacity-80 rounded-b-lg'
											style={{ transform: 'translateY(-100%)' }}
										>
											<span className='text-primary text-3xl font-medium block'>
												Waste Reduction
											</span>
											Scientists are creating solutions for managing plastic waste in oceans and
											wildlife... read more
										</div>
									</Link>
								</div>
							</div>
							<div>
								<div className='w-1/3 mx-auto -mb-4'>
									<StaticImage
										alt='Health Effects'
										src='../images/health-slide.jpg'
										placeholder='dominantColor'
										layout='fullWidth'
										aspectRatio={1 / 1}
										formats={['auto', 'webp']}
										className='rounded-lg shadow-lg'
									/>
									<Link to='/health-effects'>
										<div
											className='bg-white py-4 px-4 bg-opacity-80 rounded-b-lg'
											style={{ transform: 'translateY(-100%)' }}
										>
											<span className='text-primary text-3xl font-medium block'>
												Human Effects
											</span>
											Plastics found in digestive tracts had harmful effects on humans... read
											more
										</div>
									</Link>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
