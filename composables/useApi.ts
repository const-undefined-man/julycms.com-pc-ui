export const useApi = {
  // 网站信息
  site: () => useJulyFetch('/api/pc/site'),
  // 导航
  nav: () => useJulyFetch('/api/pc/nav'),
  // 子导航
  navChildren: (catdir: string) => useJulyFetch(`/api/pc/nav-children/${catdir}`),
  // 导航栏目下面的内容
  navContent: (catdir: string, query?: Record<string, string | number>) => useJulyFetch(`/api/pc/nav-content/${catdir}`, {query}),
  // 碎片
  patch: (id: number) => useJulyFetch(`/api/pc/patch/${id}`),
  // 文章详情
  article: (id: number) => useJulyFetch(`/api/pc/article/${id}`),
}