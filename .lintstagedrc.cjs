module.exports = {
  '**/*.{ts,tsx}': [
    // () => `tsc -p tsconfig.json --noemit`,
    'eslint -c .eslintrc.cjs --fix',
  ],
};
