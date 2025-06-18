// シーケンス図の定義オブジェクト
const diagramTemplates = {
  diagram1: {
    title: "データ更新フロー（条件分岐あり）",
    code: `sequenceDiagram
    participant A as システムA
    participant B as システムB
    participant C as システムC
    participant D as システムD

    A->>B: リクエスト送信

    alt Aがデータ更新を実行する場合
        activate A
        A->>A: データ更新（非同期）
        deactivate A
        A->>C: 更新データ送信
        C->>D: 処理依頼
    else Aがデータ更新しない場合
        B->>D: 処理依頼（直接）
    end

    D-->>A: 処理結果応答

    alt Aがデータ更新した場合
        A->>B: 更新完了通知
    else
        Note over A,B: 追加処理なし
    end`,
  },
  diagram2: {
    title: "簡易ログインシーケンス",
    code: `sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant DB

    User->>Frontend: ログイン要求
    Frontend->>Backend: 認証リクエスト
    Backend->>DB: ユーザー照会
    DB-->>Backend: ユーザーデータ
    alt 認証成功
        Backend-->>Frontend: トークン発行
        Frontend-->>User: ログイン成功
    else 認証失敗
        Backend-->>Frontend: エラー
        Frontend-->>User: ログイン失敗
    end`,
  },
  diagram3: {
    title: "API連携基本フロー",
    code: `sequenceDiagram
    participant Client
    participant API
    participant ExternalService

    Client->>API: GET /data
    API->>ExternalService: データ要求
    ExternalService-->>API: データ応答
    alt キャッシュ有効
        API-->>Client: キャッシュデータ
    else キャッシュ無効
        API-->>Client: 新鮮なデータ
    end`,
  },
};
