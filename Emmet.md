Emmet とは、HTML や CSS を省略記法で入力できるプラグインのこと。  
vscodeでは初めから使えるようになっている。  
ここではよく使う省略記法を紹介する。

## 記述方法
### 要素 + Tab or Enter で要素を作成
divやh1などの要素を入力後、Tab or Enter で開始タグと閉じるタグがセットになって変換される。  
```
div
```   
```
<div></div>
```

### 「>」で要素を階層化 
要素>要素　でネストを展開する。  
listやdivなどで階層を作りたいときに役に立つ。  
```
ul>li
```
```
<ul>
	<li></li>
</ul>
```
### 「*」で要素の複製
要素*複製したい数 で同じ要素を複数作成する。
```
lu>li*3
```
```
<ul>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

### 「.」でclassの付与
. の後に付けたいclass名を記述すればclassが付与される。  
**要素を書かずに.class名だと要素は`div`になる。**
```
h1.title
```
```
<h1 class="title"></h1>
```

### 「#」でidの付与
#の後に付けたいid名を記述すればidが付与される。
```
h2#subTitle
```
```
<h2 id="subTitle"></h2>
```

### 「$」で連番を展開
連番にさせたいidやclassに「$」を付けると、その部分が連番になる。
```
ul>li#hoge$*3
```
```
<ul>
  <li id="hoge1"></li>
  <li id="hoge2"></li>
  <li id="hoge3"></li>
</ul>
```
### 「+」で兄弟要素を展開
```
h1+h2
```
```
<h1></h1>
<h2></h2>
```

### 「()」でグループ化して展開
「()」で囲んでから「*」でまとめて複製することが出来る。
```
table>(tr>td*2)*3
```
```
<table>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
```

### 「^」で一つ上の階層に戻る
```
ul>li*3^div
```
```
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
<div></div>
```

### {}でテキストを挿入
```
h1{タイトル}
```
```
<h1>タイトル</h1>
```

### ダミーテキストを挿入
lorem と入力するだけでダミーのテキストを挿入できる。  
* で複製も可能。
```
lorem
```
```
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur unde molestiae et quas sint esse. Harum atque similique sint placeat voluptatibus aliquid hic odio dolorem? Corporis ex dolores culpa?
```

### HTML5のひな型
!と「Tab」キー or「Enter」キーでHTMLのひな型が作成される。
```
!
```
```<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
```

### 備考
CSSでの省略記法もあるが、詳しくは下記に記載されているため要参照。
[cheat-sheet](https://docs.emmet.io/cheat-sheet/)

#### 参照
[爆速コーディング！Emmetの使い方・書き方とVSCodeの設定を解説](https://junpei-sugiyama.com/emmet/#st-toc-h-12)  
[Emmetとは？これだけ知っておけばOK！](https://zenn.dev/miz_dev/articles/6cac5f2e32398d)  
[]()
