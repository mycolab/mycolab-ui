import adapter from "@sveltejs/adapter-node";
import preprocessor from "@modular-css/svelte";
import mcss from "@modular-css/vite";

import mcssPathAlias from "@modular-css/path-aliases";
import postcssNested from "postcss-nested";
import postcssImport from "postcss-import";
import postcssImportAlias from "postcss-import-alias-resolver";

const { preprocess, processor } = preprocessor({
    verbose : false,
    include : /\.mcss$/i,

    exportGlobals : false,

    resolvers : [
        mcssPathAlias({
            aliases : {
                $lib : "./src/lib",
            },
        }),
    ],

    after : [
        postcssImport({
            resolve : postcssImportAlias({
                alias : {
                    $lib : "./src/lib",
                },
                extensions : [ ".mcss" ],
                dontPrefix : true,
            }),
        }),
    ],

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
