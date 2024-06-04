<script setup>
const route = useRoute();

const category = ref({});
const { data } = await useApi.navContent(route.params.catdir);
if (data.value) {
  category.value = data.value.data;
}

// 左侧碎片
const patchContact = ref([]);
const { data: patch } = await useApi.patch(2);
patchContact.value = patch.value.data.patchList;
</script>

<template>
  <div class="w-full mx-auto p-6 md:container lg:flex lg:items-start lg:p-10 text-gray-600">
    <AppAside :category="category" :contact="patchContact"></AppAside>

    <NuxtPage></NuxtPage>
  </div>
</template>

<style lang="scss" scoped></style>
