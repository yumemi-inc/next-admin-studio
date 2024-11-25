#!/bin/bash

# モデルのコードを生成
# 使用例: nr scaffold artist artists アーティスト

model="$1" # モデル名 例: artist
path="$2"  # パス 例: artists
label="$3" # ラベル 例: アーティスト

# モデルのコードを生成
pnpm exec scaffdog generate model --answer "model:$model" --answer "path:$path" --answer "label:$label" --output "/model/" --force

# モデルのプレビューを生成
pnpm exec scaffdog generate model-preview --answer "model:$model" --output "/model/$model/components/"

# モデルのリストを生成
pnpm exec scaffdog generate model-list --answer "model:$model" --output "/model/$model/components/"

# モデルのフォーム&プレビューを生成
pnpm exec scaffdog generate model-form-with-preview --answer "model:$model" --answer "label:$label" --output "/model/$model/components/"

# モデルのページを生成
pnpm exec scaffdog generate model-page --answer "model:$model" --answer "path:$path" --answer "label:$label" --output "/app/"

# コードフォーマット
nr check -- "./src/model/$model"
nr check -- "./src/app/(general)/$path"

# コード生成の完了メッセージを表示
echo "✨ Code generation completed for model: $model, path: $path, label: $label"
