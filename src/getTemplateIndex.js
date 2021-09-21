import isEqual from "lodash.isequal";
import { ARRAY_TEMPLATE_INDEX } from "./config";

const getTemplateIndex = (element, templates) => {
  // Use hard-coded index for arrays
  if (Array.isArray(element)) return ARRAY_TEMPLATE_INDEX;

  // Identify existing template
  const keys = Object.keys(element).sort();
  let index = templates.findIndex((template) => isEqual(template, keys));

  // No existing template. Create a new one.
  if (index === -1) index = templates.push(keys) - 1;

  return index;
};

export { getTemplateIndex };
