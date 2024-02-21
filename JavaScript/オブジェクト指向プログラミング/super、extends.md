## クラスの継承
`class`キーワードでクラスを作成できますが、そこで定義したプロパティやメソッドを別のクラスでも使えるようにできます。  
これを「クラスの継承」といいます。
書き方は、クラスを作成する際に`extends`キーワードの後に継承したいクラス名を記述するだけです。  
`class クラス名 extends 継承したいクラス名{}`

## 実際に使ってみる
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
まず親となる`Dormitory`クラスを定義し、コンストラクタとメソッドを記述します。  
次に子となる`Gryffindor`クラスを定義し、`extends`キーワードで`Dormitory`クラスを継承します。  
そうすることで、`Gryffindor`クラスのインスタンスを作成したときにコンストラクタが実行されたり、`who`メソッドが利用できるようになります。
