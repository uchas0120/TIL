jsonのデータをもとにejsでレンダリングしてみます。
- data.json
```json
{
    "soccer": {
        "name": "Soccer",
        "subscribers": 800000,
        "description": "The football subreddit. News, results and discussion about the beautiful game.",
        "posts": [
            {
                "title": "Marten de Roon to make pizza for more than 1,000 people in Bergamo if Atalanta win the Champions league.",
                "author": "joeextreme"
            },
            {
                "title": "Stephan Lichtsteiner has retired from professional football",
                "author": "odd person"
            },
            {
                "title": "OFFICIAL: Dani Parejo signs for Villareal.",
                "author": "joeextreme"
            }
        ]
    },
    "chickens": {
        "name": "Chickens",
        "subscribers": 23956,
        "description": "A place to post your photos, video and questions about chickens!",
        "posts": [
            {
                "title": "Naughty chicken hid under a shed for 3 weeks and came home with 25 chicks today!",
                "author": "joeextreme",
                "img": "https://preview.redd.it/pcn8u4j7c9z61.jpg?width=960&crop=smart&auto=webp&s=e114976dde1108b9556555d2db36a3cb6211798d"
            },
            {
                "title": "Had to kill my first chicken today. Does it get any easier?",
                "author": "sad boi"
            },
            {
                "title": "My five year old chicken set and hatched one baby. I guess she wanted to be a mama one more time.",
                "author": "tammythetiger",
                "img": "https://preview.redd.it/lervkuis3me51.jpg?width=640&crop=smart&auto=webp&s=6a18ab3c4daa80eccf3449217589b922fa443946"
            }
        ]
    },
    "newsokur": {
        "name": "ニュー速R",
        "subscribers": 35000,
        "description": "ニュー速R（ニュース速報@Reddit）は様々なニュースや話題を扱う掲示板（サブレディット）です。 Newsokur (Breaking News on Reddit) is a subreddit for Japanese news and various other topics.",
        "posts": [
            {
                "title": "Facebook、開発言語に「Rust」採用 次期ビルドシステムの開発で",
                "author": "proudmamma"
            },
            {
                "title": "グランアレグリア秋盾で始動 中距離Ｇ１初制覇を狙う",
                "author": "grower123"
            }
        ]
    }
}
```

- index.js
```javascript
const path = require('path');
const express = require('express');
const app = express();
const redditData = require('./data.json');

// pathを追加している。
// __dirnameで絶対パスを取得。
// そこからこのファイルがあるフォルダのviewsディレクトリを見に行くよう設定している。
// そのため、Tempating_Demoディレクトリにいなくてもejsをレンタリングしてくれる。
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// data.jsonの中身をsubreddit.ejsで描写。data.jsonにないオブジェクトが入力された場合はNotFound.ejsを出す。
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('NotFound', { subreddit });
    }
});
```

- views/subreddit.ejs
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <%= name %>
    </title>
    <link rel="stylesheet" href="/app.css">
</head>
<body>
    <h1>
        <%= name %>のページ
    </h1>
    <h2><%= description %></h2>
    <p><%= subscribers %>人が購読中！</p>

    <% for (let post of posts) { %>
        <article>
        <p><%= post.title %> - <b><%= post.author %></b></p>
    <%    if (post.img) { %>
            <img src="<%= post.img %>" alt="">
    <%    } %>
        </article>
    <% } %>
</body>
</html>
```
