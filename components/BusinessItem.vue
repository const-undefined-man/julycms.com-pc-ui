<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
    default: 1,
  },
});
</script>
<template>
  <div class="relative border border-slate-200 overflow-hidden p-8 rounded-md">
    <div
      class="w-[380px] h-[380px] rounded-full absolute bg-slate-300 opacity-70 top-[-55%]"
      style="left: calc(50% - 190px)"
    ></div>
    <div class="text-center mt-5">
      <UIcon :name="item.icon" dynamic class="text-6xl text-blue-400" />
    </div>
    <div class="text-center mt-16">
      <UIcon dynamic :name="'i-tabler-square-rounded-number-' + index" class="text-xl text-slate-300" />
    </div>
    <h5 class="text-lg font-medium flex items-center justify-center mt-5 text-blue-400">{{ item.catname }}</h5>
    <div class="text-sm text-slate-600 mt-4 line-clamp-4">{{ item.description }}</div>
  </div>
</template>
