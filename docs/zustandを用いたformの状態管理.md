# これはなに

zustandを用いたformの状態管理について説明します。

# 基本的な考え

リアルタイムプレビューを実装するため、controlledなフォームを作成する必要があります（= Server Actionsでuncontrolledなフォームを取り扱うだけでは不足）。

[Zustand](https://zustand-demo.pmnd.rs/)を用いてフォームの様々な値を、1つのstoreでまとめて管理するトップダウンの状態管理の手法をとっています。管理している値は、各入力の値やバリデーションのエラーメッセージなどです。

トップダウンの状態管理では、ストアの定義が煩雑になりがちです。それを[zustandのsliceパターン](https://zustand.docs.pmnd.rs/guides/slices-pattern)でカバーしています。

## Contextでstoreを管理

[zustandのドキュメント](https://zustand.docs.pmnd.rs/guides/nextjs#creating-a-store-per-request)でも推奨されているように、Contextでストアを管理する設計で実装しています。このように実装することでグローバルなストアではなく、ページ単位のストアを実装することが可能になっています。

実装例

```tsx
export const ArtistFormStoreProvider: FC<{
  children: ReactNode;
  initialState: ArtistForm;
}> = ({ children, initialState }) => {
  const storeRef = useRef<ArtistFormStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createArtistFormStore(initialState);
  }

  return (
    <ArtistFormStoreContext value={storeRef.current}>
      {children}
    </ArtistFormStoreContext>
  );
};
```

## slice設計

入力コンポーネントごとにstoreのsliceを実装します。以下、artist（アーティスト）モデルの管理名称入力フォームを例に説明します。

```
model
└ artist
　 └ components
　 　 └ form-with-preview
　 　 　 └ form
　 　 　 　 ├ inputs	
　 　 　 　 │ ├ admin-title
　 　 　 　 │ │ ├ const.ts
　 　 　 　 │ │ ├ converter.ts
　 　 　 　 │ │ ├ hook.ts
　 　 　 　 │ │ ├ index.tsx
　 　 　 　 │ │ ├ lib.ts
　 　 　 　 │ │ ├ lib.test.ts
　 　 　 　 │ │ ├ slice.ts <= ここで管理名称のsliceを実装する
　 　 　 　 │ │ ├ type.ts
　 　 　 　 │ │ └ validation.ts
　 　 　 　 │ └ title
　 　 　 　 │ 　 └ ...
```

```tsx
// form-with-preview/form/inputs/admin-title/slice.ts
// ストアの型を定義
export type ArtistAdminTitleSlice = {
  adminTitle: string;
  setAdminTitle: (adminTitle: string) => void;
  getAdminTitleErrorMessages: (
    value: string,
    phase: ValidationPhase,
  ) => string[];
  getAdminTitleIsValid: () => boolean;
};

// ストアを作成する関数
export const createArtistAdminTitleSlice: FormInputSliceCreater<
  ArtistAdminTitleSlice,
  { adminTitle: string }
> = (initalValue) => (set, get) => ({
  adminTitle: initalValue.adminTitle,
  setAdminTitle: (adminTitle) => set({ adminTitle }),
  getAdminTitleErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: srtistAdminTitleValidation(value),
    });
  },
  getAdminTitleIsValid: () => {
    const value = get().adminTitle;
    const phase = get().validationPhase;
    const errorMessages = get().getAdminTitleErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
```

入力ごとに作成したsliceを集約して、フォーム全体のstoreを作成します。

```tsx
// form-with-preview/store/index.ts

export const createArtistFormStore = (initialState: ArtistForm) =>
  create<ArtistFormStore>()((set, get, store) => {
    return {
      ...createOperationSlice(set, get, store),
      ...createValidationSlice(set, get, store),
      ...createArtistAdminTitleSlice(initialState)(set, get, store),
      ...createArtistAvailablePeriodSlice(initialState)(set, get, store),
```

## hook設計

storeから値やsetterなどを取得してコンポーネントに渡す役割。

```tsx
// form-with-preview/form/inputs/admin-title/hook.ts

export const useArtistAdminTitleInput = () => {
  const value = useArtistFormStore((state) => state.adminTitle);
  const setValue = useArtistFormStore((state) => state.setAdminTitle);
  const validationPhase = useArtistFormStore(
    (state) => state.validationPhase,
  );
  const getErrorMessages = useArtistFormStore(
    (state) => state.getAdminTitleErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};

```

## コンポーネント設計

hookから値やsetterを取得して、コンポーネントに注入します。

```tsx
// form-with-preview/form/inputs/admin-title/index.tsx

export const ArtistAdminTitleInput: FC = () => {
  const { value, setValue, errorMessages } = useArtistAdminTitleInput();

  return (
    <TextInput
      label="管理名称"
      description="管理名称を入力してください"
      placeholder="管理名称"
      value={value}
      setValue={setValue}
      errorMessages={errorMessages}
    />
  );
};
```
