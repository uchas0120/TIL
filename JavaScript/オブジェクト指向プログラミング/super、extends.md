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

class Gryffindor extends Dormitory{
password() {
		return 'フォルチュナ・マジョール';
	}
}

class Hufflepuff extends Dormitory{
	barrel() {
		return '樽の2列目真ん中の底を2回「ヘルガ・ハッフルパフ」のリズムで叩く。';
	}
}
```
