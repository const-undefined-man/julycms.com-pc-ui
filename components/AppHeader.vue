<script setup>
defineProps({
  category: {
    type: Array,
    default: () => [],
  },
});

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="w-full bg-white/80 backdrop-blur-md sticky top-0 z-30">
    <div class="w-full p-6 flex justify-between items-center py-4 md:container md:mx-auto">
      <NuxtLink to="/" class="bg-none relative z-50"><NuxtImg src="/logo.svg" width="120px" /></NuxtLink>

      <nav class="navbar" :class="isOpen ? 'open' : ''">
        <ul class="lg:flex lg:items-center lg:gap-5">
          <li>
            <NuxtLink class="menu-title" to="/">首页</NuxtLink>
          </li>
          <li v-for="(v, k) in category" :key="k" class="relative group">
            <NuxtLink :to="'/' + v.catdir" class="menu-title"
              >{{ v.catname }}
              <UIcon
                v-if="v.children.length"
                name="i-tabler-chevron-down"
                class="text-sm transition-all group-hover:rotate-180"
              />
            </NuxtLink>
            <ul v-if="v.children.length" class="submenu">
              <li v-for="(sv, sk) in v.children" :key="sk">
                <NuxtLink :to="'/' + v.catdir + '/' + sv.catdir" class="submenu-item">{{ sv.catname }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="menu-toggle-btn" @click="toggleMenu">
        <UIcon :name="isOpen ? 'i-tabler-x' : 'i-tabler-menu-2'" class="text-slate-500 text-lg" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  @apply fixed -top-[100vh] left-0 w-full h-0 p-6 z-40 text-slate-600 transition-all duration-300 lg:static lg:flex lg:items-center lg:gap-5 lg:w-auto lg:p-0 lg:h-auto;
  &.open {
    @apply top-[68px] h-[100vh] bg-white/80 backdrop-blur-md;
  }
}
.menu-toggle-btn {
  @apply relative z-50 cursor-pointer border-2 border-slate-300 w-9 h-9 text-center leading-9 rounded-full block lg:hidden;
}
.menu-title {
  @apply block px-3 py-2 rounded-md group-hover:text-blue-600;
}
.submenu {
  @apply bg-white  opacity-0  shadow-md border rounded-lg h-0 overflow-hidden transition-all  translate-y-3 -z-10 group-hover:translate-y-0 group-hover:opacity-100 group-hover:h-auto group-hover:z-10 lg:absolute lg:right-0 lg:min-w-full lg:break-keep;
}
.submenu-item {
  @apply block py-1 px-3 m-2 rounded-lg hover:bg-slate-100 hover:text-blue-600;
}
.router-link-active {
  @apply bg-slate-100 text-blue-600;
}
.router-link-active.bg-none {
  background: none;
}
</style>
