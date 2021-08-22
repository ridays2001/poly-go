const desc = 'Site description.';

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Poly-Go'
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Poppins:400,400i,500,600,700']
				}
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Poly-Go',
				short_name: 'Poly-Go',
				description: desc,
				start_url: '/',
				background_color: '#043240',
				theme_color: '#043240',
				icon: 'src/images/icon.png',
				include_favicon: true,
				cache_busting_mode: 'query',
				crossOrigin: `use-credentials`,
				display: 'minimal-ui'
			}
		}
	]
};
