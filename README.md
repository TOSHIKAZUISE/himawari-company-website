# ひまわりカンパニー ホームページ

ひまわりカンパニーの公式ホームページです。HTML 1ファイル＋写真だけのシンプルな作りなので、GitHub Pages で無料公開できます。

## ファイルの中身

| ファイル | 内容 |
| --- | --- |
| `index.html` | ホームページ本体（デザイン・動きもすべてこの中） |
| `images/` | 写真のフォルダ |
| `PHOTO_CREDITS.md` | 写真の一覧と出典（撮影者・元のページ） |
| `old/` | 以前のデザイン（保管用。公開ページからはリンクしていません） |
| `.nojekyll` | GitHub Pages 用の設定ファイル（消さないでください） |

## 写真の差し替え方

写真は今は Pexels の無料写真（仮）です。一覧は `PHOTO_CREDITS.md` を見てください。
`images` フォルダに**同じファイル名**の写真で上書きするだけで、ホームページに反映されます。

1. リポジトリの `images` フォルダを開きます。
2. 右上の「**Add file**」→「**Upload files**」を押します。
3. 差し替えたい写真（例：`office-main.jpg`）をドラッグして入れます。同じ名前のファイルは上書きされます。
4. 下の「**Commit changes**」を押します。数分後に公開ページにも反映されます。

- 写真は **JPEG（.jpg）**、ファイル名は **半角英字・小文字** のまま保存してください。
- 1枚 **400KB 以下** が目安です（https://squoosh.app/ などで無料で軽くできます）。

## GitHub Pages で公開する手順

### ステップ1：作ったファイルを main ブランチに入れる（済）

作業用ブランチ `claude/focused-volta-omplsj` の内容を、プルリクエストで `main` にまとめます。

### ステップ2：GitHub Pages をオンにする

1. リポジトリの上にある「**Settings**（設定）」タブを押します。
2. 左のメニューから「**Pages**」を押します。
3. 「**Build and deployment**」の「**Source**」が「**Deploy from a branch**」になっていることを確認します。
4. 「**Branch**」で `main` を選び、その右のフォルダは `/ (root)` のまま「**Save**」を押します。

### ステップ3：公開されたか確認する

1〜3分ほど待ってから、同じ「Pages」画面を再読み込みします。
上に「**Your site is live at …**」と表示されたら公開完了です。

アドレスは次のようになります。

```
https://toshikazuise.github.io/my-portfolio1/
```

スマホでも開いて、ボタンがきちんと各ショップに飛ぶか確認してみてください。

> ※リポジトリが「Private（非公開）」の場合、無料プランでは GitHub Pages が使えません（現在は Public に設定済み）。

## あとから内容を変えたいとき

- 文章や電話番号などは `index.html` の中の文字を書き換えるだけで変わります。
- GitHub の画面上でファイルを開き、右上の鉛筆マーク（✏️）から直接編集できます。
- 編集して「**Commit changes**」を押すと、数分後に公開中のページにも反映されます。

## 独自ドメイン（例：himawari-company.jp）を使いたいとき

「Settings」→「Pages」→「**Custom domain**」にドメインを入力して保存し、
ドメインを買った会社の管理画面で DNS の設定をします。
詳しくは GitHub の説明ページ（https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site）をご覧ください。
