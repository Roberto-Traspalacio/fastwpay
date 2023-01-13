// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./modules/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {},
		extend: {
			fontFamily: {
				ubuntu: ["Ubuntu"],
			},
			colors: {
				primary: { blue: "#295BB7", yellow: "#F8BD4F" },
				secondary: { green: "#1FB81F", yellow: "#F8C86F", red: "#E65C4F" },
				text: { 1: "#353C46", 2: "#626263", 3: '1A71EE', 4: '#353C46' },
				background: { 1: "#F9FCFF", 2: "#F0F6FF", 3: "#D7E1F3", 4: '#E8E8E8', 5: '#5983fb' },
			},
			screens: {
				esm: "360px",
				xsm: "375px",
				sm: "601px",
			},
		},
	},
	plugins: [],
};
