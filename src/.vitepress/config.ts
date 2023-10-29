import process from "node:process"
import { URL, fileURLToPath } from "node:url"
import { defineConfig, loadEnv } from "vitepress"
import ElementPlus from "unplugin-element-plus/vite"

import markdownConfig from "./config/markdownConfig"

// For use with loading Markdown plugins
import themeConfig from "./config/themeConfig"

// Theme related config
import headConfig from "./config/headConfig" // Provides how to generate Meta head tags

import generateFeed from "./config/hooks/generateFeed" // Allows generation of RSS feed
import generateMeta from "./config/hooks/generateMeta"

const title = "Rumblur"
const description = "Ламповый сервер Minecraft."

const env = loadEnv("", process.cwd())
const hostname: string = env.VITE_HOSTNAME || "http://86.57.183.214:4173"

export default defineConfig({
	outDir: "../dist",
	lastUpdated: true,
	cleanUrls: true,
	title,
	description,
	sitemap: {
		hostname,
	},
	head: headConfig,
	markdown: markdownConfig,
	themeConfig,
	transformHead: async (context) => generateMeta(context, hostname),
	buildEnd: async (context) => {
		generateFeed(context, hostname)
	},
	vite: {
		resolve: {
			alias: [
				{
					find: /^.*VPSwitchAppearance\.vue$/,
					replacement: fileURLToPath(
						new URL("./theme/components/CustomSwitchAppearance.vue", import.meta.url),
					),
				},
			],
		},
		plugins: [ElementPlus({})],
		ssr: {
			noExternal: ["element-plus"],
		},
	},
})