<script setup>
const { id } = useRoute().query;

const article = ref({});
const { data } = await useApi.article(id);
article.value = data.value.data;

const seo = useState('seo');
useSeoMeta({
  title: article.value.title + '-' + seo.value.keywords,
  keywords: article.value.keywords || seo.value.keywords,
  description: article.value.description || seo.value.description,
});
</script>

<template>
  <section class="w-full px-5 p-6 max-w-[900px] md:mx-auto md:p-10 text-gray-600">
    <h2 class="text-3xl font-medium pb-2">
      {{ article.title }}
    </h2>
    <div class="border-b border-gray-10 pb-3 mb-6 text-slate-400 flex gap-x-4">
      <span class="inline-flex items-center"
        ><UIcon name="i-tabler-clock" class="mr-2"></UIcon>{{ article.createdAt }}</span
      >
      <span class="inline-flex items-center"><UIcon name="i-tabler-eye" class="mx-2" />{{ article.readNum }}</span>
    </div>

    <article class="article leading-8" v-html="article.content.content"></article>
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
