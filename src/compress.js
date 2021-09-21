import isObjectLike from "lodash.isobjectlike";
import { getTemplateIndex } from "./getTemplateIndex";

/**
 * Generates a table head
 * @param {HTMLTableElement} table - The target HTML table
 * @param {Array} data - The array of cell header names
 * @return {void}
 */
const compress = (element, templates) => {
  // We only compress objects and arrays
  if (!isObjectLike(element)) return element;

  // Recursively compress values
  const values = Object.values(element).map((value) =>
    compress(value, templates)
  );

  // Identify template index
  const templateIndex = getTemplateIndex(element, templates);

  // Return compressed element
  return [templateIndex, ...values];
};

export { compress };
