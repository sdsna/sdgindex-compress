module.exports = {
  resetMocks: true,
  moduleNameMapper: {
    "^@sdgindex/compress(.*)$": "<rootDir>$1",
    "^mock:@sdgindex/compress(.*)$": "<rootDir>/cjs$1",
    "^private:@sdgindex/compress(.*)$": "<rootDir>/cjs$1",
    "^testHelpers(.*)$": "<rootDir>/tests/helpers$1",
  },
};
