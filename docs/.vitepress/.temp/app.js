import { defineStore, createPinia } from 'pinia';
import { defineComponent, mergeProps, useSSRContext, getCurrentScope, onScopeDispose, unref, toRef as toRef$1, readonly, customRef, ref, watch, onMounted, nextTick, getCurrentInstance, isRef, shallowRef, watchEffect, computed, inject, onUnmounted, reactive, markRaw, h, watchPostEffect, onUpdated, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, defineAsyncComponent, provide, toHandlers, withKeys, onBeforeUnmount, useSlots, createSSRApp } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, renderToString } from 'vue/server-renderer';
import { _ as _export_sfc } from './plugin-vue_export-helper.pcqpp-6-.js';
import VueKonva from 'vue-konva';
import '@arco-design/web-vue/es/button/style/css.js';
import '@arco-design/web-vue/es/radio/style/css.js';
import { RadioGroup, Radio, ButtonGroup, Button } from '@arco-design/web-vue';

const _sfc_main$15 = /* @__PURE__ */defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: {
      default: "tip"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});

const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};

function deserializeFunctions(r){return Array.isArray(r)?r.map(deserializeFunctions):typeof r=="object"&&r!==null?Object.keys(r).reduce((t,n)=>(t[n]=deserializeFunctions(r[n]),t),{}):typeof r=="string"&&r.startsWith("_vp-fn_")?new Function(`return ${r.slice(7)}`)():r}const siteData = deserializeFunctions(JSON.parse("{\"lang\":\"en-US\",\"dir\":\"ltr\",\"title\":\"RCGAL\",\"description\":\"Rust Computational Geometry Algorithms Library\",\"base\":\"/\",\"head\":[],\"router\":{\"prefetchLinks\":true},\"appearance\":true,\"themeConfig\":{\"nav\":[{\"text\":\"Tutorial\",\"link\":\"/tutorial\"},{\"text\":\"Blog\",\"link\":\"/blog\"},{\"text\":\"Document\",\"link\":\"https://docs.rs/rcgal/latest/rcgal/\"},{\"text\":\"Example\",\"link\":\"/example\"}],\"sidebar\":{\"/tutorial/\":[{\"text\":\"Tutorial\",\"items\":[{\"text\":\"Introduction\",\"link\":\"/tutorial/\"},{\"text\":\"Kernel\",\"collapsed\":false,\"items\":[{\"text\":\"NumberType\",\"link\":\"/tutorial/kernel/number-type\"},{\"text\":\"Vector2\",\"link\":\"/tutorial/kernel/vector-2\"},{\"text\":\"Point2\",\"link\":\"/tutorial/kernel/point-2\"},{\"text\":\"Segment2\",\"collapsed\":false,\"items\":[{\"text\":\"Segment2\",\"link\":\"/tutorial/kernel/segment-2/segment-2\"},{\"text\":\"LineSegment2\",\"link\":\"/tutorial/kernel/segment-2/line-segment-2\"},{\"text\":\"CircleSegment2\",\"link\":\"/tutorial/kernel/segment-2/circle-segment-2\"},{\"text\":\"ArcSegment2\",\"link\":\"/tutorial/kernel/segment-2/arc-segment-2\"}]},{\"text\":\"Triangle2\",\"link\":\"/tutorial/kernel/triangle-2\"}]},{\"text\":\"Algorithm\",\"collapsed\":false,\"items\":[{\"text\":\"Location\",\"link\":\"/tutorial/algorithm/location\"},{\"text\":\"Projection\",\"link\":\"/tutorial/algorithm/projection\"},{\"text\":\"Intersection\",\"link\":\"/tutorial/algorithm/intersection\"},{\"text\":\"Convex Hull\",\"link\":\"/tutorial/algorithm/convex-hull\"}]}]}]},\"socialLinks\":[{\"icon\":\"github\",\"link\":\"https://github.com/liuyulvv/rcgal\"}],\"search\":{\"provider\":\"local\"}},\"locales\":{},\"scrollOffset\":134,\"cleanUrls\":false}"));

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}

function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}

const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}

function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}

function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}

function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}

function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function watchDebounced(source, cb, options = {}) {
  const {
    debounce = 0,
    maxWait = void 0,
    ...watchOptions
  } = options;
  return watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: debounceFilter(debounce, { maxWait })
    }
  );
}

function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    shallow = true,
    onError = noop
  } = options;
  const started = ref(!lazy);
  const current = shallow ? shallowRef(initialState) : ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = isClient ? window : void 0;

function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}

function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}

function useMounted() {
  const isMounted = ref(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}

function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && typeof window.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window, "storage", update);
      useEventListener(window, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window) {
      window.dispatchEvent(new CustomEvent(customStorageEventName, {
        detail: {
          key,
          oldValue,
          newValue,
          storageArea: storage
        }
      }));
    }
  }
  function write(v) {
    try {
      const oldValue = storage.getItem(key);
      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark({ window });
  const system = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? toRef(initialValue) : useStorage(storageKey, initialValue, storage, { window, listenToStorageChanges }));
  const state = computed(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute2, value) => {
      const el = typeof selector2 === "string" ? window == null ? void 0 : window.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      let style;
      if (disableTransition) {
        style = window.document.createElement("style");
        const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        style.appendChild(document.createTextNode(styleString));
        window.document.head.appendChild(style);
      }
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          if (current.includes(v))
            el.classList.add(v);
          else
            el.classList.remove(v);
        });
      } else {
        el.setAttribute(attribute2, value);
      }
      if (disableTransition) {
        window.getComputedStyle(style).opacity;
        document.head.removeChild(style);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  tryOnMounted(() => onChanged(state.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state });
  } catch (e) {
    return auto;
  }
}

function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow
  } = options;
  const mode = useColorMode({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark", defaultHandler, mode2);
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = computed(() => {
    if (mode.system) {
      return mode.system.value;
    } else {
      const preferredDark = usePreferredDark({ window });
      return preferredDark.value ? "dark" : "light";
    }
  });
  const isDark = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      if (system.value === modeVal)
        mode.value = "auto";
      else
        mode.value = modeVal;
    }
  });
  return isDark;
}

function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow = "";
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden")
        initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden")
        return isLocked.value = true;
      if (isLocked.value)
        return ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e) => {
          preventDefault(e);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else unlock();
    }
  });
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

function useWindowScroll(options = {}) {
  const { window = defaultWindow, behavior = "auto" } = options;
  if (!window) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const internalX = ref(window.scrollX);
  const internalY = ref(window.scrollY);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo({ left: x2, behavior });
    }
  });
  const y = computed({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo({ top: y2, behavior });
    }
  });
  useEventListener(
    window,
    "scroll",
    () => {
      internalX.value = window.scrollX;
      internalY.value = window.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}

function useWindowSize(options = {}) {
  const {
    window = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window) {
      if (includeScrollbar) {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      } else {
        width.value = window.document.documentElement.clientWidth;
        height.value = window.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}

var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const HASH_OR_QUERY_RE = /[?#].*$/;
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?\.(?:md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "404.md",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: {
    sidebar: false,
    layout: "page"
  },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_OR_QUERY_RE, "").replace(INDEX_OR_EXT_RE, "$1");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function getLocaleForPath(siteData, relativePath) {
  return Object.keys(siteData?.locales || {}).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
}
function resolveSiteDataByRoute(siteData, relativePath) {
  const localeIndex = getLocaleForPath(siteData, relativePath);
  return Object.assign({}, siteData, {
    localeIndex,
    lang: siteData.locales[localeIndex]?.lang ?? siteData.lang,
    dir: siteData.locales[localeIndex]?.dir ?? siteData.dir,
    title: siteData.locales[localeIndex]?.title ?? siteData.title,
    titleTemplate: siteData.locales[localeIndex]?.titleTemplate ?? siteData.titleTemplate,
    description: siteData.locales[localeIndex]?.description ?? siteData.description,
    head: mergeHead(siteData.head, siteData.locales[localeIndex]?.head ?? []),
    themeConfig: {
      ...siteData.themeConfig,
      ...siteData.locales[localeIndex]?.themeConfig
    }
  });
}
function createTitle(siteData, pageData) {
  const title = pageData.title || siteData.title;
  const template = pageData.titleTemplate ?? siteData.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta") return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null) return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const KNOWN_EXTENSIONS = /* @__PURE__ */ new Set();
function treatAsHtml(filename) {
  if (KNOWN_EXTENSIONS.size === 0) {
    const extraExts = typeof process === "object" && process.env?.VITE_EXTRA_EXTENSIONS || define_import_meta_env_default?.VITE_EXTRA_EXTENSIONS || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (extraExts && typeof extraExts === "string" ? "," + extraExts : "")).split(",").forEach((ext2) => KNOWN_EXTENSIONS.add(ext2));
  }
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
function escapeRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData );
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => appearance === "dark" ? "dark" : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  const hashRef = ref(inBrowser ? location.hash : "");
  if (inBrowser) {
    window.addEventListener("hashchange", () => {
      hashRef.value = location.hash;
    });
  }
  watch(() => route.data, () => {
    hashRef.value = inBrowser ? location.hash : "";
  });
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark,
    hash: computed(() => hashRef.value)
  };
}
function useData$2() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}

function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash) return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el) return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0) return 0;
  return bot + padding;
}

const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    href = normalizeHref(href);
    if (await router.onBeforeRouteChange?.(href) === false) return;
    if (inBrowser && href !== normalizeHref(location.href)) {
      history.replaceState({
        scrollPosition: window.scrollY
      }, "");
      history.pushState({}, "", href);
    }
    await loadPage(href);
    await router.onAfterRouteChanged?.(href);
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    if (await router.onBeforePageLoad?.(href) === false) return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const {
          default: comp,
          __pageData
        } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState({}, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo$1(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        const relativePath = inBrowser ? pendingPath.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md").replace(/^\//, "") : "404.md";
        route.data = {
          ...notFoundPageData,
          relativePath
        };
      }
    }
  }
  if (inBrowser) {
    if (history.state === null) {
      history.replaceState({}, "");
    }
    window.addEventListener("click", (e) => {
      if (e.defaultPrevented || !(e.target instanceof Element) || e.target.closest("button") || // temporary fix for docsearch action buttons
      e.button !== 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
      const link = e.target.closest("a");
      if (!link || link.closest(".vp-raw") || link.hasAttribute("download") || link.hasAttribute("target")) return;
      const linkHref = link.getAttribute("href") ?? (link instanceof SVGAElement ? link.getAttribute("xlink:href") : null);
      if (linkHref == null) return;
      const {
        href,
        origin,
        pathname,
        hash,
        search
      } = new URL(linkHref, link.baseURI);
      const currentUrl = new URL(location.href);
      if (origin === currentUrl.origin && treatAsHtml(pathname)) {
        e.preventDefault();
        if (pathname === currentUrl.pathname && search === currentUrl.search) {
          if (hash !== currentUrl.hash) {
            history.pushState({}, "", href);
            window.dispatchEvent(new HashChangeEvent("hashchange", {
              oldURL: currentUrl.href,
              newURL: href
            }));
          }
          if (hash) {
            scrollTo$1(link, hash, link.classList.contains("header-anchor"));
          } else {
            window.scrollTo(0, 0);
          }
        } else {
          go(href);
        }
      }
    }, {
      capture: true
    });
    window.addEventListener("popstate", async (e) => {
      if (e.state === null) {
        return;
      }
      await loadPage(normalizeHref(location.href), e.state && e.state.scrollPosition || 0);
      router.onAfterRouteChanged?.(location.href);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo$1(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) window.scrollTo(0, targetTop);
      else window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls) url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}

const runCbs = () => contentUpdatedCallbacks.forEach(fn => fn());
const Content = defineComponent({
  name: 'VitePressContent',
  props: {
    as: {
      type: [Object, String],
      default: 'div'
    }
  },
  setup(props) {
    const route = useRoute();
    const {
      site
    } = useData$2();
    return () => h(props.as, site.value.contentProps ?? {
      style: {
        position: 'relative'
      }
    }, [route.component ? h(route.component, {
      onVnodeMounted: runCbs,
      onVnodeUpdated: runCbs,
      onVnodeUnmounted: runCbs
    }) : '404 Page Not Found']);
  }
});

const _sfc_main$14 = /* @__PURE__ */defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPBackdrop"
        }, _attrs))} data-v-f38e8b9f></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */_export_sfc(_sfc_main$14, [["__scopeId", "data-v-f38e8b9f"]]);

const useData$1 = useData$2;

function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const {
    pathname,
    search,
    hash,
    protocol
  } = new URL(url, 'http://a.com');
  if (isExternal(url) || url.startsWith('#') || !protocol.startsWith('http') || !treatAsHtml(pathname)) return url;
  const {
    site
  } = useData$1();
  const normalizedPath = pathname.endsWith('/') || pathname.endsWith('.html') ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? '' : '.html')}${search}${hash}`);
  return withBase(normalizedPath);
}

function useLangs({
  correspondingLink = false
} = {}) {
  const {
    site,
    localeIndex,
    page,
    theme,
    hash
  } = useData$1();
  const currentLang = computed(() => ({
    label: site.value.locales[localeIndex.value]?.label,
    link: site.value.locales[localeIndex.value]?.link || (localeIndex.value === 'root' ? '/' : `/${localeIndex.value}/`)
  }));
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === 'root' ? '/' : `/${key}/`), theme.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hash.value
  }));
  return {
    localeLinks,
    currentLang
  };
}
function normalizeLink(link, addPath, path, addExt) {
  return addPath ? link.replace(/\/$/, '') + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, addExt ? '.html' : '')) : link;
}

const _sfc_main$13 = /* @__PURE__ */defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme
    } = useData$1();
    const {
      currentLang
    } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "NotFound"
      }, _attrs))} data-v-074ac4a6><p class="code" data-v-074ac4a6>${ssrInterpolate(unref(theme).notFound?.code ?? "404")}</p><h1 class="title" data-v-074ac4a6>${ssrInterpolate(unref(theme).notFound?.title ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-074ac4a6></div><blockquote class="quote" data-v-074ac4a6>${ssrInterpolate(unref(theme).notFound?.quote ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-074ac4a6><a class="link"${ssrRenderAttr("href", unref(withBase)(unref(currentLang).link))}${ssrRenderAttr("aria-label", unref(theme).notFound?.linkLabel ?? "go to home")} data-v-074ac4a6>${ssrInterpolate(unref(theme).notFound?.linkText ?? "Take me home")}</a></div></div>`);
    };
  }
});

const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */_export_sfc(_sfc_main$13, [["__scopeId", "data-v-074ac4a6"]]);

/**
 * Get the `Sidebar` from sidebar option. This method will ensure to get correct
 * sidebar config from `MultiSideBarConfig` with various path combinations such
 * as matching `guide/` and `/guide/`. If no matching config was found, it will
 * return empty array.
 */
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar)) return addBase(_sidebar);
  if (_sidebar == null) return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split('/').length - a.split('/').length;
  }).find(dir => {
    // make sure the multi sidebar key starts with slash too
    return path.startsWith(ensureStartingSlash(dir));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
/**
 * Get or generate sidebar group from the given sidebar items.
 */
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({
        items: []
      });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
/**
 * Check if the given sidebar item contains any active link.
 */
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some(item => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map(_item => {
    const item = {
      ..._item
    };
    const base = item.base || _base;
    if (base && item.link) item.link = base + item.link;
    if (item.items) item.items = addBase(item.items, base);
    return item;
  });
}

function useSidebar() {
  const {
    frontmatter,
    page,
    theme
  } = useData$1();
  const is960 = useMediaQuery('(min-width: 960px)');
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev)) sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== 'home';
  });
  const leftAside = computed(() => {
    if (hasAside) return frontmatter.value.aside == null ? theme.value.aside === 'left' : frontmatter.value.aside === 'left';
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === 'home') return false;
    if (frontmatter.value.aside != null) return !!frontmatter.value.aside;
    return theme.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
/**
 * a11y: cache the element that opened the Sidebar (the menu button) then
 * focus that button again when Menu is closed with Escape key.
 */
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : undefined;
  });
  onMounted(() => {
    window.addEventListener('keyup', onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener('keyup', onEscape);
  });
  function onEscape(e) {
    if (e.key === 'Escape' && isOpen.value) {
      close();
      triggerElement?.focus();
    }
  }
}
function useSidebarControl(item) {
  const {
    page,
    hash
  } = useData$1();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hash], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}

function useAside() {
  const {
    hasSidebar
  } = useSidebar();
  const is960 = useMediaQuery('(min-width: 960px)');
  const is1280 = useMediaQuery('(min-width: 1280px)');
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}

// cached list of anchor elements from resolveHeaders
const resolvedHeaders = [];
function resolveTitle(theme) {
  return typeof theme.outline === 'object' && !Array.isArray(theme.outline) && theme.outline.label || theme.outlineTitle || 'On this page';
}
function getHeaders(range) {
  const headers = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')].filter(el => el.id && el.hasChildNodes()).map(el => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: '#' + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h) {
  let ret = '';
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains('VPBadge') || node.classList.contains('header-anchor') || node.classList.contains('ignore-header')) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === 'object' && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === 'number' ? [levelsRange, levelsRange] : levelsRange === 'deep' ? [2, 6] : levelsRange;
  headers = headers.filter(h => h.level >= high && h.level <= low);
  // clear previous caches
  resolvedHeaders.length = 0;
  // update global header list for active link rendering
  for (const {
    element,
    link
  } of headers) {
    resolvedHeaders.push({
      element,
      link
    });
  }
  const ret = [];
  outer: for (let i = 0; i < headers.length; i++) {
    const cur = headers[i];
    if (i === 0) {
      ret.push(cur);
    } else {
      for (let j = i - 1; j >= 0; j--) {
        const prev = headers[j];
        if (prev.level < cur.level) {
          (prev.children || (prev.children = [])).push(cur);
          continue outer;
        }
      }
      ret.push(cur);
    }
  }
  return ret;
}
function useActiveAnchor(container, marker) {
  const {
    isAsideEnabled
  } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener('scroll', onScroll);
  });
  onUpdated(() => {
    // sidebar update means a route change
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    // resolvedHeaders may be repositioned, hidden or fix positioned
    const headers = resolvedHeaders.map(({
      element,
      link
    }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({
      top
    }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    // no headers available for active link
    if (!headers.length) {
      activateLink(null);
      return;
    }
    // page top
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    // page bottom - highlight last link
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    // find the last header above the top of viewport
    let activeLink = null;
    for (const {
      link,
      top
    } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove('active');
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add('active');
      marker.value.style.top = activeLink.offsetTop + 39 + 'px';
      marker.value.style.opacity = '1';
    } else {
      marker.value.style.top = '33px';
      marker.value.style.opacity = '0';
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      // child element is:
      // - not attached to the DOM (display: none)
      // - set to fixed position (not scrollable)
      // - body or html element (null offsetParent)
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}

const _sfc_main$12 = /* @__PURE__ */defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: {
      type: Boolean
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["VPDocOutlineItem", _ctx.root ? "root" : "nested"]
      }, _attrs))} data-v-bf2f6f41><!--[-->`);
      ssrRenderList(_ctx.headers, ({
        children,
        link,
        title
      }) => {
        _push(`<li data-v-bf2f6f41><a class="outline-link"${ssrRenderAttr("href", link)}${ssrRenderAttr("title", title)} data-v-bf2f6f41>${ssrInterpolate(title)}</a>`);
        if (children?.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, {
            headers: children
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});

const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */_export_sfc(_sfc_main$12, [["__scopeId", "data-v-bf2f6f41"]]);

const _sfc_main$11 = /* @__PURE__ */defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      frontmatter,
      theme
    } = useData$1();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-labelledby": "doc-outline-aria-label",
        class: ["VPDocAsideOutline", {
          "has-outline": headers.value.length > 0
        }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-cc2df3bf><div class="content" data-v-cc2df3bf><div class="outline-marker" data-v-cc2df3bf></div><div aria-level="2" class="outline-title" id="doc-outline-aria-label" role="heading" data-v-cc2df3bf>${ssrInterpolate(unref(resolveTitle)(unref(theme)))}</div>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</div></nav>`);
    };
  }
});

const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */_export_sfc(_sfc_main$11, [["__scopeId", "data-v-cc2df3bf"]]);

const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPDocAsideCarbonAds"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), {
        "carbon-ads": _ctx.carbonAds
      }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};

const _sfc_main$$ = /* @__PURE__ */defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPDocAside"
      }, _attrs))} data-v-4acfac5f>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-4acfac5f></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$10, {
          "carbon-ads": unref(theme).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */_export_sfc(_sfc_main$$, [["__scopeId", "data-v-4acfac5f"]]);

function useEditLink() {
  const {
    theme,
    page
  } = useData$1();
  return computed(() => {
    const {
      text = 'Edit this page',
      pattern = ''
    } = theme.value.editLink || {};
    let url;
    if (typeof pattern === 'function') {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return {
      url,
      text
    };
  });
}

function usePrevNext() {
  const {
    page,
    theme,
    frontmatter
  } = useData$1();
  return computed(() => {
    const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath);
    const links = getFlatSideBarLinks(sidebar);
    // ignore inner-page links with hashes
    const candidates = uniqBy(links, link => link.link.replace(/[?#].*$/, ''));
    const index = candidates.findIndex(link => {
      return isActive(page.value.relativePath, link.link);
    });
    const hidePrev = theme.value.docFooter?.prev === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = theme.value.docFooter?.next === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? undefined : {
        text: (typeof frontmatter.value.prev === 'string' ? frontmatter.value.prev : typeof frontmatter.value.prev === 'object' ? frontmatter.value.prev.text : undefined) ?? candidates[index - 1]?.docFooterText ?? candidates[index - 1]?.text,
        link: (typeof frontmatter.value.prev === 'object' ? frontmatter.value.prev.link : undefined) ?? candidates[index - 1]?.link
      },
      next: hideNext ? undefined : {
        text: (typeof frontmatter.value.next === 'string' ? frontmatter.value.next : typeof frontmatter.value.next === 'object' ? frontmatter.value.next.text : undefined) ?? candidates[index + 1]?.docFooterText ?? candidates[index + 1]?.text,
        link: (typeof frontmatter.value.next === 'object' ? frontmatter.value.next.link : undefined) ?? candidates[index + 1]?.link
      }
    };
  });
}
function uniqBy(array, keyFn) {
  const seen = new Set();
  return array.filter(item => {
    const k = keyFn(item);
    return seen.has(k) ? false : seen.add(k);
  });
}

const _sfc_main$_ = /* @__PURE__ */defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: {
      type: Boolean
    },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal = computed(() => props.href && EXTERNAL_URL_RE.test(props.href) || props.target === "_blank");
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal.value,
          "no-icon": _ctx.noIcon
        }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "default")];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};

const _sfc_main$Z = /* @__PURE__ */defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme,
      page,
      lang
    } = useData$1();
    const date = computed(() => new Date(page.value.lastUpdated));
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        datetime.value = new Intl.DateTimeFormat(theme.value.lastUpdated?.formatOptions?.forceLocale ? lang.value : void 0, theme.value.lastUpdated?.formatOptions ?? {
          dateStyle: "short",
          timeStyle: "short"
        }).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: "VPLastUpdated"
      }, _attrs))} data-v-68cf5dde>${ssrInterpolate(unref(theme).lastUpdated?.text || unref(theme).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-68cf5dde>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});

const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */_export_sfc(_sfc_main$Z, [["__scopeId", "data-v-68cf5dde"]]);

const _sfc_main$Y = /* @__PURE__ */defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme,
      page,
      frontmatter
    } = useData$1();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => theme.value.editLink && frontmatter.value.editLink !== false);
    const hasLastUpdated = computed(() => page.value.lastUpdated);
    const showFooter = computed(() => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next);
    return (_ctx, _push, _parent, _attrs) => {
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: "VPDocFooter"
        }, _attrs))} data-v-efb3aaa4>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-efb3aaa4>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-efb3aaa4>`);
            _push(ssrRenderComponent(_sfc_main$_, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="vpi-square-pen edit-link-icon" data-v-efb3aaa4${_scopeId}></span> ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [createVNode("span", {
                    class: "vpi-square-pen edit-link-icon"
                  }), createTextVNode(" " + toDisplayString(unref(editLink).text), 1)];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-efb3aaa4>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(control).prev?.link || unref(control).next?.link) {
          _push(`<nav class="prev-next" aria-labelledby="doc-footer-aria-label" data-v-efb3aaa4><span class="visually-hidden" id="doc-footer-aria-label" data-v-efb3aaa4>Pager</span><div class="pager" data-v-efb3aaa4>`);
          if (unref(control).prev?.link) {
            _push(ssrRenderComponent(_sfc_main$_, {
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="desc" data-v-efb3aaa4${_scopeId}>${(unref(theme).docFooter?.prev || "Previous page") ?? ""}</span><span class="title" data-v-efb3aaa4${_scopeId}>${unref(control).prev.text ?? ""}</span>`);
                } else {
                  return [createVNode("span", {
                    class: "desc",
                    innerHTML: unref(theme).docFooter?.prev || "Previous page"
                  }, null, 8, ["innerHTML"]), createVNode("span", {
                    class: "title",
                    innerHTML: unref(control).prev.text
                  }, null, 8, ["innerHTML"])];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="pager" data-v-efb3aaa4>`);
          if (unref(control).next?.link) {
            _push(ssrRenderComponent(_sfc_main$_, {
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="desc" data-v-efb3aaa4${_scopeId}>${(unref(theme).docFooter?.next || "Next page") ?? ""}</span><span class="title" data-v-efb3aaa4${_scopeId}>${unref(control).next.text ?? ""}</span>`);
                } else {
                  return [createVNode("span", {
                    class: "desc",
                    innerHTML: unref(theme).docFooter?.next || "Next page"
                  }, null, 8, ["innerHTML"]), createVNode("span", {
                    class: "title",
                    innerHTML: unref(control).next.text
                  }, null, 8, ["innerHTML"])];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */_export_sfc(_sfc_main$Y, [["__scopeId", "data-v-efb3aaa4"]]);

const _sfc_main$X = /* @__PURE__ */defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme
    } = useData$1();
    const route = useRoute();
    const {
      hasSidebar,
      hasAside,
      leftAside
    } = useSidebar();
    const pageName = computed(() => route.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", {
          "has-sidebar": unref(hasSidebar),
          "has-aside": unref(hasAside)
        }]
      }, _attrs))} data-v-c640aeec>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-c640aeec>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{
          "left-aside": unref(leftAside)
        }, "aside"])}" data-v-c640aeec><div class="aside-curtain" data-v-c640aeec></div><div class="aside-container" data-v-c640aeec><div class="aside-content" data-v-c640aeec>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-c640aeec><div class="content-container" data-v-c640aeec>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-c640aeec>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [pageName.value, unref(theme).externalLinkIcon && "external-link-icon-enabled"]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */_export_sfc(_sfc_main$X, [["__scopeId", "data-v-c640aeec"]]);

