## mongooseとは
mongooseとは、MongoDBを操作するためのnpmモジュールのことです。  
mongooseとは、ODM(OBJECT DATA MAPPER,OBJECT DOCUMENT MAPPER)の一つで、データベースから送られてくるデータをJavascriptのオブジェクトにマッピング（変換）してくれます。  
mongooseは、アプリケーションのデータをモデル化して、MongoDBにはないスキーマを定義することが可能で、データの検証、複雑なクエリをJavascriptで作成することが出来ます。  

MongoDBはシェルに入ってデータの操作をしますが、アプリケーションとデータのやり取りをするときはこの方法は使いません。  
アプリケーションとMongoDBがデータのやり取りをするためには、Driversというものをインストールする必要があります。  
Node.jsならNode.js用のDriversのインストールが必要です。  
ですが、今回はmongooseを使ってデータのやり取りを行います。  
インストール方法は`npm i mongoose`です。  
今回はバージョン5を使うため、`npm i mongoose@5`でインストールします。  
[公式ドキュメント](https://mongoosejs.com/docs/5.x/)

★流れ
- MongoDBに接続するためのコードを記述
- スキーマ（枠組み）を作成
- モデルを作成(その際にスキーマを設定)
- モデルにデータを入れる

## mongooseでMongoDBに接続
以下で接続します。  
index.js
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('コネクションOK!!');
    })
    .catch(err => {
        console.log('コネクションエラー！！');
        console.log(err);
    })
```
・`mongodb://localhost:27017`がmongodbのサーバーです。  
・shopAppというデータベースに接続します。なければ作成します。  
・mongooseコマンドはpromiseを返すため、`.then`や`.catch`を使えます。  

## スキーマ、モデルの作成
mongooseにはスキーマ、モデルという概念があります。  
- スキーマ：データの型や　デフォルトの値などのルールを決めることが出来ます。  
- モデル：コレクションのひな型。スキーマを中に入れる形で作成します。  

```javascript
const movieSchema = new mongoose.Schema({
// 省略形
    title: String,
    year: Number,
    score: Number,
    rating: String
})
const Movie = mongoose.model('Movie', movieSchema)
```
スキーマは省略しないとデフォルトの値などを設定できます。
```
```javascript
const movieSchema = new mongoose.Schema({
    title: {type: String},
    onSale: {type: Boolean,
            default: false}
```
## 複数のデータを挿入、実行
ファイルからデータを挿入してみます。  
MongoDBのように`insert`メソッドが使えます。  
他にも以下のようなメソッドがモデルで利用できます。  
https://mongoosejs.com/docs/5.x/docs/api.html
```javascript
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});

Movie.insertMany([
    {title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
    {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
    {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'RG'},
    {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
    {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'RG-13'},
]).then(data => {
    console.log('成功！！');
    console.log(data);
});
```
## データの検索
検索の前にまずはREPL(コマンドを実行すると即座に結果が反映される環境)にはいります。
```
$ node
$ .load index.js
```
検索はmongodbと同じ方法で、条件を指定しての絞り込みもできます。 
```
> <modelName>.find({}).then(data => console.log(data))
```
```
> Movie.find({}).then(res => console.log(res))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 387,
  [Symbol(trigger_async_id_symbol)]: 385
}
> [
  {
    _id: 65eff9768c578c461058f00c,
    title: 'Alien',
    year: 1979,
    score: 8.1,
    rating: 'R',
    __v: 0
  },
```
- 絞り込み
```
> Movie.find({year: {$lt: 1999}}).then(data => console.log(data))
```
- ID絞り込み
```
> Movie.findById('65eff347811689ebed5e9d96').then(data => console.log(data))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1422,
  [Symbol(trigger_async_id_symbol)]: 1418
}
> {
  _id: new ObjectId('65eff347811689ebed5e9d96'),
  title: 'Amadeus',
  year: 1986,
  score: 9.5,
  rating: 'R',
  __v: 0
```
## データの更新
https://mongoosejs.com/docs/5.x/docs/api.html#document_Document-update  
```
> Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then(res => console.log(res))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 716,
  [Symbol(trigger_async_id_symbol)]: 712
}
> {
  acknowledged: true,
  modifiedCount: 2,
  upsertedId: null,
  upsertedCount: 0,
  matchedCount: 2
}
```
`update`だけだと処理結果しか返ってこないです。  
`findOneAndUpdate`で結果を返してくれます。  
※第三引数に`{new: true}`を付けると更新後の情報が表示されます。
https://mongoosejs.com/docs/5.x/docs/api/model.html#model_Model.findOneAndUpdate
```
// titleにThe Iron Gianを含むデータのtitleをThe Iron Giantに変更。
> Movie.findOneAndUpdate({title: 'The Iron Gian'},{title: 'The Iron Giant'},{new: true}).then(res => console.log(res))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1235,
  [Symbol(trigger_async_id_symbol)]: 1231
}
> {
  _id: new ObjectId('65eff9768c578c461058f00d'),
  title: 'The Iron Giant',
  year: 1999,
  score: 7.5,
  rating: 'RG',
  __v: 0
}
```
最後に`<collectionName>.save()`でデータベースにデータを保存します。  
これをしないとデータベースに実際にデータは保存されないため注意です。  
保存されたかは`mongo`でシェルに入って確認するといいです。  

## 削除
https://mongoosejs.com/docs/5.x/docs/api/model.html  
`> Movie.deleteOne({title: 'Amelie'}).then(res => console.log(res))`  
findOneAndDelete()とかfindByIdAndDelete()もあります。

## 自分のメソッドを定義
mongooseでは自分でメソッドを定義することが出来ます。  
メソッドにはインスタンスメソッドとスタティックメソッドがあります。  
作成する際はどちらもスキーマから定義します。  
まずはデータを作成します。  
product.js
```javascript
const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String]
    });

