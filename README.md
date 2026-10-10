# ひまわりカンパニー ホームページ

ひまわりカンパニーの公式ホームページです。HTML と CSS だけで作っているので、GitHub Pages で無料公開できます。

## ファイルの中身

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップページ（お客様向け・各ショップへのボタン） |
| `company.html` | 会社概要ページ（お取引先様向け） |
| `css/style.css` | 見た目（色・レイアウト）の設定 |
| `images/logo.svg` | ひまわりのマーク（ロゴ・タブのアイコン） |
| `.nojekyll` | GitHub Pages 用の設定ファイル（消さないでください） |

## GitHub Pages で公開する手順

### ステップ1：作ったファイルを main ブランチに入れる

いまのファイルは `claude/focused-volta-omplsj` という作業用ブランチにあります。

1. GitHub でこのリポジトリ（`my-portfolio1`）を開きます。
2. 上の方に黄色い帯で「**Compare & pull request**」と出ていたら押します。
   出ていなければ「**Pull requests**」タブ →「**New pull request**」を押し、
   右側（compare）で `claude/focused-volta-omplsj` を選びます。
3. 「**Create pull request**」を押します。
4. 次の画面で「**Merge pull request**」→「**Confirm merge**」を押します。

これで `main` ブランチにホームページのファイルが入りました。

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

> ※リポジトリが「Private（非公開）」の場合、無料プランでは GitHub Pages が使えません。
> 「Settings」→ 一番下の「Danger Zone」→「Change visibility」で「Public（公開）」に変更してください。

## あとから内容を変えたいとき

- 文章や電話番号などは `index.html` / `company.html` の中の文字を書き換えるだけで変わります。
- GitHub の画面上でファイルを開き、右上の鉛筆マーク（✏️）から直接編集できます。
- 編集して「**Commit changes**」を押すと、数分後に公開中のページにも反映されます。

## 独自ドメイン（例：himawari-company.jp）を使いたいとき

「Settings」→「Pages」→「**Custom domain**」にドメインを入力して保存し、
ドメインを買った会社の管理画面で DNS の設定をします。
詳しくは GitHub の説明ページ（https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site）をご覧ください。
