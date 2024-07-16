let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
* @param {Point2} point
* @param {CircleSegment2} segment
* @returns {boolean}
*/
export function is_point_2_on_circle_segment_2(point, segment) {
    _assertClass(point, Point2);
    _assertClass(segment, CircleSegment2);
    const ret = wasm.is_point_2_on_circle_segment_2(point.__wbg_ptr, segment.__wbg_ptr);
    return ret !== 0;
}

/**
* @param {Point2} point
* @param {CircleSegment2} segment
* @returns {Point2Circle2Location}
*/
export function locate_point_2_circle_segment_2(point, segment) {
    _assertClass(point, Point2);
    _assertClass(segment, CircleSegment2);
    const ret = wasm.locate_point_2_circle_segment_2(point.__wbg_ptr, segment.__wbg_ptr);
    return ret;
}

/**
* @param {Point2} point
* @param {LineSegment2} segment
* @returns {boolean}
*/
export function is_point_2_on_line_segment_2(point, segment) {
    _assertClass(point, Point2);
    _assertClass(segment, LineSegment2);
    const ret = wasm.is_point_2_on_line_segment_2(point.__wbg_ptr, segment.__wbg_ptr);
    return ret !== 0;
}

/**
* @param {Point2} point
* @param {LineSegment2} segment
* @returns {Point2Segment2Location}
*/
export function locate_point_2_line_segment_2(point, segment) {
    _assertClass(point, Point2);
    _assertClass(segment, LineSegment2);
    const ret = wasm.locate_point_2_line_segment_2(point.__wbg_ptr, segment.__wbg_ptr);
    return ret;
}

/**
* @param {Point2} point
* @param {LineSegment2} segment
* @returns {Point2 | undefined}
*/
export function point_2_project_line_segment_2(point, segment) {
    _assertClass(point, Point2);
    _assertClass(segment, LineSegment2);
    const ret = wasm.point_2_project_line_segment_2(point.__wbg_ptr, segment.__wbg_ptr);
    return ret === 0 ? undefined : Point2.__wrap(ret);
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
        result.push(takeObject(slice[i]));
    }
    return result;
}
/**
* @param {Polygon2} polygon
* @returns {(Triangle2Indices)[]}
*/
export function earcut(polygon) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(polygon, Polygon2);
        var ptr0 = polygon.__destroy_into_raw();
        wasm.earcut(retptr, ptr0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

let WASM_VECTOR_LEN = 0;

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}
/**
* @param {Point2} point
* @param {ArcSegment2} segment
* @returns {boolean}
*/
export function is_point_2_on_arc_segment_2(point, segment) {
    _assertClass(point, Point2);
    _assertClass(segment, ArcSegment2);
    const ret = wasm.is_point_2_on_arc_segment_2(point.__wbg_ptr, segment.__wbg_ptr);
    return ret !== 0;
}

/**
* @param {Point2} point
* @param {ArcSegment2} segment
* @returns {Point2ArcSegment2Location}
*/
export function locate_point_2_arc_segment_2(point, segment) {
    _assertClass(point, Point2);
    _assertClass(segment, ArcSegment2);
    const ret = wasm.locate_point_2_arc_segment_2(point.__wbg_ptr, segment.__wbg_ptr);
    return ret;
}

/**
* @param {Point2} point
* @param {Polygon2} polygon
* @returns {Point2Polygon2Location}
*/
export function locate_point_2_polygon_2(point, polygon) {
    _assertClass(point, Point2);
    _assertClass(polygon, Polygon2);
    const ret = wasm.locate_point_2_polygon_2(point.__wbg_ptr, polygon.__wbg_ptr);
    return ret;
}

/**
* @param {Point2} point
* @param {Triangle2} triangle
* @returns {Point2Triangle2Location}
*/
export function locate_point_2_triangle_2(point, triangle) {
    _assertClass(point, Point2);
    _assertClass(triangle, Triangle2);
    const ret = wasm.locate_point_2_triangle_2(point.__wbg_ptr, triangle.__wbg_ptr);
    return ret;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}
