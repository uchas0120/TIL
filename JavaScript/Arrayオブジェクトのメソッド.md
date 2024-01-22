## 要素を追加、削除するメソッド(push/pop/unshift/shift/splice)
```
const nums = [1, 2, 3];

// 末尾に追加する。
nums.push(4);
nums; //  [1, 2, 3, 4]

// 末尾を取り除く。
nums.pop();
nums; //  [1, 2]


- unshift
先頭に追加する。

const nums = [1, 2, 3];
nums.unshift(0);
nums; //  [0, 1, 2, 3, 4]


- shift
先頭を取り除く。

const nums = [1, 2, 3];
nums.unshift();
nums; //  [2, 3, 4]
```
