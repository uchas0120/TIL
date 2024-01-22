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
// sllice(削除開始インデックス, 削除する要素数, 追加する要素1, 追加する要素2, ..., 追加する要素N)
nums.splice(1,3,100); // インデックス1から3つ削除し、100を追加する。
nums; // [1, 100, 5]

```
