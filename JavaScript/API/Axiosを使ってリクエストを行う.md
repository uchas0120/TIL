## Axiosとは
 Axios とは、自分のサーバーやサードパーティのサーバーに対して、データをフェッチするリクエストを行うことができる Promise ベースの HTTP ライブラリです。  
 GET 、 POST 、 PUT/PATCH 、 DELETE などのリクエストを、行うことができます。  
 Axiosには主に以下の特徴があるため、Fetchに比べて柔軟に使うことが出来ます。
- ブラウザから XMLHttpRequests を作成する
- Promise API をサポート
- JSON データの自動変換
- リクエストとレスポンスのデータを変換
- リクエストをキャンセル

## 実際にリクエストを行う
icanhazdadjokeというアメリカンジョークを自動で生成してくれるサイトにリクエストを行います。
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Axios</title>
</head>
<body>
<h1>クリックでジョークを作成</h1>
<button>作成</button>
<ul id="jokes"></ul>

    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

```javascript

```
