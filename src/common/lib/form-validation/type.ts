export type Validation<T> = {
  key: string;
  input: T;
  isOk: boolean;
  errorMessage: string;
};

export type ValidationFn<T> = (v: T) => Validation<T>;

export type MultiValidationFn<T> = (v: T) => Validation<T>[];
