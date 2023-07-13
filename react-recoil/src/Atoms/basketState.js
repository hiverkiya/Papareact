import { atom, selector } from "recoil";
export const basketState = atom({
  key: "basketState",
  default: {
    items: [],
    name: "blue",
  },
});

export const basketItemsTotal = selector({
  key: "basketItems",
  get: ({ get }) => {
    const basket = get(basketState);
    const totalPrice = basket.items.reduce(
      (total, item) => item.price + total,
      0
    );
    return totalPrice;
  },
});
