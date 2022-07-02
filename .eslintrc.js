/* eslint-env es6 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs } = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
})

module.exports = {
  extends: [...extendConfigs, 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        'prettier/prettier': 0,
        'no-unused-vars': [
          'error',
          { vars: 'all', args: 'none', ignoreRestSiblings: false },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-empty-interface': 'off',
        'no-empty-interface': 'off',
        'comma-dangle': 0,
        '@typescript-eslint/comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never',
          },
        ],
      },
    },
  ],
}
