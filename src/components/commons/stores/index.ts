import { atom } from "recoil";

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
export { isEditState, accessTokenState, visitedPageState };
