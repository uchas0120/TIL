## classとは
`class`とは、同じプロパティやメソッドを持つオブジェクトの設計図となるものです。  
`class クラス名`で使用してクラスを宣言し、そのクラス内でプロパティやメソッドを定義します。  
クラス内で定義されたメソッドは、そのクラスから作成されたオブジェクト（インスタンス）で使用することができます。  
やっていることはコンストラクタ関数と同じですが、クラスで定義する方が見やすく記述出来ます。  
また、インスタンスを作成する際に自動で実行してくれるコンストラクタというメソッドを設定でき、インスタンス固有の初期化処理を行えます。

## 書き方
以下が`class`の構文です。  
クラスの中で定義されたメソッドはprototypeオブジェクトに定義されます。  
そのため、コンストラクタ関数のようにいちいち`コンストラクタ関数.prototype.メソッド`と記述する必要がありません。
```javascript
// クラス名の最初は大文字にするのがマナー
class MyClass {
constructor() {
// コンストラクタ: インスタンスを作成する際に実行されるメソッド
// インスタンス固有の初期化処理を行う
}
// メソッド1の定義
method1() {
}
// メソッド2の定義
method2() {
}
}
```
## 実際に使ってみる
```javascript
class Myname {
    constructor(firstName, lastName) {
        // this = {};
	this.firstName = firstName;
	this.lastName = lastName;
	// return this;
    }
    // クラスの中で定義された関数はprototypeオブジェクトに定義されるようになる。
    fullName() {
    const { firstName, lastName } = this;
	return `My name is ${firstName} ${lastName}.`;
    }
}

// インスタンスを作成したため、コンストラクタが実行される。
const name1 = new Myname('Hermione', 'Granger');
name1.fullName();
// 'My name is Hermione Granger.'
```
`Myname`というクラスを作成しました。  
クラスの中で定義されたfullName関数はちゃんとprototypeオブジェクトの中にあります。  
`name1`を見てみるとそれがわかると思います。

#### 参考
[【徹底解説】JavaScriptのclassを理解する](https://qiita.com/asameshiCode/items/4c710ae94242f8bbe890)
