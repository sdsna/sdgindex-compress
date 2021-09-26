// Sort an object, so that all keys appear in alphabetical order
// From: https://stackoverflow.com/a/49702242
const sortObject = (object) =>
  Object.keys(object)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: object[key],
      }),
      {}
    );

export { sortObject };
