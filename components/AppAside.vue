<script setup>
defineProps({
  category: {
    type: Object,
    default: () => ({}),
  },
  contact: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <aside class="px-0 w-full lg:w-80 lg:px-10">
    <div v-if="category.children.length" class="mb-10">
      <h3 class="text-lg font-medium mb-5">
        <div class="after:w-10 after:h-1 after:bg-blue-500 after:block after:mt-2">{{ category.catname }}</div>
        <div class="text-slate-300 first-letter:uppercase">{{ category.catnameEn }}</div>
      </h3>

      <ul class="leading-8 flex flex-nowrap overflow-x-auto gap-x-4 lg:block lg:gap-x-0">
        <li v-for="(v, k) in category.children" :key="k" class="flex-shrink-0">
          <NuxtLink :to="'/' + category.catdir + '/' + v.catdir">{{ v.catname }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="contact-info hidden lg:block">
      <h3 class="text-lg font-medium mb-5">
        <div class="after:w-10 after:h-1 after:bg-blue-500 after:block after:mt-2">联系我们</div>
        <div class="text-slate-300">Contact</div>
      </h3>
      <ul class="space-y-4">
        <li v-for="(v, k) in contact" :key="k" class="flex items-start flex-wrap gap-x-2">
          <span class="border border-gray-200 px-2 rounded text-sm">{{ v.title }}</span
          ><span class="flex-1">{{ v.description }}</span>
        </li>
        <li class="">
          <NuxtLink
            to="/contact"
            class="all inline-flex items-center rounded-full bg-blue-500 text-white text-sm px-4 py-1"
            >查看全部
            <UIcon class="ml-1" name="i-tabler-arrow-right" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.router-link-active {
  @apply text-blue-600;
  &.all {
    @apply text-white;
  }
}
</style>
