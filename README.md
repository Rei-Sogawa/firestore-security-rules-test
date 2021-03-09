テスト実行方法

```
firebase emulators:start
cd test
npm test
```

エラー内容

```
  Out social app
    1) 同じプロジェクトに所属しているユーザーの取得


  0 passing (2s)
  1 failing

  1) Out social app
       同じプロジェクトに所属しているユーザーの取得:
     FirebaseError:
false for 'list' @ L5, Unsupported operation error. Received: list.hasAny(constraint). Expected: list.hasAny(list). for 'list' @ L12
      at new FirestoreError (node_modules/@firebase/firestore/dist/index.node.cjs.js:1205:28)
      at fromRpcStatus (node_modules/@firebase/firestore/dist/index.node.cjs.js:5240:12)
      at fromWatchChange (node_modules/@firebase/firestore/dist/index.node.cjs.js:5476:35)
      at PersistentListenStream.onMessage (node_modules/@firebase/firestore/dist/index.node.cjs.js:15743:27)
      at /Users/ryosuke/Repos/socialApp/test/node_modules/@firebase/firestore/dist/index.node.cjs.js:15676:30
      at /Users/ryosuke/Repos/socialApp/test/node_modules/@firebase/firestore/dist/index.node.cjs.js:15712:28
      at /Users/ryosuke/Repos/socialApp/test/node_modules/@firebase/firestore/dist/index.node.cjs.js:14143:20
      at processTicksAndRejections (internal/process/task_queues.js:97:5)



npm ERR! Test failed.  See above for more details.
```

その他

- debug メソッドを使うと firestore-debug.log に引数の値が出力されます。
