module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.mts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};