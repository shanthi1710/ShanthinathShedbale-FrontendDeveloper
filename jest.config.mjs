/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
};

export default config;
