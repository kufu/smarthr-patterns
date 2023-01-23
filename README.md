# SmartHR Patterns

[SmartHR UI](https://github.com/kufu/smarthr-ui) を利用した UI パターン集です。通称スマパタ。

Storybook: https://main--62f0ae48c21b0728fd1a5c85.chromatic.com

## ディレクトリ構成

```
.
├── global
│   ├── SomeGlobalComponent
│   │   ├── SomeGlobalComponent.tsx
│   │   └── index.ts         // SomeGlobalComponents の API
│   ├── ..
│   └── index.ts             // @global で使えるコンポーネントたち
├── patterns
│   ├── SomePattern
│   │   ├── SomePattern.mdx  // SomePattern のドキュメントファイル（任意）
│   │   ├── SomePattern.stories.tsx
│   │   ├── SomePattern.tsx
│   │   ├── components
│   │   │   ├── SomeComponent.tsx
│   │   │   └── SomeComponent.stories.tsx
│   │   └── index.ts         // SomePattern の API（任意）
│   ├── ..
│   └── index.ts             // @patterns で使えるコンポーネントたち
├── README.md                // このファイル
└── types                    // 型定義
    ├── ..
    └── some.d.ts
```

## パターンや Story の書き方

基本的には SmartHR UI を組み合わせてパターンとしてください。巨大なコンポーネントを作らないように気をつけましょう。

各ディレクトリの API となる `index.ts` ファイルは必要なものだけ `export` しましょう。

```tsx
export { SomeComponent } from './components/SomeCopmonent'

// 呼び出す側は @patterns で呼び出せます。
// import { SomeComponent } from '@patterns'
```

同パターン内で呼び出す場合は相対参照しましょう。

```tsx
import { SomeComponent } from './components'
```
