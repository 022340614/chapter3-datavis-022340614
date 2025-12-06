# 部署指南

本文档说明如何将第3章数据可视化网站部署到不同的平台。

## 部署选项

### 1. 本地运行（最简单）
- 直接双击 `index.html` 文件在浏览器中打开
- 或使用 `start-server.bat` 启动本地服务器

### 2. GitHub Pages（推荐）

#### 步骤：
1. 在GitHub上创建新仓库：`chapter3-datavis-022340614`
2. 将所有文件上传到仓库
3. 进入仓库设置 → Pages
4. 选择部署源为 `main` 分支
5. 访问 `https://你的用户名.github.io/chapter3-datavis-022340614`

#### 注意事项：
- 确保 `index.html` 在根目录
- 所有资源路径使用相对路径
- 不需要服务器端支持

### 3. Netlify（免费）

#### 步骤：
1. 访问 [netlify.com](https://netlify.com)
2. 拖拽项目文件夹到部署区域
3. 自动生成部署链接
4. 支持自定义域名

### 4. Vercel（免费）

#### 步骤：
1. 访问 [vercel.com](https://vercel.com)
2. 连接GitHub仓库
3. 自动部署，支持持续集成

## 文件结构要求

```
chapter3-datavis-022340614/
├── index.html          # 必须位于根目录
├── charts.js           # JavaScript图表配置
├── README.md           # 项目说明
├── DEPLOYMENT.md       # 部署指南
└── start-server.bat    # 本地服务器脚本
```

## 技术验证

部署前请验证：
- [ ] 所有图表在本地正常显示
- [ ] 响应式设计正常工作
- [ ] 所有链接和资源路径正确
- [ ] 没有控制台错误

## 访问地址示例

- GitHub Pages: `https://username.github.io/chapter3-datavis-022340614`
- Netlify: `https://your-site-name.netlify.app`
- Vercel: `https://your-site-name.vercel.app`

## 故障排除

### 图表不显示
- 检查Chart.js CDN链接
- 确认浏览器支持Canvas
- 查看浏览器控制台错误信息

### 样式异常
- 检查CSS文件加载
- 验证响应式媒体查询
- 测试不同浏览器兼容性

### 部署失败
- 确认文件路径正确
- 检查GitHub Pages设置
- 验证仓库公开性

## 性能优化建议

1. **图片优化**: 如有图片，使用WebP格式
2. **缓存策略**: 设置适当的缓存头
3. **CDN加速**: 使用CDN分发静态资源
4. **代码压缩**: 生产环境压缩CSS/JS

## 监控和维护

- 定期检查链接有效性
- 更新依赖库版本
- 监控网站访问统计
- 备份重要数据

## 技术支持

如有部署问题，请参考：
- GitHub Pages文档
- Netlify/Vercel官方文档
- Chart.js官方文档

---

*部署成功！享受你的数据可视化网站吧！*