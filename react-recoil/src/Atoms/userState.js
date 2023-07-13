import { atom } from "recoil";

export const userState = atom({
  key: "userState", //unique ID
  default: { name: "Guest", age: 0, isMale: true },
});