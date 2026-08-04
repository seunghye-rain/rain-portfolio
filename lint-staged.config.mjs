const lintStagedConfig = {
  '*.{js,jsx,mjs,cjs,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '*.{json,css,md,yml,yaml}': 'prettier --write',
};

export default lintStagedConfig;
