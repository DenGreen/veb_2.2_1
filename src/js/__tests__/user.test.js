import { orderByProps } from "../user";

test("orderByPropsTest", () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ];
  const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };

  const received = orderByProps(obj, ["name", "level"]);
  expect(received).toEqual(expected);

});

test("orderByPropsTest2", () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ];
  const obj = { health: 10, name: "мечник", defence: 40, level: 2, attack: 80 };

  const received = orderByProps(obj, ["name", "level"]);
  expect(received).toEqual(expected);

});

test("orderByPropsTest3", () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 }
  ];
  const obj = { name: "мечник", attack: 80 };

  const received = orderByProps(obj, ["name"]);
  expect(received).toEqual(expected);

});
