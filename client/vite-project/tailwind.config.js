/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"custom-gray": "rgb(113, 113, 113)",
			},
		},
	},
	plugins: [],
};
