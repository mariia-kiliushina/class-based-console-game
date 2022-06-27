class Country {
  constructor(name, budget) {
    this.name = name;
    this.budget = budget;
  }
}

class Goods {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}
const potato = new Goods('potato', 8);
const meet = new Goods('meet', 19);

const germany = new Country('Germany', 123);
const france = new Country('France', 89);
const greece = new Country('Greece', 45);

let arrayOfCountries = [germany, france, greece];

let func = () => {
  for (let i = 0; i < arrayOfCountries.length; i++) {
    (function (i) {
      this.goods = {};
      this.goods.potato = new Goods('potato', 8, 10);
      this.goods.meet = new Goods('meet', 15, 20);
    }.call(arrayOfCountries[i], i));
  }
};
func();

console.table([germany.goods, france.goods, greece.goods]);
console.table([germany.goods.potato, france.goods.potato, greece.goods.potato]);
console.table([germany, france, greece]);

//sell potato from Germany to Greece in a quantity of 6
