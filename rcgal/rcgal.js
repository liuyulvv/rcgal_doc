import * as wasm from "./rcgal_bg.wasm";
import { __wbg_set_wasm } from "./rcgal_bg.js";
__wbg_set_wasm(wasm);
export * from "./rcgal_bg.js";
