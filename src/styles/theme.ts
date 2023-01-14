import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "Sofia Sans, sans-serif",
	},
	palette: {
		primary: {
			main: "#9DD6FC",
			light: "#b1defd",
			dark: "#7eabca",
			contrastText: "#2E3440",
		},
		secondary: {
			main: "#D17FF7",
			light: "#dfa5f9",
			dark: "#9259ad",
			contrastText: "#2E3440",
		},
		success: {
			light: "#e2faec",
			main: "#35df90",
			dark: "#007626",
		},
		warning: {
			light: "#fef3df",
			main: "#fab648",
			dark: "#e15000",
		},
		error: {
			light: "#f9e6e6",
			main: "#f47a61",
			dark: "#b1160d",
		},
		background: {
			default: "#2E3440",
			paper: "#434C5E",
		},
	},
});

export default theme;
