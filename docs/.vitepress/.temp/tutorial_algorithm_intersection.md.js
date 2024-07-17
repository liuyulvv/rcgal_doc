import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';

const __pageData = JSON.parse("{\"title\":\"Intersection\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"tutorial/algorithm/intersection.md\",\"filePath\":\"tutorial/algorithm/intersection.md\",\"lastUpdated\":null}");
const _sfc_main = {name:"tutorial/algorithm/intersection.md"};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="intersection" tabindex="-1">Intersection <a class="header-anchor" href="#intersection" aria-label="Permalink to &quot;Intersection&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("tutorial/algorithm/intersection.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const intersection = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { __pageData, intersection as default };
