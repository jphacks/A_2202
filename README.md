# [いえサガシ △](https://naiken-quest.web.app/)

[![IMAGE ALT TEXT HERE](https://lh3.googleusercontent.com/pw/AL9nZEVFQhjwp1fD1wkoyEVvi8GolEtcVn07VxizJamRz4HG4LfVA9H0UjmD1ehLrQ7mY1MS0ZZkRAoU3-WLXbRDHgBSYKJqZYt6D8StsDXyJPQVleeLu4OERJkMHEnwz9IYikgnwXzJu9brUpVuogVxyWHp=w2000-h585-no?authuser=0)](https://naiken-quest.web.app/)

## 製品概要

- AR を用いてあなたの好きな街のあなたの好きな場所で一秒で物件探しを

### 背景(製品開発のきっかけ、課題等）

- 従来の不動産検索プラットフォームで感じられる以下の課題を解決
  - 情報が多すぎて何を調べればいいかわからない
  - 調べるのに時間がかかる
  - 物件探しが退屈

### 製品説明（具体的な製品の説明）

- 現在地情報をもとに取得した物件情報を AR を用いて可視化。地図が苦手な人や住みたい明確な位置が決まっている人が即座にその周辺物件を調べることができる。中央下部に設置してある information ボタンを押すことで物件の詳細情報を取得することが可能。native application ではなく web application にすることでアプリをインストールする障壁を取り払うことができるのでキャッチコピー通り一秒で物件探しをすることができる。

### 特長

#### 1. AR で物件を可視化

#### 2. 現在地周辺の物件を即座に探せる

#### 3. アプリインストールなし、ログインなしユーザーの楽に寄り添ったアプリ

### 解決出来ること

- 従来の不動産検索プラットフォームの検索情報量の多さを緩和
- アプリを開いてから物件を見つけられるまでの時間を短縮
- 実際の街の雰囲気を感じながら物件探しができる

### 今後の展望

- もっと物件探しが楽に楽しくなるように...
  - AR キャラに説明してもらう
  - その町の災害情報などを記載
- 物件だけでなく近くの商業施設、宿泊施設探しも便利に...
- さらに詳細情報を見たい人向けに不動産プラットフォームの作成、動線の作成

### 注力したこと（こだわり等）

- 一秒で物件探しができるというコンセプトを実現できるために、工夫した事。
  - AR で現在の緯度経度を使用して、物件探しに活用させた事。
  - 画面ロード時に物件情報をあらかじめ取得している事。
- 様々なツールを活用し、プロダクトロゴや AR オブジェクト、ローディング GIF などを自作した事。
- オンライン下において、チャットツールを活用しながら、上手く連携した事。
- Github Flow, Issue ドリブン開発を活用しながら開発を行った事。

## 開発技術

- TS
- Go
- Docker
- GCP
- Figma
- Blender

### 活用した技術

- AR
- GeoLocation

#### API・データ

- LANDNET API
- Google Map Platform API

#### フレームワーク・ライブラリ・モジュール

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Joy UI](https://mui.com/joy-ui/getting-started/overview/)
- [A-FRAME](https://aframe.io/)
- [AR.js](https://ar-js-org.github.io/AR.js-Docs/)
- [echo](https://echo.labstack.com/)

#### デバイス

- Web Application

### 独自技術

- 現在地情報(緯度経度)をもとにランドネットで提供されてる物件の最も現在地に近い物件を取得する。

#### ハッカソンで開発した独自機能・技術

- 独自で開発したものの内容をこちらに記載してください
- 特に力を入れた部分をファイルリンク、または commit_id を記載してください。

#### 製品に取り入れた研究内容（データ・ソフトウェアなど）（※アカデミック部門の場合のみ提出必須）

-
-

### 開発手順

- branch
  - feature/{github-name}/{branch-name}
- Issue -> PR -> develop -> main(deploy)
- [Prefix rule](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type)
