export const globalArgTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			// array of plain string values or MenuItem shape (see below)
			items: ['light', 'dark']
		}
	}
};

const viewports = [
	{
		name: '1024x768 (minimum supported resolution)',
		styles: {
			width: '1024px',
			height: '768px'
		},
		type: 'desktop'
	}
];

export const parameters = {
	backgrounds: {
		default: 'twitter',
		values: [
			{ name: 'twitter', value: '#00aced' },
			{ name: 'facebook', value: '#3b5998' }
		]
	},
	viewport: {
		viewports
	}
};
