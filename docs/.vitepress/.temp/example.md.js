import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';

const __pageData = JSON.parse("{\"title\":\"\",\"description\":\"\",\"frontmatter\":{\"layout\":\"page\"},\"headers\":[],\"relativePath\":\"example.md\",\"filePath\":\"example.md\",\"lastUpdated\":null}");
const _sfc_main = {name:"example.md"};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WasmExample = resolveComponent("WasmExample");

  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WasmExample, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("example.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const example = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { __pageData, example as default };
