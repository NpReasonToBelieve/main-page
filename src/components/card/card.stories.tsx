import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Card",
	component: Card,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
// 	title: "Simple Card",
// 	image: {
// 		src: "../../img/wolf.jpeg",
// 		alt: "wolf",
// 	},
// 	children: <div>Some content for all to seeeeeeee</div>,
// 	footerContent: [
// 		<div>hello im the footer</div>,
// 		<button className="button is-primary">And Im a button</button>,
// 	],
// };
