ターゲットに特定のイベント(動作)が発生したときにどのような処理をさせるかを定義することが出来ます。  
イベントが発生することを**イベントリスナー**といい、 javascript には予め様々なイベントが定義されています。  
下記にイベント一覧を置いておきます。  
(MDN | イベントリファレンス)[https://developer.mozilla.org/ja/docs/Web/Events]  

## addEventLisntener
ターゲットに特定のイベントが配信されるたびに呼び出される関数(イベントハンドラ)を設定します。   
イベントハンドラは複数設定することができます。  
また、オプションも設定できるため、`onclick`などでイベントを記述するよりも柔軟に処理を決めることが出来ます。
#### 書き方
```javascript
対象要素.addEventListener( イベントの種類, 関数, options )
対象要素.addEventListener( イベントの種類, 関数, useCapture )
```
※`options`と`useCapture`は省略可。
`options`：対象のイベントリスナーの特性を指定することが出来る。  
`useCapture`：DOMツリー内でイベントをどのように伝播するかを決める。  
デフォルト値は`false`で、子要素から親要素へと伝播します。

### 記述例
```html
<button id="btn">ボタン</button>
```
```javascript
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
    console.log('クリックしました！！');
});
```

