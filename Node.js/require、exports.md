## 概要
あるファイルに定義した関数や変数、クラスを他のファイルで使いたいとき、Node.jsでは**exportsで公開してrequireで読み込む**方法があります。  
関数や変数などをわかりやすくするためにファイルごとに分けたり、パッケージをインストールして使いたい時などに利用します。  
関数や変数などをファイルごとに分けることを**モジュール化**といいます。

## export
まず、使いたい関数などを定義しているファイルを`exports`で公開する必要があります。  
`module.exports`で中に使いたいものを入れます。  
`module.exports`はオブジェクトのため、中に入れることが出来ればいいので様々な書き方があります。
```javascript:math.js
// 関数を定義
const add = (x, y) => x + y;
const square = x => x * x;
// exportsで公開
module.exports.add = add;
module.exports.square = square;
```
#### 他の記述方法
- exportsオブジェクトにオブジェクトを入れてもOKです
```javascript
const math = {
    add: add,
    square: square
};
module.exports = math;
```
- module.は省略してもOKです。  
理由は、`exports = module.exports`と`export`に代入されているからです。  
そのため`exports`の中身を変えてしまうと動作しません。
```javascript
exports.add = add;
exports.square = square;
```

## require
公開したものを読み込んで使いたい場合、`require`を使います。  
書き方は以下です。  
`const 変数 = require(パッケージ名)`  
パスを書くときは相対パスで書くようにします。  
`const 変数 = require(モジュールのファイルパス)`
例
```javascript
const math = require('./math');
console.log(math.square(9));
```

- 分割代入も可能です
```javascript
const { add, square } = require('./math');
console.log(square(9));
```


