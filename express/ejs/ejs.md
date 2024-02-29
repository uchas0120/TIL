## EJSとは
EJSとは、JavaScriptで使用されるテンプレートエンジンです。   
EJSを利用することでHTMLをヘッダーやフッターで分割して管理することやHTML内でループ処理を書いて簡単に記述できるなどを実現できます。  
表記方法はHTMLと同じで、Javascript を記述したいときは`<%=%>`や`<% %>`などの特殊な書式を使います。  
拡張子は.ejsです。  
[EJS 公式ドキュメント](https://ejs.co/#install)

## 利用方法
- 適当にプロジェクトを作成して`npm init -y`で初期化した後、インストールします。
```
$ npm install ejs
```
- setメソッドで"view engine"というconfigに対し、テンプレートエンジンを指定します。
※expressはレンダリングの際にデフォルトで views フォルダを見に行くようになっているためです。  
views フォルダがないと思うので作成します。
```javascript
app.set("view engine", "ejs");
```
- renderメソッドでレンダリングを行います。
※デフォルトだと views ディレクトリからの相対パスになることに注意。  
viewsフォルダーの中に`home.ejs`の作成が必要なため実施してください。
```javascript
const express = require('express');
const app = express();
// expressはデフォルトでviewsフォルダーを見に行くため、その中にhome.ejsを作成。
app.get('/', (req, res) => {
    res.render('home');
});
```

## 基本構文
下記でJavascriptを囲んで書いてあげます。  
- 開始タグ
    - スクリプトタグ : <%
    - 出力タグ : <%=
    - 出力タグ（アンエスケープ） : <%-
    - コメント : <%#
- 終了タグ
    - 終端タグ : %>
    - 終端タグ（改行削除） : -%>
- その他
    - エスケープ : <%%

出力タグは単純に出力したいときに使います。  
```ejs
 <h1>ランダムな値：<%= Math.floor(Math.random() * 10) + 1 %></h1>
```
一方、スクリプトタグは条件文やループなど、実際にページに出力しないロジックなどを書くときに使います。  
 ```ejs
  <h1>ランダムな値：<%= Math.floor(Math.random() * 10) + 1 %></h1>
    <% if (num % 2 !== 0) { %>
        <p>奇数！</p>
    <% } else { %>
        <p>偶数！</p>
   <% }%>
```

## 使ってみる
ループ文を書いてみます。  
- index.js
```
const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.get('/allCats', (req, res) => {
    const cats = [
        'タマ', 'タタ', 'トト', 'ドド'
    ];
// オブジェクトでキーと値の名前が同じな場合、値を省略できる。
// {cats: cats}と同じ。
    res.render('allCats', {cats});
});
```
- views/allCats
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cats</title>
</head>
<body>
    <ul>
        <% for (let cat of cats) { %>
            <li><%= cat %></li>
        <% } %>
    </ul>
</body>
</html>
```
このように出力したい部分は出力タグ、ロジックの部分はスクリプトタグを使います。

## 静的ファイルを読み込む場合
[Express での静的ファイルの提供](https://expressjs.com/ja/starter/static-files.html)
静的ファイルを公開し、ejsファイルと紐づけることでレスポンスでHTML,CSS,JSのファイルを返すことが出来ます。  
public というディレクトリー内のイメージ、CSS ファイル、JavaScript ファイルを提供するには、次のコードを使用します。
書き方：`app.use(express.static('puplic'));`  
※`app.use`メソッドはすべてのHTTPリクエストで処理を走らせることが出来ます。  
ディレクトリを見に行くため、その配下にHTML,CSS,JSのファイルを置くことでレンダリングの際に読み込んでくれます。 
- index.js
```javascript
const express = require('express');
const app = express();
const path = require('path');

// pathを追加している。
// staricメソッドを利用し、 __dirname で絶対パスを取得。
// そこから puplic ディレクトリを見に行くよう設定している。
// そのため、どこのディレクトリにいても静的ファイルをレンタリングしてくれる。
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home');
});
```
- public/app.css
```css
body {
    background-color: red;
}
```
- views/home.ejs
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ホーム</title>
    <link rel="stylesheet" href="/app.css">
</head>
<body>
    <h1>ホームページです。</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur et alias sapiente, deserunt quibusdam itaque numquam accusamus dicta reprehenderit, minus officia, accusantium error eum nostrum! Est voluptatum nihil inventore ad!</p>
</body>
</html>
```


