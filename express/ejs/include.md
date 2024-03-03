## include
ejsファイルでは、コードをテンプレート化することが出来ます。  
やり方は、テンプレートしたい部分を他のファイルに書いたあと、そのファイルを読み込むだけです。  
 書き方は、`include`を使い、`<%- include('ファイルパス', {user: user}); %>`と指定するだけです。  
 第二引数の渡したいオブジェクトはなくてもいいです。

## 使ってみる
テンプレート用の partialsフォルダを作成後、その中にヘッダーをテンプレート化した head.ejs をいれています。  
その head.ejs をhome.ejsに読み込むことで、ヘッダーをレンダリングさせることが出来ます。  
- index.js
```javascript
const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('リクエストをポート3000で待受中...');
});
```
- partials/head.ejs
```ejs
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        My siteeeeeeeee
    </title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- bootstrapがjQueryを使っているため、Bootstrapよりも前に書くこと -->
    <script src="/js/jquery-3.7.1.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
</head>
```
- views/home.ejs
```ejs
// ヘッダー部分を読み込み。
<%- include('partials/head'); %>

<body>
    <%- include('partials/navbar'); %>

    <h1>ホームページです。</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur et alias sapiente, deserunt quibusdam itaque numquam accusamus dicta reprehenderit, minus officia, accusantium error eum nostrum! Est voluptatum nihil inventore ad!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur recusandae beatae harum! Molestias nesciunt repellat iure perspiciatis ex similique nobis voluptatum, quos quidem totam voluptatem maxime animi pariatur veniam dicta.
    Inventore laudantium hic labore voluptatibus nobis fugit molestias quos veritatis dolorem necessitatibus, architecto reiciendis facilis accusantium, aliquam suscipit quis voluptatum. Minus minima cupiditate nulla eligendi ea doloribus voluptates facere inventore?</p>
</body>
</html>
```
