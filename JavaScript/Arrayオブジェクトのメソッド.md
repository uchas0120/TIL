## 要素を追加、削除するメソッド(push/pop/unshift/shift/splice)
```javascript
const nums = [1, 2, 3, 4, 5];

// push()：末尾に追加する。
nums.push(6);
nums; //  [1, 2, 3, 4, 5, 6]

// pop()：末尾を取り除く。
nums.pop();
nums; //  [1, 2, 3, 4, 5]

// unshift()：先頭に追加する。
nums.unshift(0);
nums; //  [0, 1, 2, 3, 4, 5]

// shift()：先頭を取り除く。
nums.unshift();
nums; //  [1, 2, 3, 4, 5]

// splice()：要素の追加、削除、置き換えをする。
// splice(削除開始地点, 削除する要素数, 追加する要素1, 追加する要素2, ..., 追加する要素N)
nums.splice(1,3,100); // インデックス1から3つ削除し、100を追加する。
nums; // [1, 100, 5]
```

## 配列にアクセスして結果を返すメソッド（既存の配列は変更せず新しい配列を返す）
```javascript
const nums = [1, 2, 3, 4, 5];

// concat()：2 つ以上の配列や要素を結合する。
const nums2 = [6, 7, 8];
nums.concat(nums2); // [1, 2, 3, 4, 5, 6, 7, 8]

// join()：指定要素を間に挟んだ文字列を返す。何も指定しなければカンマ。
nums.join('-'); // '1-2-3-4-5'

// slice()：指定した範囲の配列をコピーして返す。
// slice(開始地点, 終了地点)　終了地点のインデックスは含まれない。
nums.slice(1,4); // [2, 3, 4]
```
## 並べ替えのメソッド
```javascript
const nums = [1, 2, 3, 4, 5];

// reverse()：反転させる。
nums.reverse();
nums; // [5, 4, 3, 2, 1]

// sort()：並べ替える。デフォルトは昇順。
nums[2] = 100; // [1, 2, 100, 4, 5]
// 整数の配列を意図通りに並び替えるには、引数として比較関数を渡す必要がある。
nums.sort(); // [1, 100, 2, 4, 5]
```

## 要素の検索
```javascript
const nums = [1, 2, 3, 4, 5];

// includes()：特定の要素が配列に含まれているかどうかを true または false で返す。
nums.includes(2); // true

// indexOf()：引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返す。存在しない場合は -1 を返す。
nums.indexOf(5); // 4
```
## その他の便利メソッド
### forEachメソッド
コールバック関数を受け取り、配列の要素毎に関数が呼ばれる。
for...of構文と同じ動作をする。  
```javascript
const number = ['one', 'two', 'three', 'four', 'five'];
number.forEach(function(num) {
    console.log(num);
})

// one
// two
// three
// four
// five
```


---
#### 参考
[MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)  
[Arrayの基礎知識と各メソッドの使用方法](https://qiita.com/sh19910711/items/3c0776fd8cc1797f955d)


