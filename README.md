# ひまわりカンパニー ホームページ

ひまわりカンパニーの公式ホームページです。写真を中心にした、HTML と CSS だけのシンプルな作りなので、GitHub Pages で無料公開できます。

## ファイルの中身

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップページ（お客様向け） |
| `company.html` | 会社概要ページ（お取引先様向け） |
| `css/style.css` | 見た目（色・文字・レイアウト）の設定 |
| `images/` | 写真を入れるフォルダ（下の一覧を参照） |
| `.nojekyll` | GitHub Pages 用の設定ファイル（消さないでください） |

## 写真の入れ替え方

いま `images` フォルダに入っている写真は、**「仮の写真（差し替えてください）」と書かれた仮の画像**です。
下の表と**同じファイル名**の写真で上書きするだけで、ホームページに反映されます（HTML の書き換えは不要です）。

| ファイル名 | 使われる場所 | 入れてほしい写真 | 形・目安の大きさ |
| --- | --- | --- | --- |
| `hero.jpg` | トップ一番上（画面いっぱい） | 青空とひまわり畑。明るく開放的なもの | 横長 2400×1500px |
| `about.jpg` | トップ「ABOUT」の左 | ひまわり一輪のアップ | 縦長 1200×1500px |
| `product-food.jpg` | 取扱商品「食品」 | 自社の食品の商品写真 | 正方形 1200×1200px |
| `product-beauty.jpg` | 取扱商品「美容品」 | 自社の美容品の商品写真 | 正方形 1200×1200px |
| `product-supplement.jpg` | 取扱商品「サプリメント」 | 自社のサプリメントの商品写真 | 正方形 1200×1200px |
| `product-daily.jpg` | 取扱商品「日用品」 | 自社の日用品の商品写真 | 正方形 1200×1200px |
| `feature-shipping.jpg` | お約束 01「当日発送」 | 出荷を待つ段ボール、発送作業の様子 | 横長 1600×1200px |
| `feature-packing.jpg` | お約束 02「丁寧な梱包」 | 商品を丁寧に包んでいる手元 | 横長 1600×1200px |
| `feature-quality.jpg` | お約束 03「品揃えと品質」 | 商品が並んだ棚、ひまわりのある明るい写真など | 横長 1600×1200px |
| `company-header.jpg` | 会社概要ページの一番上 | ひまわり畑（横に長く切り取れるもの） | 横長 2400×900px |

ポイント

- 写真は**JPEG（.jpg）**で、ファイル名は**半角英字・すべて小文字**のまま保存してください。
- 大きさは目安です。形（横長・正方形など）が近ければ、はみ出た部分は自動で切り取られます。
- `hero.jpg` はスマホでは**写真の中央部分**だけが表示されます。ひまわりが中央にある写真を選ぶときれいです。
- ファイルが重いと表示が遅くなるので、1枚 **500KB 以下** を目安にしてください（https://squoosh.app/ などで無料で軽くできます）。

### GitHub の画面で写真を差し替える手順

1. リポジトリの `images` フォルダを開きます。
2. 右上の「**Add file**」→「**Upload files**」を押します。
3. 差し替えたい写真（例：`hero.jpg`）をドラッグして入れます。同じ名前のファイルは上書きされます。
4. 下の「**Commit changes**」を押します。数分後に公開ページにも反映されます。

### ひまわりの写真の探し方（無料・商用利用OK）

- Unsplash：https://unsplash.com/ja/s/写真/ひまわり
- Pexels：https://www.pexels.com/ja-jp/search/ひまわり/

どちらも無料で商用利用でき、クレジット表記も必須ではありませんが、使った写真は下の「写真の出典」に書いておくと安心です。

## 写真の出典

現在は仮の画像のため、外部サイトの写真は使用していません。
写真を差し替えたら、次のように記録してください。

| ファイル名 | 撮影者 | 写真のページ（URL） | サイト |
| --- | --- | --- | --- |
| `hero.jpg` | （例）山田 太郎 | （例）https://unsplash.com/photos/xxxxx | Unsplash |
| `about.jpg` |  |  |  |
| `feature-shipping.jpg` |  |  |  |
| `feature-packing.jpg` |  |  |  |
| `feature-quality.jpg` |  |  |  |
| `company-header.jpg` |  |  |  |

※ `product-*.jpg` は自社の商品写真に差し替える予定のため、記載は不要です。

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
