  要素の位置を指定したり固定することが出来るプロパティ

  ##  書き方
 ```
セレクタ {
    position : 値;
    top: 〇〇px;
    left: 〇〇px;
    right: 〇〇px;
    buttom: 〇〇px;
}
 ```
  

  ## 値
  - `static`：初期値。位置を変えられず、`z-index`も指定できない。

  - `relative`：現在の位置を基準に相対的な位置を決める。  
  基準としたい要素に`relative`を記述する。

  - `absolute`：親要素を基準に絶対的な位置を決める。  
  単体では使わず、親要素の`relative`を基準として位置を決めることが出来る。

  - `fixed`：スクロールしても動かずに固定される。  ホームページのナビゲーションメニューによく利用される。  
    基準はビューポート（画面）。

  - `sticky`：通常時はabsoluteと同じ。スクロールして画面外に出そうになるとfixedのように固定される。

### 参考文献
[MDN | position](https://developer.mozilla.org/ja/docs/Web/CSS/position)  
[CSSのpositionを総まとめ！absoluteやfixedの使い方は？](https://saruwakakun.com/html-css/basic/relative-absolute-fixed)  
[【CSS】position使い方まとめ！種類一覧と注意点も解説](https://jajaaan.co.jp/web-production/frontend/position/)
