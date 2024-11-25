export const INPUT_COMMON_STYLES = {
  label: {
    fontSize: "1.125rem", // lg
    fontWeight: "bold",
  },
  description: {
    color: "var(--mantine-color-dark-text)",
    fontSize: "1rem", // md
    paddingTop: "0.5rem",
    paddingBottom: "0.25rem",
  },
  required: {
    fontSize: "1.125rem", // lg
  },
};

// descriptionがない時の見た目を調整する
export const getInputStyles = (hasDescription: boolean) => {
  return hasDescription
    ? INPUT_COMMON_STYLES
    : {
        ...INPUT_COMMON_STYLES,
        label: {
          ...INPUT_COMMON_STYLES.label,
          paddingBottom: "0.75rem",
        },
      };
};
