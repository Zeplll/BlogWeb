# 音乐资源文件夹说明

## 📁 文件夹结构

```
thought/music/assets/
├── audio/          # 音频文件存放位置
│   └── your-music.mp3
└── images/         # 图片文件存放位置
    └── album-cover.jpg
```

## 🎵 使用说明

### 添加音频文件：
1. 将你的音乐文件（.mp3, .wav, .ogg等）放入 `audio` 文件夹
2. 在 HTML 中修改音频源路径：
   ```html
   <source src="assets/audio/your-music.mp3" type="audio/mpeg">
   ```

### 添加专辑封面：
1. 将专辑图片放入 `images` 文件夹
2. 建议图片尺寸：400x400px 或更大（正方形）
3. 支持格式：.jpg, .png, .webp

## 🎨 自定义

### 修改曲目信息：
在 HTML 中找到并修改：
```html
<div class="track-title" id="trackTitle" 
     data-lang-en="Your Music Title" 
     data-lang-cn="你的音乐标题">
```

### 支持的音频格式：
- MP3 (.mp3) - 推荐
- WAV (.wav)
- OGG (.ogg)
- M4A (.m4a)

## 💡 提示

- 音频文件较大时建议压缩以提升加载速度
- 专辑封面建议使用 WebP 格式以减小文件大小
- 可以通过修改 CSS 自定义播放器样式

---

## 🔄 在其他栏目使用音乐播放器

如果你想在其他栏目（books/movies/games）中使用音乐播放器UI，请按照以下步骤操作：

### 步骤 1：创建资源文件夹

在目标栏目下创建 `assets` 文件夹结构：

```bash
# 例如在 books 栏目下
thought/books/assets/
├── audio/
└── images/

# 或在 games 栏目下
thought/games/assets/
├── audio/
└── images/
```

### 步骤 2：复制 HTML 文件

1. 复制 `music-post6.html` 到目标栏目
2. 重命名为对应的文件名，例如：
   - `books-post6.html`
   - `games-post6.html`
   - `movies-post6.html`

### 步骤 3：修改 HTML 内容

在新复制的 HTML 文件中修改以下内容：

#### 3.1 修改标题和元信息
```html
<title>Your Title - CategoryName</title>

<!-- 修改文章标题和日期 -->
<h1 class="post-traditional-title" 
    data-lang-en="Your English Title" 
    data-lang-cn="你的中文标题">
    Your English Title
</h1>
<div class="post-traditional-meta">
    <span class="meta-date" 
          data-lang-en="Your Date" 
          data-lang-cn="你的日期">Your Date</span>
    <span class="meta-divider">◇</span>
    <span class="meta-category" 
          data-lang-en="Category" 
          data-lang-cn="分类">Category</span>
</div>
```

#### 3.2 修改音乐播放器信息
```html
<!-- 修改曲目标题 -->
<div class="track-title" id="trackTitle" 
     data-lang-en="Your Music Title" 
     data-lang-cn="你的音乐标题">
     Your Music Title
</div>

<!-- 修改艺术家名称 -->
<div class="track-artist" id="trackArtist" 
     data-lang-en="Artist Name" 
     data-lang-cn="艺术家名称">
     Artist Name
</div>

<!-- 修改音频文件路径 -->
<audio id="audioPlayer" preload="metadata">
    <source src="assets/audio/your-music.mp3" type="audio/mpeg">
</audio>

<!-- 修改专辑封面路径 -->
<img id="albumArt" src="assets/images/album-cover.jpg" alt="Album Cover">
```

#### 3.3 修改导航链接
```html
<nav class="post-navigation" data-scroll>
    <!-- 修改返回链接到对应栏目 -->
    <a href="index.html" class="nav-back" 
       data-lang-en="← Back to Books" 
       data-lang-cn="← 返回书籍">
       ← Back to Books
    </a>
    <!-- 修改上/下一篇文章链接 -->
    <a href="books-post5.html" class="nav-next" 
       data-lang-en="Previous Article →" 
       data-lang-cn="上一篇文章 →">
       Previous Article →
    </a>
</nav>
```

### 步骤 4：创建 Markdown 内容文件

在同一目录下创建两个 Markdown 文件：

```bash
# 例如在 books 栏目
books-post6.en.md    # 英文内容
books-post6.cn.md    # 中文内容
```

### 步骤 5：添加音乐和图片资源

1. 将音乐文件放入 `栏目/assets/audio/` 文件夹
2. 将专辑封面放入 `栏目/assets/images/` 文件夹
3. 确保 HTML 中的路径与实际文件名匹配

### 完整示例：在 books 栏目添加音乐播放器

```
thought/books/
├── assets/
│   ├── audio/
│   │   └── audiobook-sample.mp3
│   └── images/
│       └── book-cover.jpg
├── books-post6.html        # 复制并修改的 HTML
├── books-post6.en.md       # 英文内容
└── books-post6.cn.md       # 中文内容
```

### 🎯 快速检查清单

在新栏目使用音乐播放器前，确保已完成：

- [ ] 创建 `assets/audio/` 和 `assets/images/` 文件夹
- [ ] 复制 HTML 文件并重命名
- [ ] 修改页面标题和元信息
- [ ] 修改音乐播放器的曲目信息
- [ ] 更新音频和图片文件路径
- [ ] 修改导航链接
- [ ] 创建对应的 `.en.md` 和 `.cn.md` 文件
- [ ] 添加实际的音频和图片文件

### ⚠️ 注意事项

1. **路径问题**：确保 `assets/` 文件夹在与 HTML 文件相同的目录下
2. **文件命名**：保持一致的命名规则（如 `栏目名-postX.html`）
3. **图片格式**：建议使用 WebP 格式以减小文件大小
4. **音频格式**：推荐使用 MP3 格式以获得最佳兼容性
5. **双语支持**：记得为所有文本元素添加 `data-lang-en` 和 `data-lang-cn` 属性

