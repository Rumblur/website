<script setup lang="ts">
defineProps<{ title: string; description?: string; dir?: string }>()
</script>

<template>
	<div
		tw="w-full h-full bg-white flex flex-col"
		style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.90))"
	>
		<div tw="p-10 w-full min-h-0 grow flex flex-col items-center justify-between">
			<div tw="w-full flex justify-between items-center text-4xl font-medium">
				<div tw="flex items-center">
                    <img src="https://rumblur.by/img/heart.png" width="48" height="48">
					<div tw="text-slate-50 ml-2 mt-1 font-semibold">
						Rumblur
					</div>
				</div>
				<div v-if="dir" tw="flex items-center text-slate-200">
					<div v-if="dir" tw="text-4xl font-semibold mr-2" v-html="dir" />
					<svg v-if="dir === 'FAQ'" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18,15H6L2,19V3A1,1 0 0,1 3,2H18A1,1 0 0,1 19,3V14A1,1 0 0,1 18,15M23,9V23L19,19H8A1,1 0 0,1 7,18V17H21V8H22A1,1 0 0,1 23,9M8.19,4C7.32,4 6.62,4.2 6.08,4.59C5.56,5 5.3,5.57 5.31,6.36L5.32,6.39H7.25C7.26,6.09 7.35,5.86 7.53,5.7C7.71,5.55 7.93,5.47 8.19,5.47C8.5,5.47 8.76,5.57 8.94,5.75C9.12,5.94 9.2,6.2 9.2,6.5C9.2,6.82 9.13,7.09 8.97,7.32C8.83,7.55 8.62,7.75 8.36,7.91C7.85,8.25 7.5,8.55 7.31,8.82C7.11,9.08 7,9.5 7,10H9C9,9.69 9.04,9.44 9.13,9.26C9.22,9.08 9.39,8.9 9.64,8.74C10.09,8.5 10.46,8.21 10.75,7.81C11.04,7.41 11.19,7 11.19,6.5C11.19,5.74 10.92,5.13 10.38,4.68C9.85,4.23 9.12,4 8.19,4M7,11V13H9V11H7M13,13H15V11H13V13M13,4V10H15V4H13Z" /></svg>
                    <svg v-else-if="dir === 'News'" height="48" width="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H20V5A1,1 0 0,0 19,4A1,1 0 0,0 18,5V9L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H13A2,2 0 0,0 15,20M9,6H14V8H9V6M9,10H14V12H9V10M9,14H14V16H9V14Z" /></svg>
                </div>
			</div>
			<div tw="w-full pr-56 flex flex-col items-start justify-end">
				<div tw="text-6xl font-bold text-slate-50 leading-normal" v-html="title" />
				<div v-if="description" tw="mt-2 text-4xl text-slate-200" v-html="description" />
			</div>
		</div>
		<div tw="shrink-0 h-2 w-full flex" style="background-color: #ff8916;" />
	</div>
</template>