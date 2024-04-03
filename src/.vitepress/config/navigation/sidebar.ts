import type { DefaultTheme } from "vitepress"

const sidebar: DefaultTheme.SidebarMulti = {
	"/faq/": defaultSidebar(),
    "/misc/": defaultSidebar(),
    "/news/": defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Информация",
			items: [
				{
					text: "Что такое Rumblur?",
					link: "/faq/about-rumblur/",
				},
				{
					text: "Частые вопросы",
					link: "/faq/",
				},
				{
					text: "Гайд для новичков",
					link: "/faq/getting-started/",
				},
				{
					text: "Для контентмейкеров",
					link: "/faq/content-makers/",
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
				/* {
					text: "Ресурспак",
					link: "/faq/resourcepack/",
				}, */
			],
		},
        {
			text: "Остальное",
			items: [
				/* {
					text: "Администрация",
					link: "/misc/administration/",
				}, */
				{
					text: "Доска почёта",
					link: "/misc/hall-of-fame/",
				},
				{
					text: "Награды",
					link: "/misc/rewards/",
				},
			],
		},
	]
}

export default sidebar