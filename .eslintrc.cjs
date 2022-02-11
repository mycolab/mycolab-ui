module.exports = {
    root      : true,
    extends   : [ "eslint:recommended", "@tivac" ],
    plugins   : [ "svelte3" ],
    overrides : [{ files : [ "*.svelte" ], processor : "svelte3/svelte3" }],
    rules     : {
        indent : [ "warn", 4, {
            SwitchCase    : 1,
            outerIIFEBody : 0,
            ignoredNodes  : [
                // Prevent .then/.catch from being forced to be indented
                "MemberExpression[property.name=then]",
                "MemberExpression[property.name=catch]",
            ],
        }],
    },
    parserOptions : {
        sourceType  : "module",
        ecmaVersion : 2020,
    },
    env : {
        browser : true,
        es2017  : true,
        node    : true,
    },
};
