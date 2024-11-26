export const uploadFile = async (file: File): Promise<string> => {
  return URL.createObjectURL(file);
};
