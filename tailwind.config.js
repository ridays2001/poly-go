module.exports = {
	purge: ['./src/**/*.{js,jsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#043240',
				highlight: '#064558',
				grey: {
					dark: '#4B727E',
					light: '#CFDBE0',
					DEFAULT: '#CFDBE0'
				},
				gray: {
					350: 'rgba(196, 196, 196, 0.45)'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
