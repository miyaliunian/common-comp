/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 568:
/***/ (function(module) {

function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=[].concat(d,e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=[].concat(g,h)}else c[b][f]=a[b][f];}else if("hook"===b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Component: function() { return /* reexport */ button_button; },
  "default": function() { return /* binding */ entry_lib; }
});

// NAMESPACE OBJECT: ./packages/index.js
var packages_namespaceObject = {};
__webpack_require__.r(packages_namespaceObject);
__webpack_require__.d(packages_namespaceObject, {
  w: function() { return button_button; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/button.vue?vue&type=template&id=552e77e5
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    on: {
      "click": _vm.handleClick
    }
  }, [_c('van-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v(_vm._s(_vm.desc))])], 1);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/vant/es/style/base.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/vant/es/info/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/vant/es/icon/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/vant/es/loading/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/vant/es/button/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/vant/es/button/style/index.js





;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return extends_extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__(568);
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
function gen(name, mods) {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return " " + name + "--" + mods;
  }

  if (Array.isArray(mods)) {
    return mods.reduce(function (ret, item) {
      return ret + gen(name, item);
    }, '');
  }

  return Object.keys(mods).reduce(function (ret, key) {
    return ret + (mods[key] ? gen(name, key) : '');
  }, '');
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? name + "__" + el : name;
    return "" + el + gen(el, mods);
  };
}
;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/index.js



var utils_inBrowser = typeof window !== 'undefined';
var isServer = (external_commonjs_vue_commonjs2_vue_root_Vue_default()).prototype.$isServer; // eslint-disable-next-line @typescript-eslint/no-empty-function

function noop() {}
function isDef(val) {
  return val !== undefined && val !== null;
}
function isFunction(val) {
  return typeof val === 'function';
}
function isObject(val) {
  return val !== null && typeof val === 'object';
}
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    var _result$key;

    result = isObject(result) ? (_result$key = result[key]) != null ? _result$key : '' : '';
  });
  return result;
}
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @function isEmpty
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (typeof value !== 'object') {
    return true;
  }

  return Object.keys(value).length === 0;
}
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/format/string.js
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}
;// CONCATENATED MODULE: ./node_modules/vant/es/mixins/slots.js
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
var SlotsMixin = {
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
};
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/component.js
/**
 * Create a basic component with common options
 */






function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(camelize("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (isFunction(sfc)) {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/deep-assign.js

var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!isDef(val)) {
    return;
  }

  if (!deep_assign_hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}
;// CONCATENATED MODULE: ./node_modules/vant/es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  nameInvalid: '请输入正确的姓名',
  confirmDelete: '确定要删除吗',
  telInvalid: '请输入正确的手机号',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    startEnd: '开始/结束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 " + maxRange + " \u5929";
    }
  },
  vanCascader: {
    select: '请选择'
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '暂无可用',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});
;// CONCATENATED MODULE: ./node_modules/vant/es/locale/index.js



var proto = (external_commonjs_vue_commonjs2_vue_root_Vue_default()).prototype;
var defineReactive = (external_commonjs_vue_commonjs2_vue_root_Vue_default()).util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': zh_CN
});
/* harmony default export */ var locale = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    deepAssign(proto.$vantMessages, messages);
  }
});
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/i18n.js



function createI18N(name) {
  var prefix = camelize(name) + '.';
  return function (path) {
    var messages = locale.messages();
    var message = get(messages, prefix + path) || get(messages, path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return isFunction(message) ? message.apply(void 0, args) : message;
  };
}
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/index.js



function createNamespace(name) {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/functional.js


var inheritKey = ['ref', 'key', 'style', 'class', 'attrs', 'refInFor', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    extends_extends(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new Vue({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, _extends({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/constant.js
// color
var RED = '#ee0a24'; // border

var BORDER = 'van-hairline';
var BORDER_TOP = BORDER + "--top";
var BORDER_LEFT = BORDER + "--left";
var BORDER_BOTTOM = BORDER + "--bottom";
var BORDER_SURROUND = BORDER + "--surround";
var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";
var BORDER_UNSET_TOP_BOTTOM = BORDER + "-unset--top-bottom";
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/router.js
/**
 * Vue Router support
 */
function isRedundantNavigation(err) {
  return err.name === 'NavigationDuplicated' || // compatible with vue-router@3.3
  err.message && err.message.indexOf('redundant navigation') !== -1;
}

function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        if (err && !isRedundantNavigation(err)) {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/validate/number.js
function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
function number_isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  } // eslint-disable-next-line no-self-compare


  return val !== val;
}
;// CONCATENATED MODULE: ./node_modules/vant/es/utils/format/unit.js


function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? value + "px" : value;
} // cache

var rootFontSize;

function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * window.innerWidth / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * window.innerHeight / 100;
}

function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }

    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }

    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}
;// CONCATENATED MODULE: ./node_modules/vant/es/info/index.js

// Utils

 // Types

var _createNamespace = createNamespace('info'),
    info_createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = isDef(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", helper_default()([{
    "class": bem({
      dot: dot
    })
  }, inherit(ctx, true)]), [dot ? '' : props.info]);
}

Info.props = {
  dot: Boolean,
  info: [Number, String]
};
/* harmony default export */ var info = (info_createComponent(Info));
;// CONCATENATED MODULE: ./node_modules/vant/es/icon/index.js

// Utils

 // Components

 // Types

