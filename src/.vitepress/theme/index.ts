// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme"

// Import Stylus files
import "./styles/base.styl"

// Import Global plugins
import "element-plus/theme-chalk/dark/css-vars.css"

import { VueQueryPlugin } from "@tanstack/vue-query"

import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"

import Layout from "./Layout.vue"

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(VueQueryPlugin)
		enhanceAppWithTabs(app)
	},
	Layout,
}