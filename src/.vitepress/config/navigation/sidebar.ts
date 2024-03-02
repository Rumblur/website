import type { DefaultTheme } from "vitepress"

const sidebar: DefaultTheme.SidebarMulti = {
	"/faq/": defaultSidebar(),
    "/misc/": defaultSidebar(),
    "/news/": defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Описание",
			items: [
				{
					text: "Что такое Rumblur?",
					link: "/faq/getting-started/",
				},
				{
					text: "Техническая информация",
					link: "/faq/tech-info/",
				},
			],
		},
		{
			text: "Фишки сервера",
			items: [
				{
					text: "Генерация мира",
					link: "/faq/world-generation/",
				},
				{
					text: "Куча достижений",
					link: "/faq/advancements/",
				},
				{
					text: "Ресурспак",
					link: "/faq/resourcepack/",
				},
			],
		},
        {
			text: "Остальное",
			items: [
				{
					text: "Доска почёта",
					link: "/misc/hall-of-fame/",
				},
			],
		},
	]
}

export default sidebar