var icon_createNamespace = createNamespace('icon'),
    icon_createComponent = icon_createNamespace[0],
    icon_bem = icon_createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
} // compatible with legacy usage, should be removed in next major version


var LEGACY_MAP = {
  medel: 'medal',
  'medel-o': 'medal-o',
  'calender-o': 'calendar-o'
};

function correctName(name) {
  return name && LEGACY_MAP[name] || name;
}

function Icon(h, props, slots, ctx) {
  var _props$badge;

  var name = correctName(props.name);
  var imageIcon = isImage(name);

  if (false) {}

  return h(props.tag, helper_default()([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + name],
    "style": {
      color: props.color,
      fontSize: addUnit(props.size)
    }
  }, inherit(ctx, true)]), [slots.default && slots.default(), imageIcon && h("img", {
    "class": icon_bem('image'),
    "attrs": {
      "src": name
    }
  }), h(info, {
    "attrs": {
      "dot": props.dot,
      "info": (_props$badge = props.badge) != null ? _props$badge : props.info
    }
  })]);
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  // @deprecated
  // should be removed in next major version
  info: [Number, String],
  badge: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: icon_bem()
  }
};
/* harmony default export */ var es_icon = (icon_createComponent(Icon));
;// CONCATENATED MODULE: ./node_modules/vant/es/loading/index.js

// Utils

 // Types

var loading_createNamespace = createNamespace('loading'),
    loading_createComponent = loading_createNamespace[0],
    loading_bem = loading_createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": loading_bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var _props$textColor;

    var style = {
      fontSize: addUnit(props.textSize),
      color: (_props$textColor = props.textColor) != null ? _props$textColor : props.color
    };
    return h("span", {
      "class": loading_bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = addUnit(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", helper_default()([{
    "class": loading_bem([type, {
      vertical: props.vertical
    }])
  }, inherit(ctx, true)]), [h("span", {
    "class": loading_bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  color: String,
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  textColor: String,
  type: {
    type: String,
    default: 'circular'
  }
};
/* harmony default export */ var es_loading = (loading_createComponent(Loading));
;// CONCATENATED MODULE: ./node_modules/vant/es/button/index.js


// Utils



 // Components


 // Types

var button_createNamespace = createNamespace('button'),
    button_createComponent = button_createNamespace[0],
    button_bem = button_createNamespace[1];

function Button(h, props, slots, ctx) {
  var _ref;

  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      color = props.color,
      plain = props.plain,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText,
      iconPosition = props.iconPosition;
  var style = {};

  if (color) {
    style.color = plain ? color : 'white';

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    } // hide border when color is linear-gradient


    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event) {
    if (props.loading) {
      event.preventDefault();
    }

    if (!loading && !disabled) {
      emit(ctx, 'click', event);
      functionalRoute(ctx);
    }
  }

  function onTouchstart(event) {
    emit(ctx, 'touchstart', event);
  }

  var classes = [button_bem([type, props.size, {
    plain: plain,
    loading: loading,
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    round: props.round,
    square: props.square
  }]), (_ref = {}, _ref[BORDER_SURROUND] = hairline, _ref)];

  function renderIcon() {
    if (loading) {
      return slots.loading ? slots.loading() : h(es_loading, {
        "class": button_bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": "currentColor"
        }
      });
    }

    if (slots.icon) {
      return h("div", {
        "class": button_bem('icon')
      }, [slots.icon()]);
    }

    if (icon) {
      return h(es_icon, {
        "attrs": {
          "name": icon,
          "classPrefix": props.iconPrefix
        },
        "class": button_bem('icon')
      });
    }
  }

  function renderContent() {
    var content = [];

    if (iconPosition === 'left') {
      content.push(renderIcon());
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": button_bem('text')
      }, [text]));
    }

    if (iconPosition === 'right') {
      content.push(renderIcon());
    }

    return content;
  }

  return h(tag, helper_default()([{
    "style": style,
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, inherit(ctx)]), [h("div", {
    "class": button_bem('content')
  }, [renderContent()])]);
}

Button.props = extends_extends({}, routeProps, {
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  },
  iconPosition: {
    type: String,
    default: 'left'
  }
});
/* harmony default export */ var es_button = (button_createComponent(Button));
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/button.vue?vue&type=script&lang=js


/* harmony default export */ var buttonvue_type_script_lang_js = ({
  name: 'd-button',
  props: {
    desc: String,
    // eslint-disable-next-line vue/require-prop-type-constructor
    required: true
  },
  components: {
    [es_button.name]: es_button
  },
  methods: {
    handleClick() {
      console.log("按钮点击被调用");
    }
  }
});
;// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=script&lang=js
 /* harmony default export */ var button_buttonvue_type_script_lang_js = (buttonvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/button/button.vue





/* normalize component */
;
var component = normalizeComponent(
  button_buttonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_button = (component.exports);
;// CONCATENATED MODULE: ./packages/package.json
var package_namespaceObject = JSON.parse('{"u":"common-remote-comp"}');
;// CONCATENATED MODULE: ./packages/index.js



// const comps = [
//     DButton
// ]

// export default (Vue) => {
//   comps.forEach((comp) => {
//     Vue.component(comp.name, comp);
//   });
// };
button_button.install = function (Vue) {
  Vue.component(`${package_namespaceObject.u}`, button_button);
};

// 默认导出组件

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_namespaceObject["default"]);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=common-remote-comp.common.js.map