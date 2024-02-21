## prototypeとは
prototypeとは、すべてのオブジェクトに存在するテンプレートのようなもので、オブジェクトを作成する際はそのテンプレートが参照(継承)されるようになっています。  
prototypeオブジェクトの中にはメソッドなどが入っており、それを参照しているため、自分で作成しなくともメソッドを利用することが出来ています。  
すべてのオブジェクトの継承元となっているのは`Object`です。  
`Object`のprototypeオブジェクトは、ArrayやFunctionなどの他のオブジェクトで利用できるプロパティやメソッドを提供しています。


## オブジェクトはどこにあるのか
以下でpushメソッドを使用していますが、もちろん自分では定義していませんし、array配下にもありません。  
これは、`Object`のprototypeオブジェクトにpushメソッドが定義されているからです。
```javascript
const array =  [1, 2, 3];
array.push(4)
```
内部のプロパティを`Object.getPrototypeOf()`メソッドで見てみると、見慣れたメソッドがたくさんあるのがわかります。  
このprototypeオブジェクトにpushメソッドがあるため、自分で定義しなくとも利用できるわけです。
```javascript
Object.getPrototypeOf(array);
```
