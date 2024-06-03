<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  small: {
    type: Boolean,
    default: false,
  },
});

const { baseUrl } = useRuntimeConfig().public;
</script>

<template>
  <div class="relative rounded-lg overflow-hidden bg-slate-100" :class="small ? 'small' : ''">
    <div class="cover h-60 overflow-hidden relative">
      <img v-if="item.cover" class="object-fill w-full" :src="baseUrl + item.cover.url" :alt="item.title" />
      <div class="absolute bg-gradient-to-b from-white/0 to-slate-100 to-80% w-full h-full left-0 top-0"></div>
    </div>
    <div class="bd relative p-8 mt-[-40px]">
      <h5 class="text-lg font-medium text-gray-700 line-clamp-1">{{ item.title }}</h5>
      <div class="text-gray-400">{{ item.createdAt }}</div>
      <div class="desc text-sm text-slate-600 mt-4 line-clamp-4 leading-6 h-24">{{ item.description }}</div>
      <div class="flex items-center mt-6">
        <nuxt-link :to="'/artice?id=' + item.id" class="flex items-center mr-10 text-blue-500 text-sm">
          详细 <UIcon name="i-tabler-arrow-big-right" class="text-base ml-1"></UIcon>
        </nuxt-link>
        <div class="flex border-slate-200 flex-1 border-t border-solid"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.small {
  .cover {
    @apply max-h-36;
  }
  .bd {
    @apply p-4;
  }
  .desc {
    @apply line-clamp-3 h-[72px];
  }
}
</style>
