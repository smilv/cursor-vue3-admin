# Vue 3 项目模板（cursor）

一个基于 Vue 3 + TypeScript + Vite 的项目模板。

## 技术栈

- Vue 3
- TypeScript
- Vite
- Pinia (状态管理)
- Vue Router
- Axios (HTTP 请求)
- ESLint + Prettier (代码规范)
- Husky + lint-staged (Git Hooks)

## 特性

- ⚡️ 快速的开发体验
- 📦 开箱即用的项目结构
- 🔑 TypeScript 支持
- 🎨 状态管理集成
- 🔒 开发规范集成
- 📱 响应式设计

## 项目结构

```bash
├── src/
│ ├── assets/        # 静态资源
│ ├── components/    # 公共组件
│ ├── stores/        # Pinia 状态管理
│ ├── utils/         # 工具函数
│ │   └── request.ts # Axios 封装
│ ├── router/        # 路由配置
│ ├── views/         # 页面组件
│ ├── types/         # TypeScript 类型定义
│ ├── App.vue        # 根组件
│ ├── env.d.ts       # TypeScript 声明文件
│ └── main.ts        # 入口文件
├── index.html
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
└── vite.config.ts
```

## 开始使用

### 环境准备

确保你的开发环境满足以下要求：
- Node.js >= 16.0.0
- npm >= 7.0.0
- Git

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

### 生产环境构建

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 代码检查和格式化

```bash
# ESLint 检查
npm run lint

# Prettier 格式化
npm run format
```

## 开发规范

### 代码风格

- 使用 TypeScript 编写代码
- 使用 Composition API 和 `<script setup>` 语法
- 使用 Pinia 进行状态管理
- 遵循 ESLint 规范
- 使用 Prettier 进行代码格式化

### 命名规范

- 组件名称：使用 PascalCase (如 `UserProfile.vue`)
- 文件名称：使用 kebab-case (如 `user-profile.ts`)
- 变量命名：使用 camelCase
- 常量命名：使用 UPPER_SNAKE_CASE
- CSS 类名：使用 kebab-case

### Git 提交规范

提交信息格式：
```
<type>(<scope>): <subject>

<body>
```

type 类型：
- feat: 新功能
- fix: 修复
- docs: 文档
- style: 格式
- refactor: 重构
- test: 测试
- chore: 构建过程或辅助工具的变动

## 项目配置

### 环境变量

项目支持以下环境变量配置：

```bash
# .env
VITE_API_BASE_URL=http://api.example.com
VITE_APP_TITLE=Vue3 Template
```

### 代理配置

在 `vite.config.ts` 中配置代理：

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://api.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```

## 常见问题

1. 安装依赖失败
   - 清除 npm 缓存：`npm clean cache -f`
   - 删除 node_modules 后重新安装

2. 开发环境热更新失效
   - 检查 vite.config.ts 配置
   - 清除浏览器缓存

## 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/xxx`
3. 提交代码：`git commit -m 'feat: add xxx'`
4. 推送分支：`git push origin feature/xxx`
5. 提交 Pull Request

## 许可证

[MIT](LICENSE)

## 联系方式

如有问题，请提交 [Issue](https://github.com/smilv/cursor-vue3-admin/issues)
