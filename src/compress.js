import isObjectLike from "lodash.isobjectlike";
import isPlainObject from "lodash.isplainobject";
import { getTemplateIndex } from "./getTemplateIndex";
import { sortObject } from "./sortObject";

/**
 * Generates a table head
 * @param {HTMLTableElement} table - The target HTML table
 * @param {Array} data - The array of cell header names
 * @return {void}
 */
const compress = (element, templates) => {
  // We only compress objects and arrays
  if (!isObjectLike(element)) return element;

  // Sort object keys into alphabetical order
  if (isPlainObject(element)) element = sortObject(element);

  // Identify template index
  const templateIndex = getTemplateIndex(element, templates);

  // Recursively compress values
  const values = Object.values(element).map((value) =>
    compress(value, templates)
  );

  // Return compressed element
  return [templateIndex, ...values];
};

export { compress };
