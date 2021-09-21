module.exports = {
  resetMocks: true,
  moduleNameMapper: {
    "^@sdgindex/compress(.*)$": "<rootDir>/src$1",
    "^mock:@sdgindex/compress(.*)$": "<rootDir>/src$1",
    "^private:@sdgindex/compress(.*)$": "<rootDir>/src$1",
    "^testHelpers(.*)$": "<rootDir>/tests/helpers$1",
  },
};