const Product = mongoose.model('Product', productSchema);

    const bike = new Product({
        name: 'マウンテンb',
        price: 99000,
// スキーマで定義されていないプロパティは無視される
        color: 'red',
    });

    bike.save()
        .then(data => {
            console.log('成功！！');
            console.log(data);
        })
        .catch(err => {
            console.log('エラー！！');
            console.log(err);
        })
```
terminal
`$ node product.js`
### インスタンスメソッド
https://mongoosejs.com/docs/5.x/docs/guide.html#methods  
インスタンスメソッドとは、モデル（クラス）から生成されたインスタンスが呼べるメソッドのことです。  
インスタンス（コレクション）から呼び出すことが出来ます。  
マウンテンbにセール中か否かを切り替えるメソッドを作成します。  
```javascript
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
};
const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'マウンテンb'});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
}

findProduct();
```
`$ node product.js`をすると実行結果が返ってきます。  
セール中か否かを切り替える前と後の結果が出力されます。  
### スタティックメソッド
https://mongoosejs.com/docs/5.x/docs/guide.html#statics  
モデル（クラス）自身のメソッドです。  
個別のインスタンスへの参照はないため、thisとか使ってもインスタンス（コレクション）を参照しません。  
```
productSchema.statics.fireSale = function () {
   return this.updateMany({}, {onSale: true, price: 0});
}
Product.fireSale().then(res => console.log(res));
```

## Virtuals
https://mongoosejs.com/docs/5.x/docs/guide.html#virtuals  
仮想のプロパティを定義することが出来ます。  
ここでは、苗字と名前をくっ付けてフルネームというプロパティを定義しています。  
person.js
```javascript
const personSchema = new mongoose.Schema({
        first: String,
        last: String
    });

// virtuals
    personSchema.virtual('fullName').get(function () {
        return `${this.first} ${this.last}`;
    });

const Person = mongoose.model('Person', personSchema);

    const mee = new Person({
        first: 'kazuki',
        last: 'utsumi'
    });
```
確認  
```
$ node
$ .load person.js
> mee.fullName
'kazuki utsumi'
```

## ミドルウェア
https://mongoosejs.com/docs/5.x/docs/middleware.html  
特定のメソッドの処理前や後にしたい処理を指定できます。  
`pre`は処理前、`post`で処理後にやりたい処理を指定できます。  
ここではデータベースに保存`save()`する前とした後にログを出す処理を書いています。  
person.js
```javascript
 // ミドルウェア
    personSchema.pre('save', async function () {
        // console.log(this.fullName);
        console.log('今から保存するよー');
    })

    // ミドルウェア
    personSchema.post('save', async function () {
        console.log('保存したわよ');
    });
```
確認  
```
$ node
$ person.js
> mee.save()
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 270,
  [Symbol(trigger_async_id_symbol)]: 6
}
> 今から保存するよー
保存したわよ
```
