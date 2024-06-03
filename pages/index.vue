<script setup>
const { baseUrl } = useRuntimeConfig().public;

// seo
const seo = useState('seo');
useSeoMeta({
  ...seo.value,
});

// 关于我们
const about = ref({});
const { data: aboutData } = await useApi.navContent('about');
about.value = aboutData.value.data;

// 业务领域
const business = ref({});
const { data: businessData } = await useApi.navContent('business');
business.value = businessData.value.data;

// 新闻
const news = ref({});
const { data: newsData } = await useApi.navContent('news', { page: 1, limit: 3 });
news.value = newsData.value.data;
</script>

<template>
  <!-- about -->
  <div class="layout flex justify-between items-start">
    <div>
      <div class="">
        <h4 class="text-4xl text-blue-400">{{ about.catname }}</h4>
        <div class="text-2xl text-slate-200">{{ about.catnameEn }}</div>
      </div>
      <div class="mt-2 text-slate-600 leading-6">{{ about.description }}</div>

      <ul class="flex gap-5 mt-6 justify-center flex-wrap md:justify-start">
        <li v-for="(v, k) in about.children" :key="k" class="flex-shrink-0">
          <nuxt-link :to="'/' + about.catdir + '/' + v.catdir" class="flex items-center text-blue-500"
            ><UIcon name="i-tabler-circle-arrow-right-filled" class="text-lg mr-1" />{{ v.catname }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <img
      v-if="about.cover"
      class="ml-6 rounded-md hidden md:w-2/5 lg:block"
      :src="baseUrl + about.cover.url"
      :alt="about.description"
    />
  </div>

  <!-- business -->
  <div class="layout py-14">
    <div class="text-center">
      <h4 class="text-4xl text-slate-600">{{ business.catname }}</h4>
      <div class="text-2xl text-slate-200">{{ business.catnameEn }}</div>
    </div>

    <div class="grid grid-cols-0 gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-4">
      <BusinessItem v-for="(v, k) in business.children" :key="k" :item="v" :index="k + 1"></BusinessItem>
    </div>
  </div>

  <!-- news -->
  <div class="layout">
    <div class="text-center">
      <h4 class="text-4xl text-slate-600">{{ news.catname }}</h4>
      <div class="text-2xl text-slate-200">{{ news.catnameEn }}</div>
    </div>

    <div class="grid grid-cols-0 gap-10 mt-12 lg:grid-cols-3">
      <NewsItem v-for="(v, k) in news.documents" :key="k" :item="v"></NewsItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @apply container mx-auto mt-8;
}
</style>
