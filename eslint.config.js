import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginTypeScript from "typescript-eslint";
import parserVue from "vue-eslint-parser";

const extraFileExtensions = [".vue"];
export default [
  eslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...pluginTypeScript.configs.strictTypeChecked,
  {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  {
    files: ["**/*.js"],
    ...pluginTypeScript.configs.disableTypeChecked,
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: pluginTypeScript.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions,
      },
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        parser: pluginTypeScript.parser,
        extraFileExtensions,
      },
    },
  },
];
