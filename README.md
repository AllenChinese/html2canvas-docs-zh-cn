## html2canvas

![图片](https://allenchinese.github.io/html2canvas-docs-zh-cn/html2canvas.jpg)

了解 html2canvas，它是如何工作的以及它的一些局限性。

在你开始使用这个脚本以前，这里有些帮助你更好的了解脚本的好处及其的一些局限性。

### 介绍

html2canvas 是一个 HTML 渲染器。该脚本允许你直接在用户浏览器截取页面或部分网页的“屏幕截屏”，屏幕截图是基于 DOM，因此生成的图片并不一定 100% 一致，因为它没有制作实际的屏幕截图，而是根据页面上可用的信息构建屏幕截图。

### 它是如何工作的

该脚本通过读取 DOM 以及应用于元素的不同样式，将当前页面呈现为 canvas 图像。

它不需要来自服务器的任何渲染，因为整个图像是在客户端上创建的。但是，由于它太依赖于浏览器，因此该库不适合在 nodejs 中使用。它也不会神奇地规避任何浏览器内容策略限制，因此呈现跨域内容将需要代理来将内容提供给相同的源。

该脚本仍然处理非常实验状态，因此不建议在生产环境中使用它，也不建议使用它来构建应用程序，因为仍然会有重大更改。

### 浏览器兼容性

该库应该可以在以下浏览器上正常工作

- Firefox 3.5+
- Google Chrome
- Opera 12+
- IE9+
- Edge
- Safari 6+

由于需要手动构建每一个 CSS 属性以支持，因此还有许多尚不支持的属性。

### 在线阅读（GitHub 版）

- [About](https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-about.html)
- [Getting started](https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-getStart.html)
- [Configuration](https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-configuration.html)
- [Features](https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-features.html)
- [Proxy](https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-proxy.html)
- [FAQ](https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-faq.html)
