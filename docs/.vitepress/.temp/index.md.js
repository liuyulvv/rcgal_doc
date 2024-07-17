import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';

const __pageData = JSON.parse("{\"title\":\"\",\"description\":\"\",\"frontmatter\":{\"layout\":\"home\",\"hero\":{\"name\":\"RCGAL\",\"text\":\"Rust Computational Geometry Algorithms Library\",\"actions\":[{\"theme\":\"brand\",\"text\":\"Tutorial\",\"link\":\"/tutorial\"},{\"theme\":\"alt\",\"text\":\"Example\",\"link\":\"/example\"}]},\"features\":[{\"title\":\"2D Location\",\"details\":\"Locate the position of a point relative to a ...\",\"link\":\"/tutorial/algorithm/location\"},{\"title\":\"2D Intersection\",\"details\":\"Find the intersection of segments.\",\"link\":\"/tutorial/algorithm/intersection\"},{\"title\":\"2D Projection\",\"details\":\"Project a point onto a ...\",\"link\":\"/tutorial/algorithm/projection\"},{\"title\":\"2D Convex Hull\",\"details\":\"Find the convex hull of a set of points.\",\"link\":\"/tutorial/algorithm/convex-hull\"}]},\"headers\":[],\"relativePath\":\"index.md\",\"filePath\":\"index.md\",\"lastUpdated\":null}");
const _sfc_main = {name:"index.md"};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const index = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { __pageData, index as default };
