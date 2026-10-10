# ひまわりカンパニー ホームページ

ひまわりカンパニーの公式ホームページです。写真を中心にした、HTML と CSS だけのシンプルな作りなので、GitHub Pages で無料公開できます。

## ファイルの中身

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップページ（お客様向け） |
| `company.html` | 会社概要ページ（お取引先様向け） |
| `css/style.css` | 見た目（色・文字・レイアウト）の設定 |
| `js/main.js` | スクロールしたときの、ふわっと表示する動き |
| `images/` | 写真のフォルダ（下の一覧を参照） |
| `.nojekyll` | GitHub Pages 用の設定ファイル（消さないでください） |

## 写真の一覧と差し替え方

写真は下の表の**ファイル名**で `images` フォルダに入っています。
同じファイル名の写真で上書きするだけで、ホームページに反映されます（HTML の書き換えは不要です）。

| ファイル名 | 使われる場所 | 形・大きさ |
| --- | --- | --- |
| `hero.jpg` | トップ一番上（パソコン） | 横長 2400×1600px |
| `hero-sp.jpg` | トップ一番上（スマホ） | 縦長 1200×1800px |
| `about.jpg` | トップ「CONCEPT」の写真 | 縦長 1200×1500px |
| `product-food.jpg` | 取扱商品「食品」 | 縦長 1000×1250px |
| `product-beauty.jpg` | 取扱商品「美容品」 | 縦長 1000×1250px |
| `product-supplement.jpg` | 取扱商品「サプリメント」 | 縦長 1000×1250px |
| `product-daily.jpg` | 取扱商品「日用品」 | 縦長 1000×1250px |
| `feature-shipping.jpg` | お約束 01「当日発送」 | 横長 1400×1050px |
| `feature-packing.jpg` | お約束 02「丁寧な梱包」 | 横長 1400×1050px |
| `feature-quality.jpg` | お約束 03「品揃えと品質」 | 横長 1400×1050px |
| `company-header.jpg` | 会社概要ページの一番上 | 横長 2400×900px |

ポイント

- 写真は **JPEG（.jpg）** で、ファイル名は **半角英字・すべて小文字** のまま保存してください。
- 大きさは目安です。形（縦長・横長）が近ければ、はみ出た部分は自動で切り取られます。
- 取扱商品（`product-*.jpg`）は、自社の商品写真に差し替えることを想定しています。白や淡い色の背景で撮ると、今のデザインになじみます。
- ファイルが重いと表示が遅くなるので、1枚 **400KB 以下** を目安にしてください（https://squoosh.app/ などで無料で軽くできます）。

### GitHub の画面で写真を差し替える手順

1. リポジトリの `images` フォルダを開きます。
2. 右上の「**Add file**」→「**Upload files**」を押します。
3. 差し替えたい写真（例：`product-food.jpg`）をドラッグして入れます。同じ名前のファイルは上書きされます。
4. 下の「**Commit changes**」を押します。数分後に公開ページにも反映されます。

## 写真の出典

すべて [Pexels](https://www.pexels.com/ja-jp/) の写真です（無料・商用利用可。クレジット表記は任意）。
ライセンス：https://www.pexels.com/ja-jp/license/
ホームページ用に、切り抜き・縮小して使っています。

| ファイル名 | 撮影者 | 写真のページ |
| --- | --- | --- |
| `hero.jpg` / `hero-sp.jpg` | Todd Trapani | https://www.pexels.com/photo/yellow-sunflower-field-under-blue-sky-and-white-clouds-5241874/ |
| `company-header.jpg` | K Zoltan | https://www.pexels.com/photo/sunflower-garden-under-blue-sky-544554/ |
| `about.jpg` | Carl Davis | https://www.pexels.com/photo/a-close-up-shot-of-a-sunflower-7740559/ |
| `product-food.jpg` | horst | https://www.pexels.com/photo/two-decorative-jars-3066951/ |
| `product-beauty.jpg` | Roman Odintsov | https://www.pexels.com/photo/relaxation-luxury-bathroom-soap-7691112/ |
| `product-supplement.jpg` | Supplements On Demand | https://www.pexels.com/photo/capsules-in-the-plastic-bottle-13787561/ |
| `product-daily.jpg` | Kaboompics.com | https://www.pexels.com/photo/stack-of-light-beige-towels-on-white-stool-4210372/ |
| `feature-shipping.jpg` | Artem Podrez | https://www.pexels.com/photo/close-up-of-boxes-5025503/ |
| `feature-packing.jpg` | Kampus Production | https://www.pexels.com/photo/close-up-of-person-packing-an-order-into-a-cardboard-box-7857523/ |
| `feature-quality.jpg` | Kaboompics.com | https://www.pexels.com/photo/stack-of-natural-soap-brush-and-towels-4210374/ |

写真を差し替えたら、この表も書き換えておくと安心です（自社で撮影した写真は記載不要です）。

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
