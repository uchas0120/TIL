- 状態を変化させる時の動きや、それにかかる時間を設定できる。
- :hover や :activeのような疑似クラスを定義する際に使うことが多い。
- 疑似クラスにTransitionを設定するのではなく、変化させたい要素に記述する。

## 書き方
**共通事項：プロパティや秒数を複数指定する場合はカンマ区切りで記述する。**
- `transition-property`：効果を付けたいプロパティを指定する。  
例：`〇〇{transition-property:background-color;}`  
**※対象のプロパティは記載すること。記載しない、もしくはallだと将来的に追記したプロパティにも作用してしまうため。**  

- `transition-duration`：変化が完了するまでの時間を指定する。  
例：`〇〇{transition-duration: 6s;}`

- `transition-delay`：変化が始まるまでの時間を指定する。  
例：`〇〇{transition-delay: 3s;}`

- `transition-timing-function`：変化するまでのアニメーションを関数で指定する。  
例：`〇〇{transition-timing-function: linear;}`
[easings.net](https://easings.net/)で好きな動きをコピペするとよさそう。

- `transition`で一括指定：  
```
/* 1 つのプロパティへの適用 */
/* プロパティ名 | 所要時間 */
transition: margin-right 4s;

/* プロパティ名 | 所要時間 | 待ち時間 */
transition: margin-right 4s 1s;

/* プロパティ名 | 所要時間 | イージング関数 */
transition: margin-right 4s ease-in-out;

/* プロパティ名 | 所要時間 | イージング関数 | 待ち時間 */
transition: margin-right 4s ease-in-out 1s;

/* 2 つのプロパティへの適用 */
transition:
  margin-right 4s,
  color 1s;

/* 変化するすべてのプロパティへの適用 */
transition: all 0.5s ease-out;
```
