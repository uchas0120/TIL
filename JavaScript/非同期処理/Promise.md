JavaScriptはシングルスレッドという処理方法で、一度に一つの処理しかすることが出来ない。  
コードをいっぺんに素早く実行しているように見えて、一行ずつ実行している。  
そのため、実行している処理が終わるまで次の処理は出来ない。  
これを同期処理という。  
逆に、一つの処理が終わるのを待たずに次の処理を実行することが出来るのが非同期処理です。

非同期処理をするのに`Promise`というオブジェクトを使う方法があります。  
`Promise`は処理の最終的な完了もしくは失敗を表すオブジェクトで、未来のある時点で値を持つことを約束してくれます。  
つまり、実行すると非同期で処理が実施され、ある一定の時間が経つと処理が完了し、成功 or 失敗の結果を出力します。
```jvascript
const delayedColorChange = (color, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay);
        });
    }
```
