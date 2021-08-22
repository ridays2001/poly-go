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
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
