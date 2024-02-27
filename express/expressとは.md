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
1. 自動起動
    ファイルを編集したとき、サーバーを停止して起動しなおさないと変更点が反映されません。  
    そこで、ディレクトリ内のファイルの変更が検出されたときにノード アプリケーションを自動的に再起動するようにします。  
    やり方はいろいろありますが、ここでは[nodemon](https://www.npmjs.com/package/nodemon)というパッケージを使います。  
    一番簡単にグローバルインストールした後、プロジェクトのディレクトリ内で起動します。
    これは、ディレクトリ内のjs,mjs,cjs,json の拡張子のファイルが変更されたとき、自動で再起動されます。
    ```
    >npm install -g nodemon
    >nodemon index.js
    [nodemon] 3.1.0
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,cjs,json
    [nodemon] starting `node index.js`
    
    ```

## ルーティング
Express.jsにおけるルーティングとは、HTTPリクエストのURLに応じて、アプリケーション内で実行する処理を決定する仕組みです。  
ルーティングは、HTTPメソッド（GET、POST、PUT、DELETEなど）とURLパターンによって定義されます。  
書き方は、`app.HTTPメソッド名() `です。  
app.get()、app.post()、app.put()、app.delete() などのHTTPメソッドに対応した関数を使用することができます。

###GET、POSTリクエスト
GET、POSTリクエストのルートを定義する例です。  
第1引数にあるパスのルートにリクエストが送られた際、第2引数のコールバック関数が呼び出されます。  
HTTPメソッドごとではありますが、ファイルの一番上から評価されるため、 * のパスが一番上にあるとそれしか返さなくなるため、記述の順番には注意。  
各コールバック関数の第1引数`req`はリクエストオブジェクト、第2引数`res`はレスポンスオブジェクトです。

```javascript
// GETリクエスト
app.get('/cats', (req, res) => {
        res.send('にゃーーー');
    });

app.get('/', (req, res) => {
        res.send('ここはホームページです');
    });
    
    // *はなんでもヒット　ワイルドカード的な
    app.get('*', (req, res) => {
        res.send('そんなパスは知らない');
    });
    
//POSTリクエストバージョン
    app.post('/cats', (req, res) => {
        res.send('にゃーーーpost');
    });
```
### URLパラメータを使用
URLパラメータを使用して動的なルートを定義することもできます。  
```javascript
app.get('/r/:name/:userID', (req, res) => {
    const { name, userID } = req.params;
    res.send(`<h1>${name}:${userID}</h1>`);
});
```
ここでは、`/r/:name/:userID `というパスを定義しています。
:id はURLパラメータで、`:`を付けることで、その右側がリクエストURLに含まれる任意の文字列にマッチします。
このURLパラメータは、`req.params` オブジェクトを介して取得することができます。  
そのため、nameとuserIDを分割代入しています。  
試しに上の関数に`console.log(req.params);`を追記し、`req.params`オブジェクトを出力します。  
アクセス先：`http://localhost:3000/r/express/utsumi`  
```
{ name: 'express', userID: 'utsumi' }
```
指定したパラメータと同じプロパティ名で値は実際にアクセスしたURLの文字列になっています。

### クエリストリングを使用
クエリストリング（URLパラメーター）とは、サーバーに情報を送るためにURLの末尾につけ足す文字列（変数）のことです。  
「?」をURLの末尾につけ、その次に「パラメーター＝値」をつけ、複数のパラメーターをつけたい場合は「&」を使用します。  
この形式で、サーバーに送信したいデータをURLにつけ加えることが可能です。  
クエリストリングを使った場合の「?」以降は`req.query`オブジェクトに格納されます。  
```javascript
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('検索するものが指定されていませんンンン!');
    } else {
        res.send(`<h1>「${q}」の検索結果</h1>`);
    }
});
```
アクセス先：`http://localhost:3000/search?q=HarryPotter`
結果：「HarryPotter」の検索結果



### 参考
[Express.js完全入門](https://qiita.com/ryome/items/16659012ed8aa0aa1fac)
