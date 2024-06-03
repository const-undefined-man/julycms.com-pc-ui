// 定义环境变量类型
type NodeEnv = 'development' | 'production';

// 确保 process.env.NODE_ENV 有正确的类型
declare let process: {
  env: {
    NODE_ENV?: NodeEnv;
  };
};

// 实例化配置对象，确保每个环境都有正确的类型
const config: Record<NodeEnv,any> = {
  development: {
    baseUrl: 'http://localhost:3000',
    baiduMapAK: 'DL4UxaWkHYZpqC2IkVDmE1hAmoUqnQg0'
  },
  production: {
    baseUrl: 'https://demo.julycms.com',
    baiduMapAK: 'DL4UxaWkHYZpqC2IkVDmE1hAmoUqnQg0'
  },
};

// 获取环境变量，默认为'development'
const env: NodeEnv = process.env.NODE_ENV ?? 'development';

// 导出对应环境的配置，并提供类型安全的访问
export default config[env];