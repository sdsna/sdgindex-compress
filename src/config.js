export const ARRAY_TEMPLATE_INDEX = -1;

// Increment this by one whenever the underlying compression algorithm changes.
// Can be used by other npm packages to verify that data was compressed with the
// same algorithm as it is being decompressed with (e.g., a data store can
// persist both the compressed data as well as the compression version and
// check that compression version matches when decompressing).
export const COMPRESSION_VERSION = 1;
