## EJSとは
EJSとは、JavaScriptで使用されるテンプレートエンジンです。   
EJSを利用することでHTMLをヘッダーやフッターで分割して管理することやHTML内でループ処理を書いて簡単に記述できるなどを実現できます。  
表記方法はHTMLと同じで、Javascript を記述したいときは`<%=%>`や`<% %>`などの特殊な書式を使います。  
拡張子は.ejsです。  

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
