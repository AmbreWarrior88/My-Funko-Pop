import data from "../data/data.json";

const createData = (
  universe,
  name,
  edition,
  type,
  number,
  buy,
  price,
  newPrice,
) => ({ universe, name, edition, type, number, buy, price, newPrice });

// WTF ???? 🤦‍♂️
/* const rows = [
    createData("universe", "name", "edition", "type", "number", "buy", 0, 0)
] */

// LA SOLUTION 👇
const rows = data.map((item) =>
  createData(
    item.universe,
    item.name,
    item.edition,
    item.type,
    item.number,
    item.buy,
    item.price,
    item.newPrice,
  ),
);

// const rows = () => (
//     data.map(e => (
//         createData(e.universe, e.name, e.edition, e.type, e.number, e.buy, e.price, e.newPrice)
//     )
//     )
// )

export default rows;
