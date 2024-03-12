## MongoDBとは
NoSQLのドキュメント指向型データベースです。  
データを「ドキュメント」に JSON に類似した BSON 形式で格納して管理します。  
データベースの処理・操作はJavaScriptで行えます。  
NoSQLとは...「リレーショナルデータベース」(RDB)とはまったく異なる方法でデータを処理・操作するデータベースのことです。  
RDBはデータをExcelのような表形式で管理します。対してNoSQLはそのような形式でデータを管理しないため、自由度が高いです。  
ちなみに、NoSQLは「SQLを使わない(No)」という意味ではなく「SQLだけではない」を意味しています。  
ドキュメント指向型とは...キーに紐づくデータをドキュメント形式で格納できます。書き方の自由度が最も高く、複雑な要素を持つデータを格納できます。  

## インストール
以下からMongoDBをインストールしました。  
OS：Ubuntu 20.04  
MongoDBのバージョン：4.4  
https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04-ja  
`mongod`コマンドでエラーっぽいのが出てなければ大丈夫です。

## 起動、基本コマンドなど
### 起動
`mongo --dbpath <direcrotyPath>`でシェルに入ります。  
データを保存したいデレクトリがなければ`--dbpath`以降はいりません。
`MongoDB shell version v4.4.29`が返ってくればOKです。  
このシェルの中でデータベースのCRUD(作成、読み出し、更新、削除)をします。  

### 基本コマンドなど
- `shouw databases`：データが入っているデータベースを表示します。`show dbs`でもOK。
- `db`：自分がいるデータベースを表示します。
- `use <databaseName>`：データベースの中に入ります。指定したデータベースが存在しない場合は新規作成します。
- コレクション：データベースの中に作成するデータをグループ化したまとまりのようなもので、コレクション同士は関連付けることが出来ます。
 RDBにおけるテーブルみたいなイメージです。

## データベースのCRUD
[MongoDB CRUD Operations](https://www.mongodb.com/docs/v4.4/crud/)
### Create（生成）
まずはデータの作成方法です。  
`db.collection.insert()`でデータを挿入します。  
`db.collection.insertOne()`で一つ、`db.collection.insertMany()`で複数挿入可能です。  
```
> db.dogs.insertOne({name: 'ぽち', age: 3, breed: 'corgi', catFriendry: true})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("65edaf10d66a61ccb07814a4")
}
```
### Read（読み取り）
`db.collections.find()`でコレクションを表示できます。  
find({プロパティ})には引数入れられるため、条件をしていして抜き出せます。
```
> db.dogs.find()
{ "_id" : ObjectId("65edaf10d66a61ccb07814a4"), "name" : "ぽち", "age" : 3, "breed" : "corgi", "catFriendry" : true }
{ "_id" : ObjectId("65edb0bdb47203f395e436a5"), "name" : "はち", "breed" : "golden", "age" : 14, "catFriendly" : false }
{ "_id" : ObjectId("65edb0bdb47203f395e436a6"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }
```
`db.collections.findById('id')`でIDの指定が可能です。

### Update（更新）
以下でデータの更新が可能です。第一引数に条件を指定し、一致したコレクションのデータを第二引数の通りに書き換えます。  
updateの第二引数には`$set`必須。  
第二引数のプロパティがない場合は新しく作成。  
`db.collections.updateOne({},{$set{})`  
`db.collections.updateMany({},{$set{}))`  
```
> db.dogs.updateOne({name: 'ぽち'},{$set: {age: 1} })
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.dogs.find()
{ "_id" : ObjectId("65edaf10d66a61ccb07814a4"), "name" : "ぽち", "age" : 1, "breed" : "corgi", "catFriendry" : true, "color" : "chocolate" }
```
以下は第二引数のプロパティで置き換える。第二引数に書いてないプロパティは消す。  
`db.collections.replaceOne()`  

### Delete（削除）
第一引数に一致したコレクションを削除します。
`db.collections.deleteOne()`
`db.collections.deleteMany()` 何も指定しないと全部削除です。
```
> db.dogs.deleteOne({name: 'はち'})
```

## 演算子など
- ネストされているコレクションの指定
```
> db.dogs.find()
{ "_id" : ObjectId("65edaf10d66a61ccb07814a4"), "name" : "ぽち", "age" : 4, "breed" : "corgi", "catFriendry" : true, "color" : "chocolate" }
{ "_id" : ObjectId("65edb0bdb47203f395e436a5"), "name" : "はち", "breed" : "golden", "age" : 14, "catFriendly" : false, "personality" : { "catFriendly" : true, "childFriendry" : true } }

''で囲む
> db.dogs.find({'personality.childFriendry': true})
{ "_id" : ObjectId("65edb0bdb47203f395e436a5"), "name" : "はち", "breed" : "golden", "age" : 14, "catFriendly" : false, "personality" : { "catFriendly" : true, "childFriendry" : true } }
```
色々な演算子を使って、条件指定することが出来ます。  
以下を参照。  
https://www.mongodb.com/docs/v4.4/reference/operator/query/  
- `$gt`：より大きい
```
> db.dogs.find({age: {$gt: 2}})
{ "_id" : ObjectId("65edaf10d66a61ccb07814a4"), "name" : "ぽち", "age" : 4, "breed" : "corgi", "catFriendry" : true, "color" : "chocolate" }
{ "_id" : ObjectId("65edb0bdb47203f395e436a5"), "name" : "はち", "breed" : "golden", "age" : 14, "catFriendly" : false, "personality" : { "catFriendly" : true, "childFriendry" : true } }
```
- `$lt `：より小さい
- `$in`：含む
```
> db.dogs.find({breed: {$in: ['Shiba', 'corgi']}, age: {$lt: 10}})
{ "_id" : ObjectId("65edaf10d66a61ccb07814a4"), "name" : "ぽち", "age" : 4, "breed" : "corgi", "catFriendry" : true, "color" : "chocolate" }
```
- `$ne`： not equal
- `$or`：配列（プロパティ？）を渡せます
```
> db.dogs.find({$or: [{'personality.catFriendly': true}, {age: {$lt: 10}}]})
{ "_id" : ObjectId("65edaf10d66a61ccb07814a4"), "name" : "ぽち", "age" : 4, "breed" : "corgi", "catFriendry" : true, "color" : "chocolate" }
{ "_id" : ObjectId("65edb0bdb47203f395e436a5"), "name" : "はち", "breed" : "golden", "age" : 14, "catFriendly" : false, "personality" : { "catFriendly" : true, "childFriendry" : true } }
```
