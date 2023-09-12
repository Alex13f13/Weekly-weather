/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			manifest: {
				name: "Weekly Weather",
				short_name: "Weekly Weather",
				display: "standalone",
				description: "Weekly Weather App",
				icons: [],
				theme_color: "#fff",
				background_color: "#fff",
				scope: "/Weekly-weather/",
				start_url: "https://alex13f13.github.io/Weekly-weather/",
			},
		}),
	],
	base: "/Weekly-weather/",
	test: {
		environment: "jsdom",
		globals: true,
	},
});
