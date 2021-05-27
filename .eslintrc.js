module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    plugins: [
        "react"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    //Custom rules
    rules: {
        "indent": ["error", "tab", { "SwitchCase": 1 }],//The default indentation identifies TAB, use one tab in SwitchCase
        "quotes": ["warn", "single"],//Single quotation marks are recommended
        "no-mixed-spaces-and-tabs": "off",//disallow mixed spaces and tabs for indentation
        "no-unused-vars": "error",//Disallow unused variables
        "no-undef": "error",//Disallow undefined content calls
        "no-empty": "error",//Disallow empty block statements
        "no-console": "warn",//Avoid console output
        "keyword-spacing": "error",//Leave space before and after keywords
        "no-multiple-empty-lines": ["error", {"max": 1}],//Disallow multiple blank lines
        "comma-dangle": ["error", "never"],//Excess end-of-line commas are not allowed
        "comma-style": ["error", "last"],//Always place a comma at the end of a line
        "func-call-spacing": "error",//Function calls leave no space between identifiers and parentheses
        "key-spacing": "error",//Leave space between colons and values in key-value pairs
        "no-constant-condition": "warn",//Avoid conditions that use constants as conditional expressions (except for looping statements)
        "no-duplicate-imports": "error",//Disallow duplicate module imports
        "no-eval": "error",//Disallow eval()
        "no-extend-native": "error",//Extending native objects is disallowed
        "no-floating-decimal": "error",//It is forbidden to delete zeros before the decimal point
        "no-undef-init": "error",//Disallow initializing undefined
        "no-throw-literal": "error",//Restrict what can be thrown as an exception
        "padded-blocks": ["error", "never"],//Disallow padding within code blocks
        "semi-spacing": "error",//When semicolons are encountered, Spaces should be left after, not before
        "semi": ["error", "never"],//Do not use semicolons
        "space-before-blocks": "error",//Requires a space before a statement block
        "space-in-parens": "error",//Leave no spaces between parentheses
        "space-unary-ops": "error",//Unary operator is followed by a space
        "react/react-in-jsx-scope": "off",//Prevent missing React when using JSX
        "react/prop-types": "off",//Prevent missing props validation in a React component definition
        "react/jsx-key": "off",//Detect missing key prop
        "react/no-string-refs": "off"//Prevent using string references
    }
}
