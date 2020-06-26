const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.js'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-actions',
		'@storybook/addon-backgrounds',
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					include: path.resolve(__dirname, '../src/stories'),
					enforce: 'pre'
				}
			}
		},
		'@storybook/addon-toolbars'
	]
};
