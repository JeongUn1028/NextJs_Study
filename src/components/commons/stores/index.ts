import { atom } from "recoil";

const isEditState = atom({
  key: "isEditState",
  default: false,
});
export { isEditState };
