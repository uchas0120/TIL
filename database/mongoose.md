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
