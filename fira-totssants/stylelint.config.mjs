/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    "selector-class-pattern": [
      "^[a-z]([a-z0-9-]+)?(__[a-z0-9-]+)?(--[a-z0-9-]+)?$",
      {
        message: "Usa nomenclatura BEM",
      },
    ],
    "scss/dollar-variable-pattern": "^[a-z][a-z0-9-]*$",
    "no-invalid-position-at-import-rule": null,
  },
};
