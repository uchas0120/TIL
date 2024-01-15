Emmet とは、HTML や CSS を省略記法で入力できるプラグインのこと。  
vscodeでは初めから使えるようになっている。
ここではよく使う省略記法を紹介する。

## 記述方法
#### 要素 + Tab or Enter
divやh1などの要素を入力後、Tab or Enterで開始タグと閉じるタグをセットになって変換される。  
`div`   
`<div></div>`

#### 要素 ＞ 要素 
listやdivなど、階層を作りたいときに役に立つ。  
`ul>li`  
```<ul>
	<li></li>
</ul>
```
#### HTML5のひな型
!と「Tab」キー or「Enter」キーでHTMLのひな型が作成される。
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

