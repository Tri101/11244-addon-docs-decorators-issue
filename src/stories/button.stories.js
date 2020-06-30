import MyButton from './Button.vue';

const templateDecorator = () => ({
	template: `
<div style="background-color: gray;"><story/></div>
	`
});

export default {
	title: 'Addon/Controls',
	component: MyButton,
	decorators: [
		templateDecorator
	],
	argTypes: {
		color: { control: { type: 'color' } },
	},
};

const ButtonStory = (args) => ({
	props: Object.keys(args),
	components: { MyButton },
	template: '<my-button :color="color" :rounded="rounded">{{label}}</my-button>',
});

export const Rounded = ButtonStory.bind({});
Rounded.args = {
	rounded: true,
	color: '#f00',
	label: 'A Button with rounded edges',
};

export const Square = ButtonStory.bind({});
Square.args = {
	rounded: false,
	color: '#00f',
	label: 'A Button with square edges',
};