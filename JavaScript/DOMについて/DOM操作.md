## DOMとは？
DOMとは「Document Object Model」の略称で、プログラムから HTML を自由に操作するための。
まず、ブラウザがWebページを読み込む仕組みは以下のようになっている。
1. Web ブラウザは、Web サーバから受け取った HTML 文書を解析し、DOM（Document Object Model）と呼ばれるデータ構造に変換する。
2. DOM に CSS を解析して得られたスタイルルールが画面に描画（レンダリング）される。
DOM は、HTML が持つ要素の親子関係を、ツリー構造で表現している。
そこで JavaScript を使うと、ブラウザ内部にある DOM にアクセスして、その内容を書き換えることができる。  
DOM が書き換えられると、自動的に画面の内容が新たな DOM に合わせて再描画される仕組みになっている。

## DOM操作
Javascriptで DOM の操作をする方法を順番に記載していく。
### DOMの取得
#### ID,タグ,クラス属性による検索
- getElementById：引数に指定された id 属性を持つ要素ノードを、DOM 全体から検索する。id なので**単一の要素を返す。**
```javascript
const text = document.getElementById('text');
```
- getElementsByTagName：引数に指定されたタグを持つ要素ノードを、DOM 全体から検索し、**一致する要素すべてを返す。**
```javascript
const text = document.getElementsByTagName('p');
```
- getElementsByClassName：引数に指定されたクラスを持つ要素ノードを、DOM 全体から検索し、**一致する要素すべてを返す。**
```javascript
const text = document.getElementsByClassName('text');
```

#### セレクターによる検索
- querySelector：セレクター文字列を引数に取り、合致する要素を検索する。HTML文書を上から順に検索していき、**一番最初に見つけた要素を返す。**  
このセレクター文字列は、CSS で用いるセレクターと同じ。id なら`#`を、class なら`.`を付ける。
```javascript
const text = document.querySelector('#text');
```
- querySelectorAll：セレクター文字列を引数に取り、合致する要素を検索する。合致した要素をすべて返す。
具体的には、NodeList オブジェクトが返される。
```javascript
const text = document.querySelectorAll('.text');
```
NodeList はノードのコレクション（いくつか集まったもの）です。配列のようなイメージだが、厳密には違う。
```javascript
document.querySelectorAll('p');
// NodeList(2) [p, p]
//  0: p
//  1: p
//  length: 2
//  [[Prototype]]: NodeList
```
