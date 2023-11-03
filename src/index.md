---
title: Главная
layout: home

hero:
  name: Rumblur
  text: Ламповый сервер Minecraft
  tagline: Отправьтесь в путешествие по неизведанному ванильному миру Minecraft.
  image:
    alt: Rumblur
    src: /img/icon.webp
  actions:
    - theme: brand
      text: Скопировать IP
    - theme: alt
      text: Правила
      link: /rules/

customMetaTitle: Rumblur

features:
  - title: Улучшенная генерация мира
    details: Сервер использует генерацию, отличную от ванильной, но близкой к ней, где будут встречаться различные интересные структуры и биомы.
    icon: <svg height="24" width="24" viewBox="0 0 24 24" fill="var(--vp-c-green-2)" xmlns="http://www.w3.org/2000/svg"><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H5M15.78,5H19V17.18C18.74,16.38 17.69,15.79 16.8,15.79H15.8V12.79A1,1 0 0,0 14.8,11.79H8.8V9.79H10.8A1,1 0 0,0 11.8,8.79V6.79H13.8C14.83,6.79 15.67,6 15.78,5M5,10.29L9.8,14.79V15.79C9.8,16.9 10.7,17.79 11.8,17.79V19H5V10.29Z" /></svg>
    link: /faq/world-generation
    linkText: Подробнее
  - title: Наличие модов
    details: Стало скучно играть в ванильный Minecraft? Тогда заходите к нам. Имеется множество модов, которые разнообразят ваш игровой процесс.
    icon: <svg height="24" width="24" viewBox="0 0 24 24" fill="var(--vp-c-indigo-2)" xmlns="http://www.w3.org/2000/svg"><title>puzzle-outline</title><path d="M22,13.5C22,15.26 20.7,16.72 19,16.96V20A2,2 0 0,1 17,22H13.2V21.7A2.7,2.7 0 0,0 10.5,19C9,19 7.8,20.21 7.8,21.7V22H4A2,2 0 0,1 2,20V16.2H2.3C3.79,16.2 5,15 5,13.5C5,12 3.79,10.8 2.3,10.8H2V7A2,2 0 0,1 4,5H7.04C7.28,3.3 8.74,2 10.5,2C12.26,2 13.72,3.3 13.96,5H17A2,2 0 0,1 19,7V10.04C20.7,10.28 22,11.74 22,13.5M17,15H18.5A1.5,1.5 0 0,0 20,13.5A1.5,1.5 0 0,0 18.5,12H17V7H12V5.5A1.5,1.5 0 0,0 10.5,4A1.5,1.5 0 0,0 9,5.5V7H4V9.12C5.76,9.8 7,11.5 7,13.5C7,15.5 5.75,17.2 4,17.88V20H6.12C6.8,18.25 8.5,17 10.5,17C12.5,17 14.2,18.25 14.88,20H17V15Z" /></svg>
  - title: Дружное коммьюнити
    details: Мы считаем, что наши игроки самые лучшие. Присоединяйтесь!
    icon: <svg height="24" width="24" viewBox="0 0 24 24" fill="var(--vp-c-yellow-2)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M13,9.94L14.06,11L15.12,9.94L16.18,11L17.24,9.94L15.12,7.82L13,9.94M8.88,9.94L9.94,11L11,9.94L8.88,7.82L6.76,9.94L7.82,11L8.88,9.94M12,17.5C14.33,17.5 16.31,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z" /></svg>
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://ely.by/services/skins-renderer?url=https%3A%2F%2Fely.by%2Fstorage%2Fskins%2F07fd96edfb852c514371b32f4745423d.png&scale=18.9&renderFace=1&v=2',
    name: 'artilapx',
    title: 'Основатель',
  },
  {
    avatar: 'https://crafthead.net/avatar/ac98aee2f60a4bd897e57717def8ed08',
    name: 'Xtimms',
    title: 'Сисадмин, владелец физсервера',
  },
  {
    avatar: 'https://crafthead.net/avatar/72d67267b3a34829882448fe63e736d0',
    name: 'BadCoder',
    title: 'Сисадмин',
  },
  {
    avatar: 'https://crafthead.net/avatar/3315d7c302ca4188bb46aeeb998f4d1d',
    name: 'Watewind',
    title: 'Строитель',
  },
  {
    avatar: 'https://ely.by/services/skins-renderer?url=https%3A%2F%2Fely.by%2Fstorage%2Fskins%2Fdbd556c54387245e95279af31ed24425.png&scale=18.9&renderFace=1&v=2',
    name: 'juliameow7',
    title: 'Строитель',
  },
  {
    avatar: 'https://crafthead.net/avatar/8667ba71b85a4004af54457a9734eed7',
    name: 'nanolook',
    title: 'Инвестор',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Наша команда
    </template>
    <template #lead>
      Администрированием и поддержкой сервера занимаются вот эти ребята!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>