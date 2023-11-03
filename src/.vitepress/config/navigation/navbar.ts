import type { DefaultTheme } from "vitepress"

const nav: DefaultTheme.NavItem[] = [
	{
		text: "FAQ",
		link: "/faq/getting-started/",
		activeMatch: "/faq/",
	},
	{
		text: "Новости",
		link: "/news/",
		activeMatch: "/news/",
	},
	{
		text: "Поддержать проект",
		link: "/donate/",
		activeMatch: "/donate/",
	},
	{
		text: "Карта",
		link: "https://maps.rumblur.by",
	},
]

export default nav