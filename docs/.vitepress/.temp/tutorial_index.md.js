import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';

const __pageData = JSON.parse("{\"title\":\"Introduction\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"tutorial/index.md\",\"filePath\":\"tutorial/index.md\",\"lastUpdated\":null}");
const _sfc_main = {name:"tutorial/index.md"};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>RCGAL is a computational geometry algorithm library of Rust, it is <strong>not</strong> a Rust binding of the <a href="https://www.cgal.org/" target="_blank" rel="noreferrer">CGAL</a>, but a new library that is inspired by the CGAL.</p><p>RCGAL is still in the early state of development, and it is not ready for production use, but you can try it out and give feedback to help improve it.</p><p>This tutorial will guide you through the basic usage of the RCGAL.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("tutorial/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const index = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { __pageData, index as default };
