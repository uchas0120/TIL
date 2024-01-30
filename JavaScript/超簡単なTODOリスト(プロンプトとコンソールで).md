プロンプトへの入力とコンソールへの出力だけで完結する超超超簡単なTODOリストを作ったため記録に残します。  
まだかなり改善点があるがあえてこのままに。  
気が向いたら修正予定。

```javascript

let lists = [];
while (input !== 'quit' && input !== 'q') {
    const input = prompt('コマンドを入力してください。(new、list、delete、quit)');

    if (input === 'new') {
    const task = prompt('タスクを登録してください。');
        lists.push(task);
        console.log(`${task}を追加しました！！`);
    }

    else if (input === 'list') {
        for (let i = 0; i < lists.length; i++) {
            if (i === 0) {
                console.log('**************************************');
            }
            console.log(`${i} : ${lists[i]}`);
            if (i === lists.length -1) {
                console.log('**************************************');
            }
        }      
        window.alert('タスク一覧です。');
    }

    else if (input === 'delete') {
        const chooseIndex = parseInt(prompt('削除するインデックス入力シロ。'));
        if (!Number.isNaN(chooseIndex)) {
        let log =  lists[chooseIndex];
        lists.splice(chooseIndex,1);
        console.log(`「${log}」が削除されました。`);
        } else {
            window.alert('有効なインデックスを入力シロ！');
        }
    }
}

console.log('糸冬');

```