/**
* @param {Segment2} segment_a
* @param {Segment2} segment_b
* @returns {boolean}
*/
export function is_segment_2_segment_2_intersected(segment_a, segment_b) {
    _assertClass(segment_a, Segment2);
    _assertClass(segment_b, Segment2);
    const ret = wasm.is_segment_2_segment_2_intersected(segment_a.__wbg_ptr, segment_b.__wbg_ptr);
    return ret !== 0;
}

/**
* @param {Segment2} segment_a
* @param {Segment2} segment_b
* @returns {(Point2)[]}
*/
export function segment_2_segment_2_intersection(segment_a, segment_b) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(segment_a, Segment2);
        _assertClass(segment_b, Segment2);
        wasm.segment_2_segment_2_intersection(retptr, segment_a.__wbg_ptr, segment_b.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
*/
export const Point2Segment2Location = Object.freeze({ On:0,"0":"On",Left:1,"1":"Left",Right:2,"2":"Right",Collinear:3,"3":"Collinear", });
/**
*/
export const Point2Triangle2Location = Object.freeze({ On:0,"0":"On",Inside:1,"1":"Inside",Outside:2,"2":"Outside", });
/**
*/
export const Point2Ray2Location = Object.freeze({ On:0,"0":"On",Left:1,"1":"Left",Right:2,"2":"Right",Collinear:3,"3":"Collinear", });
/**
*/
export const Orientation = Object.freeze({ Clockwise:0,"0":"Clockwise",CounterClockwise:1,"1":"CounterClockwise", });
/**
*/
export const Point2Circle2Location = Object.freeze({ On:0,"0":"On",Inside:1,"1":"Inside",Outside:2,"2":"Outside", });
/**
*/
export const Point2ArcSegment2Location = Object.freeze({ On:0,"0":"On",NotOn:1,"1":"NotOn", });
/**
*/
export const Segment2Type = Object.freeze({ LineSegment2:0,"0":"LineSegment2",CircleSegment2:1,"1":"CircleSegment2",ArcSegment2:2,"2":"ArcSegment2", });
/**
*/
export const Point2Polygon2Location = Object.freeze({ On:0,"0":"On",Inside:1,"1":"Inside",Outside:2,"2":"Outside", });
/**
*/
export const Edge2Type = Object.freeze({ Segment:0,"0":"Segment",Arc:1,"1":"Arc", });
/**
*/
export const TurnDirection = Object.freeze({ Left:0,"0":"Left",Right:1,"1":"Right",Collinear:2,"2":"Collinear", });

const ArcSegment2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_arcsegment2_free(ptr >>> 0));
/**
*/
export class ArcSegment2 {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ArcSegment2.prototype);
        obj.__wbg_ptr = ptr;
        ArcSegment2Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ArcSegment2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_arcsegment2_free(ptr);
    }
    /**
    * @param {CircleSegment2} support
    * @param {number} source_radian
    * @param {number} target_radian
    */
    constructor(support, source_radian, target_radian) {
        _assertClass(support, CircleSegment2);
        var ptr0 = support.__destroy_into_raw();
        const ret = wasm.arcsegment2_new(ptr0, source_radian, target_radian);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @returns {Segment2Type}
    */
    segment_type() {
        const ret = wasm.arcsegment2_segment_type(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {Point2}
    */
    source() {
        const ret = wasm.arcsegment2_source(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    source_radian() {
        const ret = wasm.arcsegment2_source_radian(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {Point2}
    */
    target() {
        const ret = wasm.arcsegment2_target(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    target_radian() {
        const ret = wasm.arcsegment2_target_radian(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {Point2}
    */
    center() {
        const ret = wasm.arcsegment2_center(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    radius() {
        const ret = wasm.arcsegment2_radius(this.__wbg_ptr);
        return ret;
    }
}

const CircleSegment2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_circlesegment2_free(ptr >>> 0));
/**
*/
export class CircleSegment2 {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CircleSegment2.prototype);
        obj.__wbg_ptr = ptr;
        CircleSegment2Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CircleSegment2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_circlesegment2_free(ptr);
    }
    /**
    * @param {Point2} center
    * @param {number} radius
    */
    constructor(center, radius) {
        _assertClass(center, Point2);
        var ptr0 = center.__destroy_into_raw();
        const ret = wasm.circlesegment2_new(ptr0, radius);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @returns {Segment2Type}
    */
    segment_type() {
        const ret = wasm.circlesegment2_segment_type(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {Point2}
    */
    center() {
        const ret = wasm.circlesegment2_center(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    radius() {
        const ret = wasm.circlesegment2_radius(this.__wbg_ptr);
        return ret;
    }
}

const ConvexHull2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_convexhull2_free(ptr >>> 0));
/**
*/
export class ConvexHull2 {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ConvexHull2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_convexhull2_free(ptr);
    }
    /**
    * @param {(Point2)[]} points
    */
    constructor(points) {
        const ptr0 = passArrayJsValueToWasm0(points, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.convexhull2_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @returns {(Point2)[]}
    */
    convex_hull() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.convexhull2_convex_hull(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}

const LineSegment2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_linesegment2_free(ptr >>> 0));
/**
*/
export class LineSegment2 {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(LineSegment2.prototype);
        obj.__wbg_ptr = ptr;
        LineSegment2Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LineSegment2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_linesegment2_free(ptr);
    }
    /**
    * @param {Point2} source
    * @param {Point2} target
    */
    constructor(source, target) {
        _assertClass(source, Point2);
        var ptr0 = source.__destroy_into_raw();
        _assertClass(target, Point2);
        var ptr1 = target.__destroy_into_raw();
        const ret = wasm.linesegment2_new(ptr0, ptr1);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @returns {Segment2Type}
    */
    segment_type() {
        const ret = wasm.linesegment2_segment_type(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {Point2}
    */
    source() {
        const ret = wasm.linesegment2_source(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
    /**
    * @returns {Point2}
    */
    target() {
        const ret = wasm.linesegment2_target(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
}

const Point2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_point2_free(ptr >>> 0));
/**
*/
export class Point2 {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Point2.prototype);
        obj.__wbg_ptr = ptr;
        Point2Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    static __unwrap(jsValue) {
        if (!(jsValue instanceof Point2)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Point2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_point2_free(ptr);
    }
    /**
    * @param {number} x
    * @param {number} y
    */
    constructor(x, y) {
        const ret = wasm.point2_new(x, y);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @returns {number}
    */
    x() {
        const ret = wasm.point2_x(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    y() {
        const ret = wasm.point2_y(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {Point2} other
    * @returns {boolean}
    */
    equals(other) {
        _assertClass(other, Point2);
        const ret = wasm.point2_equals(this.__wbg_ptr, other.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @returns {Vector2}
    */
    get_vector() {
        const ret = wasm.point2_get_vector(this.__wbg_ptr);
        return Vector2.__wrap(ret);
    }
    /**
    * @param {Point2} other
    * @returns {number}
    */
    distance(other) {
        _assertClass(other, Point2);
        const ret = wasm.point2_distance(this.__wbg_ptr, other.__wbg_ptr);
        return ret;
    }
    /**
    * @param {Point2} p
    * @param {Point2} q
    * @param {Point2} r
    * @returns {TurnDirection}
    */
    static turn(p, q, r) {
        _assertClass(p, Point2);
        _assertClass(q, Point2);
        _assertClass(r, Point2);
        const ret = wasm.point2_turn(p.__wbg_ptr, q.__wbg_ptr, r.__wbg_ptr);
        return ret;
    }
}

const Polygon2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_polygon2_free(ptr >>> 0));
/**
*/
export class Polygon2 {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Polygon2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_polygon2_free(ptr);
    }
    /**
    * @param {(Point2)[]} points
    */
    constructor(points) {
        const ptr0 = passArrayJsValueToWasm0(points, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.polygon2_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @returns {(Point2)[]}
    */
    vertices() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.polygon2_vertices(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {(LineSegment2)[]}
    */
    edges() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.polygon2_edges(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {number}
    */
    area() {
        const ret = wasm.polygon2_area(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {boolean}
    */
    is_simple() {
        const ret = wasm.polygon2_is_simple(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @returns {boolean}
    */
    is_convex() {
        const ret = wasm.polygon2_is_convex(this.__wbg_ptr);
        return ret !== 0;
    }
}

const Segment2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_segment2_free(ptr >>> 0));
/**
*/
export class Segment2 {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Segment2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_segment2_free(ptr);
    }
    /**
    * @returns {Segment2Type}
    */
    get segment_type() {
        const ret = wasm.__wbg_get_segment2_segment_type(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {Segment2Type} arg0
    */
    set segment_type(arg0) {
        wasm.__wbg_set_segment2_segment_type(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {LineSegment2 | undefined}
    */
    get line_segment_2() {
        const ret = wasm.__wbg_get_segment2_line_segment_2(this.__wbg_ptr);
        return ret === 0 ? undefined : LineSegment2.__wrap(ret);
    }
    /**
    * @param {LineSegment2 | undefined} [arg0]
    */
    set line_segment_2(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, LineSegment2);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_segment2_line_segment_2(this.__wbg_ptr, ptr0);
    }
    /**
    * @returns {CircleSegment2 | undefined}
    */
    get circle_segment_2() {
        const ret = wasm.__wbg_get_segment2_circle_segment_2(this.__wbg_ptr);
        return ret === 0 ? undefined : CircleSegment2.__wrap(ret);
    }
    /**
    * @param {CircleSegment2 | undefined} [arg0]
    */
    set circle_segment_2(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, CircleSegment2);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_segment2_circle_segment_2(this.__wbg_ptr, ptr0);
    }
    /**
    * @returns {ArcSegment2 | undefined}
    */
    get arc_segment_2() {
        const ret = wasm.__wbg_get_segment2_arc_segment_2(this.__wbg_ptr);
        return ret === 0 ? undefined : ArcSegment2.__wrap(ret);
    }
    /**
    * @param {ArcSegment2 | undefined} [arg0]
    */
    set arc_segment_2(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, ArcSegment2);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_segment2_arc_segment_2(this.__wbg_ptr, ptr0);
    }
    /**
    * @param {Segment2Type} segment_type
    * @param {LineSegment2 | undefined} [line_segment_2]
    * @param {CircleSegment2 | undefined} [circle_segment_2]
    * @param {ArcSegment2 | undefined} [arc_segment_2]
    */
    constructor(segment_type, line_segment_2, circle_segment_2, arc_segment_2) {
        let ptr0 = 0;
        if (!isLikeNone(line_segment_2)) {
            _assertClass(line_segment_2, LineSegment2);
            ptr0 = line_segment_2.__destroy_into_raw();
        }
        let ptr1 = 0;
        if (!isLikeNone(circle_segment_2)) {
            _assertClass(circle_segment_2, CircleSegment2);
            ptr1 = circle_segment_2.__destroy_into_raw();
        }
        let ptr2 = 0;
        if (!isLikeNone(arc_segment_2)) {
            _assertClass(arc_segment_2, ArcSegment2);
            ptr2 = arc_segment_2.__destroy_into_raw();
        }
        const ret = wasm.segment2_new(segment_type, ptr0, ptr1, ptr2);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
}

const SweepSegment2IntersectionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_sweepsegment2intersection_free(ptr >>> 0));
/**
*/
export class SweepSegment2Intersection {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SweepSegment2IntersectionFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_sweepsegment2intersection_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.sweepsegment2intersection_new();
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @param {Segment2} segment_2
    */
    push_segment(segment_2) {
        _assertClass(segment_2, Segment2);
        wasm.sweepsegment2intersection_push_segment(this.__wbg_ptr, segment_2.__wbg_ptr);
    }
    /**
    * @returns {(Point2)[]}
    */
    intersection() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.sweepsegment2intersection_intersection(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}

const Triangle2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_triangle2_free(ptr >>> 0));
/**
*/
export class Triangle2 {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Triangle2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_triangle2_free(ptr);
    }
    /**
    * @param {Point2} a
    * @param {Point2} b
    * @param {Point2} c
    */
    constructor(a, b, c) {
        _assertClass(a, Point2);
        var ptr0 = a.__destroy_into_raw();
        _assertClass(b, Point2);
        var ptr1 = b.__destroy_into_raw();
        _assertClass(c, Point2);
        var ptr2 = c.__destroy_into_raw();
        const ret = wasm.triangle2_new(ptr0, ptr1, ptr2);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @returns {Point2}
    */
    a() {
        const ret = wasm.circlesegment2_center(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
    /**
    * @returns {Point2}
    */
    b() {
        const ret = wasm.triangle2_b(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
    /**
    * @returns {Point2}
    */
    c() {
        const ret = wasm.triangle2_c(this.__wbg_ptr);
        return Point2.__wrap(ret);
    }
    /**
    * @returns {(Point2)[]}
    */
    vertices() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.triangle2_vertices(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {(LineSegment2)[]}
    */
    edges() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.triangle2_edges(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Orientation}
    */
    orientation() {
        const ret = wasm.triangle2_orientation(this.__wbg_ptr);
        return ret;
    }
    /**
    */
    reverse_orientation() {
        wasm.triangle2_reverse_orientation(this.__wbg_ptr);
    }
    /**
    * @returns {number}
    */
    area() {
        const ret = wasm.triangle2_area(this.__wbg_ptr);
        return ret;
    }
}

const Triangle2IndicesFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_triangle2indices_free(ptr >>> 0));
/**
*/
export class Triangle2Indices {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Triangle2Indices.prototype);
        obj.__wbg_ptr = ptr;
        Triangle2IndicesFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Triangle2IndicesFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_triangle2indices_free(ptr);
    }
    /**
    * @returns {number}
    */
    get a() {
        const ret = wasm.__wbg_get_triangle2indices_a(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set a(arg0) {
        wasm.__wbg_set_triangle2indices_a(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get b() {
        const ret = wasm.__wbg_get_triangle2indices_b(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set b(arg0) {
        wasm.__wbg_set_triangle2indices_b(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get c() {
        const ret = wasm.__wbg_get_triangle2indices_c(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set c(arg0) {
        wasm.__wbg_set_triangle2indices_c(this.__wbg_ptr, arg0);
    }
}

const Vector2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_vector2_free(ptr >>> 0));
/**
*/
export class Vector2 {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Vector2.prototype);
        obj.__wbg_ptr = ptr;
        Vector2Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Vector2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_vector2_free(ptr);
    }
    /**
    * @param {number} x
    * @param {number} y
    */
    constructor(x, y) {
        const ret = wasm.vector2_new(x, y);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @returns {number}
    */
    x() {
        const ret = wasm.vector2_x(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    y() {
        const ret = wasm.vector2_y(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    length() {
        const ret = wasm.vector2_length(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {Vector2}
    */
    normalize() {
        const ret = wasm.vector2_normalize(this.__wbg_ptr);
        return Vector2.__wrap(ret);
    }
    /**
    * @param {Vector2} other
    * @returns {number}
    */
    dot(other) {
        _assertClass(other, Vector2);
        const ret = wasm.vector2_dot(this.__wbg_ptr, other.__wbg_ptr);
        return ret;
    }
    /**
    * @param {Vector2} other
    * @returns {number}
    */
    cross(other) {
        _assertClass(other, Vector2);
        const ret = wasm.vector2_cross(this.__wbg_ptr, other.__wbg_ptr);
        return ret;
    }
    /**
    * @param {Vector2} other
    * @returns {number}
    */
    radian_to(other) {
        _assertClass(other, Vector2);
        const ret = wasm.vector2_radian_to(this.__wbg_ptr, other.__wbg_ptr);
        return ret;
    }
}

export function __wbg_triangle2indices_new(arg0) {
    const ret = Triangle2Indices.__wrap(arg0);
    return addHeapObject(ret);
};

export function __wbg_linesegment2_new(arg0) {
    const ret = LineSegment2.__wrap(arg0);
    return addHeapObject(ret);
};

export function __wbg_point2_new(arg0) {
    const ret = Point2.__wrap(arg0);
    return addHeapObject(ret);
};

export function __wbg_point2_unwrap(arg0) {
    const ret = Point2.__unwrap(takeObject(arg0));
    return ret;
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

