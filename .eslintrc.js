module.exports = {
  "env": {
    "node": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": false
    }
  },
  "plugins": [],
  "rules": {
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true
      }
    ],
    "no-const-assign": "error",
    "no-var": "error",
    "no-new-object": "error",
    "object-shorthand": ["error", "always", { "avoidExplicitReturnArrows": true }],
    "quote-props": ["error", "as-needed"],
    "no-array-constructor": "error",
    "no-new-wrappers": "error",
    "array-callback-return": "error",
    "quotes": ["error", "single", { "avoidEscape": true }],
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "no-useless-escape": "error",
    "wrap-iife": ["error", "any"],
    "no-loop-func": "error",
    "prefer-rest-params": "error",
    "no-new-func": "error",
    "space-before-function-paren": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "no-param-reassign": "off",
    "prefer-spread": "error",
    "prefer-arrow-callback": "warn",
    "arrow-spacing": "error",
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    "arrow-body-style": ["error", "as-needed"],
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "no-useless-constructor": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": ["error", { "includeExports": true }],
    // "import/no-mutable-exports": "error",
    // "import/prefer-default-export": "error",
    // "import/first": "error",
    // "import/no-webpack-loader-syntax": "error",
    "no-iterator": "error",
    "dot-notation": ["error", { "allowKeywords": false }],
    "no-undef": ["error", { "typeof": true }],
    "one-var": ["error", "never"],
    "no-plusplus": "off",
    "eqeqeq": ["warn", "always"],
    "no-case-declarations": "off",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "brace-style": "error",
    "spaced-comment": ["error", "always", { "exceptions": ["-", "+", "*"] }],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "overrides": {
          "if": { "after": true },
          "for": { "after": true },
          "while": { "after": true }
        }
      }
    ],
    "space-infix-ops": "error",
    "eol-last": ["error", "always"],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "no-whitespace-before-property": "error",
    "padded-blocks": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "max-len": [
      "error",
      100,
      {
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "id-length": "warn",
    "camelcase": "warn",
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "never"],
    "semi": "error",
    "radix": ["warn", "as-needed"],
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "capIsNew": true
      }
    ],
    "no-underscore-dangle": "warn",
    "no-console": "warn",
    "func-call-spacing": "off",
    "no-spaced-func": "off",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-tabs": "off",
    "no-eval": "error",
    "no-unused-expressions": "warn",
    "no-unused-vars": "warn",
    "no-with": "error",
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off"
  }
};