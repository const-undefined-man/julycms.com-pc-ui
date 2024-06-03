<script setup>
const { baiduMapAK } = useRuntimeConfig().public;
useHead({
  script: [{ src: `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${baiduMapAK}` }],
});

const { catdir, subCatdir } = useRoute().params;

const catInfo = ref({ children: [] });
const page = ref(1);
const limit = ref(9);
const getData = async () => {
  const { data } = await useApi.navContent(subCatdir, { page: page.value, limit: limit.value });
  catInfo.value = data.value.data;
};
await getData();
const seo = useState('seo');
useSeoMeta({
  title: catInfo.value.seo.title || seo.value.title,
  keywords: catInfo.value.seo.keywords || seo.value.keywords,
  description: catInfo.value.seo.description || seo.value.description,
});

watch(page, getData);
</script>

<template>
  <section class="px-0 lg:flex-1 lg:px-10">
    <!-- page -->
    <template v-if="catInfo.siteModel === 'page'">
      <h2 class="border-b border-gray-100 text-3xl font-medium pb-5 mb-6">{{ catInfo.document.title }}</h2>
      <BaiduMap v-if="subCatdir == 'contact'" address="辽宁省大连市高新园区海外学子创业园"></BaiduMap>
      <article class="article leading-8" v-html="catInfo.document.content"></article>
    </template>

    <!-- article & album  -->
    <template v-if="['article', 'album'].includes(catInfo.siteModel)">
      <h2 class="border-b border-gray-100 text-3xl font-medium pb-5 mb-6">
        {{ catInfo.catname }}<span class="text-gray-200 text-md ml-5">{{ catInfo.catnameEn || '' }}</span>
      </h2>

      <div class="grid grid-cols-3 gap-4 mt-6 mb-6">
        <NewsItem v-for="(v, k) in catInfo.documents" :key="k" :item="v" small></NewsItem>
      </div>

      <UPagination v-if="catInfo.total > limit" v-model="page" :page-count="limit" :total="catInfo.total" />
    </template>

    <!-- 子栏目 -->
    <div v-if="catInfo.children.length" class="grid grid-cols-2 gap-4 mt-6">
      <NuxtLink
        v-for="(v, k) in catInfo.children"
        :key="k"
        :to="'/' + catdir + '/' + v.catdir"
        class="flex-1 rounded-md bg-slate-50 p-5 box-border hover:bg-slate-100 group"
      >
        <div class="text-blue-600 font-medium">{{ v.catname }}</div>
        <div class="leading-7 mt-5 line-clamp-2 text-slate-500 group-hover:text-slate-600">{{ v.description }}</div>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.article {
  :deep(p) {
    text-indent: 2em;
    margin: 15px 0;
  }
  :deep(img) {
    max-width: 100%;
  }
}
</style>
