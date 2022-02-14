import translate from "translate.js";
import en from "$lib/i18n/en-US.json";
import { readable } from "svelte/store";

// do something stupid for now so we can store our translations off in a single place
const t = readable(translate(en));

export default t;
