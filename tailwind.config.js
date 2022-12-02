module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	important: '#root',
	theme: {
		extend: {
			colors: {
				primary: '#5f3df3'
			}
		}
	},
	corePlugins: {
		preflight: false
	},
	plugins: []
}
