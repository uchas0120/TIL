## Axiosとは
 Axios とは、自分のサーバーやサードパーティのサーバーに対して、データをフェッチするリクエストを行うことができる Promise ベースの HTTP ライブラリです。  
 GET 、 POST 、 PUT/PATCH 、 DELETE などのリクエストを、行うことができます。  
 Axiosには主に以下の特徴があるため、Fetchに比べて柔軟に使うことが出来ます。
- ブラウザから XMLHttpRequests を作成する
- Promise API をサポート
- JSON データの自動変換
- リクエストとレスポンスのデータを変換
- リクエストをキャンセル

## 実際にリクエストを行う
icanhazdadjokeというアメリカンジョークを自動で生成してくれるサイトにリクエストを行います。
```javascript
axios.get('https://swapi.dev/api/people/1/')
.then(res => console.log('success', res))
.catch(e => console.log('error', e));

const getStarWarsPerson = async (id) => {
    try{
    const res = await axios.get('https://swapi.dev/api/people/1/');
    console.log(res.data);
    } catch (e) {
        console.log('error', e);
    }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadjoke = async () => {
    try{
    const config = {
        headers: {
        Accept: 'application/json'
        }
    };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
    } catch (e) {
        alert('Jokes NOT FOUND')
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadjoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}

button.addEventListener('click', addNewJoke);
```
