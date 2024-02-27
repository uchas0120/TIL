## expressとは
expressとは、Node.jsで利用できるWebアプリケーションフレームワークです。Webアプリケーションとは、インターネット上で利用するサービスを動かすシステムです。  
WebアプリケーションやAPIを構築するためのメソッドやプラグインが豊富なNPMパッケージとも言えます。  
フレームワークとは、システム開発時によく使う機能や設計などを予め用意してあるアプリケーションです。  
Node.js を使ってWebアプリケーションを開発する上で、express を利用することでより短いプログラムで効率よく開発することができます。  
[Express 公式サイト](https://expressjs.com/ja/)

以下のようなことが出来るようになります。
- リクエストを受け付けるサーバーの起動
- リクエストのパース（変換）
- リクエストとルーティングのマッピング
- HTTPレスポンスと関連コンテンツの作成

余談ですが、ライブラリとフレームワークの違いです。
- ライブラリ
ライブラリを使うとき、「主」となるのは自分です。  
アプリケーションのフローを管理しているのも自分で、ライブラリを自分に「従わせて」使います。  
あくまで部品として自分が使いたいときに使う感じ。

- フレームワーク
フレームワークでは主従が逆転します。  
フレームワークが「主」となり、自分がフレームワークのフローに「従います」。  
フレームワークという枠組みの中でプログラムしていくため、自分がそのルールに合わせるイメージ。

## 使い方
### 環境構築
1. プロジェクトの作成
1. expressのインストール
    ```
    >mkdir express-project
    >cd express-project
    >npm init --yes
    >npm install express
    >touch index.js
    ```
1. サーバーの作成  
    以下コートでサーバーの作成をします。
    ```javascript
    const express = require('express');
    const app = express();

// getリクエストでマッチしたものに応じた処理を決められる
// 上から順に見ていくので記述する順番に注意
app.get('/cats', (req, res) => {
    res.send('にゃーーー');
});

//postリクエストバージョン
app.post('/cats', (req, res) => {
    res.send('にゃーーーpost');
});

app.get('/dogs', (req, res) => {
    res.send('ondeone');
});

app.get('/', (req, res) => {
    res.send('ここはホームページです');
});

// *はなんでもヒット　ワイルドカード的な
app.get('*', (req, res) => {
    res.send('そんなパスは知らない');
});

// サーバーを起動してリクエストを待つ
app.listen(3000, () => {
    console.log('リクエストをポート3000で待受中...');
});
```
1. package.jsonにstartコマンドを追加(やらなくても`node index.js`で起動できます。)
```javascript
{
  "name": "my-express-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
### 動作確認
1. サーバー起動
```
>npm start
>node index.js ←package.jsonにstartコマンドを追加していない場合
リクエストをポート3000で待受中...
```
1. 起動確認
curl コマンドを使用してサーバの実行を確認します。  
ブラウザのURL欄に`http://localhost:3000`を入力しても同じ結果が得られます。  
```
>curl http://localhost:3000
ここはホームページです
```
1. サーバ停止
ctrl + c でサーバを停止できます。
