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
      text: "IP сервера: rumblur.by"

customMetaTitle: Rumblur

features:
  - title: Улучшенная генерация мира
    details: Сервер использует генерацию, отличную от ванильной, но близкой к ней, где будут встречаться различные интересные структуры и биомы.
    icon: <svg height="24" width="24" viewBox="0 0 24 24" fill="var(--vp-c-green-2)" xmlns="http://www.w3.org/2000/svg"><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H5M15.78,5H19V17.18C18.74,16.38 17.69,15.79 16.8,15.79H15.8V12.79A1,1 0 0,0 14.8,11.79H8.8V9.79H10.8A1,1 0 0,0 11.8,8.79V6.79H13.8C14.83,6.79 15.67,6 15.78,5M5,10.29L9.8,14.79V15.79C9.8,16.9 10.7,17.79 11.8,17.79V19H5V10.29Z" /></svg>
    link: /faq/world-generation/
    linkText: Подробнее
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
    avatar: 'https://crafthead.net/avatar/Mamimi',
    name: 'Xtimms',
    title: 'Сисадмин, владелец физсервера',
  },
  {
    avatar: 'https://crafthead.net/avatar/72d67267b3a34829882448fe63e736d0',
    name: 'BadCoder',
    title: 'Сисадмин',
  },
  {
    avatar: 'https://crafthead.net/avatar/NobleAshy',
    name: 'NobleAshy',
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