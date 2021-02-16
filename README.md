# ts-snake 一款 TS 实现的贪吃蛇小游戏

预览地址：https://silent-cat.github.io/ts-snake/dist/index.html

## 游戏玩法：

1.通过控制键盘上的方向键“↑ ↓ ← →”控制蛇的移动来吃食物

2.目前共有 10 个等级，满 10 分升一级，并且速度会随着等级的提升而加快

3.撞到墙或撞到自己，游戏结束

## 项目结构

```
ts-snake
├── dist
│   ├── bundle.js
│   └── index.html
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── index.html
│   ├── index.scss
│   ├── index.ts
│   └── modules
│       ├── Food.ts
│       ├── GameControl.ts
│       ├── ScorePanel.ts
│       └── Snake.ts
├── tree.md
├── tsconfig.json
└── webpack.config.js
```
## 运行源码

```
npm install
```

```
npm start
```
## 打包源码 
```
npm run build
```
