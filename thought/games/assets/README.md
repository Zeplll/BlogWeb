# 图片资源文件夹说明

## 📁 文件夹结构

```
thought/games/assets/
└── images/              # 图片文件存放位置
    ├── featured-image.jpg    # 特色大图
    ├── gallery-1.jpg         # 画廊图片 1
    ├── gallery-2.jpg         # 画廊图片 2
    ├── gallery-3.jpg         # 画廊图片 3
    └── gallery-4.jpg         # 画廊图片 4
```

## 🖼️ 图片展示位置

页面中有两个图片展示区域：

### 1. 特色大图（Featured Image）
- **位置**：在文章标题和正文之间
- **用途**：展示文章的主要配图
- **文件名**：`featured-image.jpg`
- **建议尺寸**：1200x600px 或更大（16:9 比例）
- **效果**：全宽展示，鼠标悬停时轻微放大

### 2. 图片画廊（Image Gallery）
- **位置**：在文章正文之后
- **用途**：展示多张相关图片（最多4张）
- **文件名**：`gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`
- **建议尺寸**：800x600px（4:3 比例）
- **效果**：网格布局，鼠标悬停时图片放大并显示放大镜图标

## 📝 使用说明

### 添加特色大图：
1. 将图片放入 `assets/images/` 文件夹
2. 命名为 `featured-image.jpg`（或修改 HTML 中的路径）
3. 图片会自动显示在页面上

### 添加画廊图片：
1. 将图片放入 `assets/images/` 文件夹
2. 按照 `gallery-1.jpg`, `gallery-2.jpg` 等命名
3. 最多可以添加 4 张图片
4. 如果不需要某张图片，删除对应的文件即可（HTML 会自动隐藏）

### 修改图片路径：
在 HTML 文件中找到并修改：

```html
<!-- 特色大图 -->
<img src="assets/images/featured-image.jpg" alt="Featured Image">

<!-- 画廊图片 -->
<img src="assets/images/gallery-1.jpg" alt="Gallery Image 1">
```

## 🎨 支持的图片格式

- **JPG/JPEG** - 推荐用于照片
- **PNG** - 推荐用于带透明背景的图片
- **WebP** - 推荐，文件更小，质量更好

## 💡 优化建议

### 图片压缩：
- 使用在线工具（如 TinyPNG）压缩图片
- 建议文件大小不超过 500KB

### 响应式设计：
- 特色大图：1200x600px（桌面）
- 画廊图片：800x600px（桌面）
- 系统会自动适配移动设备

### 最佳实践：
1. 使用高质量但经过压缩的图片
2. 保持一致的宽高比
3. 使用描述性的 alt 文本（可在 HTML 中修改）
4. 考虑使用 WebP 格式以获得更好的性能

## 🔧 自定义画廊

### 增加或减少画廊图片：

如果需要添加更多图片，在 HTML 中复制以下代码：

```html
<div class="gallery-item">
    <img src="assets/images/gallery-5.jpg" alt="Gallery Image 5" 
         onerror="this.parentElement.style.display='none'">
</div>
```

### 调整画廊布局：

在 CSS 中修改 `.gallery-grid` 的 `grid-template-columns` 属性：

```css
/* 2列布局 */
grid-template-columns: repeat(2, 1fr);

/* 3列布局 */
grid-template-columns: repeat(3, 1fr);

/* 自适应（推荐） */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

## ⚠️ 注意事项

1. **文件命名**：使用小写字母和连字符，避免空格和特殊字符
2. **图片版权**：确保你有权使用这些图片
3. **加载时间**：过大的图片会影响页面加载速度
4. **错误处理**：如果图片文件不存在，对应区域会自动隐藏
5. **移动端**：画廊会自动调整为 2 列布局

## 🎯 快速开始

1. 准备你的图片文件
2. 压缩图片（可选但推荐）
3. 将图片复制到 `assets/images/` 文件夹
4. 按照命名规则重命名文件
5. 刷新页面查看效果

没有图片时，相应区域会自动隐藏，不会显示错误。
