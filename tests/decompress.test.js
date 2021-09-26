import { decompress } from "@sdgindex/compress";

// Reset templates
let templates = [];
beforeEach(() => (templates = []));

it("decompresses into an array when template is -1", () => {
  const compressed = [-1, 1, 2, 3];
  const array = [1, 2, 3];

  expect(decompress(compressed, templates)).toEqual(array);
});

it("decompresses into an object from existing template", () => {
  templates = [["bio", "id", "name"]];
  const compressed = [0, "Hello, my name is...", 1, "Finn"];
  const object = { bio: "Hello, my name is...", id: 1, name: "Finn" };

  expect(decompress(compressed, templates)).toEqual(object);
});

it("decompresses deeply nested objects and arrays", () => {
  const templates = [
    ["offices", "user"],
    ["city", "country"],
  ];
  const compressed = [
    0,
    [-1, [1, "Paris", "France"], [1, "New York City", "USA"]],
    "sdgindex",
  ];
  const nestedObject = {
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
    user: "sdgindex",
  };

  expect(decompress(compressed, templates)).toEqual(nestedObject);
});
