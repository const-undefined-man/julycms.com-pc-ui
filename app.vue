<script setup>
const { baiduMapAK } = useRuntimeConfig().public;
useHead({
  title: 'julycms demo',
  meta: [{ name: 'description', content: '这是一个使用七月cms的示例网站。' }],
  script: [{ src: `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${baiduMapAK}` }],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style></style>
