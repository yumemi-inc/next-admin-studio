import type { Administrator } from "../type";

export const useCurrentAdministrator = (): Administrator => {
  return {
    id: "admin",
    name: "Yumemi Taro",
    email: "yumemi_taro@example.com",
  };
};
