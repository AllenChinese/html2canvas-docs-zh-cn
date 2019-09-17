---
title: 答疑
---

## 答疑

浏览有关 html2canvas 的常见问题解答

### Why aren't my images rendered?

问：为什么我的图像没有被渲染？

答：html2canvas 不会解决浏览器内置的内容政策限制。绘制当前页面源之外的图像时会污染它们所绘制的画布。如果画布受到污染，则无法再读取。因此，html2canvas 实现了一些方法来检查图像在应用之前会否会污染画布。如果已经将 `allowTaint` 选项设置为 `false`，则不会绘制图像。

### Why is the produced canvas empty or cuts off half way through?

问：为什么生产的 canvas 是空的，或者中间切断？
答：确保 canvas 元素大小没有超过浏览器对画布的限制，或者使用窗口配置选项根据 canvas 元素设置自定义窗口大小：

```js
await html2canvas(element, {
  windowWidth: element.scrollWidth,
  windowHeight: element.scrollHeight
})
```

窗口限制因浏览器，操作系统和系统硬件而异。

### chore

::: tip
Maximum height/width: 32,767 pixels
Maximum area: 268,435,456 pixels (e.g., 16,384 x 16,384)
:::

### Firefox

::: tip
Maximum height/width: 32,767 pixels
Maximum area: 472,907,776 pixels (e.g., 22,528 x 20,992)
:::

### Internet Explorer

::: tip
Maximum height/width: 8,192 pixels
Maximum area: N/A
:::

### iOS

::: tip
The maximum size for a canvas element is 3 megapixels for devices with less than 256 MB RAM and 5 megapixels for devices with greater or equal than 256 MB RAM
:::

### Why doesn't CSS property X render correctly or only partially?

问： 为什么 CSS 属性 X 没有正确的呈现或仅部分呈现？

答： 由于每个 CSS 属性都需要手动编码才能正确呈现，因此 html2canvas 永远不会有完整的 CSS 支持。该库试图在可能的范围内支持最常用的 CSS 属性。如果某些 CSS 属性缺失或不完整，并且您认为它应该是库的一部分，请为其创建测试用例并为其创建新 issue。

### How do I get html2canvas to work in a browser extension?

问：如何让 html2canvas 在浏览器扩展中工作？

答：您不应在浏览器扩展中使用 html2canvas。大多数浏览器都支持从扩展中的选项卡捕获屏幕截图。 Chrome 和 Firefox 的相关信息。
