import { useRuntimeConfig } from '#app';
import { useFetch } from 'nuxt/app';

export function useJulyFetch(url: string, options = {}) {
  const { baseUrl } = useRuntimeConfig().public;

  // 自动拼接基础 URL
  const fullUrl = new URL(url, baseUrl).toString();

  return useFetch(fullUrl, options)
}