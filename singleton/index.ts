// singletonの学習用ファイル
// Singleton パターンの適用条件
// 1. 状態を持たないこと
// 2. ポリモーフィズムが絡むこと（抽象クラス・インターフェースを実装している）

// ユースケース
// 暗号化・復号のロジックのみのクラス
// DBコネクション、レポジトリ、外部サービスクラス
// 単一のファイルアクセスクラス
// ロギング

// 悪い面
// インスタンスがメモリに残り続ける

// ↓はQiitaの記事にあった例。

/**
 * ありがちなシングルトン。実態はただのグローバル変数群  //<=単一責任の原則に違反。
 */
// class ApplicationManager {

//     /**
//      * DBに接続してCRUD操作をする何か
//      */
//     private DbConnector connector; //Factory クラスの instanceCashFactory でインスタンス化・キャッシュする

//     /**
//      * (HTTPリクエストのセッション情報から取ってきた) アクセスしているユーザーをあらわすオブジェクト
//      */
//     private User currentUser; //<=メモリに確保するのではなく、インメモリ型ElasthiCacheに保存して複数サーバーからアクセスできるようにするのが一般的

//     /**
//      * デバッグ情報などをログファイルに垂れ流すやつ
//      */
//     private Logger logger; //<= Global関数に入れたらいい。

//     private static final ApplicationManager instance = new ApplicationManager();

//     private ApplicationManager() {
//         // init...
//     }

//     public static ApplicationManager getInstance() {
//         return instance;
//     }

//     // 以下略
// }
