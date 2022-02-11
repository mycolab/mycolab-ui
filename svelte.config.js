import adapter from "@sveltejs/adapter-static";
import preprocessor from "@modular-css/svelte";
import mcss from "@modular-css/vite";

import postcssNested from "postcss-nested";

const { preprocess, processor } = preprocessor({
    verbose : false,
    include : /\.mcss$/i,

    exportGlobals : false,

    before : [
        postcssNested(),
    ],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit : {
        adapter : adapter({
            fallback : "index.html",
        }),

        // Override http methods in the Todo forms
        methodOverride : {
            allowed : [ "PATCH", "DELETE" ],
        },

        vite : {
            plugins : [
                mcss({
                    processor,
                }),
            ],
        },

        trailingSlash : "always",
    },

    preprocess,
};

export default config;