const _sfc_main$W = /* @__PURE__ */defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: {
      default: "medium"
    },
    theme: {
      default: "brand"
    },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    const component = computed(() => {
      return props.tag || props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", [_ctx.size, _ctx.theme]],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: props.target ?? (isExternal.value ? "_blank" : void 0),
        rel: props.rel ?? (isExternal.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [createTextVNode(toDisplayString(_ctx.text), 1)];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});

const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */_export_sfc(_sfc_main$W, [["__scopeId", "data-v-7f03bc2d"]]);

const _sfc_main$V = /* @__PURE__ */defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({
            class: "VPImage"
          }, typeof _ctx.image === "string" ? _ctx.$attrs : {
            ..._ctx.image,
            ..._ctx.$attrs
          }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-ab1847d0>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */_export_sfc(_sfc_main$V, [["__scopeId", "data-v-ab1847d0"]]);

const _sfc_main$U = /* @__PURE__ */defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", {
          "has-image": _ctx.image || unref(heroImageSlotExists)
        }]
      }, _attrs))} data-v-a240de83><div class="container" data-v-a240de83><div class="main" data-v-a240de83>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        if (_ctx.name) {
          _push(`<h1 class="name" data-v-a240de83><span class="clip" data-v-a240de83>${_ctx.name ?? ""}</span></h1>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<p class="text" data-v-a240de83>${_ctx.text ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-a240de83>${_ctx.tagline ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-a240de83><!--[-->`);
        ssrRenderList(_ctx.actions, action => {
          _push(`<div class="action" data-v-a240de83>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link,
            target: action.target,
            rel: action.rel
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-a240de83><div class="image-container" data-v-a240de83><div class="image-bg" data-v-a240de83></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */_export_sfc(_sfc_main$U, [["__scopeId", "data-v-a240de83"]]);

const _sfc_main$T = /* @__PURE__ */defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      frontmatter: fm
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info-before")];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info")];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info-after")];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-actions-after")];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-image")];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};

const _sfc_main$S = /* @__PURE__ */defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$_, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        rel: _ctx.rel,
        target: _ctx.target,
        "no-icon": true,
        tag: _ctx.link ? "a" : "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-f4645c72${_scopeId}>`);
            if (typeof _ctx.icon === "object" && _ctx.icon.wrap) {
              _push2(`<div class="icon" data-v-f4645c72${_scopeId}>`);
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-f4645c72${_scopeId}>${_ctx.icon ?? ""}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-f4645c72${_scopeId}>${_ctx.title ?? ""}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-f4645c72${_scopeId}>${_ctx.details ?? ""}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-f4645c72${_scopeId}><p class="link-text-value" data-v-f4645c72${_scopeId}>${ssrInterpolate(_ctx.linkText)} <span class="vpi-arrow-right link-text-icon" data-v-f4645c72${_scopeId}></span></p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [createVNode("article", {
              class: "box"
            }, [typeof _ctx.icon === "object" && _ctx.icon.wrap ? (openBlock(), createBlock("div", {
              key: 0,
              class: "icon"
            }, [createVNode(VPImage, {
              image: _ctx.icon,
              alt: _ctx.icon.alt,
              height: _ctx.icon.height || 48,
              width: _ctx.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])])) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
              key: 1,
              image: _ctx.icon,
              alt: _ctx.icon.alt,
              height: _ctx.icon.height || 48,
              width: _ctx.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
              key: 2,
              class: "icon",
              innerHTML: _ctx.icon
            }, null, 8, ["innerHTML"])) : createCommentVNode("", true), createVNode("h2", {
              class: "title",
              innerHTML: _ctx.title
            }, null, 8, ["innerHTML"]), _ctx.details ? (openBlock(), createBlock("p", {
              key: 3,
              class: "details",
              innerHTML: _ctx.details
            }, null, 8, ["innerHTML"])) : createCommentVNode("", true), _ctx.linkText ? (openBlock(), createBlock("div", {
              key: 4,
              class: "link-text"
            }, [createVNode("p", {
              class: "link-text-value"
            }, [createTextVNode(toDisplayString(_ctx.linkText) + " ", 1), createVNode("span", {
              class: "vpi-arrow-right link-text-icon"
            })])])) : createCommentVNode("", true)])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */_export_sfc(_sfc_main$S, [["__scopeId", "data-v-f4645c72"]]);

const _sfc_main$R = /* @__PURE__ */defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPFeatures"
        }, _attrs))} data-v-81819dd6><div class="container" data-v-81819dd6><div class="items" data-v-81819dd6><!--[-->`);
        ssrRenderList(_ctx.features, feature => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-81819dd6>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText,
            rel: feature.rel,
            target: feature.target
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */_export_sfc(_sfc_main$R, [["__scopeId", "data-v-81819dd6"]]);

const _sfc_main$Q = /* @__PURE__ */defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      frontmatter: fm
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};

const _sfc_main$P = /* @__PURE__ */defineComponent({
  __name: "VPHomeContent",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      width: vw
    } = useWindowSize({
      initialWidth: 0,
      includeScrollbar: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "vp-doc container",
        style: unref(vw) ? {
          "--vp-offset": `calc(50% - ${unref(vw) / 2}px)`
        } : {}
      }, _attrs))} data-v-af432c24>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPHomeContent.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPHomeContent = /* @__PURE__ */_export_sfc(_sfc_main$P, [["__scopeId", "data-v-af432c24"]]);

const _sfc_main$O = /* @__PURE__ */defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      frontmatter
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPHome"
      }, _attrs))} data-v-a033b4ff>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$T, null, {
        "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)];
          }
        }),
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)];
          }
        }),
        "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)];
          }
        }),
        "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$Q, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      if (unref(frontmatter).markdownStyles !== false) {
        _push(ssrRenderComponent(VPHomeContent, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Content, null, null, _parent2, _scopeId));
            } else {
              return [createVNode(_component_Content)];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_Content, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */_export_sfc(_sfc_main$O, [["__scopeId", "data-v-a033b4ff"]]);

const _sfc_main$N = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "VPPage"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : undefined;
};
const VPPage = /*#__PURE__*/_export_sfc(_sfc_main$N, [['ssrRender', _sfc_ssrRender$2]]);

const _sfc_main$M = /* @__PURE__ */defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      page,
      frontmatter
    } = useData$1();
    const {
      hasSidebar
    } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-fe6c4409>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "page-top", {}, void 0, true)];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)];
            }
          }),
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout && unref(frontmatter).layout !== "doc") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(frontmatter).layout), null, null), _parent);
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */_export_sfc(_sfc_main$M, [["__scopeId", "data-v-fe6c4409"]]);

const _sfc_main$L = /* @__PURE__ */defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme,
      frontmatter
    } = useData$1();
    const {
      hasSidebar
    } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme).footer && unref(frontmatter).footer !== false) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", {
            "has-sidebar": unref(hasSidebar)
          }]
        }, _attrs))} data-v-5e262643><div class="container" data-v-5e262643>`);
        if (unref(theme).footer.message) {
          _push(`<p class="message" data-v-5e262643>${unref(theme).footer.message ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme).footer.copyright) {
          _push(`<p class="copyright" data-v-5e262643>${unref(theme).footer.copyright ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */_export_sfc(_sfc_main$L, [["__scopeId", "data-v-5e262643"]]);

function useLocalNav() {
  const {
    theme,
    frontmatter
  } = useData$1();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}

const _sfc_main$K = /* @__PURE__ */defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const {
      theme
    } = useData$1();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    ref();
    function closeOnClickOutside(e) {
      if (!main.value?.contains(e.target)) {
        open.value = false;
      }
    }
    watch(open, value => {
      if (value) {
        document.addEventListener("click", closeOnClickOutside);
        return;
      }
      document.removeEventListener("click", closeOnClickOutside);
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: {
          "--vp-vh": vh.value + "px"
        },
        ref_key: "main",
        ref: main
      }, _attrs))} data-v-0de38674>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({
          open: open.value
        })}" data-v-0de38674><span class="menu-text" data-v-0de38674>${ssrInterpolate(unref(resolveTitle)(unref(theme)))}</span><span class="vpi-chevron-right icon" data-v-0de38674></span></button>`);
      } else {
        _push(`<button data-v-0de38674>${ssrInterpolate(unref(theme).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-0de38674><div class="header" data-v-0de38674><a class="top-link" href="#" data-v-0de38674>${ssrInterpolate(unref(theme).returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-0de38674>`);
        _push(ssrRenderComponent(VPDocOutlineItem, {
          headers: _ctx.headers
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */_export_sfc(_sfc_main$K, [["__scopeId", "data-v-0de38674"]]);

const _sfc_main$J = /* @__PURE__ */defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean
    }
  },
  emits: ["open-menu"],
  setup(__props) {
    const {
      theme,
      frontmatter
    } = useData$1();
    const {
      hasSidebar
    } = useSidebar();
    const {
      headers
    } = useLocalNav();
    const {
      y
    } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"));
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: classes.value
        }, _attrs))} data-v-26283d81><div class="container" data-v-26283d81>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-26283d81><span class="vpi-align-left menu-icon" data-v-26283d81></span><span class="menu-text" data-v-26283d81>${ssrInterpolate(unref(theme).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, {
          headers: unref(headers),
          navHeight: navHeight.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */_export_sfc(_sfc_main$J, [["__scopeId", "data-v-26283d81"]]);

function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener('resize', closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener('resize', closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  /**
   * Close screen when the user resizes the window wider than tablet size.
   */
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}

const _sfc_main$I = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-4cf9cc07><span class="check" data-v-4cf9cc07>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-4cf9cc07>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : undefined;
};
const VPSwitch = /*#__PURE__*/_export_sfc(_sfc_main$I, [['ssrRender', _sfc_ssrRender$1], ['__scopeId', "data-v-4cf9cc07"]]);

const _sfc_main$H = /* @__PURE__ */defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isDark,
      theme
    } = useData$1();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = ref("");
    watchPostEffect(() => {
      switchTitle.value = isDark.value ? theme.value.lightModeSwitchTitle || "Switch to light theme" : theme.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="vpi-sun sun" data-v-214be179${_scopeId}></span><span class="vpi-moon moon" data-v-214be179${_scopeId}></span>`);
          } else {
            return [createVNode("span", {
              class: "vpi-sun sun"
            }), createVNode("span", {
              class: "vpi-moon moon"
            })];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */_export_sfc(_sfc_main$H, [["__scopeId", "data-v-214be179"]]);

const _sfc_main$G = /* @__PURE__ */defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      site
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavBarAppearance"
        }, _attrs))} data-v-4f104ff1>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */_export_sfc(_sfc_main$G, [["__scopeId", "data-v-4f104ff1"]]);

const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, el => {
      if (el === options.el.value || options.el.value?.contains(el)) {
        focus.value = true;
        options.onFocus?.();
      } else {
        focus.value = false;
        options.onBlur?.();
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener('focusin', handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener('focusin', handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}

const _sfc_main$F = /* @__PURE__ */defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const {
      page
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPMenuLink"
      }, _attrs))} data-v-1db616f2>`);
      _push(ssrRenderComponent(_sfc_main$_, {
        class: {
          active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch)
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [createTextVNode(toDisplayString(_ctx.item.text), 1)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */_export_sfc(_sfc_main$F, [["__scopeId", "data-v-1db616f2"]]);

const _sfc_main$E = /* @__PURE__ */defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPMenuGroup"
      }, _attrs))} data-v-57c5d4d5>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-57c5d4d5>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, item => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, {
            item
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */_export_sfc(_sfc_main$E, [["__scopeId", "data-v-57c5d4d5"]]);

const _sfc_main$D = /* @__PURE__ */defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPMenu"
      }, _attrs))} data-v-bc4d52ca>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-bc4d52ca><!--[-->`);
        ssrRenderList(_ctx.items, item => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, {
              item
            }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({
              ref_for: true
            }, item.props), null), _parent);
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */_export_sfc(_sfc_main$D, [["__scopeId", "data-v-bc4d52ca"]]);

const _sfc_main$C = /* @__PURE__ */defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({
      el,
      onBlur
    });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-9616f0c4><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-9616f0c4>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-9616f0c4>`);
        if (_ctx.icon) {
          _push(`<span class="${ssrRenderClass([_ctx.icon, "option-icon"])}" data-v-9616f0c4></span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.button) {
          _push(`<span data-v-9616f0c4>${_ctx.button ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="vpi-chevron-down text-icon" data-v-9616f0c4></span></span>`);
      } else {
        _push(`<span class="vpi-more-horizontal icon" data-v-9616f0c4></span>`);
      }
      _push(`</button><div class="menu" data-v-9616f0c4>`);
      _push(ssrRenderComponent(VPMenu, {
        items: _ctx.items
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "default", {}, void 0, true)];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */_export_sfc(_sfc_main$C, [["__scopeId", "data-v-9616f0c4"]]);

const _sfc_main$B = /* @__PURE__ */defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object") return props.icon.svg;
      return `<span class="vpi-social-${props.icon}" />`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-c658ad46>${svg.value ?? ""}</a>`);
    };
  }
});

const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */_export_sfc(_sfc_main$B, [["__scopeId", "data-v-c658ad46"]]);

const _sfc_main$A = /* @__PURE__ */defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPSocialLinks"
      }, _attrs))} data-v-59334285><!--[-->`);
      ssrRenderList(_ctx.links, ({
        link,
        icon,
        ariaLabel
      }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link,
          icon,
          link,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */_export_sfc(_sfc_main$A, [["__scopeId", "data-v-59334285"]]);

const _sfc_main$z = /* @__PURE__ */defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      site,
      theme
    } = useData$1();
    const {
      localeLinks,
      currentLang
    } = useLangs({
      correspondingLink: true
    });
    const hasExtraContent = computed(() => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme.value.socialLinks);
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-7ccda040${_scopeId}><p class="trans-title" data-v-7ccda040${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), locale => {
                  _push2(ssrRenderComponent(VPMenuLink, {
                    item: locale
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
                _push2(`<div class="group" data-v-7ccda040${_scopeId}><div class="item appearance" data-v-7ccda040${_scopeId}><p class="label" data-v-7ccda040${_scopeId}>${ssrInterpolate(unref(theme).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-7ccda040${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme).socialLinks) {
                _push2(`<div class="group" data-v-7ccda040${_scopeId}><div class="item social-links" data-v-7ccda040${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                key: 0,
                class: "group translations"
              }, [createVNode("p", {
                class: "trans-title"
              }, toDisplayString(unref(currentLang).label), 1), (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), locale => {
                return openBlock(), createBlock(VPMenuLink, {
                  key: locale.link,
                  item: locale
                }, null, 8, ["item"]);
              }), 128))])) : createCommentVNode("", true), unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createBlock("div", {
                key: 1,
                class: "group"
              }, [createVNode("div", {
                class: "item appearance"
              }, [createVNode("p", {
                class: "label"
              }, toDisplayString(unref(theme).darkModeSwitchLabel || "Appearance"), 1), createVNode("div", {
                class: "appearance-action"
              }, [createVNode(VPSwitchAppearance)])])])) : createCommentVNode("", true), unref(theme).socialLinks ? (openBlock(), createBlock("div", {
                key: 2,
                class: "group"
              }, [createVNode("div", {
                class: "item social-links"
              }, [createVNode(VPSocialLinks, {
                class: "social-links-list",
                links: unref(theme).socialLinks
              }, null, 8, ["links"])])])) : createCommentVNode("", true)];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */_export_sfc(_sfc_main$z, [["__scopeId", "data-v-7ccda040"]]);

const _sfc_main$y = /* @__PURE__ */defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", {
          active: _ctx.active
        }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-ed83cbcd><span class="container" data-v-ed83cbcd><span class="top" data-v-ed83cbcd></span><span class="middle" data-v-ed83cbcd></span><span class="bottom" data-v-ed83cbcd></span></span></button>`);
    };
  }
});

const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */_export_sfc(_sfc_main$y, [["__scopeId", "data-v-ed83cbcd"]]);

