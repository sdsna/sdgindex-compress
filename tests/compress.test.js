import { compress } from "@sdgindex/compress";

// Reset templates
let templates = [];
beforeEach(() => (templates = []));

it("compresses an array with template -1", () => {
  const array = [1, 2, 3];
  const compressed = [-1, 1, 2, 3];

  expect(compress(array, templates)).toEqual(compressed);
  expect(templates).toEqual([]);
});

it("compresses an object and generates a template", () => {
  const object = { id: 1, name: "Finn", bio: "Hello, my name is..." };
  const compressed = [0, "Hello, my name is...", 1, "Finn"];

  expect(compress(object, templates)).toEqual(compressed);
  expect(templates).toEqual([["bio", "id", "name"]]);
});

it("reuses the same template for objects with identical keys", () => {
  const object1 = { b: "b1", c: "c1", a: "a1" };
  const compressed1 = [0, "a1", "b1", "c1"];
  const object2 = { c: "c2", a: "a2", b: "b2" };
  const compressed2 = [0, "a2", "b2", "c2"];

  expect(compress(object1, templates)).toEqual(compressed1);
  expect(compress(object2, templates)).toEqual(compressed2);
  expect(templates).toEqual([["a", "b", "c"]]);
});

it("compresses deeply nested objects and arrays", () => {
  const nestedObject = {
    user: "sdgindex",
    offices: [
      {
        city: "Paris",
        country: "France",
      },
      {
        city: "New York City",
        country: "USA",
      },
    ],
  };
  const compressed = [
    0,
    [-1, [1, "Paris", "France"], [1, "New York City", "USA"]],
    "sdgindex",
  ];

  expect(compress(nestedObject, templates)).toEqual(compressed);
  expect(templates).toEqual([
    ["offices", "user"],
    ["city", "country"],
  ]);
});
