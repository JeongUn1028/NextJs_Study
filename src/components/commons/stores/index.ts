import { atom } from "recoil";

const isEditState = atom({
  key: "isEditState",
  default: false,
});

const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export { isEditState, accessTokenState };
