<script setup>
// seo
const { data: seoData } = await useApi.site();
const seo = seoData.value.data;
// 缓存seo数据
useState('seo', () => seo);

// 导航栏目
const category = ref([]);
const { data } = await useApi.nav();
category.value = data.value.data || [];

// banner
const { baseUrl } = useRuntimeConfig().public;
const banner = ref([]);
const { data: patch } = await useApi.patch(5);
banner.value = patch.value.data.patchList || [];

const links = ref({});
const { data: linkData } = await useApi.navContent('links');
links.value = linkData.value.data || {};
</script>

<template>
  <AppHeader :category="category" />

  <!-- banner -->
  <UCarousel v-slot="{ item }" arrows indicators :items="banner" :ui="{ item: 'basis-full' }" class="overflow-hidden">
    <img :src="baseUrl + item.img.url" :alt="item.title" class="w-full" draggable="false" />
  </UCarousel>

  <slot />

  <AppFooter :category="category" :links="links" />
</template>
