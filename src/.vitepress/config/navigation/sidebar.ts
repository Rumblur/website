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
					text: "Генерация мира",
					link: "/faq/world-generation/",
				},
				{
					text: "Техническая информация",
					link: "/faq/tech-info/",
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