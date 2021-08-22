import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';

const HealthEffectsPage = () => (
	<Layout page='he'>
		<Helmet>
			<title>Health Effects | Poly-Go</title>
		</Helmet>
		<main className='grid' style={{ height: '95vh' }}>
			{/* Full size hero image */}
			<StaticImage
				alt='Hero Image'
				src='../images/he.jpg'
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
						<h1 className='font-bold text-6xl text-white'>Health Effects</h1>
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

		<div className='bg-grey pb-20'>
			<div className='container mx-auto h-full'>
				<h1 className='pt-20 text-primary text-center text-6xl font-bold'>Health Effects of Plastics</h1>
				<div className='flex flex-wrap justify-evenly text-center items-center mt-12'>
					<table className='w-full'>
						<thead className='bg-primary py-4 text-white font-bold text-2xl'>
							<th className='py-4 w-1/4'>Type of Plastic</th>
							<th className='py-4 w-1/3'>Common Uses</th>
							<th className='py-4 w-1/3'>Health Effects</th>
						</thead>
						<tr className='bg-gray-350'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Polyvinyl Chloride (#3PVC)</span>
							</td>
							<td className='py-4'>
								Food packaging, plastic wrap, containers for toiletries, cosmetics, crib bumpers, floor
								tiles, pacifiers, shower curtains, toys, water pipes, garden hoses, auto upholstery,
								inflatable swimming pools.
							</td>
							<td className='py-4'>
								Can cause cancer, birth defects, genetic changes, chronic bronchitis, ulcers, skin
								diseases, deafness, vision failure, indigestion, and liver dysfunction.
							</td>
						</tr>
						<tr className='bg-white'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Phthalates (DEHP, DINP, and others)</span>
							</td>
							<td className='py-4'>
								Softened vinyl products manufactured with phthalates include vinyl clothing, emulsion
								paint, footwear, printing inks, non-mouthing toys, and children’s products, product
								packaging and food wrap, vinyl flooring, blood bags and tubing, IV containers and
								components, surgical gloves, breathing tubes, general-purpose labware, inhalation masks,
								many other medical devices.
							</td>
							<td className='py-4'>
								Endocrine disruption, linked to asthma, developmental and reproductive effects. Medical
								waste with PVC and phthalates is regularly incinerated causing public health effects
								from the release of dioxins and mercury, including cancer, birth defects, hormonal
								changes, declining sperm counts, infertility, endometriosis, and immune system
								impairment.
							</td>
						</tr>
						<tr className='bg-gray-350'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Polycarbonate, with Bisphenol A (#7)</span>
							</td>
							<td className='py-4'>Water bottles.</td>
							<td className='py-4'>
								Scientists have linked very low doses of bisphenol A exposure to cancers, impaired
								immune function, early onset of puberty, obesity, diabetes, and hyperactivity, among
								other problems
							</td>
						</tr>
						<tr className='bg-white'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Polystyrene</span>
							</td>
							<td className='py-4'>
								Many food containers for meats, fish, cheeses, yogurt, foam and clear clamshell
								containers, foam and rigid plates, clear bakery containers, packaging “peanuts”, foam
								packaging, audio cassette housings, CD cases, disposable cutlery, building insulation,
								flotation devices, ice buckets, wall tile, paints, serving trays, throw-away hot drink
								cups, toys.
							</td>
							<td className='py-4'>
								Can irritate the eyes, nose, and throat and can cause dizziness and unconsciousness.
								Migrates into food and stores in body fat. Elevated rates of lymphatic and hematopoietic
								cancers for workers.
							</td>
						</tr>
						<tr className='bg-gray-350'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Polyethylene (#1 PET)</span>
							</td>
							<td className='py-4'>
								Water and soda bottles, carpet fiber, chewing gum, coffee stirrers, drinking glasses,
								food containers and wrappers, heat-sealed plastic packaging, kitchenware, plastic bags,
								squeeze bottles, toys.
							</td>
							<td className='py-4'>Suspected human carcinogen</td>
						</tr>
						<tr className='bg-white'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Polyester</span>
							</td>
							<td className='py-4'>
								Bedding, clothing, disposable diapers, food packaging, tampons, upholstery.
							</td>
							<td className='py-4'>
								Can cause eye and respiratory tract irritation and acute skin rashes.
							</td>
						</tr>
						<tr className='bg-gray-350'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Urea-formaldehyde</span>
							</td>
							<td className='py-4'>Particleboard, plywood, building insulation, fabric finishes.</td>
							<td className='py-4'>
								Formaldehyde is a suspected carcinogen and has been shown to cause birth defects and
								genetic changes. Inhaling formaldehyde can cause cough, swelling of the throat, watery
								eyes, breathing problems, headaches, rashes, tiredness.
							</td>
						</tr>
						<tr className='bg-white'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Polyurethane Foam</span>
							</td>
							<td className='py-4'>Cushions, mattresses, pillows.</td>
							<td className='py-4'>
								Bronchitis, coughing, skin and eye problems. Can release toluene diisocyanate which can
								produce severe lung problems.
							</td>
						</tr>
						<tr className='bg-gray-350'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Acrylic</span>
							</td>
							<td className='py-4'>
								Clothing, blankets, carpets made from acrylic fibers, adhesives, contact lenses,
								dentures, floor waxes, food preparation equipment, disposable diapers, sanitary napkins,
								paints.
							</td>
							<td className='py-4'>
								Can cause breathing difficulties, vomiting, diarrhea, nausea, weakness, headache, and
								fatigue.
							</td>
						</tr>
						<tr className='bg-white'>
							<td className='py-4'>
								<span className='font-bold text-2xl'>Tetrafluoro-ethylene</span>
							</td>
							<td className='py-4'>
								Non-stick coating on cookware, clothes irons, ironing board covers, plumbing, and tools.
							</td>
							<td className='py-4'>
								Can irritate the eyes, nose, and throat and can cause breathing difficulties.
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</Layout>
);

export default HealthEffectsPage;
