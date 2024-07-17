import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';

const __pageData = JSON.parse("{\"title\":\"Projection\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"tutorial/algorithm/projection.md\",\"filePath\":\"tutorial/algorithm/projection.md\",\"lastUpdated\":null}");
const _sfc_main = {name:"tutorial/algorithm/projection.md"};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="projection" tabindex="-1">Projection <a class="header-anchor" href="#projection" aria-label="Permalink to &quot;Projection&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("tutorial/algorithm/projection.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const projection = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { __pageData, projection as default };
