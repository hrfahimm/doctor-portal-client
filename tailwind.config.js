/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				doctortheme: {
					primary: "#0FCFEC",
					secondary: "#19D3AE",
					accent: "#3A4256",
					neutral: "#3D4451",
					"base-350": "##b91c1c",
					"base-100": "#ffffff",
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	// daisyui: {
	// 	themes: ["light", "dark", "cupcake"],
	// },
};

// REACT_APP_apiKey=AIzaSyAxtH0cJE_cjgZZCcZaNO2irelNdKgrU3M
// REACT_APP_authDomain=doctors-portal-l.firebaseapp.com
// REACT_APP_projectId=doctors-portal-l
// REACT_APP_storageBucket=doctors-portal-l.appspot.com
// REACT_APP_messagingSenderId=703258356925
// REACT_APP_appId=1:703258356925:web:bde4093e39695aaf899bd4
// REACT_APP_measurementId=G-V4EP837QWN
