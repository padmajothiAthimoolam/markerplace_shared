const BABEL_ENV = process.env.BABEL_ENV;
const isCommonJS = BABEL_ENV != undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

module.exports = () => ({
    presets: [
        ['@babel/preset-typescript'],
        [
            '@babel/env',
            {
                bugfixes: true,
                loose: true,
                modules: isCommonJS ? 'commonjs' : false,
                targets: {
                    esmodules: isESM ? true : undefined,
                    chrome: 70,
                },
            },
        ],
    ],
})

// Constants and Environment Setup
// const BABEL_ENV = process.env.BABEL_ENV;

// Retrieves the value of the BABEL_ENV environment variable.
// This variable is often used to differentiate between build targets or configurations (e.g., CommonJS or ESM).
// const isCommonJS = BABEL_ENV != undefined && BABEL_ENV === 'cjs';

// Checks if BABEL_ENV is set to 'cjs', indicating that the target module system is CommonJS.
// isCommonJS will be true if the environment is set to CommonJS, otherwise false.
// const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

// Checks if BABEL_ENV is set to 'esm', indicating that the target module system is ES Modules (ESM).
// isESM will be true if the environment is set to ESM, otherwise false.
// Exported Function
// module.exports = () => ({
// Exports a function that returns the Babel configuration object.
// This allows for dynamic configuration based on environment variables or other logic.
// Presets Configuration
// presets: [

// Specifies the presets to be used by Babel. Presets are predefined configurations for transforming code.
// ['@babel/preset-typescript'],

// Adds support for transforming TypeScript into JavaScript.
// Does not perform type-checking (that’s handled by TypeScript itself).
// [ '@babel/env', { ... }]

// Adds support for transforming modern JavaScript (ES2015+) into a version compatible with the specified targets.
// This preset includes settings for transpiling syntax, polyfills, and environment-specific optimizations.
// Options for @babel/env
// bugfixes: true,

// Enables optimizations to fix known issues with older JavaScript engines, resulting in smaller and more efficient code.
// loose: true,

// Uses simpler, less strict transformations for better performance and smaller output.
// This may reduce compatibility with edge cases of the JavaScript specification.
// modules: isCommonJS ? 'commonjs' : false,

// Determines the module system used in the transformed code:
// If isCommonJS is true, modules are transformed to CommonJS (require/module.exports).
// If false, the module syntax is left as ES Modules (import/export).
// targets: { ... },

// Specifies the target environments for the output code.
// Target Configuration
// esmodules: isESM ? true : undefined,

// Enables optimizations for ES Modules (e.g., using import/export) if isESM is true.
// This ensures the code is optimized for environments that natively support ES Modules.
// chrome: 70,

// Specifies that the output code should be compatible with Chrome version 70 and later.
// This reduces the need for transpiling features already supported by Chrome 70.