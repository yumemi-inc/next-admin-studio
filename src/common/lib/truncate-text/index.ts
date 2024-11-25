const DEFAULT_TRUNCATE_LENGTH = 15;

type Fn = (text: string, options?: { length?: number }) => string;

export const truncateText: Fn = (text, options) => {
  const length = options?.length ?? DEFAULT_TRUNCATE_LENGTH;
  return text?.length > length ? `${text.slice(0, length)}...` : text;
};
