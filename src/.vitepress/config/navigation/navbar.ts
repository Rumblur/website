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
		text: "Правила",
		link: "/rules/",
		activeMatch: "/rules/",
	},
	{
		text: "Карта",
		link: "https://maps.rumblur.by",
	},
]

export default nav