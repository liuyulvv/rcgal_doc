import { Button, ConfigProvider, Radio } from "ant-design-vue";
import { createPinia } from "pinia";
import DefaultTheme from "vitepress/theme";
import VueKonva from "vue-konva";
import WasmExample from "../components/WasmExample.vue";

const pinia = createPinia();

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(pinia).use(VueKonva).use(ConfigProvider).use(Radio).use(Button);
        app.component("WasmExample", WasmExample);
    },
};
