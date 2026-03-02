import getAccessToken from "@/src/commons/libraries/getAccessToken";
import { atom, selector } from "recoil";

const isEditState = atom({
  key: "isEditState",
  default: false,
});

const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async (): Promise<string> => {
    try {
      const newAccessToken = await getAccessToken();
      return newAccessToken;
    } catch {
      return "";
    }
  },
});
export {
  accessTokenState,
  isEditState,
  restoreAccessTokenLoadable,
  visitedPageState,
};
