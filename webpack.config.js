// あくまでjsファイル、書き方はjsの構造体
module.exports = {
  entry: {
    bundle: "./src/index.ts", // エントリーポイント：バンドルするtsファイルはどこにあるのか
  },
  output: {
    path: `${__dirname}/dist`, // どこに保存されるのか、pathはルートディレクトリから始まって、distへ
    filename: "[name].js", // 出力される名前、bundle.jsになる(エントリーでbundleってなってるから)
  },
  mode: "development", // developmentとproductionがある、出力されたファイルにいろいろ説明書いてくれるのがdevelopmentで、書かずに軽くしてくれるのがproduction
  resolve: {
    extensions: [".ts", ".js"], // (任意)インポートの時とかに.tsとか.jsをつけなくて良くなる
  },
  devServer: {
    // ローカルサーバーを立ち上げるときの設定
    static: {
      directory: `${__dirname}/dist`, // ローカルサーバーを立ち上げるときにどこを見に行って出力するのか(htmlの場所)
    },
    open: true, // 自動的にローカルサーバー(ブラウザ)が立ち上がる
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // なんたら.tsとついたファイルをコンパイルするんだという指定
        loader: "ts-loader", // コンパイルするにはts-loader(さっきnpmでダウンロードしたやつ)を使うんだという指定
      },
    ],
  },
};
