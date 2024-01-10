平行移動（translate）・回転（rotate）・拡大縮小（scale）・斜傾変形（skew）の4つの値があり、この4つの変形操作を組み合わせることで自由に要素を動かせることが可能。

## 値
- `translate`：要素の移動が出来る。  
例：`〇〇 { transform: translate(10px, 10px);}`

- `rotate`：要素を回転させる。数値はdeg(角度)をつける。  
例：`〇〇 { transform: rotate(30deg);}`

- `scale`：要素の拡大縮小。数値は数字を記述するだけでその倍数変化するため単位は不要。  
例：`〇〇 { transform: scale(2.0, 1.5);}`

- `skew`：要素の斜傾変形。数値はdeg(角度)をつける。  
例：`〇〇 { transform: skew(30deg, 10deg);}`

複数の値を記述する際はスペース区切りにすること。  
中の要素にも適用（継承はなし）される。  
X軸とY軸を指定する値は個別に設定することも可能。  
例：`〇〇 { transform: translateX(10px);}`  

### 参考文献
[もう誤魔化さない！CSS Transform完全入門(2D編)](https://ics.media/entry/210311/)  
[【初学者向け】使い方を解説！transformで動きをつける](https://webukatu.com/wordpress/blog/21806/)
