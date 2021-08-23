<img src="./src/default/logo.svg" style="width:100%;height:200px;text-align:center" alt="">

<h1 align="center">
<strong>vite-html-template</strong>
</h1>

## vite 多页面自动构建

### 结构

多个入口文件进入各自目录
静态文件(js,css,jpg,svg,font)进入dist/assets目录

| 原始                           | build                                               |          |
| ------------------------------ | --------------------------------------------------- | -------- |
| src/**about**/index.html | dist/src/**about**/index.html                 | 入口文件 |
| src/**about**/index.js   | dist/src/assets/**about**.4357ff4f.js         | js       |
| src/**home**/index.html  | dist/src/**home**/index.html                  |          |
| src/default/main.less          | dist/src/assets/default.09585f4e.css                | css      |
| src/defaul/logo.svg            | dist/src/assets/logo.17e50649.svgrc/defaul/logo.svg | svg      |


## 安装依赖

```
npm install
```

## 开始

```
npm run dev
```

## 构建

```
npm run build
```

## 生成目录结构 [directorList.md](./directorList.md)

```
npm run build:mddir
```


### 开发目录

```
|-- src
|-- about
|   |-- index.html
|-- default
|   |-- logo.svg
|   |-- main.js
|   |-- main.less
|-- home
|-- index.html
```

### 编译生成

```
|-- dist
|-- index.html
|-- manifest.json
|-- assets
|   |-- about-legacy.e6d307e9.js
|   |-- about.4357ff4f.js
|   |-- default-legacy.54453b92.js
|   |-- default.09585f4e.css
|   |-- default.f7cac679.js
|   |-- home-legacy.c4a51af1.js
|   |-- home.5738e5b8.js
|   |-- logo.17e50649.svg
|   |-- modulepreload-polyfill-legacy.ed506caa.js
|   |-- modulepreload-polyfill.b7f2da20.js
|   |-- polyfills-legacy.745787fe.js
|-- src
|-- about
|   |-- index.html
|-- home
|-- index.html
```
