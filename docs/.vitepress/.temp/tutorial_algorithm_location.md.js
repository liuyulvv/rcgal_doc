import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';

const __pageData = JSON.parse("{\"title\":\"Location\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"tutorial/algorithm/location.md\",\"filePath\":\"tutorial/algorithm/location.md\",\"lastUpdated\":null}");
const _sfc_main = {name:"tutorial/algorithm/location.md"};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="location" tabindex="-1">Location <a class="header-anchor" href="#location" aria-label="Permalink to &quot;Location&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("tutorial/algorithm/location.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const location = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { __pageData, location as default };
