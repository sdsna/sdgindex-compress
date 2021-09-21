# @sdgindex/compress

The `@sdgindex/compress` package efficiently compresses JavaScript objects.

## Installation

```terminal
npm install @sdgindex/compress
```

## How to use

```javascript
import { compress, decompress } from "@sdgindex/compress";

const templates = [];

const users = [
  { id: 3, name: "Finn", age: 28 },
  { id: 7, name: "Mary", age: 47 },
  { id: 8, name: "Harry", location: "Paris" },
];

// Compress users
const cUsers = users.map((user) => compress(user, templates));

console.log(cUsers); // [[0, 3, "Finn", 28], [0, 7, "Mary", 47], [1, 8, "Harry", "Paris"]]
console.log(templates); // [["id", "name", "age"], ["id", "name", "location"]]

// Decompress the first user
console.log(decompress(cUsers[0], templates)); // { id: 3, name: "Finn", age: 28 }
```

### Nested Objects and Arrays

Objects are compressed recursively, so nested objects and arrays — no matter how deep — are compressed as well.

```javascript
import { compress } from "@sdgindex/compress";

const templates = [];
const user = {
  id: 1,
  name: "Finn",
  // A nested object
  address: {
    city: "Berlin",
    country: "Germany",
  },
};

console.log(compress(user, templates)); // [0, 1, "Finn", [1, "Berlin", "Germany"]]

console.log(templates); // [["id", "name", "address"], ["city", "country"]]
```

## Background

When you have an array of objects that share the same or similar structure, the repeating object keys take up a sizeable amount of space.

For example, the users collection below:

```javascript
// Lots of space taken up by repeating keys
const users = [
  {
    id: 1,
    name: "John",
    email: "john@john.com"
  }, {
    id: 2,
    name: "Mary",
    email: "mary@mary.com"
  },
  }, {
    id: 3,
    name: "Anna",
    country: "France",
  },
  ...
]
```

We can compress this collection of objects by storing only the values of each object:

```javascript
const users = [
  [1, "John", "john@john.com"],
  [2, "Mary", "mary@mary.com"],
  [3, "Anna", "France"],
];
```

The object keys will be stored as templates, so that objects with the same structure can share the same template:

```javascript
// We create one template for each unique object structure
const templates = [
  ["id", "name", "email"],
  ["id", "name", "country"],
];

// The first element in each user array references the template index
const users = [
  [0, 1, "John", "john@john.com"],
  [0, 2, "Mary", "mary@mary.com"],
  [1, 3, "Anna", "France"],
];
```

This compression "algorithm" is inspired by [Steve Hanov's CJSON](http://stevehanov.ca/blog/?id=104).
