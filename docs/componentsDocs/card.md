# Card
卡片组件
### 示例
<m-card with="350" imgHeight="230" imgSrc="http://8.142.19.67:3000/images/cat1.jpg" summary="hello,world">
    <template #footer={foot}><span>{{foot}}🐒</span></template>
</m-card>

### 代码
```html
<template>
  <div>
    <m-card width="350" imgHeight="230" imgSrc="http://8.142.19.67:3000/images/cat1.jpg" summary="hello,world" foot="我是底部文字">
    <template #footer="{foot}"><span>{{foot}}🐒</span></template>
</m-card>
<div>
</template>
```
### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | ---- | ----|
|width | 卡片的宽度 |Number| false | - |
| imgSrc | 卡片资源地址 | String | true |-|
|imgHeight|图片高度 | Number | false | -|
|summary|卡片概要|String/slot|false|-|
|footer | 卡片底部|slot|false|-|
