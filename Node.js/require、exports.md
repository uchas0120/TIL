## 概要
あるファイルに定義した関数や変数、クラスを他のファイルで使いたいとき、Node.jsでは**exportsで公開してrequireで読み込む**方法があります。  

## export
まず、使いたい関数などを定義しているファイルを`exports`で公開する必要があります。  
`module.exports`で中に使いたいものを入れます。  
`module.exports`はオブジェクトのため、中に入れることが出来ればいいので様々な書き方があります。
```javascript;math.js
// 関数を定義
const add = (x, y) => x + y;
const square = x => x * x;
// exportsで公開
module.exports.add = add;
module.exports.square = square;
```