const _sfc_main$x = /* @__PURE__ */defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const {
      page
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$_, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch)
        },
        href: _ctx.item.link,
        noIcon: _ctx.item.noIcon,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-0be834e0${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [createVNode("span", {
              innerHTML: _ctx.item.text
            }, null, 8, ["innerHTML"])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */_export_sfc(_sfc_main$x, [["__scopeId", "data-v-0be834e0"]]);

const _sfc_main$w = /* @__PURE__ */defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const {
      page
    } = useData$1();
    const isChildActive = navItem => {
      if ("component" in navItem) return false;
      if ("link" in navItem) {
        return isActive(page.value.relativePath, navItem.link, !!props.item.activeMatch);
      }
      return navItem.items.some(isChildActive);
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch, !!_ctx.item.activeMatch) || childrenActive.value
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};

const _sfc_main$v = /* @__PURE__ */defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-77c0a70d><span id="main-nav-aria-label" class="visually-hidden" data-v-77c0a70d> Main Navigation </span><!--[-->`);
        ssrRenderList(unref(theme).nav, item => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, {
              item
            }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({
              ref_for: true
            }, item.props), null), _parent);
          } else {
            _push(ssrRenderComponent(_sfc_main$w, {
              item
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */_export_sfc(_sfc_main$v, [["__scopeId", "data-v-77c0a70d"]]);

/**
 * @param themeObject Can be an object with `translations` and `locales` properties
 */
function createSearchTranslate(defaultTranslations) {
  const {
    localeIndex,
    theme
  } = useData$1();
  function translate(key) {
    const keyPath = key.split('.');
    const themeObject = theme.value.search?.options;
    const isObject = themeObject && typeof themeObject === 'object';
    const locales = isObject && themeObject.locales?.[localeIndex.value]?.translations || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult?.[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult?.[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult?.[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      // Put fallback into unresolved results
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return localeResult?.[lastKey] ?? translationResult?.[lastKey] ?? defaultResult?.[lastKey] ?? '';
  }
  return translate;
}

const _sfc_main$u = /* @__PURE__ */defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const translate = createSearchTranslate(defaultTranslations);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref(translate)("button.buttonAriaLabel")
      }, _attrs))}><span class="DocSearch-Button-Container"><span class="vp-icon DocSearch-Search-Icon"></span><span class="DocSearch-Button-Placeholder">${ssrInterpolate(unref(translate)("button.buttonText"))}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});

const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};

const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = defineAsyncComponent(() => import('./VPLocalSearchBox.Con4NRgD.js')) ;
    const VPAlgoliaSearchBox = () => null;
    const {
      theme
    } = useData$1();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const showSearch = ref(false);
    {
      onKeyStroke("k", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
      onKeyStroke("/", (event) => {
        if (!isEditingContent(event)) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
    }
    const provider = "local" ;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPNavBarSearch"
      }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$u, {
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: unref(theme).search?.options ?? unref(theme).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$u, {
            onClick: load
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};

const _sfc_main$s = /* @__PURE__ */defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */_export_sfc(_sfc_main$s, [["__scopeId", "data-v-a2646740"]]);

const _sfc_main$r = /* @__PURE__ */defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      site,
      theme
    } = useData$1();
    const {
      hasSidebar
    } = useSidebar();
    const {
      currentLang
    } = useLangs();
    const link = computed(() => typeof theme.value.logoLink === "string" ? theme.value.logoLink : theme.value.logoLink?.link);
    const rel = computed(() => typeof theme.value.logoLink === "string" ? void 0 : theme.value.logoLink?.rel);
    const target = computed(() => typeof theme.value.logoLink === "string" ? void 0 : theme.value.logoLink?.target);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", {
          "has-sidebar": unref(hasSidebar)
        }]
      }, _attrs))} data-v-57e1edf3><a class="title"${ssrRenderAttr("href", link.value ?? unref(normalizeLink$1)(unref(currentLang).link))}${ssrRenderAttr("rel", rel.value)}${ssrRenderAttr("target", target.value)} data-v-57e1edf3>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme).siteTitle) {
        _push(`<span data-v-57e1edf3>${ssrInterpolate(unref(theme).siteTitle)}</span>`);
      } else if (unref(theme).siteTitle === void 0) {
        _push(`<span data-v-57e1edf3>${ssrInterpolate(unref(site).title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});

const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */_export_sfc(_sfc_main$r, [["__scopeId", "data-v-57e1edf3"]]);

const _sfc_main$q = /* @__PURE__ */defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme
    } = useData$1();
    const {
      localeLinks,
      currentLang
    } = useLangs({
      correspondingLink: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: "vpi-languages",
          label: unref(theme).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-3ef0ddf7${_scopeId}><p class="title" data-v-3ef0ddf7${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), locale => {
                _push2(ssrRenderComponent(VPMenuLink, {
                  item: locale
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [createVNode("div", {
                class: "items"
              }, [createVNode("p", {
                class: "title"
              }, toDisplayString(unref(currentLang).label), 1), (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), locale => {
                return openBlock(), createBlock(VPMenuLink, {
                  key: locale.link,
                  item: locale
                }, null, 8, ["item"]);
              }), 128))])];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */_export_sfc(_sfc_main$q, [["__scopeId", "data-v-3ef0ddf7"]]);

const _sfc_main$p = /* @__PURE__ */defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: {
      type: Boolean
    }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const props = __props;
    const {
      y
    } = useWindowScroll();
    const {
      hasSidebar
    } = useSidebar();
    const {
      frontmatter
    } = useData$1();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.layout === "home",
        "top": y.value === 0,
        "screen-open": props.isScreenOpen
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-4c72ed72><div class="wrapper" data-v-4c72ed72><div class="container" data-v-4c72ed72><div class="title" data-v-4c72ed72>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-4c72ed72><div class="content-body" data-v-4c72ed72>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$t, {
        class: "search"
      }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, {
        class: "menu"
      }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, {
        class: "translations"
      }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, {
        class: "appearance"
      }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, {
        class: "social-links"
      }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, {
        class: "extra"
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: $event => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div><div class="divider" data-v-4c72ed72><div class="divider-line" data-v-4c72ed72></div></div></div>`);
    };
  }
});

const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */_export_sfc(_sfc_main$p, [["__scopeId", "data-v-4c72ed72"]]);

const _sfc_main$o = /* @__PURE__ */defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      site,
      theme
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreenAppearance"
        }, _attrs))} data-v-a2b05bad><p class="text" data-v-a2b05bad>${ssrInterpolate(unref(theme).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */_export_sfc(_sfc_main$o, [["__scopeId", "data-v-a2b05bad"]]);

const _sfc_main$n = /* @__PURE__ */defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$_, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */_export_sfc(_sfc_main$n, [["__scopeId", "data-v-1d35e904"]]);

const _sfc_main$m = /* @__PURE__ */defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$_, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [createTextVNode(toDisplayString(_ctx.item.text), 1)];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */_export_sfc(_sfc_main$m, [["__scopeId", "data-v-a4cbc39e"]]);

const _sfc_main$l = /* @__PURE__ */defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPNavScreenMenuGroupSection"
      }, _attrs))} data-v-f7803530>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-f7803530>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, item => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */_export_sfc(_sfc_main$l, [["__scopeId", "data-v-f7803530"]]);

const _sfc_main$k = /* @__PURE__ */defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(() => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", {
          open: isOpen.value
        }]
      }, _attrs))} data-v-bec795ed><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-bec795ed><span class="button-text" data-v-bec795ed>${_ctx.text ?? ""}</span><span class="vpi-plus button-icon" data-v-bec795ed></span></button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-bec795ed><!--[-->`);
      ssrRenderList(_ctx.items, item => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-bec795ed>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
            item
          }, null, _parent));
          _push(`</div>`);
        } else if ("component" in item) {
          _push(`<div class="item" data-v-bec795ed>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({
            ref_for: true
          }, item.props, {
            "screen-menu": ""
          }), null), _parent);
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-bec795ed>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */_export_sfc(_sfc_main$k, [["__scopeId", "data-v-bec795ed"]]);

const _sfc_main$j = /* @__PURE__ */defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: "VPNavScreenMenu"
        }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme).nav, item => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, {
              item
            }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({
              ref_for: true
            }, item.props, {
              "screen-menu": ""
            }), null), _parent);
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};

const _sfc_main$i = /* @__PURE__ */defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      theme
    } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};

const _sfc_main$h = /* @__PURE__ */defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      localeLinks,
      currentLang
    } = useLangs({
      correspondingLink: true
    });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", {
            open: isOpen.value
          }]
        }, _attrs))} data-v-f24e17f8><button class="title" data-v-f24e17f8><span class="vpi-languages icon lang" data-v-f24e17f8></span> ${ssrInterpolate(unref(currentLang).label)} <span class="vpi-chevron-down icon chevron" data-v-f24e17f8></span></button><ul class="list" data-v-f24e17f8><!--[-->`);
        ssrRenderList(unref(localeLinks), locale => {
          _push(`<li class="item" data-v-f24e17f8>`);
          _push(ssrRenderComponent(_sfc_main$_, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [createTextVNode(toDisplayString(locale.text), 1)];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */_export_sfc(_sfc_main$h, [["__scopeId", "data-v-f24e17f8"]]);

const _sfc_main$g = /* @__PURE__ */defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean
    }
  },
  setup(__props) {
    const screen = ref(null);
    useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, _attrs))} data-v-0b3f63e4><div class="container" data-v-0b3f63e4>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$j, {
          class: "menu"
        }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, {
          class: "translations"
        }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, {
          class: "appearance"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, {
          class: "social-links"
        }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */_export_sfc(_sfc_main$g, [["__scopeId", "data-v-0b3f63e4"]]);

const _sfc_main$f = /* @__PURE__ */defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isScreenOpen,
      closeScreen,
      toggleScreen
    } = useNav();
    const {
      frontmatter
    } = useData$1();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (hasNavbar.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({
          class: "VPNav"
        }, _attrs))} data-v-f0448ebb>`);
        _push(ssrRenderComponent(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPNavScreen, {
          open: unref(isScreenOpen)
        }, {
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */_export_sfc(_sfc_main$f, [["__scopeId", "data-v-f0448ebb"]]);

const _sfc_main$e = /* @__PURE__ */defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [[`level-${props.depth}`], {
      collapsible: collapsible.value
    }, {
      collapsed: collapsed.value
    }, {
      "is-link": isLink.value
    }, {
      "is-active": isActiveLink.value
    }, {
      "has-active": hasActiveLink.value
    }]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-7311daff${_scopeId}><div class="indicator" data-v-7311daff${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(_sfc_main$_, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), {
                        class: "text"
                      }, null), _parent3, _scopeId2);
                    } else {
                      return [(openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                        class: "text",
                        innerHTML: _ctx.item.text
                      }, null, 8, ["innerHTML"]))];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), {
                  class: "text"
                }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null && _ctx.item.items && _ctx.item.items.length) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-7311daff${_scopeId}><span class="vpi-chevron-right caret-icon" data-v-7311daff${_scopeId}></span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-7311daff${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, i => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [_ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
              key: 0,
              class: "item",
              role: itemRole.value
            }, toHandlers(_ctx.item.items ? {
              click: onItemInteraction,
              keydown: onItemInteraction
            } : {}, true), {
              tabindex: _ctx.item.items && 0
            }), [createVNode("div", {
              class: "indicator"
            }), _ctx.item.link ? (openBlock(), createBlock(_sfc_main$_, {
              key: 0,
              tag: linkTag.value,
              class: "link",
              href: _ctx.item.link,
              rel: _ctx.item.rel,
              target: _ctx.item.target
            }, {
              default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                class: "text",
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"]))]),
              _: 1
            }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
              key: 1,
              class: "text",
              innerHTML: _ctx.item.text
            }, null, 8, ["innerHTML"])), _ctx.item.collapsed != null && _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
              key: 2,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              onClick: onCaretClick,
              onKeydown: withKeys(onCaretClick, ["enter"]),
              tabindex: "0"
            }, [createVNode("span", {
              class: "vpi-chevron-right caret-icon"
            })], 32)) : createCommentVNode("", true)], 16, ["role", "tabindex"])) : createCommentVNode("", true), _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
              key: 1,
              class: "items"
            }, [_ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, {
              key: 0
            }, renderList(_ctx.item.items, i => {
              return openBlock(), createBlock(_component_VPSidebarItem, {
                key: i.text,
                item: i,
                depth: _ctx.depth + 1
              }, null, 8, ["item", "depth"]);
            }), 128)) : createCommentVNode("", true)])) : createCommentVNode("", true)];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});

const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */_export_sfc(_sfc_main$e, [["__scopeId", "data-v-7311daff"]]);

const _sfc_main$d = /* @__PURE__ */defineComponent({
  __name: "VPSidebarGroup",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, item => {
        _push(`<div class="${ssrRenderClass([{
          "no-transition": disableTransition.value
        }, "group"])}" data-v-5a59fb67>`);
        _push(ssrRenderComponent(VPSidebarItem, {
          item,
          depth: 0
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSidebarGroup.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPSidebarGroup = /* @__PURE__ */_export_sfc(_sfc_main$d, [["__scopeId", "data-v-5a59fb67"]]);

const _sfc_main$c = /* @__PURE__ */defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean
    }
  },
  setup(__props) {
    const {
      sidebarGroups,
      hasSidebar
    } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch([props, navEl], () => {
      if (props.open) {
        isLocked.value = true;
        navEl.value?.focus();
      } else isLocked.value = false;
    }, {
      immediate: true,
      flush: "post"
    });
    const key = ref(0);
    watch(sidebarGroups, () => {
      key.value += 1;
    }, {
      deep: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", {
            open: _ctx.open
          }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-e98bf821><div class="curtain" data-v-e98bf821></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-e98bf821><span class="visually-hidden" id="sidebar-aria-label" data-v-e98bf821> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSidebarGroup, {
          items: unref(sidebarGroups),
          key: key.value
        }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */_export_sfc(_sfc_main$c, [["__scopeId", "data-v-e98bf821"]]);

const _sfc_main$b = /* @__PURE__ */defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-0c51160d></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-0c51160d> Skip to content </a><!--]-->`);
    };
  }
});

const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */_export_sfc(_sfc_main$b, [["__scopeId", "data-v-0c51160d"]]);

const _sfc_main$a = /* @__PURE__ */defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const {
      frontmatter
    } = useData$1();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Layout", unref(frontmatter).pageClass]
        }, _attrs))} data-v-4f0b03b2>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)];
            }
          }),
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, {
          open: unref(isSidebarOpen)
        }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "page-top", {}, void 0, true)];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "not-found", {}, void 0, true)];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)];
            }
          }),
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});

const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */_export_sfc(_sfc_main$a, [["__scopeId", "data-v-4f0b03b2"]]);

/**
 * Defines grid configuration for each sponsor size in tuple.
 *
 * [Screen width, Column size]
 *
 * It sets grid size on matching screen size. For example, `[768, 5]` will
 * set 5 columns when screen size is bigger or equal to 768px.
 *
 * Column will set only when item size is bigger than the column size. For
 * example, even we define 5 columns, if we only have 1 sponsor yet, we would
 * like to show it in 1 column to make it stand out.
 */
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [[920, 6], [768, 5], [640, 4], [480, 3], [0, 2]],
  medium: [[960, 5], [832, 4], [640, 3], [480, 2]],
  big: [[832, 3], [640, 2]]
};
function useSponsorsGrid({
  el,
  size = 'medium'
}) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener('resize', onResize);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll('.vp-sponsor-grid-item:not(.empty)').length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement('div');
    slot.classList.add('vp-sponsor-grid-item', 'empty');
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}

const _sfc_main$9 = /* @__PURE__ */defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: {
      default: "medium"
    },
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({
      el,
      size: props.size
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [_ctx.size]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, sponsor => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const _sfc_main$8 = /* @__PURE__ */defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: {
      default: "normal"
    },
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some(s => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [{
        tier: props.tier,
        size: props.size,
        items: props.data
      }];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$9, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const _sfc_main$7 = /* @__PURE__ */defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: {
      default: "Become a sponsor"
    },
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "VPHomeSponsors"
      }, _attrs))} data-v-b4810a6c><div class="container" data-v-b4810a6c><div class="header" data-v-b4810a6c><div class="love" data-v-b4810a6c><span class="vpi-heart icon" data-v-b4810a6c></span></div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-b4810a6c>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-b4810a6c>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-b4810a6c>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText,
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = /* @__PURE__ */defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPDocAsideSponsors"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = {};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};

const _sfc_main$4 = {};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};

const _sfc_main$3 = {};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};

const _sfc_main$2 = /* @__PURE__ */defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: {
      default: "medium"
    },
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size]]
      }, _attrs))} data-v-725ccbb7><div class="profile" data-v-725ccbb7><figure class="avatar" data-v-725ccbb7><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-725ccbb7></figure><div class="data" data-v-725ccbb7><h1 class="name" data-v-725ccbb7>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-725ccbb7>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-725ccbb7>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-725ccbb7> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(_sfc_main$_, {
            class: ["org", {
              link: _ctx.member.orgLink
            }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [createTextVNode(toDisplayString(_ctx.member.org), 1)];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-725ccbb7>${_ctx.member.desc ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-725ccbb7>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-725ccbb7>`);
        _push(ssrRenderComponent(_sfc_main$_, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="vpi-heart sp-icon" data-v-725ccbb7${_scopeId}></span> ${ssrInterpolate(_ctx.member.actionText || "Sponsor")}`);
            } else {
              return [createVNode("span", {
                class: "vpi-heart sp-icon"
              }), createTextVNode(" " + toDisplayString(_ctx.member.actionText || "Sponsor"), 1)];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */_export_sfc(_sfc_main$2, [["__scopeId", "data-v-725ccbb7"]]);

const _sfc_main$1 = /* @__PURE__ */defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: {
      default: "medium"
    },
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [props.size, `count-${props.members.length}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-d24c8927><div class="container" data-v-d24c8927><!--[-->`);
      ssrRenderList(_ctx.members, member => {
        _push(`<div class="item" data-v-d24c8927>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */new Set())).add("../node_modules/.pnpm/vitepress@1.3.1_@algolia+client-search@4.23.3_@types+node@20.14.2_@types+react@18.3.3_async-v_govv64xtgqkaalusoyttguuziq/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const theme = {
  Layout,
  enhanceApp: ({
    app
  }) => {
    app.component('Badge', _sfc_main$15);
  }
};

var DrawActionType = /* @__PURE__ */(DrawActionType2 => {
  DrawActionType2[DrawActionType2["None"] = 0] = "None";
  DrawActionType2[DrawActionType2["LineSegment"] = 1] = "LineSegment";
  DrawActionType2[DrawActionType2["CircleSegment"] = 2] = "CircleSegment";
  DrawActionType2[DrawActionType2["ArcSegment"] = 3] = "ArcSegment";
  return DrawActionType2;
})(DrawActionType || {});

const __vite__initWasm = async (opts = {}, url) => {
    let result;
    if (url.startsWith("data:")) {
        const urlContent = url.replace(/^data:.*?base64,/, "");
        let bytes;
        if (typeof Buffer === "function" && typeof Buffer.from === "function") {
            bytes = Buffer.from(urlContent, "base64");
        }
        else if (typeof atob === "function") {
            const binaryString = atob(urlContent);
            bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
        }
        else {
            throw new Error("Cannot decode base64-encoded data URL");
        }
        result = await WebAssembly.instantiate(bytes, opts);
    }
    else {
        // https://github.com/mdn/webassembly-examples/issues/5
        // WebAssembly.instantiateStreaming requires the server to provide the
        // correct MIME type for .wasm files, which unfortunately doesn't work for
        // a lot of static file servers, so we just work around it by getting the
        // raw buffer.
        // @ts-ignore
        const response = await fetch(url);
        const contentType = response.headers.get("Content-Type") || "";
        if ("instantiateStreaming" in WebAssembly && contentType.startsWith("application/wasm")) {
            result = await WebAssembly.instantiateStreaming(response, opts);
        }
        else {
            const buffer = await response.arrayBuffer();
            result = await WebAssembly.instantiate(buffer, opts);
        }
    }
    return result.instance.exports;
};

let wasm$1;
function __wbg_set_wasm(val) {
  wasm$1 = val;
}
const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
let cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm$1.memory.buffer);
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
    cachedInt32Memory0 = new Int32Array(wasm$1.memory.buffer);
  }
  return cachedInt32Memory0;
}
let cachedUint32Memory0 = null;
function getUint32Memory0() {
  if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
    cachedUint32Memory0 = new Uint32Array(wasm$1.memory.buffer);
  }
  return cachedUint32Memory0;
}
function getObject(idx) {
  return heap[idx];
}
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
function isLikeNone(x) {
  return x === undefined || x === null;
}
/**
*/
const Segment2Type = Object.freeze({
  LineSegment2: 0,
  "0": "LineSegment2",
  CircleSegment2: 1,
  "1": "CircleSegment2",
  ArcSegment2: 2,
  "2": "ArcSegment2"
});
const ArcSegment2Finalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_arcsegment2_free(ptr >>> 0));
/**
*/
class ArcSegment2 {
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
    wasm$1.__wbg_arcsegment2_free(ptr);
  }
  /**
  * @param {CircleSegment2} support
  * @param {number} source_radian
  * @param {number} target_radian
  */
  constructor(support, source_radian, target_radian) {
    _assertClass(support, CircleSegment2);
    var ptr0 = support.__destroy_into_raw();
    const ret = wasm$1.arcsegment2_new(ptr0, source_radian, target_radian);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {Segment2Type}
  */
  segment_type() {
    const ret = wasm$1.arcsegment2_segment_type(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {Point2}
  */
  source() {
    const ret = wasm$1.arcsegment2_source(this.__wbg_ptr);
    return Point2.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  source_radian() {
    const ret = wasm$1.arcsegment2_source_radian(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {Point2}
  */
  target() {
    const ret = wasm$1.arcsegment2_target(this.__wbg_ptr);
    return Point2.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  target_radian() {
    const ret = wasm$1.arcsegment2_target_radian(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {Point2}
  */
  center() {
    const ret = wasm$1.arcsegment2_center(this.__wbg_ptr);
    return Point2.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  radius() {
    const ret = wasm$1.arcsegment2_radius(this.__wbg_ptr);
    return ret;
  }
}
const CircleSegment2Finalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_circlesegment2_free(ptr >>> 0));
/**
*/
class CircleSegment2 {
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
    wasm$1.__wbg_circlesegment2_free(ptr);
  }
  /**
  * @param {Point2} center
  * @param {number} radius
  */
  constructor(center, radius) {
    _assertClass(center, Point2);
    var ptr0 = center.__destroy_into_raw();
    const ret = wasm$1.circlesegment2_new(ptr0, radius);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {Segment2Type}
  */
  segment_type() {
    const ret = wasm$1.circlesegment2_segment_type(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {Point2}
  */
  center() {
    const ret = wasm$1.circlesegment2_center(this.__wbg_ptr);
    return Point2.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  radius() {
    const ret = wasm$1.circlesegment2_radius(this.__wbg_ptr);
    return ret;
  }
}
typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_convexhull2_free(ptr >>> 0));
const LineSegment2Finalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_linesegment2_free(ptr >>> 0));
/**
*/
class LineSegment2 {
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
    wasm$1.__wbg_linesegment2_free(ptr);
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
    const ret = wasm$1.linesegment2_new(ptr0, ptr1);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {Segment2Type}
  */
  segment_type() {
    const ret = wasm$1.linesegment2_segment_type(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {Point2}
  */
  source() {
    const ret = wasm$1.linesegment2_source(this.__wbg_ptr);
    return Point2.__wrap(ret);
  }
  /**
  * @returns {Point2}
  */
  target() {
    const ret = wasm$1.linesegment2_target(this.__wbg_ptr);
    return Point2.__wrap(ret);
  }
}
const Point2Finalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_point2_free(ptr >>> 0));
/**
*/
class Point2 {
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
    wasm$1.__wbg_point2_free(ptr);
  }
  /**
  * @param {number} x
  * @param {number} y
  */
  constructor(x, y) {
    const ret = wasm$1.point2_new(x, y);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {number}
  */
  x() {
    const ret = wasm$1.point2_x(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  y() {
    const ret = wasm$1.point2_y(this.__wbg_ptr);
    return ret;
  }
  /**
  * @param {Point2} other
  * @returns {boolean}
  */
  equals(other) {
    _assertClass(other, Point2);
    const ret = wasm$1.point2_equals(this.__wbg_ptr, other.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @returns {Vector2}
  */
  get_vector() {
    const ret = wasm$1.point2_get_vector(this.__wbg_ptr);
    return Vector2.__wrap(ret);
  }
  /**
  * @param {Point2} other
  * @returns {number}
  */
  distance(other) {
    _assertClass(other, Point2);
    const ret = wasm$1.point2_distance(this.__wbg_ptr, other.__wbg_ptr);
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
    const ret = wasm$1.point2_turn(p.__wbg_ptr, q.__wbg_ptr, r.__wbg_ptr);
    return ret;
  }
}
typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_polygon2_free(ptr >>> 0));
const Segment2Finalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_segment2_free(ptr >>> 0));
/**
*/
class Segment2 {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    Segment2Finalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_segment2_free(ptr);
  }
  /**
  * @returns {Segment2Type}
  */
  get segment_type() {
    const ret = wasm$1.__wbg_get_segment2_segment_type(this.__wbg_ptr);
    return ret;
  }
  /**
  * @param {Segment2Type} arg0
  */
  set segment_type(arg0) {
    wasm$1.__wbg_set_segment2_segment_type(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {LineSegment2 | undefined}
  */
  get line_segment_2() {
    const ret = wasm$1.__wbg_get_segment2_line_segment_2(this.__wbg_ptr);
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
    wasm$1.__wbg_set_segment2_line_segment_2(this.__wbg_ptr, ptr0);
  }
  /**
  * @returns {CircleSegment2 | undefined}
  */
  get circle_segment_2() {
    const ret = wasm$1.__wbg_get_segment2_circle_segment_2(this.__wbg_ptr);
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
    wasm$1.__wbg_set_segment2_circle_segment_2(this.__wbg_ptr, ptr0);
  }
  /**
  * @returns {ArcSegment2 | undefined}
  */
  get arc_segment_2() {
    const ret = wasm$1.__wbg_get_segment2_arc_segment_2(this.__wbg_ptr);
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
    wasm$1.__wbg_set_segment2_arc_segment_2(this.__wbg_ptr, ptr0);
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
    const ret = wasm$1.segment2_new(segment_type, ptr0, ptr1, ptr2);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
}
const SweepSegment2IntersectionFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_sweepsegment2intersection_free(ptr >>> 0));
/**
*/
class SweepSegment2Intersection {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SweepSegment2IntersectionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_sweepsegment2intersection_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm$1.sweepsegment2intersection_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @param {Segment2} segment_2
  */
  push_segment(segment_2) {
    _assertClass(segment_2, Segment2);
    wasm$1.sweepsegment2intersection_push_segment(this.__wbg_ptr, segment_2.__wbg_ptr);
  }
  /**
  * @returns {(Point2)[]}
  */
  intersection() {
    try {
      const retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);
      wasm$1.sweepsegment2intersection_intersection(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm$1.__wbindgen_free(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm$1.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_triangle2_free(ptr >>> 0));
const Triangle2IndicesFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_triangle2indices_free(ptr >>> 0));
/**
*/
class Triangle2Indices {
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
    wasm$1.__wbg_triangle2indices_free(ptr);
  }
  /**
  * @returns {number}
  */
  get a() {
    const ret = wasm$1.__wbg_get_triangle2indices_a(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} arg0
  */
  set a(arg0) {
    wasm$1.__wbg_set_triangle2indices_a(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {number}
  */
  get b() {
    const ret = wasm$1.__wbg_get_triangle2indices_b(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} arg0
  */
  set b(arg0) {
    wasm$1.__wbg_set_triangle2indices_b(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {number}
  */
  get c() {
    const ret = wasm$1.__wbg_get_triangle2indices_c(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} arg0
  */
  set c(arg0) {
    wasm$1.__wbg_set_triangle2indices_c(this.__wbg_ptr, arg0);
  }
}
const Vector2Finalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm$1.__wbg_vector2_free(ptr >>> 0));
/**
*/
class Vector2 {
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
    wasm$1.__wbg_vector2_free(ptr);
  }
  /**
  * @param {number} x
  * @param {number} y
  */
  constructor(x, y) {
    const ret = wasm$1.vector2_new(x, y);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {number}
  */
  x() {
    const ret = wasm$1.vector2_x(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  y() {
    const ret = wasm$1.vector2_y(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  length() {
    const ret = wasm$1.vector2_length(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {Vector2}
  */
  normalize() {
    const ret = wasm$1.vector2_normalize(this.__wbg_ptr);
    return Vector2.__wrap(ret);
  }
  /**
  * @param {Vector2} other
  * @returns {number}
  */
  dot(other) {
    _assertClass(other, Vector2);
    const ret = wasm$1.vector2_dot(this.__wbg_ptr, other.__wbg_ptr);
    return ret;
  }
  /**
  * @param {Vector2} other
  * @returns {number}
  */
  cross(other) {
    _assertClass(other, Vector2);
    const ret = wasm$1.vector2_cross(this.__wbg_ptr, other.__wbg_ptr);
    return ret;
  }
  /**
  * @param {Vector2} other
  * @returns {number}
  */
  radian_to(other) {
    _assertClass(other, Vector2);
    const ret = wasm$1.vector2_radian_to(this.__wbg_ptr, other.__wbg_ptr);
    return ret;
  }
}
function __wbg_triangle2indices_new(arg0) {
  const ret = Triangle2Indices.__wrap(arg0);
  return addHeapObject(ret);
}
function __wbg_linesegment2_new(arg0) {
  const ret = LineSegment2.__wrap(arg0);
  return addHeapObject(ret);
}
function __wbg_point2_new(arg0) {
  const ret = Point2.__wrap(arg0);
  return addHeapObject(ret);
}
function __wbg_point2_unwrap(arg0) {
  const ret = Point2.__unwrap(takeObject(arg0));
  return ret;
}
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}

URL = globalThis.URL;
const __vite__wasmUrl = "data:application/wasm;base64,AGFzbQEAAAABpwEaYAJ/fwF/YAJ/fwBgAX8AYAF/AX9gA39/fwF/YAN/f38AYAF/AXxgBH9/f38AYAJ/fwF8YAZ/f39/f38AYAF8AXxgBH9/f38Bf2AEf398fAF/YAAAYAJ/fABgBH98fH8Bf2AGf39/f39/AX9gBX9/f3x8AGADf3x8AX9gA35/fwF/YAN/fHwAYAJ/fAF/YAABf2AFf39/f38Bf2ACfHwBf2ACfHwBfAK5AQUNLi9yY2dhbF9iZy5qcxpfX3diZ190cmlhbmdsZTJpbmRpY2VzX25ldwADDS4vcmNnYWxfYmcuanMWX193YmdfbGluZXNlZ21lbnQyX25ldwADDS4vcmNnYWxfYmcuanMQX193YmdfcG9pbnQyX25ldwADDS4vcmNnYWxfYmcuanMTX193YmdfcG9pbnQyX3Vud3JhcAADDS4vcmNnYWxfYmcuanMQX193YmluZGdlbl90aHJvdwABA9YB1AEBAQUDCQEFDgIAAA8FBQUABAAHBAkQBQMEAgEBBAsAAQUDEQwDAwMDAgIHDAADAwEACgEFBQQAAQABAQEBBAQAEgEBEwAAAQUAAwABAwEFAQAEBgQAAwkBFAICAgICBQEABwIABAAICAADAQgIAwMAAAAABxUAAgUFARYGAwMDAgICAgICAgMDBAQBAAUBBhcBAQAYAgEBAQACAwMDAgIGBgYCBgYCAgMCAwMDAwICAQsFAAAAAAEBAQAAAQAABQUFAAUCAwENDQAAAAABBAQFGQoKAgQFAXABJSUFAwEAEQYJAX8BQYCAwAALB/oRXQZtZW1vcnkCAB5pc19wb2ludF8yX29uX2NpcmNsZV9zZWdtZW50XzIAaB9sb2NhdGVfcG9pbnRfMl9jaXJjbGVfc2VnbWVudF8yAGUcaXNfcG9pbnRfMl9vbl9saW5lX3NlZ21lbnRfMgBZHWxvY2F0ZV9wb2ludF8yX2xpbmVfc2VnbWVudF8yAFUecG9pbnRfMl9wcm9qZWN0X2xpbmVfc2VnbWVudF8yAE8bX193YmdfdHJpYW5nbGUyaW5kaWNlc19mcmVlAJ4BHF9fd2JnX2dldF90cmlhbmdsZTJpbmRpY2VzX2EAnwEcX193Ymdfc2V0X3RyaWFuZ2xlMmluZGljZXNfYQCaARxfX3diZ19nZXRfdHJpYW5nbGUyaW5kaWNlc19iAKABHF9fd2JnX3NldF90cmlhbmdsZTJpbmRpY2VzX2IAmwEcX193YmdfZ2V0X3RyaWFuZ2xlMmluZGljZXNfYwChARxfX3diZ19zZXRfdHJpYW5nbGUyaW5kaWNlc19jAJwBBmVhcmN1dAAGF19fd2JnX2xpbmVzZWdtZW50Ml9mcmVlAKIBEGxpbmVzZWdtZW50Ml9uZXcAbRlsaW5lc2VnbWVudDJfc2VnbWVudF90eXBlAK8BE2xpbmVzZWdtZW50Ml9zb3VyY2UAgQETbGluZXNlZ21lbnQyX3RhcmdldACCARZfX3diZ19jb252ZXhodWxsMl9mcmVlAIoBD2NvbnZleGh1bGwyX25ldwB6F2NvbnZleGh1bGwyX2NvbnZleF9odWxsAEAkX193Ymdfc3dlZXBzZWdtZW50MmludGVyc2VjdGlvbl9mcmVlAGcdc3dlZXBzZWdtZW50MmludGVyc2VjdGlvbl9uZXcAfyZzd2VlcHNlZ21lbnQyaW50ZXJzZWN0aW9uX3B1c2hfc2VnbWVudAAkJnN3ZWVwc2VnbWVudDJpbnRlcnNlY3Rpb25faW50ZXJzZWN0aW9uAEEbaXNfcG9pbnRfMl9vbl9hcmNfc2VnbWVudF8yAHQcbG9jYXRlX3BvaW50XzJfYXJjX3NlZ21lbnRfMgB3GGxvY2F0ZV9wb2ludF8yX3BvbHlnb25fMgB1GWxvY2F0ZV9wb2ludF8yX3RyaWFuZ2xlXzIAdhZfX3diZ19hcmNzZWdtZW50Ml9mcmVlAKMBD2FyY3NlZ21lbnQyX25ldwBFGGFyY3NlZ21lbnQyX3NlZ21lbnRfdHlwZQCwARJhcmNzZWdtZW50Ml9zb3VyY2UAchlhcmNzZWdtZW50Ml9zb3VyY2VfcmFkaWFuAKQBEmFyY3NlZ21lbnQyX3RhcmdldABzGWFyY3NlZ21lbnQyX3RhcmdldF9yYWRpYW4ApQESYXJjc2VnbWVudDJfY2VudGVyAIEBEmFyY3NlZ21lbnQyX3JhZGl1cwCmARFfX3diZ19wb2ludDJfZnJlZQCnAQpwb2ludDJfbmV3AJgBCHBvaW50Ml94AKgBCHBvaW50Ml95AKkBDXBvaW50Ml9lcXVhbHMAahFwb2ludDJfZ2V0X3ZlY3RvcgCBAQ9wb2ludDJfZGlzdGFuY2UAawtwb2ludDJfdHVybgBYE19fd2JnX3BvbHlnb24yX2ZyZWUAewxwb2x5Z29uMl9uZXcAIxFwb2x5Z29uMl92ZXJ0aWNlcwAfDnBvbHlnb24yX2VkZ2VzACANcG9seWdvbjJfYXJlYQBXEnBvbHlnb24yX2lzX3NpbXBsZQCLARJwb2x5Z29uMl9pc19jb252ZXgAjAEZX193YmdfY2lyY2xlc2VnbWVudDJfZnJlZQCqARJjaXJjbGVzZWdtZW50Ml9uZXcAeRtjaXJjbGVzZWdtZW50Ml9zZWdtZW50X3R5cGUAsQEVY2lyY2xlc2VnbWVudDJfY2VudGVyAIEBFWNpcmNsZXNlZ21lbnQyX3JhZGl1cwCmARNfX3diZ19zZWdtZW50Ml9mcmVlAKsBH19fd2JnX2dldF9zZWdtZW50Ml9zZWdtZW50X3R5cGUArAEfX193Ymdfc2V0X3NlZ21lbnQyX3NlZ21lbnRfdHlwZQCSASFfX3diZ19nZXRfc2VnbWVudDJfbGluZV9zZWdtZW50XzIAUSFfX3diZ19zZXRfc2VnbWVudDJfbGluZV9zZWdtZW50XzIAXCNfX3diZ19nZXRfc2VnbWVudDJfY2lyY2xlX3NlZ21lbnRfMgBaI19fd2JnX3NldF9zZWdtZW50Ml9jaXJjbGVfc2VnbWVudF8yAGQgX193YmdfZ2V0X3NlZ21lbnQyX2FyY19zZWdtZW50XzIATiBfX3diZ19zZXRfc2VnbWVudDJfYXJjX3NlZ21lbnRfMgBSDHNlZ21lbnQyX25ldwAiFF9fd2JnX3RyaWFuZ2xlMl9mcmVlAK0BDXRyaWFuZ2xlMl9uZXcAVgt0cmlhbmdsZTJfYgCCAQt0cmlhbmdsZTJfYwCDARJ0cmlhbmdsZTJfdmVydGljZXMARw90cmlhbmdsZTJfZWRnZXMAPhV0cmlhbmdsZTJfb3JpZW50YXRpb24ArgEddHJpYW5nbGUyX3JldmVyc2Vfb3JpZW50YXRpb24AmQEOdHJpYW5nbGUyX2FyZWEAgAESX193YmdfdmVjdG9yMl9mcmVlAKcBC3ZlY3RvcjJfbmV3AJgBCXZlY3RvcjJfeACoAQl2ZWN0b3IyX3kAqQEOdmVjdG9yMl9sZW5ndGgAkwERdmVjdG9yMl9ub3JtYWxpemUAbgt2ZWN0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IAUgBEEEdGoiBCAHKQMANwMAIARBCGogB0EIaikDADcDACADIQQgC0EBSw0ACwsgBSADQQR0aiIEICM5AwggBCAoOQMACyAJICo5AxAgCSApOQMIIAlCATcDAAsCQCACKQOwAVBFBEAgAiACKwPAATkDECACIAIrA7gBOQMIQQAhByACQQA2ArgBIAJCgICAgIABNwKwAQJ/IAEoAjwiBEUEQEEAIRRBCAwBCyABKAI4IQUgBEEwbCEJQQAhBANAAkACQCAEIAVqIgMpAwBQBEAgA0EIaisDACIiIAIrAwihIh4gHqIgA0EQaisDACIhIAIrAxChIh4gHqKgn0S7vdfZ33zbPWNFDQIgA0EgaisDACEfIANBGGorAwAhHiACKAKwASAHRgRAIAJBsAFqEF8LIAIoArQBIAdBMGxqIgNCADcDAAwBCwJAAkAgA0EgaisDACIfRBgtRFT7IQlAY0UNACADQShqKwMAIiBEGC1EVPshCUBjICBEGC1EVPshCcCgmUS7vdfZ33zbPWNyRQ0AIANBGGorAwAhHiAgENcBISMgA0EQaisDACEhIAIrAxAhJiAgENYBISggA0EIaisDACIiIB4gKKKgIAIrAwihIicgJ6IgISAeICOioCAmoSIlICWioJ9Eu73X2d982z1jRQ0DDAELIANBGGorAwAhHiAfENcBISAgA0EQaisDACEhIAIrAxAhJSAfENYBISMgA0EIaisDACIiICMgHqKgIAIrAwihIiYgJqIgISAgIB6ioCAloSIgICCioJ9Eu73X2d982z1jRQ0CIANBKGorAwAhIAsgAigCsAEgB0YEQCACQbABahBfCyACKAK0ASAHQTBsaiIDQgE3AwALIAMgIjkDCCADICA5AyggAyAfOQMgIAMgHjkDGCADICE5AxAgAiAHQQFqIgc2ArgBCyAJIARBMGoiBEcNAAsgAigCsAEhFCACKAK0AQshCyACQQA2AogBIAJCgICAgIABNwKAASACQQA2ArgBIAJCgICAgIABNwKwASAKKAIAIgQEQCAEIAQoAgBBAWoiAzYCACADRQ0FCyAEIAJBsAFqEDwgAigCtAEhCSACKAKwASEGIAIoArgBIgRFDQEgCSAEQcgAbGohCCAJIQMDQCADKQMAIi9CAlENAiADKwMoIR8gAysDICEhIAMrAxghHiADKwMQISAg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ACIjoZlEu73X2d982z1jDQAgA0EQaisDACIeIB8gIKEgA0EgaisDACAeoaIgIyAgoaOgIR4LIANBIGorAwAhISADQRhqKwMAIR8gA0EQaisDACEgIANBCGorAwAhIkIADAMLIANBIGorAwAhISAQKwMAIR8gCCsDACEgIAUrAwAhIiADKQMAUA0BICQhHgsgA0EoaisDACElQgEMAQsgJCEeQgALIS8gAiAmOQPwASACICc5A+gBIAIgHjkD4AEgAiAlOQPYASACICE5A9ABIAIgHzkDyAEgAiAgOQPAASACICI5A7gBIAIgLzcDsAECQCAKKAIAIgNFBEBBACACQbABahAOIQUMAQsgAyADKAIAQQFqIgU2AgAgBUUNByADIAJBsAFqEA4hBSADIAMoAgBBAWsiCDYCACAIDQAgA0HcAGoQhwEgA0HgAGoQhwEgA0EEaiIIIAgoAgBBAWsiCDYCACAIDQAgA0HoAEEIEMMBCyAKIAU2AgAgBiAEQTBqIgRHDQALCyAOQTBsIRACQCAORQRAIAooAgAhBQwBC0EAIQQgAisDECEmIAIrAwghJwNAIAQgCWohAwJ+AkACQAJAAkAgASkDAFAEQCADQRBqIgUrAwAhHiADKQMAUA0BIB4gA0EYaisDACIfIANBIGorAwAiIRDXAaKgIR4gBSsDACEgIANBCGorAwAhIgwDCyADQQhqIQUgASsDECEeIAErAwghHyADKQMAUEUEQCADQRBqIgYrAwAhICADQRhqIggrAwAhJCAFKwMAISMgAiAfOQOAASACICAgJCAkoiAfICOhIiQgJKKhnyIjoCIkOQOIASACICAgI6EiIDkDuAEgAiAfOQOwASACQYABaiAFEDFFDQIgHiAgIAJBsAFqIAUQMRshJAwCCyAFKwMAIiAgA0EYaisDACIjoZlEu73X2d982z1jDQAgA0EQaisDACIeIB8gIKEgA0EgaisDACAeoaIgIyAgoaOgIR4LIANBIGorAwAhISADQRhqKwMAIR8gA0EQaisDACEgIANBCGorAwAhIkIADAMLIANBIGorAwAhISAIKwMAIR8gBisDACEgIAUrAwAhIiADKQMAUA0BICQhHgsgA0EoaisDACElQgEMAQsgJCEeQgALIS8gAiAmOQPwASACICc5A+gBIAIgHjkD4AEgAiAlOQPYASACICE5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IgNBDGooAgAiBARAIANBEGooAgAgBEEBEMMBCwJAIANBf0YNACADIAMoAgQiBEEBazYCBCAEQQFHDQAgA0EYQQQQwwELC0EBIQQLIAJBIGokACAEDAELIAJCADcCFCACQoGAgIDAADcCDCACQbCkwAA2AgggAkEHaiACQQhqEJYBAAtFBEBB8LbAAC0AAEEDRwRAIwBBEGsiBCQAQfC2wAAtAABBA0cEQCAEQdC2wAA2AgQgBCAEQQ9qNgIIIARBBGohByMAQSBrIgMkAAJAAkACQAJAAkBB8LbAAC0AACICQQJPBEAgAkEDaw0EDAELQfC2wABBAjoAACAHKAIAIQIgB0EANgIAIAJFDQFBqbbAAC0AABpBgAhBARC6ASIHRQ0CIAJCADcCACACQQA6ABwgAkEANgIYIAIgBzYCFCACQoCAgICAgAE3AgwgAkEIakEAOgAAQfC2wABBAzoAAAsgA0EgaiQADAMLQaClwAAQyAEAC0EBQYAIELQBAAsgA0EANgIYIANBATYCDCADQbiowAA2AgggA0IENwIQIANBCGpBkKXAABCVAQALCyAEQRBqJAALIAFB0LbAADYCHCABIAFBHGo2AiggAUEQaiEEIwBBIGsiAiQAAkACQCABQShqKAIAKAIAIgMoAgBB0brAAEcEQCADLQAIIQcgA0EBOgAIIAIgBzoABCAHRQ0BIAJCADcCFCACQoGAgIDAADcCDCACQbCkwAA2AgggAkEEaiACQQhqEJYBAAsgAygCBEEBaiIHBEAgAyAHNgIEDAILIwBBEGsiASQAIAFBJjYCDCABQbClwAA2AggjAEEgayIAJAAgAEEBNgIEIABB7KzAADYCACAAQgE3AgwgACABQQhqrUKAgICAgASENwMYIAAgAEEYajYCCCAAQfylwAAQlQEACyADQQE2AgQgA0HRusAANgIACyACIAM2AgQgAkEEOgAIIAIgAkEEajYCEAJAAkAgAkEIakHcmsAAIA0QIQRAIAItAAhBBEcNASAEQoKAgIDAwIQINwIADAILIARBBDoAACACKAIMIQMgAi0ACCIEQQRNIARBA0dxDQEgAygCACIHIANBBGooAgAiBCgCABECACAEKAIEIg0EQCAHIA0gBCgCCBDDAQsgA0EMQQQQwwEMAQsgBCACKQMINwIACyACKAIEIgMgAygCBEEBayIE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AFAEQCApUARAIAMgCisDCDkDCCADIAorAwA5AwAgByALIAMQHQwCCyACKwMgISYgAisDECEjIAorAwAhHiAKKwMIIiEhKCACKwMIIiQgAisDGCIfoZlEu73X2d982z1jRQRAICMgHiAkoSAmICOhoiAfICSho6AhKAsgBisDECElIAYrAxghICAGKwMIIR0gAyAeOQMwIAMgJSAgICCiIB4gHaEiJyAnoqGfIh2gIiI5AzggAyAlIB2hIh05AwggAyAeOQMAIANBMGogCxAxBEAgISAdIAMgCxAxGyEiCyAoICKhmUS7vdfZ33zbPWNFBEBBf0EBICIgKGQbDAILIB8gJKEiIJkhHyAhICWhIh2ZRLu919nffNs9YwRAQf8BIB9Eu73X2d982z1jRQ0CGiAHIAsgHiAhEDAMAgtBASAfRLu919nffNs9Yw0BGiAmICOhICCjIiAgJ5ogHaMiHaGZRLu919nffNs9Y0UEQEF/QQEgHSAgZBsMAgsgByALIB4gIRAwDAELIClQRQRAIAorAwAhHSADIAorAwg5AwggAyAdOQMAIAcgCyADEDoMAQsgCisDCCEgIAIrAxAhIyACKwMYIR8gAisDCCEdIAMgCisDACIeOQMwIAMgIyAfIB+iIB4gHaEiJiAmoqGfIh2gIiI5AzggAyAjIB2hIh05AwggAyAeOQMAIANBMGogBxAxBEAgICAdIAMgBxAxGyEiCyAGKwMgIScgBisDECEkICAhHSAGKwMIIiEgBisDGCIloZlEu73X2d982z1jRQRAICQgHiAhoSAnICShoiAlICGho6AhHQsgIiAdoZlEu73X2d982z1jRQRAQX9BASAdICJkGwwBCyAgICOhIh+ZRLu919nffNs9YwRAQQEgJSAhoZlEu73X2d982z1jRQ0BGiAHIAsgHiAgECgMAQtB/wEgJSAhoSIdmUS7vdfZ33zbPWMNABogJpogH6MiHyAnICShIB2jIh2hmUS7vdfZ33zbPWNFBEBBf0EBIB0gH2QbDAELIAcgCyAeICAQKAtB/wFxIgdB/wFGIgobIgspAwA3AwAgBEEoaiALQShqKQMANwMAIARBIGogC0EgaikDADcDACAEQRhqIAtBGGopAwA3AwAgBEEQaiALQRBqKQMANwMAIARBCGogC0EIaikDADcDACAEQTBqIQQgBiAHQf8B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AwA3AwAgA0EQaiABQSBqKQMANwMAIANBCGogAUEYaikDADcDACADIAEpAxA3AwBBAAwCCyABKAIwRQ0JIANBEGogAUHIAGopAwA3AwAgA0EIaiABQUBrKQMANwMAIAMgASkDODcDAEEBDAELIAEoAlBFDQcgA0EgaiABQfgAaikDADcDACADQRhqIAFB8ABqKQMANwMAIANBEGogAUHoAGopAwA3AwAgA0EIaiABQeAAaikDADcDACADIAEpA1g3AwBBAgshBQJ/AkACQAJAIAItAIABQQFrDgIBAgALIAIoAghFDQggA0FAayACQShqKQMANwMAIANBOGogAkEgaikDADcDACADQTBqIAJBGGopAwA3AwAgAyACKQMQNwMoQQAMAgsgAigCMEUNBiADQThqIAJByABqKQMANwMAIANBMGogAkFAaykDADcDACADIAIpAzg3AyhBAQwBCyACKAJQRQ0EIANByABqIAJB+ABqKQMANwMAIANBQGsgAkHwAGopAwA3AwAgA0E4aiACQegAaikDADcDACADQTBqIAJB4ABqKQMANwMAIAMgAikDWDcDKEECCyEEAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgBUEBaw4CAQIACyADQfgAaiADQRhqKQMANwMAIANB8ABqIANBEGopAwA3AwAgA0HoAGogA0EIaikDADcDACADIAMpAwA3A2AgBEEBaw4CAwQCCyADQfAAaiADQRBqKQMANwMAIANB6ABqIANBCGopAwA3AwAgAyADKQMANwNgIARBAWsOAgUGBAsgA0GAAWogA0EgaikDADcDACADQfgAaiADQRhqKQMANwMAIANB8ABqIANBEGopAwA3AwAgA0HoAGogA0EIaikDADcDACADIAMpAwA3A2AgBEEBaw4CBwgGCyADQaABaiADQUBrKQMANwMAIANBmAFqIANBOGopAwA3AwAgA0GQAWogA0EwaikDADcDACADIAMpAyg3A4gBIANB1ABqIANB4ABqIANBiAFqEBEMCAsgA0GYAWogA0E4aikDADcDACADQZABaiADQTBqKQMANwMAIAMgAykDKDcDiAEgA0HUAGogA0HgAGogA0GIAWoQEgwHCyADQagBaiADQcgAaikDADcDACADQaABaiADQUBrKQMANwMAIANBmAFqIANBOGopAwA3AwAgA0GQAWogA0EwaikDADcDACADIAMpAyg3A4gBIANB1ABqIANB4ABqIANBiAFqEFMMBgsgA0GgAWogA0FAaykDADcDACADQZgBaiADQThqKQMANwMAIANBkAFqIANBMGopAwA3AwAgAyADKQMoNwOIASADQdQAaiADQYgBaiADQeAAahASDAULIANBmAFqIANBOGopAwA3AwAgA0GQAWogA0EwaikDADcDACADIAMpAyg3A4gBIANB1ABqIANB4ABqIANBiAFqEBsMBAsgA0GoAWogA0HIAGopAwA3AwAgA0GgAWogA0FAaykDADcDACADQZgBaiADQThqKQMANwMAIANBkAFqIANBMGopAwA3AwAgAyADKQMoNwOIASADQdQAaiADQeAAaiADQYgBahBMDAMLIANBoAFqIANBQGspAwA3AwAgA0GYAWogA0E4aikDADcDACADQZABaiADQTBqKQMANwMAIAMgAykDKDcDiAEgA0HUAGogA0GIAWogA0HgAGoQUwwCCyADQZgBaiADQThqKQMANwMAIANBkAFqIANBMGopAwA3AwAgAyADKQMoNwOIASADQdQAaiADQYgBaiADQeAAahBMDAELIANBqAFqIANByABqKQMANwMAIANBoAFqIANBQGspAwA3AwAgA0GYAWogA0E4aikDADcDACADQZABaiADQTBqKQMANwMAIAMgAykDKDcDiAEgA0HUAGogA0HgAGogA0GIAWoQEwsgAygCWCEEIAMoAlQhBiADKAJcIQUgAiACKAIAQQFrNgIAIAEgASgCAEEBazYCACAFQQR0IQICQCAFIAZB/////wBxIgFPBEAgBCEBDAELIAFBBHQhBiAFRQRAQQghASAEIAZBCBDDAQwBCyAEIAZBCCACELUBIgFFDQMLIAMgATYCjAEgAyABNgKIASADIAU2ApABIAMgASACajYClAEgA0HgAGogA0GIAWoQUCADKAJoIgEgAygCYEkEQCMAQSBrIgIkAAJAAkAgASADQeAAaiIEKAIAIgVNBEAgBQRAIAQoAgQhBiAFQQJ0IQUCQCABRQRAQQQhByAGIAVBBBDDAQwBCyAGIAVBBCABQQJ0IgUQtQEiB0UNAwsgBCABNgIAIAQgBzYCBAsgAkEgaiQADAILIAJBADYCGCACQQE2AgwgAkHIg8AANgIIIAJCBDcCECACQQhqQZyEwAAQlQEAC0EEIAUQtAEACyADKAJoIQELIAMoAmQhAiAAIAE2AgQgACACNgIAIANBsAFqJAAPCxDLAQALEMwBAAtBCCACELQBAAtB6JfAABDIAQALQdiXwAAQyAEAC0HIl8AAEMgBAAtB6JfAABDIAQALQdiXwAAQyAEAC0HIl8AAEMgBAAuhMAMgfwR8AX4jAEEwayILJAACQAJAAkACQAJAIAG9IiZCIIinIgJB/////wdxIgVB+9S9gARPBEAgBUG8jPGABE8EQCALQf////8HAn8CQCAFQfvD5IkETwRAIAVB//+//wdLDQUgJkL/////////B4NCgICAgICAgLDBAIS/IgFEAAAAAAAA4MFmIQIgAZlEAAAAAAAA4EFjRQ0BIAGqDAILAkAgBUEUdiIFIAEgAUSDyMltMF/kP6JEAAAAAAAAOEOgRAAAAAAAADjDoCIjRAAAQFT7Ifm/oqAiASAjRDFjYhphtNA9oiIloSIkvUI0iKdB/w9xa0ERSA0AIAUgASAjRAAAYBphtNA9oiIkoSIiICNEc3ADLooZozuiIAEgIqEgJKGhIiWhIiS9QjSIp0H/D3FrQTJIBEAgIiEBDAELICIgI0QAAAAuihmjO6IiJKEiASAjRMFJICWag3s5oiAiIAGhICShoSIloSEkCyAAICQ5AwAgACABICShICWhOQMQICNEAAAAAAAA4MFmIQUgAEH/////BwJ/ICOZRAAAAAAAAOBBYwRAICOqDAELQYCAgIB4C0GAgICAeCAFGyAjRAAAwP///99BZBtBACAjICNhGzYCCAwIC0GAgICAeAtBgICAgHggAhsgAUQAAMD////fQWQbQQAgASABYRu3IiI5AwAgASAioUQAAAAAAABwQaIiAUQAAAAAAADgwWYhAiALQf////8HAn8gAZlEAAAAAAAA4EFjBEAgAaoMAQtBgICAgHgLQYCAgIB4IAIbIAFEAADA////30FkG0EAIAEgAWEbIgK3IiI5AwggCyABICKhRAAAAAAAAHBBoiIBOQMQIAtCADcDKCALQgA3AyAgC0IANwMYQQNBAkEBIAIbIAFEAAAAAAAAAABiGyEDIAtBGGohEyAFQRR2QZYIayEOIwBBsARrIgQkACAEQgA3A5gBIARCADcDkAEgBEIANwOIASAEQgA3A4ABIARCADcDeCAE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IQMDQCABIANBGGorAwCgIANBEGorAwCgIANBCGorAwCgIAMrAwCgIQEgA0EgayEDIAJBA0cgAkEEayECDQALCyATIAGaIAEgDRs5AwAgBCsDoAEgAaEhAQJAIAVFDQBBASEDA0AgASAEQaABaiADQQN0aisDAKAhASADIAVPDQEgAyADIAVJaiIDIAVNDQALCyATIAGaIAEgDRs5AwggBEGwBGokACAQQQdxIQUgJkIAWQRAIAAgBTYCCCAAIAsrAyA5AxAgACALKwMYOQMADAcLIABBACAFazYCCCAAIAsrAyCaOQMQIAAgCysDGJo5AwAMBgsgBUG9+9eABE8EQCAFQfvD5IAERgRAAkAgASABRIPIyW0wX+Q/okQAAAAAAAA4Q6BEAAAAAAAAOMOgIiNEAABAVPsh+b+ioCIBICNEMWNiGmG00D2iIiWhIiS9QoCAgICAgID4/wCDQv////////+HP1YNACABICNEAABgGmG00D2iIiShIiIgI0RzcAMuihmjO6IgASAioSAkoaEiJaEiJL1CgICAgICAgID/AINC//////////88VgRAICIhAQwBCyAiICNEAAAALooZozuiIiShIgEgI0TBSSAlmoN7OaIgIiABoSAkoaEiJaEhJAsgACAkOQMAIAAgASAkoSAloTkDECAjRAAAAAAAAODBZiEFIABB/////wcCfyAjmUQAAAAAAADgQWMEQCAjqgwBC0GAgICAeAtBgICAgHggBRsgI0QAAMD////fQWQbQQAgIyAjYRs2AggMBwsgJkIAWQRAIABBBDYCCCAAIAFEAABAVPshGcCgIgFEMWNiGmG08L2gIiI5AwAgACABICKhRDFjYhphtPC9oDkDEAwHCyAAQXw2AgggACABRAAAQFT7IRlAoCIBRDFjYhphtPA9oCIiOQMAIAAgASAioUQxY2IaYbTwPaA5AxAMBgsgBUH8ssuABEYNBCAmQgBZBEAgAEEDNgIIIAAgAUQAADB/fNkSwKAiAUTKlJOnkQ7pvaAiIjkDACAAIAEgIqFEypSTp5EO6b2gOQMQDAYLIABBfTYCCCAAIAFEAAAwf3zZEkCgIgFEypSTp5EO6T2gIiI5AwAgACABICKhRMqUk6eRDuk9oDkDEAwFCyACQf//P3FB+8MkRg0CIAVB/bKLgARPBEAgJkIAWQRAIABBAjYCCCAAIAFEAABAVPshCcCgIgFEMWNiGmG04L2gIiI5AwAgACABICKhRDFjYhphtOC9oDkDEAwGCyAAQX42AgggACABRAAAQFT7IQlAoCIBRDFjYhphtOA9oCIiOQMAIAAgASAioUQxY2IaYbTgPaA5AxAMBQsgJkIAWQ0BIABBfzYCCCAAIAFEAABAVPsh+T+gIgFEMWNiGmG00D2gIiI5AwAgACABICKhRDFjYhphtNA9oDkDEAwECyAAQQA2AgggACABIAGhIgE5AxAgACABOQMADAMLIABBATYCCCAAIAFEAABAVPsh+b+gIgFEMWNiGmG00L2gIiI5AwAgACABICKhRDFjYhphtNC9oDkDEAwCCwJAIAVBFHYiBSABIAFEg8jJbTBf5D+iRAAAAAAAADhDoEQAAAAAAAA4w6AiI0QAAEBU+yH5v6KgIgEgI0QxY2IaYbTQPaIiJaEiJL1CNIinQf8PcWtBEUgNACAFIAEgI0QAAGAaYbTQPaIiJKEiIiAjRHNwAy6KGaM7oiABICKhICShoSIloSIkvUI0iKdB/w9xa0EySARAICIhAQwBCyAiICNEAAAALooZozuiIiShIgEgI0TBSSAlmoN7OaIgIiABoSAkoaEiJaEhJAsgACAkOQMAIAAgASAkoSAloTkDECAjRAAAAAAAAODBZiEFIABB/////wcCfyAjmUQAAAAAAADgQWMEQCAjqgwBC0GAgICAeAtBgICAgHggBRsgI0QAAMD////fQWQbQQAgIyAjYRs2AggMAQsCQCABIAFEg8jJbTBf5D+iRAAAAAAAADhDoEQAAAAAAAA4w6AiI0QAAEBU+yH5v6KgIgEgI0QxY2IaYbTQPaIiJaEiJL1CgICAgICAgPj/AINC/////////4c/Vg0AIAEgI0QAAGAaYbTQPaIiJKEiIiAjRHNwAy6KGaM7oiABICKhICShoSIloSIkvUKAgICAgICAgP8Ag0L//////////zxWBEAgIiEBDAELICIgI0QAAAAuihmjO6IiJKEiASAjRMFJICWag3s5oiAiIAGhICShoSIloSEkCyAAICQ5AwAgACABICShICWhOQMQICNEAAAAAAAA4MFmIQUgAEH/////BwJ/ICOZRAAAAAAAAOBBYwRAICOqDAELQYCAgIB4C0GAgICAeCAFGyAjRAAAwP///99BZBtB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IgI2AgAgAg0AIAFB6ABBCBDDAQsgACAAKAIAQQFqIgE2AgAgAUUNASAAEC4gABAcIgENBUGokcAAEMgBAAtBiJDAABCIAQALAAtBuJDAABCJAQALQaiQwAAQiAEAC0GYkMAAEIkBAAsgBUHQAGokACABC9UPAwd/CnwBfiMAQZABayICJAACQAJAAkACQAJAAkACQAJAIABFDQAgACgCACIDQX9GDQEgACADQQFqNgIAIAFFDQAgASgCACIDQX9GDQEgASADQQFqNgIAAn8CQAJAAkAgAC0AgAFBAWsOAgECAAsgACgCCEUNCiACQSBqIABBKGopAwA3AwAgAkEYaiAAQSBqKQMANwMAIAJBEGogAEEYaikDADcDACACIAApAxA3AwhBAAwCCyAAKAIwRQ0IIAJBGGogAEHIAGopAwA3AwAgAkEQaiAAQUBrKQMANwMAIAIgACkDODcDCEEBDAELIAAoAlBFDQYgAkEoaiAAQfgAaikDADcDACACQSBqIABB8ABqKQMANwMAIAJBGGogAEHoAGopAwA3AwAgAkEQaiAAQeAAaikDADcDACACIAApA1g3AwhBAgshBwJ/AkACQAJAIAEtAIABQQFrDgIBAgALIAEoAghFDQcgAUEgaiEDIAFBGGohBSABQRBqIQQgASsDKCELQQAMAgsgASgCMEUNBSABQcgAaiEDIAFBQGshBSABQThqIQRBAQwBCyABKAJQRQ0DIAFB6ABqIQMgAUHgAGohBSABQdgAaiEEIAEpA3ghEyABKwNwIQtBAgshBiAEKwMAIQkgBSsDACEKIAMrAwAhDAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgB0EBaw4CAQIACyACQcgAaiACQSBqKQMANwMAIAJBQGsgAkEYaikDADcDACACQThqIAJBEGopAwA3AwAgAiACKQMINwMwIAZBAWsOAgMEAgsgAkFAayACQRhqKQMANwMAIAJBOGogAkEQaikDADcDACACIAIpAwg3AzAgBkEBaw4CBQYECyACQdAAaiACQShqKQMANwMAIAJByABqIAJBIGopAwA3AwAgAkFAayACQRhqKQMANwMAIAJBOGogAkEQaikDADcDACACIAIpAwg3AzAgBkEBaw4CBwgGC0EAIQMgAisDQCIPIAIrAzAiDaEiECAKIAIrAzgiDqGiIAkg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AkAgBA0AIANBJGoQhQEgA0EoahCFASADQQRqIgQgBCgCAEEBayIENgIAIAQNACADQTBBCBDDAQsgACgCCEEBagVBAAs2AgggACAFNgIkCyAAECkiAA0EDAMLQYiUwAAQiAEACwALQZiUwAAQiQEAC0HIj8AAEMgBAAsgAAvmCAIGfxh8IwBBIGsiAyQAIANBADYCFCADQoCAgICAATcCDAJAIAErAxAiESABKwMAIg+hIgkgAisDCCINIAErAwgiEKEiE6IgASsDGCIUIBChIgogAisDACISIA+hIhWioSIWIAkgAisDGCIXIBChIhuiIAogAisDECIYIA+hIhyioSIZokS7vdfZ33zbPWNFDQAgECANoSIdIBggEqEiC6IgDyASoSIeIBcgDaEiDKKhIg4gFCANoSIfIAuiIBEgEqEiICAMoqEiGqJEu73X2d982z1jRQ0AQQAhAQJAIA5Eu73X2d98271jIA5Eu73X2d982z1kcg0AIB4gC6IgHSAMoqAiDkS7vdfZ33zbvWZFIA4gCyALoiAMIAyioGVFcg0AIANBDGoQXiADKAIQIgEgEDkDCCABIA85AwBBASEBIANBATYCFAsCQCAaRLu919nffNu9YyAaRLu919nffNs9ZHINACAgIAuiIB8gDKKgIg5Eu73X2d98271mRSAOIAsgC6IgDCAMoqBlRXINACADKAIMIAFGBEAgA0EMahBeCyADKAIQIAFBBHRqIgIgFDkDCCACIBE5AwAgAyABQQFqIgE2AhQLAkAgFkS7vdfZ33zbvWMgFkS7vdfZ33zbPWRyDQAgCSAVoiAKIBOioCIRRLu919nffNu9ZkUgESAJIAmiIAogCqKgZUVyDQAgAygCDCABRgRAIANBDGoQXgsgAygCECABQQR0aiICIA05AwggAiASOQMAIAMgAUEBaiIBNgIUCwJAAkACQCAZRLu919nffNu9YyAZRLu919nffNs9ZHINACAJIByiIAogG6KgIg1Eu73X2d98271mRSANIAkgCaIgCiAKoqBlRXINACADKAIMIAFGBEAgA0EMahBeCyADKAIQIAFBBHRqIgIgFzkDCCACIBg5AwAgAyABQQFqIgE2AhQMAQsgAQ0AIBAgCiAVIAyiIBMgC6KhIAkgDKIgCiALoqGjIgqioCELIAMoAgxFBEAgA0EMahBeCyADKAIQ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aikDADcDACACQRhqIARBCGopAwA3AwAgAiAEKQMANwMQIAEpAwBQRQ0BIAJBQGsiACADQQhqKQMANwMAIAJB0ABqIANBGGopAwA3AwAgAkHIAGogA0EQaikDADcDACACIAMpAwA3AzggAisDECACKwM4oSIFIAWiIAIrAxggACsDAKEiBSAFoqCfRLu919nffNs9YwRAQQAhACACKwMgIAIrA0ihIgUgBaIgAisDKCACKwNQoSIFIAWioJ9Eu73X2d982z1jDQULIAJBEGogAkE4aiACEB0hAAwECyACQTBqIARBIGopAwA3AwAgAkEoaiAEQRhqKQMANwMAIAJBIGogBEEQaikDADcDACACQRhqIARBCGopAwA3AwAgAiAEKQMANwMQIAEpAwBQDQIgAkFAayIAIANBCGopAwA3AwAgAkHYAGogA0EgaikDADcDACACQdAAaiADQRhqKQMANwMAIAJByABqIANBEGopAwA3AwAgAiADKQMANwM4IAIrAxAiCCACKwM4IgyhIgUgBaIgAisDGCINIAArAwAiDqEiBSAFoqCfRLu919nffNs9Y0UNASACKwMgIgUgAisDSCIHoZlEu73X2d982z1jRQ0BIAIrA1AiBhDXASEJIAIrAygiChDXASELIAYQ1gEhBiAIIAUgChDWAaKgIAwgByAGoqChIgYgBqIgDSAFIAuioCAOIAcgCaKgoSIGIAaioJ9Eu73X2d982z1jRQ0BIAIrA1giBhDXASEJIAIrAzAiChDXASELIAYQ1gEhBkEAIQAgCCAFIAoQ1gGioCAMIAcgBqKgoSIIIAiiIA0gBSALoqAgDiAHIAmioKEiBSAFoqCfRLu919nffNs9Y0UNAQwDCyACQdgAaiADQSBqKQMANwMAIAJB0ABqIANBGGopAwA3AwAgAkHIAGogA0EQaikDADcDACACQUBrIANBCGopAwA3AwAgAiADKQMANwM4IAQgAkE4aiACEEIhAAwCCyACQRBqIAJBOGogAhA6IQAMAQsgAkEQaiADIAIQQyEACyACQeAAaiQAIAALmwgBBX8jAEHQAGsiBiQAAkACQAJAAkACQAJAAkACQAJAAkAgAEUEQCAGQQRqIAFByAAQ0wEaQam2wAAtAAAaQegAQQgQugEiAEUNASAAQQA2AgggAEKBgICAEDcDACAAQQxqIAZBzAAQ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AWogADYCAAsgAEGAAkkNAiABIAAQS0EAIQFByLrAAEHIusAAKAIAQQFrIgA2AgAgAA0BQZC4wAAoAgAiAARAA0AgAUEBaiEBIAAoAggiAA0ACwtByLrAAEH/HyABIAFB/x9NGzYCAA8LQbS6wAAgATYCAEGsusAAQay6wAAoAgAgAGoiADYCACABIABBAXI2AgRBsLrAACgCACABRgRAQai6wABBADYCAEGwusAAQQA2AgALIABBwLrAACgCACIDTQ0AQbS6wAAoAgAiAkUNAEEAIQECQEGsusAAKAIAIgRBKUkNAEGIuMAAIQADQCACIAAoAgAiBU8EQCAFIAAoAgRqIAJLDQILIAAoAggiAA0ACwtBkLjAACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0HIusAAQf8fIAEgAUH/H00bNgIAIAMgBE8NAEHAusAAQX82AgALDwsgAEF4cUGYuMAAaiECAn9BoLrAACgCACIDQQEgAEEDdnQiAHFFBEBBoLrAACAAIANyNgIAIAIMAQsgAigCCAshACACIAE2AgggACABNgIMIAEgAjYCDCABIAA2AggPC0GwusAAIAE2AgBBqLrAAEGousAAKAIAIABqIgA2AgAgASAAQQFyNgIEIAAgAWogADYCAAv3BAELfyMAQSBrIgUkAAJAAkACQAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgACQCABKAIMIgNFBEBBACEDQQghBwwBCyADQQR0IQggA0H///8/SwRADAYLIAEoAgghBEGptsAALQAAGkEIIQIgCEEIELoBIgZFDQUgBiAEIAgQ0wEhCkGptsAALQAAGiAIQQgQugEiB0UNAyADQQNxIQsgA0EETwRAIANBBHRBwP///wdxIQxBACECA0AgAiAHaiIEIAIgCmoiBisDADkDACAEQQhqIAZBCGorAwA5AwAgBEEYaiAGQRhqKwMAOQMAIARBEGogBkEQaisDADkDACAEQShqIAZBKGorAwA5AwAgBEEgaiAGQSBqKwMAOQMAIARBOGogBkE4aisDADkDACAEQTBqIAZBMGorAwA5AwAgCUEEaiEJIAwgAkFAayICRw0ACwsgCwRAIAogCUEEdCICaiEEIAIgB2ohAgNAIAIgBCsDADkDACACQQhqIARBCGorAwA5AwAgBEEQaiEEIAJBEGohAiALQQFrIgsNAAsLIAogCEEIEMMBCyABIAEoAgBBAWs2AgAgBSAHNgIIIAUgBzYCBCAFIAM2AgwgBSAHIANBBHRqNgIQIAVBFGogBUEEahBQAkAgBSgCFCIDIAUoAhwiAU0EQCAFKAIYIQIMAQsgA0ECdCEDIAUoAhghBCABRQRAQQQhAiAEIANBBBDDAQwBCyAEIANBBCABQQJ0IgMQtQEiAkUNBAsgACABNgIEIAAgAjYCACAFQSBqJAAPCxDLAQALEMwBAAtBCCAIELQBAAtBBCADELQBAAsgAiAIELQBAAvfBAEKfyMAQSBrIgUkAAJAAkACQAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgACQCABKAIYIgNFBEBBACEDQQghBwwBCyADQQV0IQggA0H///8fSwRADAYLIAEoAhQhAkGptsAALQAAGkEIIQQgCEEIELoBIgZFDQUgBiACIAgQ0wEhCkGptsAALQAAGiAIQQgQugEiB0UNAyADQQFHBEAgA0H+//8fcSELQQAhBANAIAQgB2oiAiAEIApqIgYrAwA5AwAgAkEYaiAGQRhqKwMAOQMAIAJBEGogBkEQaisDADkDACACQQhqIAZBCGorAwA5AwAgAkE4aiAGQThqKwMAOQMAIAJBMGogBkEwaisDADkDACACQShqIAZBKGorAwA5AwAgAkEgaiAGQSBqKwMAOQMAIARBQGshBCALIAlBAmoiCUcNAAsLIANBAXEEQCAHIAlBBXQiAmoiBCACIApqIgIrAxg5AxggBCACKwMQOQMQIAQgAisDCDkDCCAEIAIrAwA5AwALIAogCEEIEMMBCyABIAEoAgBBAWs2AgAgBSAHNgIIIAUgBzYCBCAFIAM2AgwgBSAHIANBBXRqNgIQIAVBFGogBUEEahA3AkAgBSgCFCIDIAUoAhwiAU0EQCAFKAIYIQMMAQsgA0ECdCEEIAUoAhghAiABRQRAQQQhAyACIARBBBDDAQwBCyACIARBBCABQQJ0IgQQtQEiA0UNBAsgACABNgIEIAAgAzYCACAFQSBqJAAPCxDLAQALEMwBAAtBCCAIELQBAAtBBCAEELQBAAsgBCAIELQBAAvuBAEKfyMAQTBrIgMkACADQQM6ACwgA0EgNgIcIANBADYCKCADIAE2AiQgAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAigCDCIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQQADQQLIAEoAgAgA0EMaiABKAIEEQAADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAigCFCIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRBAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQRBACEJQQAhBgJAAkACQCABQQhqKAIAQQFrDgIAAgELIARBA3QgCGoiDCgCBA0BIAwoAgAhBAtBASEGCyADIAQ2AhAgAyAGNgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBA0BIAYoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAAANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQQARQ0BC0EBDAELQQALIANBMGokAAuwBAIBfwN+IwBB4ABrIgQkAAJAAkAgAEECTQRAIAEEQCABKAIADQIgBEEYaiABQSBqKQMANwMAIARBEGogAUEYaikDADcDACAEQQhqIAFBEGopAwA3AwAgBCABKQMINwMAIAFBKEEIEMMBQgEhBgsgAgRAIAIoAgANAiAEQTBqIAJBGGopAwA3AwAgBEEoaiACQRBqKQMANwMAIAQgAikDCDcDICACQSBBCBDDAUIBIQULIAMEfiADKAIADQIgBEHYAGogA0EoaikDADcDACAEQdAAaiADQSBqKQMANwMAIARByABqIANBGGopAwA3AwAgBEFAayADQRBqKQMANwMAIAQgAykDCDcDOCADQTBBCBDDAUIBBUIACyEHQam2wAAtAAAaQYgBQQgQugEiAUUNAiABIAY3AwggAUEANgIAIAEgBCkDADcDECABIAU3AzAgASAEKQMgNwM4IAEgBzcDUCABQRhqIARBCGopAwA3AwAgAUEgaiAEQRBqKQMANwMAIAFBKGogBEEYaikDADcDACABQUBrIARBKGopAwA3AwAgAUHIAGogBEEwaikDADcDACABIAA6AIABIAFB+ABqIARB2ABqKQMANwMAIAFB8ABqIARB0ABqKQMANwMAIAFB6ABqIARByABqKQMANwMAIAFB4ABqIARBQGspAwA3AwAgASAEKQM4NwNYIARB4ABqJAAgAQ8LQfiXwABBGRDKAQALEMwBAAtBCEGIARDRAQALhQwCFX8EfCMAQdAAayIFJAAgBUEIaiAAIAEQOCAFKAIMIgxBBHQhDiAFKAIIIRECQAJAAkAgDEUEQEEIIQAMAQtBqbbAAC0AABogDkEIELoBIgBFDQEgDEEDcSECIAxBBE8EQCAMQXxxIQoDQCADIBFqIgErAwAhFyAAIANqIgRBCGogAUEIaisDADkDACAEIBc5AwAgAUEQaisDACEXIARBGGogAUEYaisDADkDACAEQRBqIBc5AwAgAUEgaisDACEXIARBKGogAUEoaisDADkDACAEQSBqIBc5AwAgAUEwaisDACEXIARBOGogAUE4aisDADkDACAEQTBqIBc5AwAgA0FAayEDIAogCEEEaiIIRw0ACwsgAkUNACAIQQR0IQEDQCABIBFqIgQrAwAhFyAAIAFqIgNBCGogBEEIaisDADkDACADIBc5AwAgAUEQaiEBIAJBAWsiAg0ACwsgBUIANwJIIAVCATcCQCAFIAA2AjggBSAANgIwIAUgADYCKCAFIAAgDmoiATYCPCAFIAE2AjQgBSABNgIsIAVBHGohDyMAQRBrIgokAAJAAkACQAJAAkAgBUEoaiICKAIAIgcgAigCBCIQRg0AIAIgB0EQaiINNgIAIAIoAhgiA0UEQCACKAIIIQQgAigCECIBIAIoAhQiCEcNAiACIAQ2AhAgAiACKAIMIgg2AhQgCCAEIgFGDQEMAgsgAkEANgIYIAIoAhAiASACKAIUIgggAWtBBHYiCSADIAMgCUsbIgZBBHRqIQEgAigCCCEEAkAgAyAJTQ0AIAMgBmsiA0UNACACIAIoAgwiCDYCFCAIIARrQQR2IQYCQCAEIAhGBEAgAyAGTSEJIAMgBiADIAMgBksbIgFrIQMMAQsDQCADIAZNIQkgAyAGIAMgAyAGSxsiAWshAyAJDQEgAw0ACwsgAiAEIAFBBHRqIgE2AhAgCQ0AIAMNAQsgASAIRw0BIAIgBDYCECACIAIoAgwiCDYCFCAIIAQiAUcNAQsgD0EANgIIIA9CgICAgIABNwIADAELIAIgAUEQaiIDNgIQQQAhCUEEIBAgDWtBBHYiBkF/QQAgAigCDCIUIARHGyISIAYgEkkbIgJBAWogAkEDSRsiBkEFdCELIAZB////H0sNASAHKwMIIRcgBysDACEYIAErAwghGSABKwMAIRpBqbbAAC0AABpBCCEJIAtBCBC6ASICRQ0BIAIgGTkDGCACIBo5AxAgAiAXOQMIIAIgGDkDACAKQQE2AgwgCiACNgIIIAogBjYCBAJAIA0gEEYNACAQIAdrQSBrIQFBOCEJQQEhBgNAIAMgCEciB0UgBCAURnENASADIAQgBxsiAysDCCEXIAMrAwAhGCANKwMIIRkgDSsDACEaIAggFCAHGyEIIANBEGohAyAKKAIEIAZGBEAjAEEgayICJAAgBiABQQR2IgcgEiAHIBJJG0EBaiAGaiILSwRAQQBBABC0AQALQQQgCkEEaiIHKAIAIhVBAXQiEyALIAsgE0kbIgsgC0EETRsiE0EFdCEWIAtBgICAIElBA3QhCyACIBUEfyACIBVBBXQ2AhwgAiAHKAIENgIUQQgFQQALNgIYIAJBCGogCyAWIAJBFGoQZiACKAIIBEAgAigCDCACKAIQELQBAAsgAigCDCELIAcgEzYCACAHIAs2AgQgAkEgaiQAIAooAgghAgsgAiAJaiIHIBc5AwAgB0EIayAYOQMAIAdBEGsgGTkDACAHQRhrIBo5AwAgCiAGQQFqIgY2AgwgAUEQayEBIAlBIGohCSANQRBqIg0gEEcNAAsLIA8gCikCBDcCACAPQQhqIApBDGooAgA2AgALIApBEGokAAwBCyAJIAsQtAEACyAFIAw2AhggBSAANgIUIAUgDDYCECAMBEAgESAOQQgQwwELQam2wAAtAAAaQRxBBBC6ASIARQ0BIABBADYCACAAIAUpAhA3AgQgAEEMaiAFQRhqKQIANwIAIABBFGogBUEgaikCADcCACAFQdAAaiQAIAAPC0EIIA4QtAEAC0EEQRwQ0QEAC+UUAg9/CHwjAEEwayIJJAACQAJAAkACQAJAIABFDQAgACgCAA0BIABBfzYCACABRQ0AIAEoAgAiAkF/Rg0BIABBCGohBiABIAJBAWo2AgACQAJAAkACQCABLQCAAUEBaw4CAQIACyABKAIIRQ0HIAErAyghESABKwMgIRIgASsDGCETIAErAxAhFCAAKAI4IgMgACgCMEYEQCAAQTBqEF8LIAAoAjQgA0EwbGoiAiAROQMgIAIgEjkDGCACIBM5AxAgAiAUOQMIIAJCADcDACAAIANBAWo2AjggACgCRCIFIAAoAjxGBEAgAEE8ahBfCyAAKAJAIAVBMGxqIgIgESATAn8gFCASoZlEu73X2d982z1jRQRAQQAgEiAUZEUNARpBAQwBC0EAIBMgEaGZRLu919nffNs9Yw0AGkEBIBEgE2NFDQAaQQALIgMbOQMgIAIgEiAUIAMbOQMYIAIgEyARIAMbOQMQIAIgFCASIAMbOQMIIAJCADcDACAAIAVBAWo2AkQMAgsgASgCMEUNBSABKwM4IREgASsDQCESIAkgASsDSDkDGCAJIBI5AxAgCSAROQMIIAlBCGoiAisDECERIAIrAwghEiACKwMAIRMgBigCMCIDIAYoAihGBEAgBkEoahBfCyAGKAIsIANBMGxqIgJCmNqQorW/yIzAADcDKCACQgA3AyAgAiAROQMYIAIgEjkDECACIBM5AwggAkIBNwMAIAYgA0EBajYCMCAGQTRqIQUgBigCPCIDIAYoAjRGBEAgBRBfCyAGKAI4IANBMGxqIgJCmNqQorW/yITAADcDKCACQgA3AyAgAiAROQMYIAIgEjkDECACIBM5AwggAkIBNwMAIAYgA0EBaiICNgI8IAYoAjQgAkYEQCAFEF8LIAYoAjggAkEwbGoiAkKY2pCitb/IjMAANwMoIAJCmNqQorW/yITAADcDICACIBE5AxggAiASOQMQIAIgEzkDCCACQgE3AwAgBiADQQJqNgI8DAELIAEoAlBFDQMgASsDWCERIAErA2AhEiABKwNoIRMgASsDcCEUIAkgASkDeDcDKCAJIBQ5AyAgCSATOQMYIAkgEjkDECAJIBE5AwgjAEHgAGsiAiQAIAlBCGoiAysDECEVIAMrAwghFiADKwMAIRcgAysDICESIAMrAxgiGCERA0AgESITRBgtRFT7ISnAoCIRmUS7vdfZ33zbPWNFIBNEGC1EVPshKUBkcQ0ACyASIREDQCARIhREGC1EVPshKcCgIhGZRLu919nffNs9Y0UgFEQYLURU+yEpQGRxDQALIAIgFTkDECACIBY5AwggAiAXOQMAIAJEGC1EVPshGUAgFCATIBShmUS7vdfZ33zbPWMiAxs5AyAgAkQAAAAAAAAAACATIAMbOQMYA0AgGCIRRBgtRFT7ISnAoCIYmUS7vdfZ33zbPWNFIBFEGC1EVPshKUBkcQ0ACwNAIBIiE0QYLURU+yEpwKAiEplEu73X2d982z1jRSATRBgtRFT7ISlAZHENAAtEAAAAAAAAAAAgESARIBOhmUS7vdfZ33zbPWMiCBshESAGKAIwIgUgBigCKEYEQCAGQShqEF8LIAYoAiwgBUEwbGoiA0QYLURU+yEZQCATIAgbOQMoIAMgETkDICADIBU5AxggAyAWOQMQIAMgFzkDCCADQgE3AwAgBiAFQQFqNgIwIAJBLGohDUEAIQVBACEDRAAAAAAAAAAAIREjAEEgayIEJAAgBEEANgIQIARCgICAgIABNwIIIARBADYCHCAEQoCAgICAATcCFAJAIAIrAyAiE0QAAAAAAAAAAGRFRAAAAAAAAAAAIBOhmUS7vdfZ33zbPWNyRQRAIAIrAxghEgNAAkAgBUEBcQRAQQEhBQwBC0EAIQUgESASZEUNACAEKAIUIANGBEAgBEEUahBiCyAEKAIYIANBA3RqIBFEGC1EVPshCcCgIhQ5AwBBASEFIAQgA0EBaiIINgIcIBIgFKGZRLu919nffNs9YwRAIAghAwwBCyAEKAIUIAhGBEAgBEEUahBiCyAEKAIYIAhBA3RqIBI5AwAgBCADQQJqIgM2AhwLIBEgEqGZRLu919nffNs9YyARIBJkcgRAIAQoAhQgA0YEQCAEQRRqEGILIAQoAhggA0EDdGogETkDACAEIANBAWoiAzYCHAsgEUQYLURU+yEJQKAiESAToZlEu73X2d982z1jRSARIBNjcQ0ACyADIAQoAhRHDQELIARBFGoQYgsgBCgCGCADQQN0aiATOQMAIAQgA0EBajYCHAJAAkACQCADBEBBACEFA0AgBSAEKAIcIgdPDQIgBUEBaiIIIAdPDQMgBCgCGCIHIAhBA3RqKwMAIRMgByAFQQN0aisDACESA0AgEiIRRBgtRFT7ISnAoCISmUS7vdfZ33zbPWNFIBFEGC1EVPshKUBkcQ0ACwNAIBMiEkQYLURU+yEpwKAiE5lEu73X2d982z1jRSASRBgtRFT7ISlAZHENAAtEAAAAAAAAAAAgESARIBKhmUS7vdfZ33zbPWMiDxshESAEKAIIIAVGBEAjAEEgayIHJAAgBEEIaiIMKAIAIgtBAWoiCkUEQEEAQQAQtAEAC0EEIAtBAXQiDiAKIAogDkkbIgogCkEETRsiDkEobCEQIApBtObMGUlBA3QhCiAHIAsEfyAHIAtBKGw2AhwgByAMKAIENgIUQQgFQQALNgIYIAdBCGogCiAQIAdBFGoQZiAHKAIIBEAgBygCDCAHKAIQELQBAAsgBygCDCELIAwgDjYCACAMIAs2AgQgB0EgaiQACyAEKAIMIAVBKGxqIgUgAikDADcDACAFRBgtRFT7IRlAIBIgDxs5AyAgBSAROQMYIAVBCGogAkEIaikDADcDACAFQRBqIAJBEGopAwA3AwAgBCAINgIQIAgiBSADRw0ACwsgDSAEKQIINwIAIA1BCGogBEEQaigCADYCACAEKAIUIgMEQCAEKAIYIANBA3RBCBDDAQsgBEEgaiQADAILIAUgB0GQmcAAEH0ACyAIIAdBoJnAABB9AAsgAigCMCEFIAIoAiwhDCACKAI0IgMEQCADQShsIQsgBkE0aiENIAYoAjwiBEEwbCEHIAUhAwNAIAJB2ABqIgogA0EgaikDADcDACACQdAAaiIPIANBGGopAwA3AwAgAkHIAGoiDiADQRBqKQMANwMAIAJBQGsiECADQQhqKQMANwMAIAIgAykDADcDOCANKAIAIARGBEAgDRBfCyADQShqIQMgBigCOCAHaiIIQgE3AwAgCEEIaiACKQM4NwMAIAhBEGogECkDADcDACAIQRhqIA4pAwA3AwAgCEEgaiAPKQMANwMAIAhBKGogCikDADcDACAGIARBAWoiBDYCPCAHQTBqIQcgC0EoayILDQALCyAMBEAgBSAMQShsQQgQwwELIAJB4ABqJAALIAEgASgCAEEBazYCACAAQQA2AgAgCUEwaiQADwsQywEACxDMAQALQeiXwAAQyAEAC0HYl8AAEMgBAAtByJfAABDIAQALmgQCA3wHfyABIAJBAWtLBEAgASACSwRAIAJBBHQhCwNAIAAgAkEEdGoiCEEIaiIKKwMAIQUCQAJAAkAgCCsDACIEIAAgAkEBaiIMQQR0aiIGQSBrIgcrAwAiA6GZRLu919nffNs9Y0UEQCAEIARiIAMgA2JyDQFBAEF/IAMgBGUiBhtBAUECIAYbIAMgBGYbIQYMAwsgBSAFYiAGQRhrKwMAIgMgA2JyDQFBAEF/IAMgBWUiBhtBAUECIAYbIAMgBWYbIQYMAgtBhIPAABDIAQALQZSDwAAQyAEACyAGQX9GBEAgCCAHKQMANwMAIAogB0EIaikDADcDAAJAIAJBAUYNAEEBIQYgCyEIA0ACQAJAAkAgBCAAIAhqIgdBIGsiCisDACIDoZlEu73X2d982z1jRQRAIAQgBGIgAyADYnINAUEAQX8gAyAEZSIJG0EBQQIgCRsgAyAEZhshCQwDCyAFIAViIAdBGGsrAwAiAyADYnINAUEAQX8gAyAFZSIJG0EBQQIgCRsgAyAFZhshCQwCC0GEg8AAEMgBAAtBlIPAABDIAQALIAdBEGshByAJQX9HDQEgByAKKQMANwMAIAdBCGogCkEIaikDADcDACAIQRBrIQggAiAGQQFqIgZHDQALIAAhBwsgByAFOQMIIAcgBDkDAAsgC0EQaiELIAwiAiABRw0ACwsPC0GYgsAAQS5ByILAABCRAQALrAYCCH8EfCMAQeAAayIBJAAgACgCECECAkACQCAAKAIUIgRFBEBBCCEHDAELIARBBXQhAyAEQf///x9LDQFBqbbAAC0AABpBCCEFIANBCBC6ASIHRQ0BCyAHIAIgAxDTASEHIAFBADYCSCABQoCAgICAATcDQCABQgg3AzggAUIANwMwIAFCgICAgIABNwMoIAFBADoAJCABQQA2AiAgAUEBOgAcIAFBADYCGCABQgA3AwAgBARAIARBBXQhBSAHIQMDQCADKwMYIQkgAysDECEKIAMrAwghCyADKwMAIQwgASgCMCIGIAEoAihGBEAgAUEoahBfCyABKAIsIAZBMGxqIgIgCTkDICACIAo5AxggAiALOQMQIAIgDDkDCCACQgA3AwAgASAGQQFqNgIwIAEoAjwiCCABKAI0RgRAIAFBNGoQXwsgASgCOCAIQTBsaiICIAkgCwJ/IAwgCqGZRLu919nffNs9Y0UEQEEAIAogDGRFDQEaQQEMAQtBACALIAmhmUS7vdfZ33zbPWMNABpBASAJIAtjRQ0AGkEACyIGGzkDICACIAogDCAGGzkDGCACIAsgCSAGGzkDECACIAwgCiAGGzkDCCACQgA3AwAgASAIQQFqNgI8IANBIGohAyAFQSBrIgUNAAsLIAFB1ABqIAEQBSAAKAIIIAEoAlwgASgCVCIABEAgASgCWCAAQQR0QQgQwwELIAEoAigiAARAIAEoAiwgAEEwbEEIEMMBCyABKAI0IgAEQCABKAI4IABBMGxBCBDDAQsgASgCQCIABEAgASgCRCAAQQR0QQgQwwELAkAgASgCGCIARQ0AIAAgACgCAEEBayICNgIAIAINACAAQdwAahCHASAAQeAAahCHASAAQQRqIgIgAigCAEEBayICNgIAIAINACAAQegAQQgQwwELAkAgASgCICIARQ0AIAAgACgCAEEBayICNgIAIAINACAAQSRqEIUBIABBKGoQhQEgAEEEaiICIAIoAgBBAWsiAjYCACACDQAgAEEwQQgQwwELIAQEQCAHIARBBXRBCBDDAQsgAUHgAGokAEYPCyAFIAMQtAEAC/8DAwl/A3wBfiMAQRBrIgYkACACQQhqIQUgAUEIaiEHIAIpAwAhEQJAIAEpAwBQBEAgEVAEQCAGQQRqIAcgBRARDAILIAZBBGogByAFEFMMAQsgEVBFBEAgBkEEaiAHIAUQEwwBCyAGQQRqIAUgBxBTCyAGKAIIIQcgBigCBCEKIAYoAgwiAQRAIAcgAUEEdGohCyAAQUBrIQwgByEFA0AgBSsDACIOIANkRSAOIAOhmUS7vdfZ33zbPWNFIAUrAwgiDyAEZEVycUUEQCAAKAJIIgEgACgCQEYEQCAMEF4LIAFBBHQiAiAAKAJEaiIIIA85AwggCCAOOQMAIAAgAUEBajYCSCAAKAJEIgggAmoiAisDCCEPIAIrAwAhDgJAIAFFBEBBACECDAELA0ACQCAOIAggAUEBayINQQF2IgJBBHRqIgkrAwAiEKGZRLu919nffNs9Y0UEQCAOIBBjDQEgASECDAMLIAkrAwgiECAPYwRAIAEhAgwDCyAPIBChmUS7vdfZ33zbPWNFDQAgASECDAILIAggAUEEdGoiASAJKQMANwMAIAFBCGogCUEIaikDADcDACACIQEgDUEBSw0ACwsgCCACQQR0aiIBIA85AwggASAOOQMACyAFQRBqIgUgC0cNAAsLIAoEQCAHIApBBHRBCBDDAQsgBkEQaiQAC7kEAgl8An8jAEEgayINJAAgACsDICEGIAArAxghBCAAKwMQIQggACsDCCEJIAArAwAhCwNAIAQiBUQYLURU+yEpwKAiBJlEu73X2d982z1jRSAFRBgtRFT7ISlAZHENAAsDQCAGIgREGC1EVPshKcCgIgaZRLu919nffNs9Y0UgBEQYLURU+yEpQGRxDQALRBgtRFT7IRlAIAQgBSAEoZlEu73X2d982z1jIg4bIQREAAAAAAAAAAAgBSAOGyIFRBgtRFT7IQlAYwRAIAUgBSAEIAREGC1EVPshCUBjGyAERBgtRFT7IQnAoJlEu73X2d982z1jGyEECyAJIAggBBDXAaKgIQcgBBDWASEEIAErAxghCgJAAkAgCyAIIASioCIMIAErAxAiBqGZRLu919nffNs9Y0UEQCAKIQQgBiIFIAxkRQ0BDAILIAYhBSAKIgQgB2NFIAcgBKGZRLu919nffNs9Y3INAQsgByEEIAwhBQsgDSAFIAKgRAAAAAAAAOA/oiICOQMAIA0gCSAIIAiiIAIgC6EiBSAFoqGfIgegIgU5AwggDSAJIAehIgc5AxggDSACOQMQIAQgA6BEAAAAAAAA4D+iIQQgDSAAEDEEQCAEIAcgDUEQaiAAEDEbIQULIAErAwAiAyAGoZlEu73X2d982z1jRQRAIAErAwgiBCACIAOhIAogBKGiIAYgA6GjoCEECyANQSBqJABBAEF/QQEgBCAFZBsgBSAEoZlEu73X2d982z1jGwuHBAEEfyAARQRAQQAPCyAAKAIIIgFB/////wdPBEBB+JLAABCJAQALIAAgAUEBajYCCCAAKAIkIgEEQCABIAEoAgBBAWoiATYCAAJAAkAgAUUNACAAIAAoAghBAWs2AggCfwJAIAAoAiQiASgCCCICQf7///8HTQRAIAEgAkEBajYCCCABKAIoIgQNAUEADAILQeiSwAAQiQEACyAEIAQoAgBBAWoiAjYCACACRQ0BIAEoAghBAWshAiABKAIoCyEEIAEgAjYCCCAAIAAoAgBBAWoiAjYCACACRQ0AIAEoAggNASABQX82AgggASABKAIoIgIEfyACIAIoAgBBAWsiAzYCAAJAIAMNACACQSRqEIUBIAJBKGoQhQEgAkEEaiIDIAMoAgBBAWsiAzYCACADDQAgAkEwQQgQwwELIAEoAghBAWoFQQALNgIIIAEgADYCKCAAKAIIRQRAIABBfzYCCCAAIAAoAiQiAgR/IAIgAigCAEEBayIDNgIAAkAgAw0AIAJBJGoQhQEgAkEoahCFASACQQRqIgMgAygCAEEBayIDNgIAIAMNACACQTBBCBDDAQsgACgCCEEBagVBAAs2AgggACAENgIkIAAQLSABIAEoAgBBAWoiADYCACAARQ0BIAEQLSABDwtByJLAABCIAQALAAtB2JLAABCIAQALQbiSwAAQyAEAC4cEAQR/IABFBEBBAA8LIAAoAggiAUH/////B08EQEHIk8AAEIkBAAsgACABQQFqNgIIIAAoAigiAQRAIAEgASgCAEEBaiIBNgIAAkACQCABRQ0AIAAgACgCCEEBazYCCAJ/AkAgACgCKCIBKAIIIgJB/v///wdNBEAgASACQQFqNgIIIAEoAiQiBA0BQQAMAgtBuJPAABCJAQALIAQgBCgCAEEBaiICNgIAIAJFDQEgASgCCEEBayECIAEoAiQLIQQgASACNgIIIAAgACgCAEEBaiICNgIAIAJFDQAgASgCCA0BIAFBfzYCCCABIAEoAiQiAgR/IAIgAigCAEEBayIDNgIAAkAgAw0AIAJBJGoQhQEgAkEoahCFASACQQRqIgMgAygCAEEBayIDNgIAIAMNACACQTBBCBDDAQsgASgCCEEBagVBAAs2AgggASAANgIkIAAoAghFBEAgAEF/NgIIIAAgACgCKCICBH8gAiACKAIAQQFrIgM2AgACQCADDQAgAkEkahCFASACQShqEIUBIAJBBGoiAyADKAIAQQFrIgM2AgAgAw0AIAJBMEEIEMMBCyAAKAIIQQFqBUEACzYCCCAAIAQ2AiggABAtIAEgASgCAEEBaiIANgIAIABFDQEgARAtIAEPC0GYk8AAEIgBAAsAC0Gok8AAEIgBAAtBiJPAABDIAQALjQQBBH8gAEUEQEEADwsgACgCCCIBQf////8HTwRAQfiSwAAQiQEACyAAIAFBAWo2AgggACgCXCIBBEAgASABKAIAQQFqIgE2AgACQAJAIAFFDQAgACAAKAIIQQFrNgIIAn8CQCAAKAJcIgEoAggiAkH+////B00EQCABIAJBAWo2AgggASgCYCIEDQFBAAwCC0HoksAAEIkBAAsgBCAEKAIAQQFqIgI2AgAgAkUNASABKAIIQQFrIQIgASgCYAshBCABIAI2AgggACAAKAIAQQFqIgI2AgAgAkUNACABKAIIDQEgAUF/NgIIIAEgASgCYCICBH8gAiACKAIAQQFrIgM2AgACQCADDQAgAkHcAGoQhwEgAkHgAGoQhwEgAkEEaiIDIAMoAgBBAWsiAzYCACADDQAgAkHoAEEIEMMBCyABKAIIQQFqBUEACzYCCCABIAA2AmAgACgCCEUEQCAAQX82AgggACAAKAJcIgIEfyACIAIoAgBBAWsiAzYCAAJAIAMNACACQdwAahCHASACQeAAahCHASACQQRqIgMgAygCAEEBayIDNgIAIAMNACACQegAQQgQwwELIAAoAghBAWoFQQALNgIIIAAgBDYCXCAAEC4gASABKAIAQQFqIgA2AgAgAEUNASABEC4gAQ8LQciSwAAQiAEACwALQdiSwAAQiAEAC0G4ksAAEMgBAAuNBAEEfyAARQRAQQAPCyAAKAIIIgFB/////wdPBEBByJPAABCJAQALIAAgAUEBajYCCCAAKAJgIgEEQCABIAEoAgBBAWoiATYCAAJAAkAgAUUNACAAIAAoAghBAWs2AggCfwJAIAAoAmAiASgCCCICQf7///8HTQRAIAEgAkEBajYCCCABKAJcIgQNAUEADAILQbiTwAAQiQEACyAEIAQoAgBBAWoiAjYCACACRQ0BIAEoAghBAWshAiABKAJcCyEEIAEgAjYCCCAAIAAoAgBBAWoiAjYCACACRQ0AIAEoAggNASABQX82AgggASABKAJcIgIEfyACIAIoAgBBAWsiAzYCAAJAIAMNACACQdwAahCHASACQeAAahCHASACQQRqIgMgAygCAEEBayIDNgIAIAMNACACQegAQQgQwwELIAEoAghBAWoFQQALNgIIIAEgADYCXCAAKAIIRQRAIABBfzYCCCAAIAAoAmAiAgR/IAIgAigCAEEBayIDNgIAAkAgAw0AIAJB3ABqEIcBIAJB4ABqEIcBIAJBBGoiAyADKAIAQQFrIgM2AgAgAw0AIAJB6ABBCBDDAQsgACgCCEEBagVBAAs2AgggACAENgJgIAAQLiABIAEoAgBBAWoiADYCACAARQ0BIAEQLiABDwtBmJPAABCIAQALAAtBqJPAABCIAQALQYiTwAAQyAEAC4kEAQV/AkACQAJAAkAgACgCCCIEQf7///8HTQRAIAAgBEEBaiID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LQAAQQFrDgMBAgMACyACIAAoAgQ2AgRBqbbAAC0AABpBFEEBELoBIgBFDQQgAEEQakH8p8AAKAAANgAAIABBCGpB9KfAACkAADcAACAAQeynwAApAAA3AAAgAkEUNgIQIAIgADYCDCACQRQ2AgggAkEDNgIsIAJB8KLAADYCKCACQgI3AjQgAiACQQRqrUKAgICAIIQ3AyAgAiACQQhqrUKAgICAMIQ3AxggAiACQRhqNgIwIAEoAhQgASgCGCACQShqECEhACACKAIIIgFFDQMgAigCDCABQQEQwwEMAwsgAC0AASEAIAJBATYCLCACQZycwAA2AiggAkIBNwI0IAIgAkEYaq1CgICAgMAAhDcDCCACIABBAnQiAEHAqMAAaigCADYCHCACIABB5KnAAGooAgA2AhggAiACQQhqNgIwIAEoAhQgASgCGCACQShqECEhAAwCCyAAKAIEIgAoAgAgACgCBCABENIBIQAMAQsgACgCBCIAKAIAIAEgACgCBCgCEBEAACEACyACQUBrJAAgAA8LQQFBFBC0AQALmgMCBH8GfCMAQSBrIgMkAAJAAkACQCABBEAgASgCACICQX9GDQEgASACQQFqNgIAQam2wAAtAAAaIAErAzAhBiABKwMoIQcgASsDICEIIAErAxghCSABKwMQIQogASsDCCELQeAAQQgQugEiAkUNAiACIAc5A0AgAiAJOQMgIAIgCDkDGCACIAk5AxAgAiAKOQMIIAIgCzkDACACQdgAaiAKOQMAIAJB0ABqIAs5AwAgAkHIAGogBjkDACACQThqIAY5AwAgAkEwaiAHOQMAIAJBKGogCDkDACABIAEoAgBBAWs2AgAgAyACQeAAajYCHCADQQM2AhggAyACNgIUIAMgAjYCECADQQRqIANBEGoQNwJAIAMoAgQiASADKAIMIgJNBEAgAygCCCEBDAELIAFBAnQhBCADKAIIIQUgAkUEQEEEIQEgBSAEQQQQwwEMAQsgBSAEQQQgAkECdCIEELUBIgFFDQQLIAAgAjYCBCAAIAE2AgAgA0EgaiQADwsQywEACxDMAQALQQhB4AAQtAEAC0EEIAQQtAEAC4UDAgR/AnwCQAJAAkACQCAARQ0AAn8CQCAAKAIIIgRB/v///wdNBEAgACAEQQFqNgIIIABBJGohBCAAKAIkIgINAUEADAILQdiU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QRBqKQMANwMAIAMgACkDCDcDCCAAQSBBCBDDAQNAIAEiBUQYLURU+yEpwKAiAZlEu73X2d982z1jRQRAIAVEGC1EVPshKUBkDQELCwNAIAIiAUQYLURU+yEpwKAiAplEu73X2d982z1jRQRAIAFEGC1EVPshKUBkDQELCyADQThqIANBGGopAwA3AgAgA0EwaiADQRBqKQMANwIAIAMgAykDCDcCKEGptsAALQAAGkEwQQgQugEiAEUNAiAAQQA2AgAgACADKQIkNwIEIABBDGogA0EsaikCADcCACAAQRRqIANBNGopAgA3AgAgAEEcaiADQTxqKAIANgIAIABEGC1EVPshGUAgASAFIAGhmUS7vdfZ33zbPWMiBBs5AyggAEQAAAAAAAAAACAFIAQbOQMgIANBQGskACAADwsQywEACxDMAQALQQhBMBDRAQAL8QIBBH8gACgCDCECAkACQCABQYACTwRAIAAoAhghAwJAAkAgACACRgRAIABBFEEQIAAoAhQiAhtqKAIAIgENAUEAIQIMAgsgACgCCCIBIAI2AgwgAiABNgIIDAELIABBFGogAEEQaiACGyEEA0AgBCEFIAEiAkEUaiACQRBqIAIoAhQiARshBCACQRRBECABG2ooAgAiAQ0ACyAFQQA2AgALIANFDQIgACAAKAIcQQJ0QYi3wABqIgEoAgBHBEAgA0EQQRQgAygCECAARhtqIAI2AgAgAkUNAwwCCyABIAI2AgAgAg0BQaS6wABBpLrAACgCAEF+IAAoAhx3cTYCAAwCCyAAKAIIIgAgAkcEQCAAIAI2AgwgAiAANgIIDwtBoLrAAEGgusAAKAIAQX4gAUEDdndxNgIADwsgAiADNgIYIAAoAhAiAQRAIAIgATYCECABIAI2AhgLIAAoAhQiAEUNACACIAA2AhQgACACNgIYCwveAgIEfwZ8IwBBIGsiAyQAAkACQAJAIAEEQCABKAIAIgJBf0YNASABIAJBAWo2AgBBqbbAAC0AABogASsDMCEGIAErAyghByABKwMgIQggASsDGCEJIAErAxAhCiABKwMIIQtBMEEIELoBIgJFDQIgAiAHOQMgIAIgCTkDECACIAo5AwggAiALOQMAIAJBKGogBjkDACACQRhqIAg5AwAgASABKAIAQQFrNgIAIAMgAkEwajYCHCADQQM2AhggAyACNgIUIAMgAjYCECADQQRqIANBEGoQUAJAIAMoAgQiAiADKAIMIgFNBEAgAygCCCECDAELIAJBAnQhBCADKAIIIQUgAUUEQEEEIQIgBSAEQQQQwwEMAQsgBSAEQQQgAUECdCIEELUBIgJFDQQLIAAgATYCBCAAIAI2AgAgA0EgaiQADwsQywEACxDMAQALQQhBMBC0AQALQQQgBBC0AQALvQICBX8BfiMAQTBrIgUkAEEnIQMCQCAAQpDOAFQEQCAAIQgMAQsDQCAFQQlqIANqIgRBBGsgACAAQpDOAIAiCEKQzgB+faciBkH//wNxQeQAbiIHQQF0QbKvwABqLwAAOwAAIARBAmsgBiAHQeQAbGtB//8DcUEBdEGyr8AAai8AADsAACADQQRrIQMgAEL/wdcvViAIIQANAAsLIAinIgRB4wBLBEAgA0ECayIDIAVBCWpqIAinIgQgBEH//wNxQeQAbiIEQeQAbGtB//8DcUEBdEGyr8AAai8AADsAAAsCQCAEQQpPBEAgA0ECayIDIAVBCWpqIARBAXRBsq/AAGovAAA7AAAMAQsgA0EBayIDIAVBCWpqIARBMHI6AAALIAIgAUEBQQAgBUEJaiADakEnIANrEBogBUEwaiQAC+UDAQZ/IwBBEGsiAyQAAkACfwJAIAFBgAFPBEAgA0EANgIMIAFBgBBJDQEgAUGAgARJBEAgAyABQT9xQYABcjoADiADIAFBDHZB4AFyOgAMIAMgAUEGdkE/cUGAAXI6AA1BAwwDCyADIAFBP3FBgAFyOgAPIAMgAUEGdkE/cUGAAXI6AA4gAyABQQx2QT9xQYABcjoADSADIAFBEnZBB3FB8AFyOgAMQQQMAgsgACgCCCIHIAAoAgBGBEAjAEEgayICJAAgACgCACIFQQFqIgRFBEBBAEEAELQBAAtBCCAFQQF0IgYgBCAEIAZJGyIEIARBCE0bIgRBf3NBH3YhBiACIAUEfyACIAU2AhwgAiAAKAIENgIUQQEFQQALNgIYIAJBCGogBiAEIAJBFGoQZiACKAIIBEAgAigCDCACKAIQELQBAAsgAigCDCEFIAAgBDYCACAAIAU2AgQgAkEgaiQACyAAIAdBAWo2AgggACgCBCAHaiABOgAADAILIAMgAUE/cUGAAXI6AA0gAyABQQZ2QcABcjoADEECCyEBIAEgACgCACAAKAIIIgJrSwRAIAAgAiABEGMgACgCCCECCyAAKAIEIAJqIANBDGogARDTARogACABIAJqNgIICyADQRBqJABBAAvDAgIKfAF/IAArAxAiBSABKwMAIgKhIgMgA6IgACsDGCIIIAErAwgiCaEiAyADoqCfIgogASsDECIDoZkhBAJAAkACQAJAAkBBAEEBQQIgACsDACIGIAKhIgcgB6IgACsDCCIHIAmhIgsgC6KgnyILIANjGyALIAOhmUS7vdfZ33zbPWMbDgIEAAELQQBBAUECIAMgCmQbIAREu73X2d982z1jGw4CAwIBCyAERLu919nffNs9Yw0CCyAFIAahIgQgAiAGoaIgCCAHoSIFIAkgB6GioCIIRLu919nffNu9Yw0AIAggBCAEoiAFIAWioCIKRLu919nffNs9oGQNACAGIAQgCCAKoyIGoqAgAqEiAiACoiAHIAUgBqKgIAmhIgIgAqKgnyICIANjIAIgA6GZRLu919nffNs9Y3IhDAsgDA8LQQELxAIBBH8gAEIANwIQIAACf0EAIAFBgAJJDQAaQR8gAUH///8HSw0AGiABQQYgAUEIdmciA2t2QQFxIANBAXRrQT5qCyICNgIcIAJBAnRBiLfAAGohBEEBIAJ0IgNBpLrAACgCAHFFBEAgBCAANgIAIAAgBDYCGCAAIAA2AgwgACAANgIIQaS6wABBpLrAACgCACADcjYCAA8LAkACQCABIAQoAgAiAygCBEF4cUYEQCADIQIMAQsgAUEZIAJBAXZrQQAgAkEfRxt0IQUDQCADIAVBHXZBBHFqQRBqIgQoAgAiAkUNAiAFQQF0IQUgAiEDIAIoAgRBeHEgAUcNAAsLIAIoAggiASAANgIMIAIgADYCCCAAQQA2AhggACACNgIMIAAgATYCCA8LIAQgADYCACAAIAM2AhggACAANgIMIAAgADYCCAu7AgIFfwZ8IwBBMGsiAyQAIAMgAisDEDkDECADIAIrAwg5AwggAyACKwMAOQMAIANBGGogAyABEBsgA0EANgIsIANCgICAgIABNwIkIAMoAhwhBSADKAIgIgQEQCAFIARBBHRqIQYgASsDECEJIAErAwghCiABKwMAIQsgBSEBA0ACQCABIAIQMQ0AIAErAwAiDCALoSIIIAiiIAErAwgiCCAKoSINIA2ioJ8gCaGZRLu919nffNs9Y0UNACADKAIsIgQgAygCJEYEQCADQSRqEF4LIAMoAiggBEEEdGoiByAIOQMIIAcgDDkDACADIARBAWo2AiwLIAFBEGoiASAGRw0ACwsgACADKQIkNwIAIABBCGogA0EsaigCADYCACADKAIYIgAEQCAFIABBBHRBCBDDAQsgA0EwaiQAC6UCAQJ/IwBBEGsiAiQAIAJBADYCDAJ/AkACQCABQYABTwRAIAFBgBBJDQEgAUGAgARPDQIgAiABQT9xQYABcjoADiACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwwDCyACIAE6AAxBAQwCCyACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAgwBCyACIAFBP3FBgAFyOgAPIAIgAUEGdkE/cUGAAXI6AA4gAiABQQx2QT9xQYABcjoADSACIAFBEnZBB3FB8AFyOgAMQQQLIQEgASAAKAIIIgMoAgAgAygCCCIAa0sEQCADIAAgARBjIAMoAgghAAsgAygCBCAAaiACQQxqIAEQ0wEaIAMgACABajYCCCACQRBqJABBAAuSAgEBfyMAQTBrIgEkAAJAAkAgAARAIAAoAgBBf0YNAQJAIAAoAlBFBEBBACEADAELIAFBKGogAEH4AGopAgA3AgAgAUEgaiAAQfAAaikCADcCACABQRhqIABB6ABqKQIANwIAIAFBEGogAEHgAGopAgA3AgBBqbbAAC0AABogASAAKQJYNwIIQTBBCBC6ASIARQ0DIABBADYCACAAIAEpAgQ3AgQgAEEMaiABQQxqKQIANwIAIABBFGogAUEUaikCADcCACAAQRxqIAFBHGopAgA3AgAgAEEkaiABQSRqKQIANwIAIABBLGogAUEsaigCADYCAAsgAUEwaiQAIAAPCxDLAQALEMwBAAtBCEEwENEBAAudAgIGfAF/AkACQAJAIABFDQAgACgCACIIQX9GDQEgACAIQQFqNgIAIAFFDQAgASgCACIIQX9GDQEgASAIQQFqNgIAIAArAwghAiAAKwMQIQUgASAINgIAIAErAxghAyABKwMIIQYgASsDICEHIAErAxAhBCAAIAAoAgBBAWs2AgBBACEBAkAgAyAGoSIDIAIgBqGiIAcgBKEiAiAFIAShoqAiBUS7vdfZ33zbvWMNACAFIAMgA6IgAiACoqAiB0S7vdfZ33zbPaBkDQBBqbbAAC0AABpBGEEIELoBIgFFDQMgAUEANgIAIAEgBCACIAUgB6MiBKKgOQMQIAEgBiADIASioDkDCAsgAQ8LEMsBAAsQzAEAC0EIQRgQ0QEAC4YCAgh/AnxBBCECAkACQAJAIAEoAgwiCCABKAIEIgNGBEAgASgCCCEHIAEoAgAhAQwBC0GptsAALQAAGiAIIANrIgRBAnYiAkEEELoBIglFDQEgBEEEdiEEIAEoAgghByABKAIAIQEgCSECA0AgAysDACEKQam2wAAtAAAaIAMrAwghC0EYQQgQugEiBkUNAyAGIAs5AxAgBiAKOQMIIAZBADYCACACIAYQAjYCACACQQRqIQIgBUEBaiEFIANBEGoiAyAIRw0ACyAJIQILIAcEQCABIAdBBHRBCBDDAQsgACAFNgIIIAAgAjYCBCAAIAQ2AgAPC0EEIAIQtAEAC0EIQRgQ0QEAC+4BAQF/IwBBMGsiASQAAkACQCAABEAgACgCAEF/Rg0BAkAgACgCCEUEQEEAIQAMAQsgAUEoaiAAQShqKQIANwIAIAFBIGogAEEgaikCADcCACABQRhqIABBGGopAgA3AgBBqbbAAC0AABogASAAKQIQNwIQQShBCBC6ASIARQ0DIABBADYCACAAIAEpAgw3AgQgAEEMaiABQRRqKQIANwIAIABBFGogAUEcaikCADcCACAAQRxqIAFBJGopAgA3AgAgAEEkaiABQSxqKAIANgIACyABQTBqJAAgAA8LEMsBAAsQzAEAC0EIQSgQ0QEAC/ABAgF/AX4jAEEwayICJAACQCAABEAgAQR+IAEoAgANAiACQShqIAFBKGopAwA3AwAgAkEgaiABQSBqKQMANwMAIAJBGGogAUEYaikDADcDACACQRBqIAFBEGopAwA3AwAgAiABKQMINwMIIAFBMEEIEMMBQgEFQgALIQMgACgCAA0BIAAgAzcDUCAAIAIpAwg3A1ggAEEANgIAIABB4ABqIAJBEGopAwA3AwAgAEHoAGogAkEYaikDADcDACAAQfAAaiACQSBqKQMANwMAIABB+ABqIAJBKGopAwA3AwAgAkEwaiQADwsQywEACxDMAQALgwICBX8CfCMAQTBrIgMkACADIAIrAxA5AxAgAyACKwMIOQMIIAMgAisDADkDACADQRhqIAEgAxASIANBADYCLCADQoCAgICAATcCJCADKAIcIQQgAygCICIBBEAgAUEEdCEFIAQhAQNAIAEgAhAxRQRAIAErAwghCCABKwMAIQkgAygCLCIGIAMoAiRGBEAgA0EkahBeCyADKAIoIAZBBHRqIgcgCDkDCCAHIAk5AwAgAyAGQQFqNgIsCyABQRBqIQEgBUEQayIFDQALCyAAIAMpAiQ3AgAgAEEIaiADQSxqKAIANgIAIAMoAhgiAARAIAQgAEEEdEEIEMMBCyADQTBqJAAL+AECA38BfiMAQTBrIgIkACABKAIAQYCAgIB4RgRAIAEoAgwhAyACQSxqIgRBADYCACACQoCAgIAQNwIkIAJBJGpBxJrAACADECEaIAJBIGogBCgCACIDNgIAIAIgAikCJCIFNwMYIAFBCGogAzYCACABIAU3AgALIAEpAgAhBSABQoCAgIAQNwIAIAJBEGoiAyABQQhqIgEoAgA2AgAgAUEANgIAQam2wAAtAAAaIAIgBTcDCEEMQQQQugEiAUUEQEEEQQwQ0QEACyABIAIpAwg3AgAgAUEIaiADKAIANgIAIABBlKfAADYCBCAAIAE2AgAgAkEwaiQAC+YBAgV8An8CQAJAIABFDQAgACgCACIHQX9GDQEgACAHQQFqNgIAIAFFDQAgASgCACIIQX9GDQEgASAIQQFqNgIAAn9BASABKwMYIAErAwgiAqEiBCAAKwMQIAErAxAiA6EiBaIgASsDICADoSIDIAArAwggAqEiAqKhIgZEu73X2d982z1kDQAaQQIgBkS7vdfZ33zbvWMNABpBAEEDIAQgAqIgAyAFoqAiAiAEIASiIAMgA6KgZRtBAyACRLu919nffNu9ZhsLIAEgCDYCACAAIAAoAgBBAWs2AgAPCxDLAQALEMwBAAv3AQEGfAJAAkACQCAARQ0AIAAoAgANASAAKwMQIQMgACsDCCEEIABBGEEIEMMBIAFFDQAgASgCAA0BIAErAxAhBSABKwMIIQYgAUEYQQgQwwEgAkUNACACKAIADQEgAisDECEHIAIrAwghCCACQRhBCBDDAUGptsAALQAAGkHAAEEIELoBIgBFDQIgACAHOQMwIAAgCDkDKCAAIAU5AyAgACAGOQMYIAAgAzkDECAAIAQ5AwggAEEANgIAIAAgBiAEoSAHIAOhoiAFIAOhIAggBKGioUQAAAAAAAAAAGQ6ADggAA8LEMsBAAsQzAEAC0EIQcAAENEBAAvPAQIEfAZ/AkAgAARAIAAoAgAiCEF/Rg0BIAAgCEEBajYCACAAKAIMIglBA08EQCAAKAIIIgZBKGohBSAGKwMIIQIgBisDACEDQQIhBwNAIAEgBiAHQQFrIAlwQQR0aiIKKwMAIAOhIAUrAwAgAqGiIAorAwggAqEgBUEIaysDACADoaKhIgGZRAAAAAAAAOA/oiIEIASaIAFEAAAAAAAAAABkG6AhASAFQRBqIQUgCSAHQQFqIgdHDQALCyAAIAg2AgAgAQ8LEMsBAAsQzAEAC90BAgJ/AnwCQAJAIABFDQAgACgCACIDQX9GDQEgACADQQFqNgIAIAFFDQAgASgCACIDQX9GDQEgASADQQFqNgIAIAJFDQAgAigCACIEQX9GDQEgAiAEQQFqNgIAAn9BAiABKwMIIgUgACsDCKEgAisDECABKwMQIgahoiAGIAArAxChIAIrAwggBaGioSIFmUS7vdfZ33zbPWMNABpBASAFRAAAAAAAAAAAZEUNABpBAAsgAiAENgIAIAEgASgCAEEBazYCACAAIAAoAgBBAWs2AgAPCxDLAQALEMwBAAvbAQIFfAJ/AkACQCAARQ0AIAAoAgAiB0F/Rg0BIAAgB0EBajYCACABRQ0AIAEoAgAiB0F/Rg0BIAEgB0EBajYCACABKwMYIAErAwgiAqEiBCAAKwMQIAErAxAiA6EiBaIgASsDICADoSIDIAArAwggAqEiAqKhIgZEu73X2d982z1kIAZEu73X2d98271jckUEQCAEIAKiIAMgBaKgIgJEu73X2d98271mIAIgBCAEoiADIAOioGVxIQgLIAEgBzYCACAAIAAoAgBBAWs2AgAgCA8LEMsBAAsQzAEAC88BAQF/IwBBIGsiASQAAkACQCAABEAgACgCAEF/Rg0BAkAgACgCMEUEQEEAIQAMAQsgAUEYaiAAQcgAaikCADcCACABQRBqIABBQGspAgA3AgBBqbbAAC0AABogASAAKQI4NwIIQSBBCBC6ASIARQ0DIABBADYCACAAIAEpAgQ3AgQgAEEMaiABQQxqKQIANwIAIABBFGogAUEUaikCADcCACAAQRxqIAFBHGooAgA2AgALIAFBIGokACAADwsQywEACxDMAQALQQhBIBDRAQALgQIBAn8jAEEgayIGJABBhLfAAEGEt8AAKAIAIgdBAWo2AgACQAJAIAdBAEgNAEHQusAALQAADQBB0LrAAEEBOgAAQcy6wABBzLrAACgCAEEBajYCACAGIAU6AB0gBiAEOgAcIAYgAzYCGCAGIAI2AhQgBkHcp8AANgIQIAZBATYCDEH4tsAAKAIAIgJBAEgNAEH4tsAAIAJBAWo2AgBB+LbAAEH8tsAAKAIABH8gBiAAIAEoAhARAQAgBiAGKQMANwIMQfy2wAAoAgAgBkEMakGAt8AAKAIAKAIUEQEAQfi2wAAoAgBBAWsFIAILNgIAQdC6wABBADoAACAEDQELAAsAC8wBAgF/AX4jAEEgayICJAACQCAABEAgAQR+IAEoAgANAiACQRhqIAFBIGopAwA3AwAgAkEQaiABQRhqKQMANwMAIAJBCGogAUEQaikDADcDACACIAEpAwg3AwAgAUEoQQgQwwFCAQVCAAshAyAAKAIADQEgACADNwMIIAAgAikDADcDECAAQQA2AgAgAEEYaiACQQhqKQMANwMAIABBIGogAkEQaikDADcDACAAQShqIAJBGGopAwA3AwAgAkEgaiQADwsQywEACxDMAQAL2wEBA38CQAJAIAAoAgAiA0UEQEGptsAALQAAGkEwQQgQugEiA0UNASADQQA2AiggA0IANwMgIAMgAjkDGCADIAE5AxAgA0EANgIIIANCgYCAgBA3AwAgACADNgIADwsgAyADKAIAQQFqIgU2AgAgBUUNASADIAEgAiAAQQRqEBAhBSADIAMoAgBBAWsiBDYCAAJAIAQNACADQSRqEIUBIANBKGoQhQEgA0EEaiIEIAQoAgBBAWsiBDYCACAEDQAgA0EwQQgQwwELIAAgBTYCAA8LQQhBMBDRAQALAAu4AQEFfyMAQSBrIgEkACAAKAIAIgNBAWoiAkUEQEEAQQAQtAEAC0EEIANBAXQiBCACIAIgBEkbIgIgAkEETRsiBEEEdCEFIAJBgICAwABJQQN0IQIgASADBH8gASADQQR0NgIcIAEgACgCBDYCFEEIBUEACzYCGCABQQhqIAIgBSABQRRqEGYgASgCCARAIAEoAgwgASgCEBC0AQALIAEoAgwhAyAAIAQ2AgAgACADNgIEIAFBIGokAAu3AQEFfyMAQSBrIgEkACAAKAIAIgNBAWoiAkUEQEEAQQAQtAEAC0EEIANBAXQiBCACIAIgBEkbIgIgAkEETRsiBEEwbCEFIAJBq9WqFUlBA3QhAiABIAMEfyABIANBMGw2AhwgASAAKAIENgIUQQgFQQALNgIYIAFBCGogAiAFIAFBFGoQZiABKAIIBEAgASgCDCABKAIQELQBAAsgASgCDCEDIAAgBDYCACAAIAM2AgQgAUEgaiQAC8MBAQZ/IwBBIGsiASQAIAAoAgAiA0EBaiICRQRAQQBBABC0AQALQQQhBUEEIANBAXQiBCACIAIgBEkbIgIgAkEETRsiBEEMbCEGIAJBq9Wq1QBJQQJ0IQICQCADRQRAQQAhBQwBCyABIANBDGw2AhwgASAAKAIENgIUCyABIAU2AhggAUEIaiACIAYgAUEUahBmIAEoAggEQCABKAIMIAEoAhAQtAEACyABKAIMIQMgACAENgIAIAAgAzYCBCABQSBqJAALwwEBBn8jAEEgayIBJAAgACgCACIDQQFqIgJFBEBBAEEAELQBAAtBBCEFQQQgA0EBdCIEIAIgAiAESRsiAiACQQRNGyIEQQJ0IQYgAkGAgICAAklBAnQhAgJAIANFBEBBACEFDAELIAEgA0ECdDYCHCABIAAoAgQ2AhQLIAEgBTYCGCABQQhqIAIgBiABQRRqEGYgASgCCARAIAEoAgwgASgCEBC0AQALIAEoAgwhAyAAIAQ2AgAgACADNgIEIAFBIGokAAu4AQEFfyMAQSBrIgEkACAAKAIAIgNBAWoiAkUEQEEAQQAQtAEAC0EEIANBAXQiBCACIAIgBEkbIgIgAkEETRsiBEEDdCEFIAJBgICAgAFJQQN0IQIgASADBH8gASADQQN0NgIcIAEgACgCBDYCFEEIBUEACzYCGCABQQhqIAIgBSABQRRqEGYgASgCCARAIAEoAgwgASgCEBC0AQALIAEoAgwhAyAAIAQ2AgAgACADNgIEIAFBIGokAAu3AQEDfyMAQSBrIgMkACABIAEgAmoiAksEQEEAQQAQtAEAC0EBIQFBCCAAKAIAIgVBAXQiBCACIAIgBEkbIgIgAkEITRsiAkF/c0EfdiEEAkAgBUUEQEEAIQEMAQsgAyAFNgIcIAMgACgCBDYCFAsgAyABNgIYIANBCGogBCACIANBFGoQZiADKAIIBEAgAygCDCADKAIQELQBAAsgAygCDCEBIAAgAjYCACAAIAE2AgQgA0EgaiQAC60BAgF/AX4jAEEgayICJAACQCAABEAgAQR+IAEoAgANAiACQRhqIAFBGGopAwA3AwAgAkEQaiABQRBqKQMANwMAIAIgASkDCDcDCCABQSBBCBDDAUIBBUIACyEDIAAoAgANASAAIAM3AzAgACACKQMINwM4IABBADYCACAAQUBrIAJBEGopAwA3AwAgAEHIAGogAkEYaikDADcDACACQSBqJAAPCxDLAQALEMwBAAu1AQIFfAF/AkACQCAARQ0AIAAoAgAiB0F/Rg0BIAAgB0EBajYCACABRQ0AIAEoAgAiB0F/Rg0BIAEgB0EBajYCACAAKwMIIQIgACsDECEEIAEgBzYCACABKwMYIQMgASsDCCEFIAErAxAhBiAAIAAoAgBBAWs2AgBBAEEBQQIgAiAFoSICIAKiIAQgBqEiAiACoqCfIgIgA2MbIAIgA6GZRLu919nffNs9YxsPCxDLAQALEMwBAAubAQEBfwJAAkAgAQRAIAJBAEgNAQJ/IAMoAgQEQAJAIAMoAggiBEUEQAwBCyADKAIAIAQgASACELUBDAILCyABIAJFDQAaQam2wAAtAAAaIAIgARC6AQsiAwRAIAAgAjYCCCAAIAM2AgQgAEEANgIADwsgACACNgIIIAAgATYCBAwCCyAAQQA2AgQMAQsgAEEANgIECyAAQQE2AgALogEBAX8jAEHQAGsiASQAAkAgAARAIAAoAgANASABIABBCGpB0AAQ0wEhASAAQdgAQQgQwwEgASgCKCIABEAgASgCLCAAQTBsQQgQwwELIAEoAjQiAARAIAEoAjggAEEwbEEIEMMBCyABKAJAIgAEQCABKAJEIABBBHRBCBDDAQsgAUEYahCHASABQSBqEIUBIAFB0ABqJAAPCxDLAQALEMwBAAueAQIFfAF/AkACQCAARQ0AIAAoAgAiB0F/Rg0BIAAgB0EBajYCACABRQ0AIAEoAgAiB0F/Rg0BIAEgB0EBajYCACAAKwMIIAArAxAhAyABIAc2AgAgASsDGCEEIAErAwggASsDECEGIAAgACgCAEEBazYCAKEiAiACoiADIAahIgIgAqKgnyAEoZlEu73X2d982z1jDwsQywEACxDMAQALlwECBH8BfiMAQRBrIgMkACADQQhqIAAoAgggASACEC8gAy0ACCIEQQRHBEAgACgCBCEBIAMpAwghByAALQAAIgJBBE0gAkEDR3FFBEAgASgCACIFIAFBBGooAgAiAigCABECACACKAIEIgYEQCAFIAYgAigCCBDDAQsgAUEMQQQQwwELIAAgBzcCAAsgA0EQaiQAIARBBEcLkwECBHwBfwJAAkAgAEUNACAAKAIAIgZBf0YNASAAIAZBAWo2AgAgAUUNACABKAIAIgZBf0YNASABIAZBAWo2AgAgACsDCCAAKwMQIQMgASAGNgIAIAErAwggASsDECEFIAAgACgCAEEBazYCAKEiAiACoiADIAWhIgIgAqKgn0S7vdfZ33zbPWMPCxDLAQALEMwBAAuJAQIEfAF/AkACQCAARQ0AIAAoAgAiBkF/Rg0BIAAgBkEBajYCACABRQ0AIAEoAgAiBkF/Rg0BIAEgBkEBajYCACAAKwMIIAArAxAhAyABIAY2AgAgASsDCCABKwMQIQUgACAAKAIAQQFrNgIAoSICIAKiIAMgBaEiAiACoqCfDwsQywEACxDMAQALnwECAnwBfwJAAkAgAEUNACAAKAIAIgRBf0YNASAAIARBAWo2AgAgAUUNACABKAIAIgRBf0YNASABIARBAWo2AgAgACsDECAAKwMIENUBIQIgASsDECABKwMIENUBIAEgASgCAEEBazYCACAAIAAoAgBBAWs2AgAgAqEiAkQYLURU+yEZQKAgAiACRAAAAAAAAAAAYxsPCxDLAQALEMwBAAueAQEEfAJAAkACQCAARQ0AIAAoAgANASAAKwMQIQIgACsDCCEDIABBGEEIEMMBIAFFDQAgASgCAA0BIAErAxAhBCABKwMIIQUgAUEYQQgQwwFBqbbAAC0AABpBKEEIELoBIgBFDQIgACAEOQMgIAAgBTkDGCAAIAI5AxAgACADOQMIIABBADYCACAADwsQywEACxDMAQALQQhBKBDRAQALigEBA3wCQAJAIAAEQCAAKAIAQX9GDQEgACsDCCIBIAGiIAArAxAiAiACoqCfIgNEu73X2d982z1jRQRAIAIgA6MhAiABIAOjIQELQam2wAAtAAAaQRhBCBC6ASIARQ0CIAAgAjkDECAAIAE5AwggAEEANgIAIAAPCxDLAQALEMwBAAtBCEEYENEBAAuPAQIDfwF+IwBBIGsiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBHGoiBEEANgIAIAJCgICAgBA3AhQgAkEUakHEmsAAIAMQIRogAkEQaiAEKAIAIgM2AgAgAiACKQIUIgU3AwggAUEIaiADNgIAIAEgBTcCAAsgAEGUp8AANgIEIAAgATYCACACQSBqJAALfgIBfwR8AkACQCAARQ0AIAAoAgAiAkF/Rg0BIAAgAkEBajYCACABRQ0AIAEoAgAiAkF/Rg0BIAEgAkEBajYCACAAKwMIIAArAxAhBCABIAI2AgAgASsDCCABKwMQIQYgACAAKAIAQQFrNgIAoiAEIAaioA8LEMsBAAsQzAEAC34CAX8EfAJAAkAgAEUNACAAKAIAIgJBf0YNASAAIAJBAWo2AgAgAUUNACABKAIAIgJBf0YNASABIAJBAWo2AgAgACsDCCAAKwMQIQQgASACNgIAIAErAxAgASsDCCEGIAAgACgCAEEBazYCAKIgBCAGoqEPCxDLAQALEMwBAAuEAQEEfAJAAkAgAARAIAAoAgBBf0YNAUGptsAALQAAGiAAKwMgIQEgACsDGCECIAArAxAhAyAAKwMIIQRBGEEIELoBIgBFDQIgAEEANgIAIAAgAyACIAEQ1wGioDkDECAAIAQgAiABENYBoqA5AwggAA8LEMsBAAsQzAEAC0EIQRgQ0QEAC4QBAQR8AkACQCAABEAgACgCAEF/Rg0BQam2wAAtAAAaIAArAyghASAAKwMYIQIgACsDECEDIAArAwghBEEYQQgQugEiAEUNAiAAQQA2AgAgACADIAIgARDXAaKgOQMQIAAgBCACIAEQ1gGioDkDCCAADwsQywEACxDMAQALQQhBGBDRAQALcgEBfwJAAkAgAEUNACAAKAIAIgJBf0YNASAAIAJBAWo2AgAgAUUNACABKAIAIgJBf0YNASABIAJBAWo2AgAgAEEIaiABQQhqEDEgASABKAIAQQFrNgIAIAAgACgCAEEBazYCAEEBcw8LEMsBAAsQzAEAC98DAgd/B3wCQAJAIABFDQAgACgCACICQX9GDQEgACACQQFqNgIAIAFFDQAgASgCACICQX9GDQEgASACQQFqNgIAAn8gAEEIaiEDQQIgAUEEaiICKAIUIgdFDQAaIAdBBXQhBgJAIAdB////H0sNACACKAIQIQVBqbbAAC0AABpBCCEEIAZBCBC6ASICRQ0AIAIgBSAGENMBIgYgB0EFdGohCCADKwMIIQ0gAysDACEOQQQhBSAGIQMCQANAIAUhAgJAAkACQCADKwMQIAMrAwAiCqEiCyANIAMrAwgiCaEiD6IgAysDGCAJoSIMIA4gCqEiCqKhIglEu73X2d982z1kRQRAIAlEu73X2d98271jDQEgCyAKoiAMIA+ioCIJRLu919nffNu9ZkUNAiAJIAsgC6IgDCAMoqBlRQ0DQQAhBAwFC0EBIQUgAiEEIAJB/wFxQQJrDgMEAQIBC0ECIQRBAiEFIAJB/wFxQQFrDgQDAAABAAsgAiEFCyADQSBqIgMgCEcNAAtBAkEBIAVB/wFxQQRGGyEECyAHBEAgBiAHQQV0QQgQwwELIAQMAQsgBCAGELQBAAsgASABKAIAQQFrNgIAIAAgACgCAEEBazYCAEH/AXEPCxDLAQALEMwBAAtzAQF/AkACQCAARQ0AIAAoAgAiAkF/Rg0BIAAgAkEBajYCACABRQ0AIAEoAgAiAkF/Rg0BIAEgAkEBajYCACAAQQhqIAFBCGoQNSABIAEoAgBBAWs2AgAgACAAKAIAQQFrNgIAQf8BcQ8LEMsBAAsQzAEAC28BAX8CQAJAIABFDQAgACgCACICQX9GDQEgACACQQFqNgIAIAFFDQAgASgCACICQX9GDQEgASACQQFqNgIAIABBCGogAUEIahAxIAEgASgCAEEBazYCACAAIAAoAgBBAWs2AgAPCxDLAQALEMwBAAtoAQJ/IAEoAggiBEUgASgCACIFIARrIANPckUEQCABQQA2AgggAUEAOgAMQQAhBAsgAyAFSQRAIAEoAgQgBGogAiADENMBGiAAQQQ6AAAgASADIARqNgIIDwsgAEIENwIAIAFBADoADAtxAQJ8AkACQCAABEAgACgCAA0BIAArAxAhAiAAKwMIIQMgAEEYQQgQwwFBqbbAAC0AABpBIEEIELoBIgBFDQIgACABOQMYIAAgAjkDECAAIAM5AwggAEEANgIAIAAPCxDLAQALEMwBAAtBCEEgENEBAAtwAQJ/IwBBEGsiAiQAIAJBCGogACABEDhBqbbAAC0AABogAigCDCEBIAIoAgghA0EQQQQQugEiAEUEQEEEQRAQ0QEACyAAIAM2AgggAEEANgIAIAAgATYCDCAAIAFB/////wBxNgIEIAJBEGokACAAC2MBBH8CQCAABEAgACgCAA0BIAAoAhQhAyAAKAIQIQEgACgCCCEEIAAoAgQhAiAAQRxBBBDDASACBEAgBCACQQR0QQgQwwELIAEEQCADIAFBBXRBCBDDAQsPCxDLAQALEMwBAAtqAgF/AX4jAEEwayIDJAAgAyABNgIEIAMgADYCACADQQM2AgwgA0H8q8AANgIIIANCAjcCFCADQoCAgIDgACIEIANBBGqthDcDKCADIAQgA62ENwMgIAMgA0EgajYCECADQQhqIAIQlQEAC2oCAX8BfiMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBAjYCDCADQeStwAA2AgggA0ICNwIUIANCgICAgOAAIgQgA62ENwMoIAMgBCADQQRqrYQ3AyAgAyADQSBqNgIQIANBCGogAhCVAQALZwAjAEEwayIAJABBqLbAAC0AAARAIABBAjYCDCAAQbCmwAA2AgggAEIBNwIUIAAgATYCLCAAIABBLGqtQoCAgIDgAIQ3AyAgACAAQSBqNgIQIABBCGpB2KbAABCVAQALIABBMGokAAt9AQF/Qam2wAAtAAAaQdgAQQgQugEiAEUEQEEIQdgAENEBAAsgAEEANgJQIABCgICAgIABNwNIIABCCDcDQCAAQgA3AzggAEKAgICAgAE3AzAgAEEAOgAsIABBADYCKCAAQQE6ACQgAEEANgIgIABCADcDCCAAQQA2AgAgAAtiAQJ8AkAgAARAIAAoAgBBf0YNASAAKwMYIAArAwgiAaEgACsDMCAAKwMQIgKhoiAAKwMgIAKhIAArAyggAaGioZlEAAAAAAAA4D+iIgEgAZogAC0AOBsPCxDLAQALEMwBAAtkAQJ8AkACQCAABEAgACgCAEF/Rg0BQam2wAAtAAAaIAArAxAhASAAKwMIIQJBGEEIELoBIgBFDQIgACABOQMQIAAgAjkDCCAAQQA2AgAgAA8LEMsBAAsQzAEAC0EIQRgQ0QEAC2QBAnwCQAJAIAAEQCAAKAIAQX9GDQFBqbbAAC0AABogACsDICEBIAArAxghAkEYQQgQugEiAEUNAiAAIAE5AxAgACACOQMIIABBADYCACAADwsQywEACxDMAQALQQhBGBDRAQALZAECfAJAAkAgAARAIAAoAgBBf0YNAUGptsAALQAAGiAAKwMwIQEgACsDKCECQRhBCBC6ASIARQ0CIAAgATkDECAAIAI5AwggAEEANgIAIAAPCxDLAQALEMwBAAtBCEEYENEBAAtVAQN/IAAoAgQhASAALQAAIgBBBE0gAEEDR3FFBEAgASgCACICIAFBBGooAgAiACgCABECACAAKAIEIgMEQCACIAMgACgCCBDDAQsgAUEMQQQQwwELC1UBAX8CQCAAKAIAIgBFDQAgACAAKAIAQQFrIgE2AgAgAQ0AIABBJGoQhQEgAEEoahCFASAAQQRqIgEgASgCAEEBayIBNgIAIAENACAAQTBBCBDDAQsLVQEBfwJAIAAoAgAiAEUNACAAIAAoAgBBAWsiATYCACABDQAgAEEoahCGASAAQSxqEIYBIABBBGoiASABKAIAQQFrIgE2AgAgAQ0AIABBMEEIEMMBCwtYAQF/AkAgACgCACIARQ0AIAAgACgCAEEBayIBNgIAIAENACAAQdwAahCHASAAQeAAahCHASAAQQRqIgEgASgCAEEBayIBNgIAIAENACAAQegAQQgQwwELC00BAX8jAEEwayIBJAAgAUEBNgIMIAFBwKzAADYCCCABQgE3AhQgASABQS9qrUKAgICA4AOENwMgIAEgAUEgajYCECABQQhqIAAQlQEAC00BAX8jAEEwayIBJAAgAUEBNgIMIAFB5KzAADYCCCABQgE3AhQgASABQS9qrUKAgICA8AOENwMgIAEgAUEgajYCECABQQhqIAAQlQEAC0QBAn8CQCAABEAgACgCAA0BIAAoAgghAiAAKAIEIQEgAEEQQQQQwwEgAQRAIAIgAUEEdEEIEMMBCw8LEMsBAAsQzAEACz8BAX8CQCAABEAgACgCACIBQX9GDQEgACABQQFqNgIAIABBBGoQJiAAIAAoAgBBAWs2AgAPCxDLAQALEMwBAAvGAwIJfwJ8AkAgAARAIAAoAgAiAUF/Rg0BIAAgAUEBajYCAAJ/QQEgAEEEaiIBKAIIIgNFDQAaIANBAWshCCABKAIEIQRBAyEFQQAhAQNAAkAgBUEDRwRAIAQgAUEEdGohAgNAIAQgAUEBaiIGQQAgASAIRxtBBHRqIgcrAwAiCiACKwMAoSAEIAFBAmogA3BBBHRqIgkrAwggBysDCCILoaIgCyACQQhqKwMAoSAJKwMAIAqhoqEiCplEu73X2d982z1jRQRAIApEAAAAAAAAAABkRSAFRgRAIAFBAWohAQwEC0EADAULIAJBEGohAiAGIgEgA0kNAAtBAQwDCyAEIAFBBHRqIQIDQCAEIAFBAWoiBkEAIAEgCEcbQQR0aiIFKwMAIgogAisDAKEgBCABQQJqIANwQQR0aiIHKwMIIAUrAwgiC6GiIAsgAkEIaisDAKEgBysDACAKoaKhIgqZRLu919nffNs9Y0UEQEEBIQUgAUEBaiEBIApEAAAAAAAAAABkRQ0CQQAhBQwCCyACQRBqIQIgBiIBIANJDQALQQEMAgsgASADSQ0AC0EBCyAAIAAoAgBBAWs2AgAPCxDLAQALEMwBAAtHAQF/IAIgACgCCCIAKAIAIAAoAggiA2tLBEAgACADIAIQYyAAKAIIIQMLIAAoAgQgA2ogASACENMBGiAAIAIgA2o2AghBAAtCAQF/IAIgACgCACAAKAIIIgNrSwRAIAAgAyACEGMgACgCCCEDCyAAKAIEIANqIAEgAhDTARogACACIANqNgIIQQALTwECf0GptsAALQAAGiABKAIEIQIgASgCACEDQQhBBBC6ASIBRQRAQQRBCBDRAQALIAEgAjYCBCABIAM2AgAgAEGkp8AANgIEIAAgATYCAAs4AAJAIAFpQQFHQYCAgIB4IAFrIABJcg0AIAAEQEGptsAALQAAGiAAIAEQugEiAUUNAQsgAQ8LAAtCAQF/IwBBIGsiAyQAIANBADYCECADQQE2AgQgA0IENwIIIAMgATYCHCADIAA2AhggAyADQRhqNgIAIAMgAhCVAQALPAACQCAABEAgAUECTQRAIAAoAgANAiAAQQA2AgAgACABOgCAAQ8LQfiXwABBGRDKAQALEMsBAAsQzAEACzUBAXwCQCAABEAgACgCAEF/Rg0BIAArAwgiASABoiAAKwMQIgEgAaKgnw8LEMsBAAsQzAEACzkAAkACfyACQYCAxABHBEBBASAAIAIgASgCEBEAAA0BGgsgAw0BQQALDwsgACADIAQgASgCDBEEAAuqAgECfyMAQSBrIgIkACACQQE7ARwgAiABNgIYIAIgADYCFCACQaCtwAA2AhAgAkEBNgIMIwBBEGsiASQAIAJBDGoiACgCCCICRQRAQYSnwAAQyAEACyABIAAoAgw2AgwgASAANgIIIAEgAjYCBCMAQRBrIgAkACABQQRqIgEoAgAiAigCDCEDAkACQAJAAkAgAigCBA4CAAECCyADDQFBASECQQAhAwwCCyADDQAgAigCACICKAIEIQMgAigCACECDAELIAAgAjYCDCAAQYCAgIB4NgIAIABByKfAACABKAIEIgAoAgggASgCCCAALQAQIAAtABEQWwALIAAgAzYCBCAAIAI2AgAgAEG0p8AAIAEoAgQiACgCCCABKAIIIAAtABAgAC0AERBbAAvUAgEBfyMAQRBrIgIkACACQZqawAA2AgwgAiAANgIIIwBB8ABrIgAkACAAQZyawAA2AgwgACACQQhqNgIIIABBnJrAADYCFCAAIAJBDGo2AhAgAEH0rcAANgIYIABBAjYCHAJAIAEoAgBFBEAgAEEDNgJcIABBsK7AADYCWCAAQgM3AmQgACAAQRBqrUKAgICAkASENwNIIAAgAEEIaq1CgICAgJAEhDcDQAwBCyAAQTBqIAFBEGopAgA3AwAgAEEoaiABQQhqKQIANwMAIAAgASkCADcDICAAQQQ2AlwgAEHkrsAANgJYIABCBDcCZCAAIABBEGqtQoCAgICQBIQ3A1AgACAAQQhqrUKAgICAkASENwNIIAAgAEEgaq1CgICAgKAEhDcDQAsgACAAQRhqrUKAgICAgASENwM4IAAgAEE4ajYCYCAAQdgAakHkpMAAEJUBAAvDAgEDfyABKAIcIgJBEHFFBEAgAkEgcUUEQCAAIAEQxgEPC0EAIQIjAEGAAWsiBCQAIAAoAgAhAANAIAIgBGpB/wBqIABBD3EiA0EwciADQTdqIANBCkkbOgAAIAJBAWshAiAAQRBJIABBBHYhAEUNAAsgAkGAAWoiAEGBAU8EQCAAQYABQaCvwAAQxAEACyABQQFBsK/AAEECIAIgBGpBgAFqQQAgAmsQGiAEQYABaiQADwtBACECIwBBgAFrIgQkACAAKAIAIQADQCACIARqQf8AaiAAQQ9xIgNBMHIgA0HXAGogA0EKSRs6AAAgAkEBayECIABBEEkgAEEEdiEARQ0ACyACQYABaiIAQYEBTwRAIABBgAFBoK/AABDEAQALIAFBAUGwr8AAQQIgAiAEakGAAWpBACACaxAaIARBgAFqJAALOQEBf0GptsAALQAAGkEYQQgQugEiAkUEQEEIQRgQ0QEACyACIAE5AxAgAiAAOQMIIAJBADYCACACCy4AAkAgAARAIAAoAgANASAAQQA2AgAgACAALQA4QQFzOgA4DwsQywEACxDMAQALKAACQCAABEAgACgCAA0BIABBADYCACAAIAE2AgQPCxDLAQALEMwBAAsoAAJAIAAEQCAAKAIADQEgAEEANgIAIAAgATYCCA8LEMsBAAsQzAEACygAAkAgAARAIAAoAgANASAAQQA2AgAgACABNgIMDwsQywEACxDMAQALIwEBfyAAKAIAIgAgAEEfdSICcyACa60gAEF/c0EfdiABEEgLIwACQCAABEAgACgCAA0BIABBEEEEEMMBDwsQywEACxDMAQALIgACQCAABEAgACgCAEF/Rg0BIAAoAgQPCxDLAQALEMwBAAsiAAJAIAAEQCAAKAIAQX9GDQEgACgCCA8LEMsBAAsQzAEACyIAAkAgAARAIAAoAgBBf0YNASAAKAIMDwsQywEACxDMAQALIwACQCAABEAgACgCAA0BIABBKEEIEMMBDwsQywEACxDMAQALIwACQCAABEAgACgCAA0BIABBMEEIEMMBDwsQywEACxDMAQALIgACQCAABEAgACgCAEF/Rg0BIAArAyAPCxDLAQALEMwBAAsiAAJAIAAEQCAAKAIAQX9GDQEgACsDKA8LEMsBAAsQzAEACyIAAkAgAARAIAAoAgBBf0YNASAAKwMYDwsQywEACxDMAQALIwACQCAABEAgACgCAA0BIABBGEEIEMMBDwsQywEACxDMAQALIgACQCAABEAgACgCAEF/Rg0BIAArAwgPCxDLAQALEMwBAAsiAAJAIAAEQCAAKAIAQX9GDQEgACsDEA8LEMsBAAsQzAEACyMAAkAgAARAIAAoAgANASAAQSBBCBDDAQ8LEMsBAAsQzAEACyQAAkAgAARAIAAoAgANASAAQYgBQQgQwwEPCxDLAQALEMwBAAsjAAJAIAAEQCAAKAIAQX9GDQEgAC0AgAEPCxDLAQALEMwBAAskAAJAIAAEQCAAKAIADQEgAEHAAEEIEMMBDwsQywEACxDMAQALIgACQCAABEAgACgCAEF/Rg0BIAAtADgPCxDLAQALEMwBAAsfAAJAIAAEQCAAKAIAQX9GDQFBAA8LEMsBAAsQzAEACx8AAkAgAARAIAAoAgBBf0YNAUECDwsQywEACxDMAQALHwACQCAABEAgACgCAEF/Rg0BQQEPCxDLAQALEMwBAAsoAQF/IAAoAgAiAUGAgICAeHJBgICAgHhHBEAgACgCBCABQQEQwwELCxoBAX8gACgCACIBBEAgACgCBCABQQEQwwELC0YAIABFBEAjAEEgayIAJAAgAEEANgIYIABBATYCDCAAQZyrwAA2AgggAEIENwIQIABBCGpBwKvAABCVAQALIAAgARDRAQAL3AYBBn8CfwJAAkACQAJAAkAgAEEEayIFKAIAIgZBeHEiBEEEQQggBkEDcSIHGyABak8EQCAHQQAgAUEnaiIJIARJGw0BAkACQCACQQlPBEAgAiADEDsiCA0BQQAMCQsgA0HM/3tLDQFBECADQQtqQXhxIANBC0kbIQECQCAHRQRAIAFBgAJJIAQgAUEEcklyIAQgAWtBgYAIT3INAQwJCyAAQQhrIgIgBGohBwJAAkACQAJAIAEgBEsEQCAHQbS6wAAoAgBGDQQgB0GwusAAKAIARg0CIAcoAgQiBkECcQ0FIAZBeHEiBiAEaiIEIAFJDQUgByAGEEYgBCABayIDQRBJDQEgBSABIAUoAgBBAXFyQQJyNgIAIAEgAmoiASADQQNyNgIEIAIgBGoiAiACKAIEQQFyNgIEIAEgAxA0DA0LIAQgAWsiA0EPSw0CDAwLIAUgBCAFKAIAQQFxckECcjYCACACIARqIgEgASgCBEEBcjYCBAwLC0GousAAKAIAIARqIgQgAUkNAgJAIAQgAWsiA0EPTQRAIAUgBkEBcSAEckECcjYCACACIARqIgEgASgCBEEBcjYCBEEAIQNBACEBDAELIAUgASAGQQFxckECcjYCACABIAJqIgEgA0EBcjYCBCACIARqIgIgAzYCACACIAIoAgRBfnE2AgQLQbC6wAAgATYCAEGousAAIAM2AgAMCgsgBSABIAZBAXFyQQJyNgIAIAEgAmoiASADQQNyNgIEIAcgBygCBEEBcjYCBCABIAMQNAwJC0GsusAAKAIAIARqIgQgAUsNBwsgAxAIIgFFDQEgASAAQXxBeCAFKAIAIgFBA3EbIAFBeHFqIgEgAyABIANJGxDTASAAEB4MCAsgCCAAIAEgAyABIANJGxDTARogBSgCACICQXhxIgMgAUEEQQggAkEDcSICG2pJDQMgAkEAIAMgCUsbDQQgABAeCyAIDAYLQZ2bwABBLkHMm8AAEJEBAAtB3JvAAEEuQYycwAAQkQEAC0Gdm8AAQS5BzJvAABCRAQALQdybwABBLkGMnMAAEJEBAAsgBSABIAZBAXFyQQJyNgIAIAEgAmoiAiAEIAFrIgFBAXI2AgRBrLrAACABNgIAQbS6wAAgAjYCACAADAELIAALCxAAIAEEQCAAIAEgAhDDAQsLGQAgASgCFEGUrMAAQQsgASgCGCgCDBEEAAsZACABKAIUQZ+swABBDiABKAIYKAIMEQQACxQAIAAoAgAgASAAKAIEKAIMEQAACxkAAn8gAUEJTwRAIAEgABA7DAELIAAQCAsLIQAgAEKo0O/zqZSkwVY3AwggAEKR9evlvIP0to1/NwMACyIAIABCz8ujx5OczqX/ADcDCCAAQtTmkNGnwL3mhH83AwALIgAgAELtuq22zYXU9eMANwMIIABC+IKZvZXuxsW5fzcDAAsRACAAKAIAIAAoAgQgARDSAQsRACAAKAIEIAAoAgggARDSAQsTACAAQaSnwAA2AgQgACABNgIACxAAIAEgACgCACAAKAIEEBgLEAAgASgCFCABKAIYIAAQIQthAQF/AkACQCAAQQRrKAIAIgJBeHEiA0EEQQggAkEDcSICGyABak8EQCACQQAgAyABQSdqSxsNASAAEB4MAgtBnZvAAEEuQcybwAAQkQEAC0Hcm8AAQS5BjJzAABCRAQALC2sBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQQI2AgwgA0H4scAANgIIIANCAjcCFCADIANBBGqtQoCAgIDgAIQ3AyggAyADrUKAgICA4ACENwMgIAMgA0EgajYCECADQQhqIAIQlQEAC2sBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQQI2AgwgA0GYssAANgIIIANCAjcCFCADIANBBGqtQoCAgIDgAIQ3AyggAyADrUKAgICA4ACENwMgIAMgA0EgajYCECADQQhqIAIQlQEACw0AIAA1AgBBASABEEgLawEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBAjYCDCADQcyywAA2AgggA0ICNwIUIAMgA0EEaq1CgICAgOAAhDcDKCADIAOtQoCAgIDgAIQ3AyAgAyADQSBqNgIQIANBCGogAhCVAQALDwBB9KzAAEErIAAQkQEACwsAIAAjAGokACMACwkAIAAgARAEAAsNAEGwmcAAQRsQygEACw4AQcuZwABBzwAQygEACykAAn8gACgCAC0AAEUEQCABQfqwwABB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VVVVpT+goiABIAGiIgIgAqIgASABRNQ4iL7p+qi9okTEsbS9nu4hPqCiRK1SnIBPfpK+oKKgoiAARAAAAAAAAACAoqCgoAwFCyAAIAChDAQLIAEgASAAoiIBRElVVVVVVcU/oiAAIAJEAAAAAAAA4D+iIAEgACAAIACioiAARHzVz1o62eU9okTrnCuK5uVavqCiIAAgAER9/rFX4x3HPqJE1WHBGaABKr+gokSm+BARERGBP6CgoqGiIAKhoKEMAwtEAAAAAAAA8D8gAEQAAAAAAADgP6IiA6EiBEQAAAAAAADwPyAEoSADoSAAIAAgACAARJAVyxmgAfo+okR3UcEWbMFWv6CiRExVVVVVVaU/oKIgACAAoiIDIAOiIAAgAETUOIi+6fqovaJExLG0vZ7uIT6gokStUpyAT36SvqCioKIgASACoqGgoAwCCyABIAEgAKIiAURJVVVVVVXFP6IgACACRAAAAAAAAOA/oiABIAAgACAAoqIgAER81c9aOtnlPaJE65wriublWr6goiAAIABEff6xV+Mdxz6iRNVhwRmgASq/oKJEpvgQERERgT+goKKhoiACoaChmgwBC0QAAAAAAADwPyAARAAAAAAAAOA/oiIDoSIERAAAAAAAAPA/IAShIAOhIAAgACAAIABEkBXLGaAB+j6iRHdRwRZswVa/oKJETFVVVVVVpT+goiAAIACiIgMgA6IgACAARNQ4iL7p+qi9okTEsbS9nu4hPqCiRK1SnIBPfpK+oKKgoiABIAKioaCgmgsgBUEgaiQAC54GAgV8An8jAEEgayIGJAACQCAAvUIgiKdB/////wdxIgdB/MOk/wNPBEACQAJAAkACQCAHQf//v/8HTQRAIAZBCGogABAMIAYrAxghAiAGKwMIIgEgAaIiACAAoiEDIAYoAhBBA3EOAwIDBAELIAAgAKEhAAwFC0QAAAAAAADwPyAARAAAAAAAAOA/oiIEoSIFRAAAAAAAAPA/IAWhIAShIAAgACAAIABEkBXLGaAB+j6iRHdRwRZswVa/oKJETFVVVVVVpT+goiADIAOiIAAgAETUOIi+6fqovaJExLG0vZ7uIT6gokStUpyAT36SvqCioKIgASACoqGgoJohAAwECyABIAEgAKIiAURJVVVVVVXFP6IgACACRAAAAAAAAOA/oiABIAAgA6IgAER81c9a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ZENpcmNsZVNlZ21lbnQyIGRvZXMgbm90IGhhdmUgYSBzb3VyY2UgcG9pbnQRDBAAKwAAAHNyY1xrZXJuZWxcY2lyY2xlX3NlZ21lbnRfMi5ycwAARAwQAB4AAAAhAAAACQAAAHNyY1xrZXJuZWxcYXJjX3NlZ21lbnRfMi5ycwB0DBAAGwAAAEEAAAAYAAAAdAwQABsAAABCAAAAGAAAAG51bGwgcG9pbnRlciBwYXNzZWQgdG8gcnVzdHJlY3Vyc2l2ZSB1c2Ugb2YgYW4gb2JqZWN0IGRldGVjdGVkIHdoaWNoIHdvdWxkIGxlYWQgdG8gdW5zYWZlIGFsaWFzaW5nIGluIHJ1c3QAAAgAAAAEAAAABAAAAAkAAAAKAAAADAAAAAQAAAALAAAADAAAAA0AAAAOAAAADAAAAAQAAAAPAAAAEAAAABEAAAAKAAAADAAAAAQAAAASAAAAEwAAABQAAAAvcnVzdC9kZXBzL2RsbWFsbG9jLTAuMi42L3NyYy9kbG1hbGxvYy5yc2Fzc2VydGlvbiBmYWlsZWQ6IHBzaXplID49IHNpemUgKyBtaW5fb3ZlcmhlYWQAdA0QACkAAACoBAAACQAAAGFzc2VydGlvbiBmYWlsZWQ6IHBzaXplIDw9IHNpemUgKyBtYXhfb3ZlcmhlYWQAAHQNEAApAAAArgQAAA0AAAABAAAAAAAAAGxpYnJhcnkvc3RkL3NyYy9pby9idWZmZXJlZC9saW5ld3JpdGVyc2hpbS5yc21pZCA+IGxlbgAAUQ4QAAkAAAAkDhAALQAAAAoBAAApAAAAZW50aXR5IG5vdCBmb3VuZHBlcm1pc3Npb24gZGVuaWVkY29ubmVjdGlvbiByZWZ1c2VkY29ubmVjdGlvbiByZXNldGhvc3QgdW5yZWFjaGFibGVuZXR3b3JrIHVucmVhY2hhYmxlY29ubmVjdGlvbiBhYm9ydGVkbm90IGNvbm5lY3RlZGFkZHJlc3MgaW4gdXNlYWRkcmVzcyBub3QgYXZhaWxhYmxlbmV0d29yayBkb3duYnJva2VuIHBpcGVlbnRpdHkgYWxyZWFkeSBleGlzdHNvcGVyYXRpb24gd291bGQgYmxvY2tub3QgYSBkaXJlY3RvcnlpcyBhIGRpcmVjdG9yeWRpcmVjdG9yeSBub3QgZW1wdHlyZWFkLW9ubHkgZmlsZXN5c3RlbSBvciBzdG9yYWdlIG1lZGl1bWZpbGVzeXN0ZW0gbG9vcCBvciBpbmRpcmVjdGlvbiBsaW1pdCAoZS5nLiBzeW1saW5rIGxvb3Apc3RhbGUgbmV0d29yayBmaWxlIGhhbmRsZWludmFsaWQgaW5wdXQgcGFyYW1ldGVyaW52YWxpZCBkYXRhdGltZWQgb3V0d3JpdGUgemVyb25vIHN0b3JhZ2Ugc3BhY2VzZWVrIG9uIHVuc2Vla2FibGUgZmlsZWZpbGVzeXN0ZW0gcXVvdGEgZXhjZWVkZWRmaWxlIHRvbyBsYXJnZXJlc291cmNlIGJ1c3lleGVjdXRhYmxlIGZpbGUgYnVzeWRlYWRsb2NrY3Jvc3MtZGV2aWNlIGxpbmsgb3IgcmVuYW1ldG9vIG1hbnkgbGlua3NpbnZhbGlkIGZpbGVuYW1lYXJndW1lbnQgbGlzdCB0b28gbG9uZ29wZXJhdGlvbiBpbnRlcnJ1cHRlZHVuc3VwcG9ydGVkdW5leHBlY3RlZCBlbmQgb2YgZmlsZW91dCBvZiBtZW1vcnlvdGhlciBlcnJvcnVuY2F0ZWdvcml6ZWQgZXJyb3IgKG9zIGVycm9yICkAAAABAAAAAAAAAGEREAALAAAAbBEQAAEAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vc3RkaW8ucnMAiBEQABsAAAAtAwAAFAAAAGZhaWxlZCBwcmludGluZyB0byA6IAAAALQREAATAAAAxxEQAAIAAACIERAAGwAAAF4EAAAJAAAAc3Rkb3V0Zm9ybWF0dGVyIGVycm9yAAAA8hEQAA8AAAAoAAAAY2Fubm90IHJlY3Vyc2l2ZWx5IGFjcXVpcmUgbXV0ZXgQEhAAIAAAAGxpYnJhcnkvc3RkL3NyYy9zeXMvc3luYy9tdXRleC9ub190aHJlYWRzLnJzOBIQACwAAAAUAAAACQAAAGxpYnJhcnkvc3RkL3NyYy9zeW5jL29uY2UucnN0EhAAHAAAANAAAAAUAAAAdBIQABwAAADQAAAAMQAAAGxvY2sgY291bnQgb3ZlcmZsb3cgaW4gcmVlbnRyYW50IG11dGV4bGlicmFyeS9zdGQvc3JjL3N5bmMvcmVlbnRyYW50X2xvY2sucnPWEhAAJgAAALwAAAAtAAAAbWVtb3J5IGFsbG9j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";
const __vite__wasmModule = await __vite__initWasm({ "./rcgal_bg.js": { __wbg_triangle2indices_new: __wbg_triangle2indices_new, __wbg_linesegment2_new: __wbg_linesegment2_new, __wbg_point2_new: __wbg_point2_new, __wbg_point2_unwrap: __wbg_point2_unwrap, __wbindgen_throw: __wbindgen_throw } }, __vite__wasmUrl);
const memory = __vite__wasmModule.memory;
const is_point_2_on_circle_segment_2 = __vite__wasmModule.is_point_2_on_circle_segment_2;
const locate_point_2_circle_segment_2 = __vite__wasmModule.locate_point_2_circle_segment_2;
const is_point_2_on_line_segment_2 = __vite__wasmModule.is_point_2_on_line_segment_2;
const locate_point_2_line_segment_2 = __vite__wasmModule.locate_point_2_line_segment_2;
const point_2_project_line_segment_2 = __vite__wasmModule.point_2_project_line_segment_2;
const __wbg_triangle2indices_free = __vite__wasmModule.__wbg_triangle2indices_free;
const __wbg_get_triangle2indices_a = __vite__wasmModule.__wbg_get_triangle2indices_a;
const __wbg_set_triangle2indices_a = __vite__wasmModule.__wbg_set_triangle2indices_a;
const __wbg_get_triangle2indices_b = __vite__wasmModule.__wbg_get_triangle2indices_b;
const __wbg_set_triangle2indices_b = __vite__wasmModule.__wbg_set_triangle2indices_b;
const __wbg_get_triangle2indices_c = __vite__wasmModule.__wbg_get_triangle2indices_c;
const __wbg_set_triangle2indices_c = __vite__wasmModule.__wbg_set_triangle2indices_c;
const earcut = __vite__wasmModule.earcut;
const __wbg_linesegment2_free = __vite__wasmModule.__wbg_linesegment2_free;
const linesegment2_new = __vite__wasmModule.linesegment2_new;
const linesegment2_segment_type = __vite__wasmModule.linesegment2_segment_type;
const linesegment2_source = __vite__wasmModule.linesegment2_source;
const linesegment2_target = __vite__wasmModule.linesegment2_target;
const __wbg_convexhull2_free = __vite__wasmModule.__wbg_convexhull2_free;
const convexhull2_new = __vite__wasmModule.convexhull2_new;
const convexhull2_convex_hull = __vite__wasmModule.convexhull2_convex_hull;
const __wbg_sweepsegment2intersection_free = __vite__wasmModule.__wbg_sweepsegment2intersection_free;
const sweepsegment2intersection_new = __vite__wasmModule.sweepsegment2intersection_new;
const sweepsegment2intersection_push_segment = __vite__wasmModule.sweepsegment2intersection_push_segment;
const sweepsegment2intersection_intersection = __vite__wasmModule.sweepsegment2intersection_intersection;
const is_point_2_on_arc_segment_2 = __vite__wasmModule.is_point_2_on_arc_segment_2;
const locate_point_2_arc_segment_2 = __vite__wasmModule.locate_point_2_arc_segment_2;
const locate_point_2_polygon_2 = __vite__wasmModule.locate_point_2_polygon_2;
const locate_point_2_triangle_2 = __vite__wasmModule.locate_point_2_triangle_2;
const __wbg_arcsegment2_free = __vite__wasmModule.__wbg_arcsegment2_free;
const arcsegment2_new = __vite__wasmModule.arcsegment2_new;
const arcsegment2_segment_type = __vite__wasmModule.arcsegment2_segment_type;
const arcsegment2_source = __vite__wasmModule.arcsegment2_source;
const arcsegment2_source_radian = __vite__wasmModule.arcsegment2_source_radian;
const arcsegment2_target = __vite__wasmModule.arcsegment2_target;
const arcsegment2_target_radian = __vite__wasmModule.arcsegment2_target_radian;
const arcsegment2_center = __vite__wasmModule.arcsegment2_center;
const arcsegment2_radius = __vite__wasmModule.arcsegment2_radius;
const __wbg_point2_free = __vite__wasmModule.__wbg_point2_free;
const point2_new = __vite__wasmModule.point2_new;
const point2_x = __vite__wasmModule.point2_x;
const point2_y = __vite__wasmModule.point2_y;
const point2_equals = __vite__wasmModule.point2_equals;
const point2_get_vector = __vite__wasmModule.point2_get_vector;
const point2_distance = __vite__wasmModule.point2_distance;
const point2_turn = __vite__wasmModule.point2_turn;
const __wbg_polygon2_free = __vite__wasmModule.__wbg_polygon2_free;
const polygon2_new = __vite__wasmModule.polygon2_new;
const polygon2_vertices = __vite__wasmModule.polygon2_vertices;
const polygon2_edges = __vite__wasmModule.polygon2_edges;
const polygon2_area = __vite__wasmModule.polygon2_area;
const polygon2_is_simple = __vite__wasmModule.polygon2_is_simple;
const polygon2_is_convex = __vite__wasmModule.polygon2_is_convex;
const __wbg_circlesegment2_free = __vite__wasmModule.__wbg_circlesegment2_free;
const circlesegment2_new = __vite__wasmModule.circlesegment2_new;
const circlesegment2_segment_type = __vite__wasmModule.circlesegment2_segment_type;
const circlesegment2_center = __vite__wasmModule.circlesegment2_center;
const circlesegment2_radius = __vite__wasmModule.circlesegment2_radius;
const __wbg_segment2_free = __vite__wasmModule.__wbg_segment2_free;
const __wbg_get_segment2_segment_type = __vite__wasmModule.__wbg_get_segment2_segment_type;
const __wbg_set_segment2_segment_type = __vite__wasmModule.__wbg_set_segment2_segment_type;
const __wbg_get_segment2_line_segment_2 = __vite__wasmModule.__wbg_get_segment2_line_segment_2;
const __wbg_set_segment2_line_segment_2 = __vite__wasmModule.__wbg_set_segment2_line_segment_2;
const __wbg_get_segment2_circle_segment_2 = __vite__wasmModule.__wbg_get_segment2_circle_segment_2;
const __wbg_set_segment2_circle_segment_2 = __vite__wasmModule.__wbg_set_segment2_circle_segment_2;
const __wbg_get_segment2_arc_segment_2 = __vite__wasmModule.__wbg_get_segment2_arc_segment_2;
const __wbg_set_segment2_arc_segment_2 = __vite__wasmModule.__wbg_set_segment2_arc_segment_2;
const segment2_new = __vite__wasmModule.segment2_new;
const __wbg_triangle2_free = __vite__wasmModule.__wbg_triangle2_free;
const triangle2_new = __vite__wasmModule.triangle2_new;
const triangle2_b = __vite__wasmModule.triangle2_b;
const triangle2_c = __vite__wasmModule.triangle2_c;
const triangle2_vertices = __vite__wasmModule.triangle2_vertices;
const triangle2_edges = __vite__wasmModule.triangle2_edges;
const triangle2_orientation = __vite__wasmModule.triangle2_orientation;
const triangle2_reverse_orientation = __vite__wasmModule.triangle2_reverse_orientation;
const triangle2_area = __vite__wasmModule.triangle2_area;
const __wbg_vector2_free = __vite__wasmModule.__wbg_vector2_free;
const vector2_new = __vite__wasmModule.vector2_new;
const vector2_x = __vite__wasmModule.vector2_x;
const vector2_y = __vite__wasmModule.vector2_y;
const vector2_length = __vite__wasmModule.vector2_length;
const vector2_normalize = __vite__wasmModule.vector2_normalize;
const vector2_dot = __vite__wasmModule.vector2_dot;
const vector2_cross = __vite__wasmModule.vector2_cross;
const vector2_radian_to = __vite__wasmModule.vector2_radian_to;
const triangle2_a = __vite__wasmModule.triangle2_a;
const is_segment_2_segment_2_intersected = __vite__wasmModule.is_segment_2_segment_2_intersected;
const segment_2_segment_2_intersection = __vite__wasmModule.segment_2_segment_2_intersection;
const __wbindgen_add_to_stack_pointer = __vite__wasmModule.__wbindgen_add_to_stack_pointer;
const __wbindgen_free = __vite__wasmModule.__wbindgen_free;
const __wbindgen_malloc = __vite__wasmModule.__wbindgen_malloc;

const wasm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  __wbg_arcsegment2_free,
  __wbg_circlesegment2_free,
  __wbg_convexhull2_free,
  __wbg_get_segment2_arc_segment_2,
  __wbg_get_segment2_circle_segment_2,
  __wbg_get_segment2_line_segment_2,
  __wbg_get_segment2_segment_type,
  __wbg_get_triangle2indices_a,
  __wbg_get_triangle2indices_b,
  __wbg_get_triangle2indices_c,
  __wbg_linesegment2_free,
  __wbg_point2_free,
  __wbg_polygon2_free,
  __wbg_segment2_free,
  __wbg_set_segment2_arc_segment_2,
  __wbg_set_segment2_circle_segment_2,
  __wbg_set_segment2_line_segment_2,
  __wbg_set_segment2_segment_type,
  __wbg_set_triangle2indices_a,
  __wbg_set_triangle2indices_b,
  __wbg_set_triangle2indices_c,
  __wbg_sweepsegment2intersection_free,
  __wbg_triangle2_free,
  __wbg_triangle2indices_free,
  __wbg_vector2_free,
  __wbindgen_add_to_stack_pointer,
  __wbindgen_free,
  __wbindgen_malloc,
  arcsegment2_center,
  arcsegment2_new,
  arcsegment2_radius,
  arcsegment2_segment_type,
  arcsegment2_source,
  arcsegment2_source_radian,
  arcsegment2_target,
  arcsegment2_target_radian,
  circlesegment2_center,
  circlesegment2_new,
  circlesegment2_radius,
  circlesegment2_segment_type,
  convexhull2_convex_hull,
  convexhull2_new,
  earcut,
  is_point_2_on_arc_segment_2,
  is_point_2_on_circle_segment_2,
  is_point_2_on_line_segment_2,
  is_segment_2_segment_2_intersected,
  linesegment2_new,
  linesegment2_segment_type,
  linesegment2_source,
  linesegment2_target,
  locate_point_2_arc_segment_2,
  locate_point_2_circle_segment_2,
  locate_point_2_line_segment_2,
  locate_point_2_polygon_2,
  locate_point_2_triangle_2,
  memory,
  point2_distance,
  point2_equals,
  point2_get_vector,
  point2_new,
  point2_turn,
  point2_x,
  point2_y,
  point_2_project_line_segment_2,
  polygon2_area,
  polygon2_edges,
  polygon2_is_convex,
  polygon2_is_simple,
  polygon2_new,
  polygon2_vertices,
  segment2_new,
  segment_2_segment_2_intersection,
  sweepsegment2intersection_intersection,
  sweepsegment2intersection_new,
  sweepsegment2intersection_push_segment,
  triangle2_a,
  triangle2_area,
  triangle2_b,
  triangle2_c,
  triangle2_edges,
  triangle2_new,
  triangle2_orientation,
  triangle2_reverse_orientation,
  triangle2_vertices,
  vector2_cross,
  vector2_dot,
  vector2_length,
  vector2_new,
  vector2_normalize,
  vector2_radian_to,
  vector2_x,
  vector2_y
}, Symbol.toStringTag, { value: 'Module' }));

__wbg_set_wasm(wasm);

const intersect = (lines, circles) => {
  const intersection = new SweepSegment2Intersection();
  lines.forEach(line => {
    const [start2, end2] = line;
    intersection.push_segment(new Segment2(Segment2Type.LineSegment2, new LineSegment2(new Point2(start2.x, start2.y), new Point2(end2.x, end2.y))));
  });
  circles.forEach(circle => {
    const [center, radius] = circle;
    intersection.push_segment(new Segment2(Segment2Type.CircleSegment2, void 0, new CircleSegment2(new Point2(center.x, center.y), radius)));
  });
  const start = Date.now();
  const points = intersection.intersection();
  const end = Date.now();
  let result = [];
  points.forEach(point => {
    result.push([{
      x: point.x(),
      y: point.y()
    }, 5]);
  });
  return {
    points: result,
    cost: end - start
  };
};
const useDrawStore = defineStore({
  id: "drawStore",
  state: () => ({
    cost: null,
    points: [],
    lines: [],
    circles: [],
    tempLine: null,
    tempCircle: null
  }),
  actions: {
    clear() {
      this.cost = null;
      this.points = [];
      this.lines = [];
      this.circles = [];
      this.tempLine = null;
      this.tempCircle = null;
    },
    addLine(line) {
      const updateLines = [...this.lines, line];
      const circles = this.circles;
      const intersection = intersect(updateLines, circles);
      this.lines = updateLines;
      this.points = intersection.points;
      this.cost = intersection.cost;
    },
    addTempLine() {
      if (this.tempLine) {
        const updateLines = [...this.lines, this.tempLine];
        const circles = this.circles;
        const intersection = intersect(updateLines, circles);
        this.lines = updateLines;
        this.tempLine = null;
        this.points = intersection.points;
        this.cost = intersection.cost;
      }
    },
    setTempLine(line) {
      this.tempLine = line;
    },
    addCircle(circle) {
      const updateCircles = [...this.circles, circle];
      const lines = this.lines;
      const intersection = intersect(lines, updateCircles);
      this.circles = updateCircles;
      this.points = intersection.points;
      this.cost = intersection.cost;
    },
    addTempCircle() {
      if (this.tempCircle) {
        const updateCircles = [...this.circles, this.tempCircle];
        const lines = this.lines;
        const intersection = intersect(lines, updateCircles);
        this.circles = updateCircles;
        this.tempCircle = null;
        this.points = intersection.points;
        this.cost = intersection.cost;
      }
    },
    setTempCircle(circle) {
      this.tempCircle = circle;
    }
  }
});

class DrawLineSegmentAction {
  constructor() {
    this.drawFlag = false;
  }
  static getInstance() {
    if (!DrawLineSegmentAction.instance) {
      DrawLineSegmentAction.instance = new DrawLineSegmentAction();
    }
    return DrawLineSegmentAction.instance;
  }
  actionType() {
    return DrawActionType.LineSegment;
  }
  onStart() {}
  onDraw() {}
  onStop() {
    this.drawFlag = false;
    useDrawStore().setTempLine(null);
  }
  onPointerDown(event) {
    if (event.evt.button == 0) {
      const stage = event.target.getStage();
      if (stage) {
        if (this.drawFlag) {
          const tempLine = useDrawStore().tempLine;
          if (tempLine) {
            useDrawStore().addLine(tempLine);
            useDrawStore().setTempLine(null);
          }
          this.drawFlag = false;
        } else {
          const start = stage.getPointerPosition();
          const end = stage.getPointerPosition();
          if (start && end) {
            useDrawStore().setTempLine([start, end]);
            this.drawFlag = true;
          }
        }
      }
    } else if (event.evt.button == 2) {
      this.drawFlag = false;
      useDrawStore().setTempLine(null);
    }
  }
  onPointerMove(event) {
    if (this.drawFlag) {
      const tempLine = useDrawStore().tempLine;
      if (tempLine) {
        const stage = event.target.getStage();
        if (stage) {
          const end = stage.getPointerPosition();
          if (end) {
            useDrawStore().setTempLine([tempLine[0], end]);
          }
        }
      }
    }
  }
  onPointerUp(event) {}
}

class DrawCircleSegmentAction {
  constructor() {
    this.drawFlag = false;
    this.center = null;
    this.radius = null;
  }
  static getInstance() {
    if (!DrawCircleSegmentAction.instance) {
      DrawCircleSegmentAction.instance = new DrawCircleSegmentAction();
    }
    return DrawCircleSegmentAction.instance;
  }
  actionType() {
    return DrawActionType.CircleSegment;
  }
  onStart() {}
  onDraw() {}
  onStop() {}
  onPointerDown(event) {
    if (event.evt.button == 0) {
      const stage = event.target.getStage();
      if (stage) {
        const point = stage.getPointerPosition();
        if (point) {
          if (this.drawFlag) {
            useDrawStore().addCircle([this.center, this.radius]);
            useDrawStore().setTempCircle(null);
            this.drawFlag = false;
          } else {
            this.center = point;
            this.drawFlag = true;
          }
        }
      }
    } else if (event.evt.button == 2) {
      useDrawStore().setTempCircle(null);
      this.center = null;
      this.radius = null;
      this.drawFlag = false;
    }
  }
  onPointerMove(event) {
    if (this.drawFlag) {
      const stage = event.target.getStage();
      if (stage) {
        const point = stage.getPointerPosition();
        if (point) {
          this.radius = Math.sqrt(Math.pow(this.center.x - point.x, 2) + Math.pow(this.center.y - point.y, 2));
          useDrawStore().setTempCircle([this.center, this.radius]);
        }
      }
    }
  }
  onPointerUp(event) {}
}

class DrawManager {
  constructor() {
    this.actions = /* @__PURE__ */new Map();
    this.activeAction = null;
    this.addAction(DrawLineSegmentAction.getInstance());
    this.addAction(DrawCircleSegmentAction.getInstance());
  }
  static getInstance() {
    if (!DrawManager.instance) {
      DrawManager.instance = new DrawManager();
    }
    return DrawManager.instance;
  }
  addAction(action) {
    this.actions.set(action.actionType(), action);
  }
  getAction(actionType) {
    return this.actions.get(actionType);
  }
  removeAction(actionType) {
    this.actions.delete(actionType);
  }
  setActiveAction(actionType) {
    this.activeAction?.onStop();
    this.activeAction = this.actions.get(actionType) || null;
  }
  getActiveAction() {
    return this.activeAction;
  }
}

const _sfc_main = {
  name: "WasmExample",
  data() {
    return {
      drawType: null,
      configKonva: {
        width: 200,
        height: 200
      },
      drawManager: DrawManager.getInstance(),
      drawStore: useDrawStore(),
      darkMode: useData().value.frontmatter.darkMode
    };
  },
  methods: {
    handleResize() {
      const content = document.getElementById("VPContent");
      const header = document.getElementsByClassName("VPNav")[0];
      this.configKonva.width = content.clientWidth;
      this.configKonva.height = content.clientHeight - header.clientHeight - this.$refs.header.clientHeight;
    },
    handleStop() {
      this.drawType = null;
    },
    handleClear() {
      this.drawStore.clear();
    },
    handlePointerDown(event) {
      this.drawManager.getActiveAction()?.onPointerDown(event);
    },
    handlePointerMove(event) {
      this.drawManager.getActiveAction()?.onPointerMove(event);
    }
  },
  watch: {
    drawType(value) {
      switch (value) {
        case "line":
          this.drawManager.setActiveAction(DrawActionType.LineSegment);
          break;
        case "circle":
          this.drawManager.setActiveAction(DrawActionType.CircleSegment);
          break;
        case "arc":
          this.drawManager.setActiveAction(DrawActionType.ArcSegment);
          break;
        default:
          this.drawManager.setActiveAction(DrawActionType.None);
          break;
      }
    }
  },
  async mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  async unmounted() {
    window.removeEventListener("resize", this.handleResize);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_a_radio_group = RadioGroup;
  const _component_a_radio = Radio;
  const _component_a_button_group = ButtonGroup;
  const _component_a_button = Button;
  const _component_v_stage = resolveComponent("v-stage");
  const _component_v_layer = resolveComponent("v-layer");
  const _component_v_line = resolveComponent("v-line");
  const _component_v_circle = resolveComponent("v-circle");
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "container"
  }, _attrs))}><div class="wasm-header">`);
  _push(ssrRenderComponent(_component_a_radio_group, {
    type: "button",
    modelValue: $data.drawType,
    "onUpdate:modelValue": $event => $data.drawType = $event
  }, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent(_component_a_radio, {
          value: "line"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Line Segment`);
            } else {
              return [createTextVNode("Line Segment")];
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent(_component_a_radio, {
          value: "circle"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Circle Segment`);
            } else {
              return [createTextVNode("Circle Segment")];
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent(_component_a_radio, {
          value: "arc"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Arc Segment`);
            } else {
              return [createTextVNode("Arc Segment")];
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [createVNode(_component_a_radio, {
          value: "line"
        }, {
          default: withCtx(() => [createTextVNode("Line Segment")]),
          _: 1
        }), createVNode(_component_a_radio, {
          value: "circle"
        }, {
          default: withCtx(() => [createTextVNode("Circle Segment")]),
          _: 1
        }), createVNode(_component_a_radio, {
          value: "arc"
        }, {
          default: withCtx(() => [createTextVNode("Arc Segment")]),
          _: 1
        })];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_a_button_group, null, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent(_component_a_button, {
          onClick: $options.handleStop
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Stop`);
            } else {
              return [createTextVNode("Stop")];
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent(_component_a_button, {
          onClick: $options.handleClear
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Clear`);
            } else {
              return [createTextVNode("Clear")];
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [createVNode(_component_a_button, {
          onClick: $options.handleStop
        }, {
          default: withCtx(() => [createTextVNode("Stop")]),
          _: 1
        }, 8, ["onClick"]), createVNode(_component_a_button, {
          onClick: $options.handleClear
        }, {
          default: withCtx(() => [createTextVNode("Clear")]),
          _: 1
        }, 8, ["onClick"])];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_v_stage, {
    config: $data.configKonva,
    onPointermove: $options.handlePointerMove,
    onPointerdown: $options.handlePointerDown
  }, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent(_component_v_layer, null, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<!--[-->`);
              ssrRenderList($data.drawStore.lines, line => {
                _push(ssrRenderComponent(_component_v_line, {
                  config: {
                    points: [line[0].x, line[0].y, line[1].x, line[1].y],
                    stroke: '#df4b26',
                    strokeWidth: 3,
                    tension: 0.5,
                    lineCap: 'round',
                    lineJoin: 'round'
                  }
                }, null, _parent, _scopeId));
              });
              _push(`<!--]--><!--[-->`);
              ssrRenderList($data.drawStore.circles, circle => {
                _push(ssrRenderComponent(_component_v_circle, {
                  config: {
                    x: circle[0].x,
                    y: circle[0].y,
                    radius: circle[1],
                    stroke: '#df4b26',
                    strokeWidth: 3
                  }
                }, null, _parent, _scopeId));
              });
              _push(`<!--]-->`);
              if ($data.drawStore.tempCircle) {
                _push(ssrRenderComponent(_component_v_circle, {
                  config: {
                    x: $data.drawStore.tempCircle[0].x,
                    y: $data.drawStore.tempCircle[0].y,
                    radius: $data.drawStore.tempCircle[1],
                    stroke: '#df4b26',
                    strokeWidth: 3
                  }
                }, null, _parent, _scopeId));
              } else {
                _push(`<!---->`);
              }
              if ($data.drawStore.tempLine) {
                _push(ssrRenderComponent(_component_v_line, {
                  config: {
                    points: [$data.drawStore.tempLine[0].x, $data.drawStore.tempLine[0].y, $data.drawStore.tempLine[1].x, $data.drawStore.tempLine[1].y],
                    stroke: '#df4b26',
                    strokeWidth: 3,
                    tension: 0.5,
                    lineCap: 'round',
                    lineJoin: 'round'
                  }
                }, null, _parent, _scopeId));
              } else {
                _push(`<!---->`);
              }
            } else {
              return [(openBlock(true), createBlock(Fragment, null, renderList($data.drawStore.lines, line => {
                return openBlock(), createBlock(_component_v_line, {
                  config: {
                    points: [line[0].x, line[0].y, line[1].x, line[1].y],
                    stroke: '#df4b26',
                    strokeWidth: 3,
                    tension: 0.5,
                    lineCap: 'round',
                    lineJoin: 'round'
                  }
                }, null, 8, ["config"]);
              }), 256)), (openBlock(true), createBlock(Fragment, null, renderList($data.drawStore.circles, circle => {
                return openBlock(), createBlock(_component_v_circle, {
                  config: {
                    x: circle[0].x,
                    y: circle[0].y,
                    radius: circle[1],
                    stroke: '#df4b26',
                    strokeWidth: 3
                  }
                }, null, 8, ["config"]);
              }), 256)), $data.drawStore.tempCircle ? (openBlock(), createBlock(_component_v_circle, {
                key: 0,
                config: {
                  x: $data.drawStore.tempCircle[0].x,
                  y: $data.drawStore.tempCircle[0].y,
                  radius: $data.drawStore.tempCircle[1],
                  stroke: '#df4b26',
                  strokeWidth: 3
                }
              }, null, 8, ["config"])) : createCommentVNode("", true), $data.drawStore.tempLine ? (openBlock(), createBlock(_component_v_line, {
                key: 1,
                config: {
                  points: [$data.drawStore.tempLine[0].x, $data.drawStore.tempLine[0].y, $data.drawStore.tempLine[1].x, $data.drawStore.tempLine[1].y],
                  stroke: '#df4b26',
                  strokeWidth: 3,
                  tension: 0.5,
                  lineCap: 'round',
                  lineJoin: 'round'
                }
              }, null, 8, ["config"])) : createCommentVNode("", true)];
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent(_component_v_layer, null, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<!--[-->`);
              ssrRenderList($data.drawStore.points, point => {
                _push(ssrRenderComponent(_component_v_circle, {
                  config: {
                    x: point[0].x,
                    y: point[0].y,
                    radius: 5,
                    fill: 'black'
                  }
                }, null, _parent, _scopeId));
              });
              _push(`<!--]-->`);
            } else {
              return [(openBlock(true), createBlock(Fragment, null, renderList($data.drawStore.points, point => {
                return openBlock(), createBlock(_component_v_circle, {
                  config: {
                    x: point[0].x,
                    y: point[0].y,
                    radius: 5,
                    fill: 'black'
                  }
                }, null, 8, ["config"]);
              }), 256))];
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [createVNode(_component_v_layer, null, {
          default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($data.drawStore.lines, line => {
            return openBlock(), createBlock(_component_v_line, {
              config: {
                points: [line[0].x, line[0].y, line[1].x, line[1].y],
                stroke: '#df4b26',
                strokeWidth: 3,
                tension: 0.5,
                lineCap: 'round',
                lineJoin: 'round'
              }
            }, null, 8, ["config"]);
          }), 256)), (openBlock(true), createBlock(Fragment, null, renderList($data.drawStore.circles, circle => {
            return openBlock(), createBlock(_component_v_circle, {
              config: {
                x: circle[0].x,
                y: circle[0].y,
                radius: circle[1],
                stroke: '#df4b26',
                strokeWidth: 3
              }
            }, null, 8, ["config"]);
          }), 256)), $data.drawStore.tempCircle ? (openBlock(), createBlock(_component_v_circle, {
            key: 0,
            config: {
              x: $data.drawStore.tempCircle[0].x,
              y: $data.drawStore.tempCircle[0].y,
              radius: $data.drawStore.tempCircle[1],
              stroke: '#df4b26',
              strokeWidth: 3
            }
          }, null, 8, ["config"])) : createCommentVNode("", true), $data.drawStore.tempLine ? (openBlock(), createBlock(_component_v_line, {
            key: 1,
            config: {
              points: [$data.drawStore.tempLine[0].x, $data.drawStore.tempLine[0].y, $data.drawStore.tempLine[1].x, $data.drawStore.tempLine[1].y],
              stroke: '#df4b26',
              strokeWidth: 3,
              tension: 0.5,
              lineCap: 'round',
              lineJoin: 'round'
            }
          }, null, 8, ["config"])) : createCommentVNode("", true)]),
          _: 1
        }), createVNode(_component_v_layer, null, {
          default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($data.drawStore.points, point => {
            return openBlock(), createBlock(_component_v_circle, {
              config: {
                x: point[0].x,
                y: point[0].y,
                radius: 5,
                fill: 'black'
              }
            }, null, 8, ["config"]);
          }), 256))]),
          _: 1
        })];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add(".vitepress/components/WasmExample.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const WasmExample = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender', _sfc_ssrRender]]);

const pinia = createPinia();
const RawTheme = {
  extends: theme,
  enhanceApp({
    app
  }) {
    app.use(pinia).use(VueKonva);
    app.component("WasmExample", WasmExample);
  }
};

const ClientOnly = defineComponent({
  setup(_, {
    slots
  }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});

function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = el.parentElement?.parentElement;
        if (!group) return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0) return;
        const blocks = group.querySelector(".blocks");
        if (!blocks) return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current) return;
        const next = blocks.children[i];
        if (!next || current === next) return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group?.querySelector(`label[for="${el.id}"]`);
        label?.scrollIntoView({
          block: "nearest"
        });
      }
    });
  }
}

function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = new WeakMap();
    window.addEventListener('click', e => {
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = el.nextElementSibling?.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = ['.vp-copy-ignore', '.diff.remove'];
        // Clone the node and remove the ignored nodes
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(',')).forEach(node => node.remove());
        let text = clone.textContent || '';
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, '').trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add('copied');
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove('copied');
            el.blur();
            timeoutIdMap.delete(el);
          }, 2000);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement('textarea');
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '');
    element.style.contain = 'strict';
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    element.style.fontSize = '12pt'; // Prevent zooming on iOS
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    // Explicit selection workaround for iOS
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand('copy');
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges(); // originalRange can't be truthy when selection is falsy
      selection.addRange(originalRange);
    }
    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}

function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl?.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl?.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", {
        name: "description",
        content: description
      }]);
    }
    updateHeadTags(mergeHead(siteData.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && !attrs.async) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h) => !isMetaDescription(h));
}

