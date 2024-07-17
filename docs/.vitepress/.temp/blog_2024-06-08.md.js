import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';

const __pageData = JSON.parse("{\"title\":\"Hello, RCGAL\",\"description\":\"The RCGAL is a computational geometry algorithm library of Rust.\",\"frontmatter\":{\"title\":\"Hello, RCGAL\",\"description\":\"The RCGAL is a computational geometry algorithm library of Rust.\",\"authors\":{\"name\":\"liuyulvv\",\"url\":\"https://github.com/liuyulvv\",\"image_url\":\"https://github.com/liuyulvv.png\"}},\"headers\":[],\"relativePath\":\"blog/2024-06-08.md\",\"filePath\":\"blog/2024-06-08.md\",\"lastUpdated\":null}");
const _sfc_main = {name:"blog/2024-06-08.md"};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Welcome, thanks for your interest in the RCGAL.</p><p>RCGAL is a computational geometry algorithm library of Rust. It is <strong>not</strong> a Rust binding of the <a href="https://www.cgal.org/" target="_blank" rel="noreferrer">CGAL</a>, but a new library that is inspired by the CGAL.</p><p>RCGAL is an open-source project, and it is hosted on <a href="https://github.com/liuyulvv/rcgal" target="_blank" rel="noreferrer">GitHub</a>, licensed under the MIT or Apache-2.0 license. RCGAL is designed to be a high-performance, easy-to-use, and easy-to-extend computational geometry algorithm library of Rust. It is still in the early stage of development, and it is not ready for production use, but you can try it out and give feedback to help improve it.</p><p>Thanks for your interest in the RCGAL, and I hope we can learn and grow together.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("blog/2024-06-08.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const _20240608 = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { __pageData, _20240608 as default };
