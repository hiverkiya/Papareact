import { atom, selector, selectorFamily } from "recoil";
export const basketState = atom({
  key: "basketState",
  default: {
    items: [],
    name: "blue",
  },
});

export const basketItemsTotal = selectorFamily({
  key: "basketItems",
  get:
    (options) =>
    ({ get }) => {
      const basket = get(basketState);
      let totalPrice = basket.items.reduce(
        (total, item) => item.price + total,
        0,
      );
      if (options.addTax) {
        totalPrice = totalPrice * 1.2;
      }
      return totalPrice;
    },
});