// Customized pre-fetch for page chunks based on
// https://github.com/GoogleChromeLabs/quicklink
const hasFetched = new Set();
const createLink = () => document.createElement('link');
const viaDOM = url => {
  const link = createLink();
  link.rel = `prefetch`;
  link.href = url;
  document.head.appendChild(link);
};
const viaXHR = url => {
  const req = new XMLHttpRequest();
  req.open('GET', url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports('prefetch') ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    // Don't prefetch if using 2G or if Save-Data is enabled.
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const link = entry.target;
          observer.unobserve(link);
          const {
            pathname
          } = link;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath) doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll('#app a').forEach(link => {
        const {
          hostname,
          pathname
        } = new URL(link.href instanceof SVGAnimatedString ? link.href.animVal : link.href, link.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== '.html') {
          return;
        }
        if (
        // only prefetch same tab navigation, since a new tab will load
        // the lean js chunk instead.
        link.target !== '_blank' &&
        // only prefetch inbound links
        hostname === location.hostname) {
          if (pathname !== location.pathname) {
            observer.observe(link);
          } else {
            // No need to prefetch chunk for the current page, but also mark
            // it as already fetched. This is because the initial page uses its
            // lean chunk, and if we don't mark it, navigation to another page
            // with a link back to the first page will fetch its full chunk
            // which isn't needed.
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}

function resolveThemeExtends(theme) {
  if (theme.extends) {
    const base = resolveThemeExtends(theme.extends);
    return {
      ...base,
      ...theme,
      async enhanceApp(ctx) {
        if (base.enhanceApp) await base.enhanceApp(ctx);
        if (theme.enhanceApp) await theme.enhanceApp(ctx);
      }
    };
  }
  return theme;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const {
      site,
      lang,
      dir
    } = useData$2();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup) Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return {
    app,
    router,
    data
  };
}
function newApp() {
  return createSSRApp(VitePressApp) ;
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (false) ; else if (true) {
        pageModule = import(
          /*@vite-ignore*/
          `${pageFilePath}?t=${Date.now()}`
        );
      } else ;
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({
    app,
    router,
    data
  }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}

// entry for SSR
async function render(path) {
  const {
    app,
    router
  } = await createApp();
  await router.go(path);
  const ctx = {
    content: ''
  };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}

export { useData$1 as a, useSessionStorage as b, computedAsync as c, useLocalStorage as d, useRouter as e, createSearchTranslate as f, useEventListener as g, useScrollLock as h, dataSymbol as i, escapeRegExp as j, inBrowser as k, onKeyStroke as o, pathToFile as p, render, tryOnScopeDispose as t, unrefElement as u, watchDebounced as w };
