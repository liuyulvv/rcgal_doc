import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';

const __pageData = JSON.parse("{\"title\":\"Circle2 and Arc2\",\"description\":\"The RCGAL is a computational geometry algorithm library of Rust.\",\"frontmatter\":{\"title\":\"Circle2 and Arc2\",\"description\":\"The RCGAL is a computational geometry algorithm library of Rust.\",\"authors\":{\"name\":\"liuyulvv\",\"url\":\"https://github.com/liuyulvv\",\"image_url\":\"https://github.com/liuyulvv.png\"}},\"headers\":[],\"relativePath\":\"blog/2024-06-25.md\",\"filePath\":\"blog/2024-06-25.md\",\"lastUpdated\":null}");
const _sfc_main = {name:"blog/2024-06-25.md"};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>We are glad to announce that the <code>Circle2</code> and <code>Arc2</code> types have been added to the RCGAL. The <code>Circle2</code> type represents a circle, and the <code>Arc2</code> type represents an arc of a circle. The old <code>Segment2</code> type has been renamed to <code>LineSegment2</code>, and the <code>Segment2</code> <code>trait</code> has been added.</p><p>The <code>Location</code> and <code>Intersection</code> of the <code>Circle2</code> and <code>Arc2</code> types have been implemented.</p><p>We optimized the <code>Intersection</code>, you can get check if two segments intersect through the <code>is_segment_2_segment_2_intersected</code> function, and get the intersection point through the <code>segment_2_segment_2_intersection</code> function, no matter the segments are lines, circles, or arcs.</p><p>The <code>sweep_line_segment_2_intersection</code> function has been removed, and the <code>sweep_segment_2_intersection</code> function has been added. You can get the intersection points of a bunch of segments, no matter the segments are lines, circles, or arcs.</p><p>Thanks for your interest in the RCGAL, and I hope we can learn and grow together.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("blog/2024-06-25.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const _20240625 = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { __pageData, _20240625 as default };
