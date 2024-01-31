変数の宣言に使用するvar, let, constだが、それぞれ性質が違うため、上手く使い分けるようになる必要がある。  
## var, let, constの違い  
|          | var          | let              | const            | 
| :--------: | :------------: |  :------------:  |  :------------:  | 
| 再宣言   | 〇           | ✖               | ✖               | 
| 再代入   | 〇           | 〇               | ✖               | 
| スコープ | 関数スコープ | ブロックスコープ | ブロックスコープ | 
| 巻き上げ | undefined    | エラー           | エラー           | 
### 再宣言
再宣言とは、同じ変数名で再度宣言すること。  
varは再宣言が出来るが、気づかずに同じ変数名で再宣言した結果、上書きされてしまうといった事故が起こる可能性があるため使うべきではない。

###  再代入
再代入とは、値が入っている変数に再度代入すること。  
var, letは出来て、constは出来ない。

### スコープ
スコープとは、変数を使用できる範囲のこと。  
大きく分けてグローバルスコープとローカルスコープがあり、ローカルスコープにはブロックスコープと関数スコープの2つがある。
![scope](https://github.com/uchas0120/TIL/blob/main/images/scope.png)
- グローバルスコープ：あらゆる場所で利用可能で、全ての場所からアクセス出来る。
- ローカルスコープ：｛｝の中など、特定の範囲でのみ利用可能で、上の階層が自分を参照および上書きをすることは出来ない。  
  **※自分が上の階層を参照することは可能。**
  - 関数スコープ：関数内で利用可能で、入れ子構造で複数使用することは出来ない。
  - ブロックスコープ：　ifやforなどの｛｝で囲まれたブロックごとに作られるスコープ内で利用可能。  
※ブロックごとに同じ変数名を使用でき、上の階層から上書きがされない。

letはブロックスコープのため、上の階層からの参照および上書がされない。  
```
function myFunc() {
    let local = '関数スコープ';
    console.log(local); // 関数スコープ

    if (true) {
        let local = 'ブロックスコープ'; // ブロックが異なるため、同じ変数名を再度宣言できる。
        console.log(local); // ブロックスコープ
    }
// 上書きされず、外側のブロックの値で保たれている。
    console.log(local); // 関数スコープ
}
```

一方、varは関数スコープのため、入れ子の内側での代入が外側にも影響されてしまう。  
意図しない上書きがされてしまうため、使うべきではない。
```
function myFunc() {
    var local = '関数スコープ';
    console.log(local); // 関数スコープ

    if (true) {
        var local = 'ブロックスコープ'; // ここで上書きされてしまう。
        console.log(local); // ブロックスコープ
    }
// 上書きされたため、内側のブロックの値になってしまう。
    console.log(local); // ブロックスコープ
}
```

### 巻き上げ
変数の有効範囲が宣言を行う前にも及ぶことです。  
javascriptでは、スコープの中で宣言した変数はスコープの先頭で宣言されたものとみなされる。(代入はされない。)  
下記の例では、一つ上の階層の「1」は出力されず、エラーが発生している。  
これは、`let test = 2;`の`let test;`が巻き上げられているからです。  
※エラーは「初期化前に「test」にアクセスできません」です。
```
if (true) {
    let test = 1;
    console.log(test); // 1

    if (true) {
        console.log(test); // ReferenceError: Cannot access 'test' before initialization
        let test = 2;
    }
}
```
一方、varで同じように宣言すると、「undefined」が初期値として代入され、エラーを吐きません。  
```
if (true) {
    let test = 1;
    console.log(test); // 1

    if (true) {
        console.log(test); // undefined
        let test = 2;
    }
}
```

## 結局何を使用するのがいいのか
基本はconst、for文などの繰り返し構文などで再代入が必要な場合はletを使用する。  
varは下記の特徴から思わぬ上書きや巻き上げ時のバグが発生する可能性から使わない方がよい。
- 再宣言や再代入ができるため、同じスコープや下層のスコープ内で何度も宣言や代入が可能。
- 変数の巻き上げによってエラーを吐かない。

#### 参考
[【JavaScript】let、const、varの違いと使い分け方法を徹底解説](https://techplay.jp/column/1619)  
[const, var, let の違いをざっくりメモ](https://qiita.com/Lyn131/items/6c2d3dab541d65eb1897)  
[【javascript】var / let / constの違いや使い分け方を初心者向けに徹底解説！](https://tagnote.net/javascript/let_var_const-js/#%E6%9C%80%E5%BE%8C%E3%81%AB)  
[【javascript】変数と定数のスコープについて初心者向けに徹底解説！](https://tagnote.net/javascript/scope-js/)  
