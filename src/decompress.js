import zipObject from "lodash.zipobject";
import { ARRAY_TEMPLATE_INDEX } from "./config";

/**
 * Generates a table head
 * @import { decompress } from "@sdgindex/data"
 * @param {HTMLTableElement} table - The target HTML table
 * @param {Array} data - The array of cell header names
 * @return {Array} final value
 */
const decompress = (element, templates) => {
  // We only decompress arrays
  if (Array.isArray(element)) return element;

  // Recursively decompress values
  const values = element.slice(1).map((value) => decompress(value, templates));

  // Identify template index
  const templateIndex = element[0];

  // If using array template, return values
  if (templateIndex === ARRAY_TEMPLATE_INDEX) return values;

  // Otherwise, zip template keys and values
  const keys = templates[templateIndex];
  return zipObject(keys, values);
};

export { decompress };
