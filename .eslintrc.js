module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }] // Catches console.log
    }
};
