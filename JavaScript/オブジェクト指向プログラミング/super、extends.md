## extends
`class`キーワードでクラスを作成できますが、そこで定義したプロパティやメソッドを別のクラスでも使えるようにできます。  
これを「クラスの継承」といいます。
書き方は、クラスを作成する際に`extends`キーワードの後に継承したいクラス名を記述するだけです。  
`class クラス名 extends 継承したいクラス名{}`

#### 実際に使ってみる
```javascript
class Dormitory{
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	who() {
		return `私は${this.name}、${this.age}歳です。`;
	}
}

// extendsキーワードでDormitoryクラスを継承
class Gryffindor extends Dormitory{
	password() {
		return 'フォルチュナ・マジョール';
	}
}

const hermione = new Gryffindor('Hermione Granger', 11);
hermione.who();
// 私はHermione Granger、11歳です。
```
まず、親となる`Dormitory`クラスを定義し、コンストラクタとメソッドを記述します。  
次に、子となる`Gryffindor`クラスを定義し、`extends`キーワードで`Dormitory`クラスを継承します。  
そうすることで、`Gryffindor`クラスのインスタンスを作成したときにコンストラクタが実行されたり、`who`メソッドが利用できるようになります。

#### 気を付けること
継承元と自分自身の両方に同じメソッドがあった場合、自分自身のメソッドが優先されるため注意が必要です。  
これは、インスタンスの動きとしては、作成元のクラス→親クラス→そのまた親クラス　と順番に見ていくからです。

## super
親クラスのコンストラクタを呼び出したい場合、`super`キーワードを使います。  
親クラスのコンストラクタをカスタマイズしたいときに利用します。  
書き方はコンストラクタを設定した中で`super();`と記述するだけです。  
**「this」よりも先に呼び出す必要があるため注意。**

#### 実際に使ってみる
```javascript
class Dormitory{
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	who() {
		return `私は${this.name}、${this.age}歳です。`;
	}
}

class Gryffindor extends Dormitory{
	constructor(name, age, gender) {
// superキーワードでコンストラクタを呼び出し
		super(name, age);
// 新しくgenderプロパティを定義
		this.gender = gender;
	}
	password() {
		return 'フォルチュナ・マジョール';
	}
}

const hermione = new Gryffindor('Hermione Granger', 11, 'women');
hermione.gender;
// women
```
superキーワードで継承元(親)のコンストラクタを呼び出しており、そこにgenderパラメータ、プロパティを設定しています。  
インスタンスでもgenderプロパティが存在していることがわかります。
