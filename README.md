# ひまわりカンパニー ホームページ

ひまわりカンパニーの公式ホームページ（静的サイト）です。

## ファイル構成

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ（お客さん向け） |
| `company.html` | 会社概要ページ（取引先向け） |
| `css/style.css` | デザイン（色・レイアウト） |

## 内容を変えたいとき

- 文章・住所・電話番号：`index.html` と `company.html` を開いて書き換えます（フッターは両方のファイルにあります）。
- 色：`css/style.css` の先頭の `:root { ... }` にある `--yellow`（黄色）などを変えます。

## GitHub Pagesで公開する手順（無料）

1. このリポジトリの変更を `main` ブランチに反映します（Pull Requestを作って「Merge」します）。
2. GitHubのリポジトリページを開き、上のメニューの **Settings（設定）** をクリックします。
3. 左のメニューから **Pages** をクリックします。
4. **Build and deployment** の **Source** を **Deploy from a branch** にします。
5. **Branch** を `main`、フォルダを `/ (root)` にして **Save** を押します。
6. 1〜2分待って、Pagesの画面を再読み込みすると、上の方に公開URLが表示されます。
   `https://（GitHubのユーザー名）.github.io/my-portfolio1/` の形になります。
7. そのURLを開いて、表示を確認してください。

※ 以後は、ファイルを書き換えて `main` に反映するたびに、自動でサイトが更新されます（反映まで1〜2分かかります）。
※ 独自ドメイン（例：`himawari-company.jp`）を使いたい場合は、Pages画面の **Custom domain** で設定できます。
