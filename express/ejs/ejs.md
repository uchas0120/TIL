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
index.js
```
app.get('/cats', (req, res) => {
    const cats = [
        'タマ', 'タタ', 'トト', 'ドド'
    ];
    res.render('cats', {cats});
});
```
cats.ejs
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
