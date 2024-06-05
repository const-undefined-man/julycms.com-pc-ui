<script setup>
defineProps({
  category: {
    type: Array,
    default: () => [],
  },
  links: {
    type: Object,
    default: () => {},
  },
});

const copyYear = ref(2024);
const curYear = new Date().getFullYear();
if (curYear !== copyYear.value) {
  copyYear.value = copyYear.value + '~' + curYear;
}
</script>

<template>
  <div v-if="links.documents && links.documents.length" class="w-full px-6 md:container mx-auto my-10">
    <span class="font-medium">{{ links.catname }}:</span>
    <a
      v-for="(v, k) in links.documents"
      :key="k"
      ref="nofollow"
      :href="v.link.url"
      target="_blank"
      class="text-gray-600 ml-5 hover:text-blue-400"
      >{{ v.title }}</a
    >
  </div>
  <footer class="bg-slate-50 mt-12 py-10">
    <div class="w-full px-6 md:container mx-auto text-sm text-stone-600">
      <div class="flex justify-between">
        <div class="text-left hidden lg:block">
          <NuxtLink to="/" class="flex justify-center md:justify-start"><img src="/logo.svg" width="120px" /></NuxtLink>
        </div>

        <ul class="flex flex-wrap gap-x-3 flex-1 justify-around sm:gap-x-5 lg:flex-none">
          <li v-for="(v, k) in category" :key="k">
            <NuxtLink :to="'/' + v.catdir">{{ v.catname }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="block mt-5 pt-5 md:flex md:justify-between border-t border-slate-200 flex-wrap gap-4">
        <div>Copyright © {{ copyYear }} - All right reserved by julycms.com</div>
        <a ref="nofollow" href="https://beian.miit.gov.cn/" target="_blank">京ICP备123456789号-1</a>
      </div>
    </div>
  </footer>
</template>
