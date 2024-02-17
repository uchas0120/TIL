## JSONとは
ソフトウェア同士でデータのやり取りをするためのテキストベースの共通のフォーマットです。  
（JavaScript Object Notation）の略で、JavaScriptのオブジェクトの書き方を参考に作られていますが、オブジェクトとは似て非なるものです。  
オブジェクトのようにキーと値がセットになった形式となっています。  「{“キー”、”値”}」
```json
{
    “key1” : “value1”,
    “key2” : “value2”,
    “key3” : “value3”
}
```

## JSONが対応しているデータ型
JSONは次のデータ型に対応しています。
- 文字列
- 数値
- null
- boolead
- オブジェクト
-  配列  
Javascriptとは違い、`undefined`に対応していません。
そのため、`undefined`をJSONに変換したときは、(オブジェクトの中で発見された場合は) 省略されたり、(配列の中で見つかった場合は) null に変換されたりします。  
JSON.stringify() は JSON.stringify(() => {}) や JSON.stringify(undefined) のように「純粋」な値を渡した場合に undefined を返すことがあります。  
