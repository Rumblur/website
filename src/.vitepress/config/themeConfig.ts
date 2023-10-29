import type { DefaultTheme } from "vitepress"

import nav from "./navigation/navbar"
import sidebar from "./navigation/sidebar"

const themeConfig: DefaultTheme.Config = {
	logo: {
		src: "/heart.webp",
		width: 24,
		height: 24,
	},

	nav,
	sidebar,

	outline: {
		label: 'На этой странице',
		level: 'deep',
	},

	returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Тема',
    langMenuLabel: 'Изменить язык',

	socialLinks: [
		{
			icon: "discord",
			link: "https://discord.gg/rumblur",
			ariaLabel: "Discord Server",
		},
		{
			icon: {
				svg: '<svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>'
			},
			link: "https://t.me/rumblur_chat",
			ariaLabel: "Telegram Group"
		},
		{
			icon: {
				svg: '<svg fill="none" height="48" viewBox="0 0 49 48" width="49" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.87 3.37C.5 6.75.5 12.17.5 23.04v1.92c0 10.86 0 16.3 3.37 19.67C7.25 48 12.67 48 23.54 48h1.92c10.86 0 16.3 0 19.67-3.37 3.37-3.38 3.37-8.8 3.37-19.67v-1.92c0-10.86 0-16.3-3.37-19.67C41.75 0 36.33 0 25.46 0h-1.92C12.68 0 7.24 0 3.87 3.37zm4.74 11.3c.25 12.48 6.82 20 17.65 20h.63v-7.15c3.95.4 6.89 3.35 8.09 7.15h5.69a15.8 15.8 0 0 0-8.03-10.03c2.48-1.49 6-5.09 6.83-9.97h-5.18c-1.08 3.97-4.31 7.57-7.4 7.91v-7.91h-5.26v13.85c-3.2-.8-7.37-4.68-7.54-13.85z" fill="currentColor" fill-rule="evenodd"/></svg>'
			},
			link: "https://vk.com/rumblur",
			ariaLabel: "VK Group"
		}
	],

	editLink: {
		pattern: 'https://github.com/rumblur/website/edit/main/website/:path',
		text: 'Предложить изменения на этой странице',
	},

	lastUpdated: {
		text: 'Последнее обновление',
		formatOptions: {
			forceLocale: true,
			dateStyle: "long",
			timeStyle: "short",
		},
	},

	search: {
		provider: 'local',
		options: {
			
		}
	},

	docFooter: {
		prev: 'Предыдущая страница',
		next: 'Следующая страница',
	},

	footer: {
		message: 'Содержание и материалы Minecraft являются товарными знаками и объектами авторского права компании Mojang AB. Все права защищены. Rumblur не связан с Mojang AB.',
		copyright: `Copyright © 2020 - ${new Date().getFullYear()} Rumblur Classic Team`,
	},
}

export default themeConfig